- [HackBar v2.8](https://youtu.be/rMqOSfYqGgk)
  <p>Customize Hackbar are added to make easylly and good UI/Design of your own.</p>
  
    - <b>Tools (7 in 1)</b>
      - LiveHTTPHeader `replay function not working` 
      - Tamper Data
      - View Source
      - JS on/off
      - noRedirect
      - Customize Hackbar
      - HTTP Proxy `not setting proxy`
     
    - <b>Added new Field</b>
      - Cookie set/get cookies method <i>`new`</i>
      
      ```javascript
        setCookiesFromField: function(){
          var uri = this.urlField.value; //URL
          if ( !document.getElementById('hackBar_cookieCheckBox').checked || !this.CookiesField.value ) 
                return null;
          var cookieManager = Components.classes["@mozilla.org/network/io-service;1"].
                              getService(Components.interfaces.nsIIOService);
          var Cookies      = this.CookiesField.value; //Inputed Cookies Value
          var cookieUri = cookieManager.newURI(uri, null, null); //Getting URL for setting cookies
          var Cookie = Components.classes["@mozilla.org/cookieService;1"].
                       getService(Components.interfaces.nsICookieService);
           
          Cookie.setCookieString(cookieUri, null, Cookies, null);
          return cookieManager;
        }
      ```
      
    - <b>New features</b>
      - Notification When have update
      - Anti modifications
