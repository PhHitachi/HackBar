if ("undefined" == typeof(jsoffNamespace)) {
	var jsoffNamespace = {};
};

jsoffNamespace.ON = "chrome://hackbar/skin/on-16.png";
jsoffNamespace.OFF = "chrome://hackbar/skin/off-16.png";

jsoffNamespace.jsStatus = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

	return {
		startup : function(){
			this.setStatusBar();
		},

		// run this onClick from the status bar
		run : function () {
			var jsEnabled = prefManager.getBoolPref("javascript.enabled");
			prefManager.setBoolPref("javascript.enabled", !jsEnabled);
			// change propogation handled in observer, don't need to call setStatusBar here
		},

		// something changed, update UI
		setStatusBar : function(){
			var statusBar = document.getElementById('jsoff-statusbar');
			var jsEnabled = prefManager.getBoolPref("javascript.enabled");
			statusBar.image = jsEnabled ? jsoffNamespace.ON : jsoffNamespace.OFF;
		}
	};
}();
/*** jsStatus ***/



// This handles watching preferences for changes to javascript options
jsoffNamespace.myPrefObserver =
{
  register: function()
  {
    // First we'll need the preference services to look for preferences.
    var prefService = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);

    // For this._branch we ask that the preferences for extensions.myextension. and children
    this._branch = prefService.getBranch("javascript.");

    // Now we queue the interface called nsIPrefBranch2. This interface is described as:
    // "nsIPrefBranch2 allows clients to observe changes to pref values."
    this._branch.QueryInterface(Components.interfaces.nsIPrefBranch2);

    // Finally add the observer.
    this._branch.addObserver("", this, false);
  },

  unregister: function()
  {
    if(!this._branch) return;
    this._branch.removeObserver("", this);
  },

  observe: function(aSubject, aTopic, aData)
  {
    if(aTopic != "nsPref:changed") return;
    // aSubject is the nsIPrefBranch we're observing (after appropriate QI)
    // aData is the name of the pref that's been changed (relative to aSubject)
    switch (aData) {
      case "enabled":
        jsoffNamespace.jsStatus.setStatusBar();
        break;
    }
  }
}

jsoffNamespace.myPrefObserver.register();
window.addEventListener("load", function(e) { jsoffNamespace.jsStatus.startup(); }, false);
