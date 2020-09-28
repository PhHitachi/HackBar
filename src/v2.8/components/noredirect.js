/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is NoRedirect.
 *
 * The Initial Developer of the Original Code is Kai Liu.
 * Portions created by the Initial Developer are Copyright (C) 2009-2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Kai Liu <kliu@code.kliu.org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */


var NoRedirectService =
{

/** Public ********************************************************************/


	// Once initialized, the NoRedirect service will observe HTTP responses and
	// can be used to control HTTP redirects in one of two ways:
	//
	// - It looks for a X-NoRedirect-Mode HTTP request header in a channel
	//   (this is how third-party code should invoke the NoRedirect service)
	//
	// - It matches the request with a list of rules stored in the prefs
	//   (reserved for use only by the NoRedirect extension)
	//
	// The X-NoRedirect-Mode request header takes precedence over the list, so
	// it can override the behavior of the NoRedirect extension.


	// NoRedirect mode:
	// - Bit 0: Must be set in order to be valid
	// - Bit 1: If set, an interdicted redirect should trigger a DNS error
	// - Bit 2: 0 = match rule to destination URL; 1 = match rule to source URL
	// - Bit 3: 0 = interdict the redirect; 1 = allow the redirect
	// - Bit 4: If set, non-document requests are not exempt from interdictions
	// - Bit 5: If set, an allowed redirect may be shown in the session history
	// - All other bits are reserved and should be unset


	/**
	 * @param mode a NoRedirect mode
	 * @return whether the mode is valid
	 * @note bit 1 is checked as well for legacy compatibility
	 */
	check: function( mode ) { return((mode & 0x03) > 0); },


	/**
	 * Whether to use the list in the preferences; third-party extensions should
	 * not change this--only the NoRedirect extension should toggle this flag
	 */
	useList: false,


	/**
	 * Initializes the service
	 * @note this must be matched with an uninit to avoid memory leaks
	 */
	init: function( )
	{
		if (this._cRef++ == 0)
		{
			try {
				this._os.addObserver(this, "http-on-examine-response", false);
				this._ps.addObserver("", this, false);
				this._refreshPrefs();
			} catch (e) { }
		}
	},


	/**
	 * Releases the service
	 */
	uninit: function( )
	{
		if (--this._cRef == 0)
		{
			try {
				this._os.removeObserver(this, "http-on-examine-response");
				this._ps.removeObserver("", this);
			} catch (e) { }
		}
	},


	/**
	 * @param str a string location (may be relative, must not be empty)
	 * @param baseURI a base nsIURI (may be null)
	 * @return a nsIURI if successful, null otherwise
	 */
	makeURI: function( str, baseURI )
	{
		var charset = (baseURI) ? baseURI.originCharset : null;

		if (str.length)
			return(this._ios.newURI(str, charset, baseURI));
		else
			return(null);
	},


	/**
	 * Compares two URIs using a "liberal" comparison
	 *
	 * - Case is ignored
	 * - Trailing slashes are ignored
	 * - The scheme, auth, and port are ignored
	 * - An initial "www." in the host name is ignored
	 *
	 * @param uri1 first nsIURI to compare
	 * @param uri2 second nsIURI to compare
	 * @return true if the URIs are different, false otherwise
	 */
	compareURIs: function( uri1, uri2 )
	{
		var normalize = function( uri )
		{
			return(
				uri.asciiHost.toLowerCase().replace(/^www\./, "") +
				uri.path.toLowerCase().replace(/\/$/, "")
			);
		};

		return(normalize(uri1) != normalize(uri2));
	},


	/**
	 * Retrieves the NoRedirect status of a completed request
	 * @param chan a HTTP channel
	 * @return a status object { code, mode, dest }
	 */
	readStatus: function( chan )
	{
		var ret = { code: 0, mode: 0, dest: "" };

		try {
			chan = this._QI(chan, "nsIHttpChannel");
			ret.code = chan.responseStatus;
			ret.mode = parseInt(chan.getResponseHeader("X-NoRedirect-Mode"));
			ret.dest = chan.getResponseHeader("X-NoRedirect-Dest");
		} catch (e) { }

		return(ret);
	},


	/**
	 * Finds a rule from the list for a given pair of URLs
	 * @param srcURI a source nsIURI
	 * @param destURI a destination nsIURI
	 * @param isDoc true if this is a document request
	 * @return a NoRedirect mode
	 * @note third-party extensions should not be using the rule list
	 */
	findRule: function( srcURI, destURI, isDoc )
	{
		var shbit = 0;

		if (this.compareURIs(srcURI, destURI))
		{
			if (isDoc && this._addSH)
				shbit = 1 << 5;

			for (var i = 0; i < this._list.length; ++i)
			{
				var mode = this._list[i][1];
				var subject = (mode & 1 << 2) ? srcURI : destURI;

				if (this.check(mode) && this._list[i][0].test(subject.spec))
				{
					// Allow non-document requests to pass through
					if (!(isDoc || mode & (1 << 1 | 1 << 4)))
						mode |= 1 << 3;

					return(mode | shbit);
				}
			}
		}

		return(1 | 1 << 3 | shbit);
	},


	/**
	 * Extracts a Refresh URI
	 * @param doc a HTML document (may be null)
	 * @param chan a HTTP channel (may be null)
	 * @return a Refresh nsIURI if one was found, null otherwise
	 */
	getRefreshURI: function( doc, chan )
	{
		var target = "";
		var baseURI = null;

		var re = /^\s*\d*\s*;\s*(?:url\s*=)?(.*)$/i;
		var match;

		// First, check HTTP-EQUIV
		if (doc = this._QI(doc, "nsIDOMHTMLDocument"))
		{
			var metas = doc.getElementsByTagName("meta");

			for (var i = 0; i < metas.length; ++i)
			{
				if ( /^\s*Refresh\s*$/i.test(metas[i].httpEquiv) &&
				     (match = re.exec(metas[i].content)) )
				{
					target = match[1].replace(/^\s+|\s+$/g, "");

					if (target.length)
					{
						baseURI = this.makeURI(doc.baseURI, null);
						break;
					}
				}
			}
		}

		// Then look in the actual HTTP headers
		if (target.length == 0 && (chan = this._QI(chan, "nsIHttpChannel")))
		{
			try {
				if (match = re.exec(chan.getResponseHeader("Refresh")))
				{
					baseURI = chan.URI;
					target = match[1].replace(/^\s+|\s+$/g, "");
				}
			} catch (e) { }
		}

		return(this.makeURI(target, baseURI));
	},


	/**
	 * Cancels a Refresh in a document
	 * @param shell a docShell/webNav/etc. associated with a document
	 */
	stopRefresh: function( shell )
	{
		if (shell = this._QI(shell, "nsIRefreshURI"))
			shell.cancelRefreshURITimers();
	},


	/**
	 * Inserts a redirection notice
	 * @param doc a HTML document
	 * @param type a string indicating the type of redirect
	 * @param url a string representing the blocked target URL
	 */
	insertNotice: function( doc, type, url )
	{
		if (!(doc = this._QI(doc, "nsIDOMHTMLDocument"))) return;

		// Make sure we have only one notification per document
		var id = "NoRedirect-NotificationBanner-" + doc.URL.length;
		if (doc.getElementById(id)) return;

		var div = doc.createElement("div");
		var span = doc.createElement("span");
		var link = doc.createElement("a");

		// Bug #245: Only UTF-8 URLs are decodable, so a try/catch is necessary
		try { url = decodeURI(url); } catch (e) { }

		link.href =
		link.textContent = url;
		span.textContent = "HTTP/" + type + ": ";

		// Since we are subject to document stylesheets, we want to
		// over-specify our styles

		// Font
		div.style.font =
		span.style.font =
		link.style.font = "message-box";
		span.style.fontWeight = "bold";
		link.style.textDecoration = "underline";

		// Colors
		div.style.color =
		span.style.color = "-moz-dialogtext";
		link.style.color = "-moz-hyperlinktext";
		div.style.background =
		span.style.background =
		link.style.background = "-moz-dialog";

		// Container spacing and border
		div.style.margin = "0px";
		div.style.padding = "6px";
		div.style.border = "1px solid";
		div.style.borderColor =
			"ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight";

		// Spacing and border
		span.style.margin =
		span.style.padding =
		span.style.border =
		link.style.margin =
		link.style.padding =
		link.style.border = "0px";

		div.id = id;
		div.appendChild(span);
		div.appendChild(link);
		doc.body.parentNode.insertBefore(div, doc.body);
	},


	/**
	 * Adds a redirecting channel's URL to the session history
	 * @param chan a HTTP channel
	 */
	addToSH: function( chan )
	{
		try {
			var callbacks = (chan.notificationCallbacks) ?
				chan.notificationCallbacks :
				chan.loadGroup.notificationCallbacks;

			var shi = callbacks.
			          getInterface(Components.interfaces.nsIWebNavigation).
			          sessionHistory.
			          QueryInterface(Components.interfaces.nsISHistoryInternal);

			var she = Components.classes["@mozilla.org/browser/session-history-entry;1"].
			          createInstance(Components.interfaces.nsISHEntry);

			she.setURI(chan.URI);
			shi.addEntry(she, true);

		} catch (e) { }
	},


/** End Public ****************************************************************/



/** XPCOM *********************************************************************/


	// XPConnect wrapping
	get wrappedJSObject( ) { return(this); },


	// nsISupports members
	QueryInterface: function( iid )
	{
		if ( iid.equals(Components.interfaces.nsIObserver) ||
		     iid.equals(Components.interfaces.nsIFactory) ||
		     iid.equals(Components.interfaces.nsISupports) )
		{
			return(this);
		}

		throw(Components.results.NS_ERROR_NO_INTERFACE);
	},


	// nsIFactory members
	createInstance: function( outer, iid )
	{
		if (outer == null)
			return(this.QueryInterface(iid));

		throw(Components.results.NS_ERROR_NO_AGGREGATION);
	},

	lockFactory: function( lock )
	{
		throw(Components.results.NS_ERROR_NOT_IMPLEMENTED);
	},


	// nsIObserver members
	observe: function( aSubject, aTopic, aData )
	{
		if (aTopic == "http-on-examine-response")
			this._httpResponse(aSubject);
		else if (aTopic == "nsPref:changed")
			this._refreshPrefs();
	},


/** End XPCOM *****************************************************************/



/** Private *******************************************************************/


	// Service wrappers
	_ps:  Components.classes["@mozilla.org/preferences-service;1"].
	      getService(Components.interfaces.nsIPrefService).
	      getBranch("extensions.noredirect.").
	      QueryInterface(Components.interfaces.nsIPrefBranch2),

	_os:  Components.classes["@mozilla.org/observer-service;1"].
	      getService(Components.interfaces.nsIObserverService),

	_ios: Components.classes["@mozilla.org/network/io-service;1"].
	      getService(Components.interfaces.nsIIOService),


	// Bookkeeping
	_cRef: 0,
	_list: [ ],
	_addSH: false,


	// QueryInterface helper
	_QI: function( obj, iface )
	{
		try { return(obj.QueryInterface(Components.interfaces[iface])); }
		catch (e) { return(null); }
	},


	// Synchronize the interdiction list from preferences
	_refreshPrefs: function( )
	{
		this._list = this._ps.getCharPref("list").split(":::").map(
			function( str ) {
				var entry = str.split("::");
				entry[0] = new RegExp(entry[0], "i");
				entry[1] = parseInt(entry[1]);
				return(entry);
			}
		);

		this._addSH = this._ps.getBoolPref("showRedirectsInSessionHistory");
	},


	// Look for and stop HTTP redirects
	_httpResponse: function ( chan )
	{
		const DOC_FLAG = Components.interfaces.nsIChannel.LOAD_DOCUMENT_URI;

		var code = 0;
		var mode = 0;
		var dest = null;

		try {
			chan = this._QI(chan, "nsIHttpChannel");
			code = chan.responseStatus;
			dest = this.makeURI(chan.getResponseHeader("Location"), chan.URI);
			mode = parseInt(chan.getRequestHeader("X-NoRedirect-Mode"));
		} catch (e) { }

		if ((code == 301 || code == 302 || code == 303 || code == 307) && dest)
		{
			// Check the rule list if the request did not specify a mode
			if (!this.check(mode))
			{
				if (!this.useList) return;
				mode = this.findRule(chan.URI, dest, chan.loadFlags & DOC_FLAG);
			}

			// Allow the redirect?
			if (mode & 1 << 3)
			{
				if (mode & 1 << 5)
					this.addToSH(chan);
				return;
			}

			// Check if we should do an OpenDNS keyword fixup
			if (this._fixOpenDNS(chan, mode, dest)) return;

			var isAttach = false;
			try {
				isAttach = /^\s*attachment/i.test(chan.getResponseHeader("Content-Disposition"));
			} catch (e) { }

			chan.setResponseHeader("X-NoRedirect-Mode", mode, false);
			chan.setResponseHeader("X-NoRedirect-Dest", dest.spec, false);
			chan.setResponseHeader("Location", "", false);

			if (mode & 1 << 1)
				chan.cancel(0x804B001E); // NS_ERROR_UNKNOWN_HOST

			// Bug #224: Remove the attachment header if we interdict non-DNS
			else if (isAttach)
				chan.setResponseHeader("Content-Disposition", "", false);
		}
	},


	// Special case: fix up OpenDNS keyword hijack redirects
	_fixOpenDNS: function( chan, mode, dest )
	{
		if ((mode & 1 << 1) && dest.host == "guide.opendns.com")
		{
			var src = chan.URI.spec, kw = "", salted;

			const pb = Components.classes["@mozilla.org/preferences-service;1"].
			           getService(Components.interfaces.nsIPrefBranch);

			try {
				if (pb.getBoolPref("keyword.enabled"))
				{
					kw = pb.getComplexValue(
						"keyword.URL",
						Components.interfaces.nsIPrefLocalizedString
					);

					kw = (kw) ? kw.data : pb.getCharPref("keyword.URL");
				}
			} catch (e) { }

			if ( kw.length && kw == src.substr(0, kw.length) &&
			     src != (salted = src.replace(/\?/, "?nrsalt=&")) )
			{
				chan.setResponseHeader("Location", salted, false);
				return(true);
			}
		}

		return(false);
	}


/** End Private ***************************************************************/

};


var NoRedirectServiceModule =
{
	// Private members
	_CLASS_ID: Components.ID("{d11dae57-c11a-4cdd-af75-5000f0f5b3ca}"),
	_CLASS_NAME: "NoRedirect Service",
	_CONTRACT_ID: "@code.kliu.org/noredirect;5",
	_ICR: Components.interfaces.nsIComponentRegistrar,
	_registered: false,


	// nsISupports members
	QueryInterface: function( iid )
	{
		if ( iid.equals(Components.interfaces.nsIModule) ||
		     iid.equals(Components.interfaces.nsISupports) )
		{
			return(this);
		}

		throw(Components.results.NS_ERROR_NO_INTERFACE);
	},


	// nsIModule members
	getClassObject: function( compMgr, cid, iid )
	{
		if (cid.equals(this._CLASS_ID))
			return(NoRedirectService.QueryInterface(iid));

		throw(Components.results.NS_ERROR_NO_INTERFACE);
	},

	registerSelf: function( compMgr, location, loaderStr, type )
	{
		compMgr = compMgr.QueryInterface(this._ICR);

		if (!this._registered && !compMgr.isCIDRegistered(this._CLASS_ID))
		{
			this._registered = true;

			// Register component
			compMgr.registerFactoryLocation(
				this._CLASS_ID,
				this._CLASS_NAME,
				this._CONTRACT_ID,
				location,
				loaderStr,
				type
			);
		}
	},

	unregisterSelf: function( compMgr, location, loaderStr )
	{
		compMgr = compMgr.QueryInterface(this._ICR);

		if (this._registered)
		{
			this._registered = false;

			// Unregister component
			compMgr.unregisterFactoryLocation(
				this._CLASS_ID,
				location
			);
		}
	},

	canUnload: function( compMgr ) { return(true); }
};


function NSGetModule( compMgr, location )
{
	return(NoRedirectServiceModule);
}


function NSGetFactory( cid )
{
	if (cid.equals(NoRedirectServiceModule._CLASS_ID))
		return(NoRedirectService);
	else
		throw(Components.results.NS_ERROR_FACTORY_NOT_REGISTERED);
}
