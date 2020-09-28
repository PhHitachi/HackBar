# Change logs

- [HackBar v2.6](https://youtu.be/8mkfybBaS9A)
  <p>Adding more tools in <a href="">HakBar</a> is for easylly to Pentesting and save more space.</p>
  
    - <b>Tools (4 in 1)</b>
    
      - LiveHTTPHeader `replay function not working` 
      - Tamper Data
      - JS on/off
  
- [HackBar v2.7](https://youtu.be/rMqOSfYqGgk)
  <p>Customize Hackbar are added to make easylly and good UI/Design of your own.</p>
  
    - <b>Tools (7 in 1)</b>
    
      - LiveHTTPHeader `replay function not working` 
      - Tamper Data
      - JS on/off
      - View Source
      - noRedirect
      - Customize Hackbar `Addons Options`
      - HTTP Proxy `not setting proxy`

    - <b>Encode/Decode</b>
      - %URL
      - 0xHex
      - 0bBinary <i>`new`</i>
      - Base64 
    
    - <b>Added new Queries (Custome)</b>
      - add your Dios (10 slots)  <i>`new`</i>
      - add XSS Payload (10 slots)  <i>`new`</i>
      - and for others (10 slots) <i>`new`</i>

    - <b>Advance Options (Customize HackBar)</b>
      - Remove style
      - Restore in to defaults
      - Hide toolbars for not compatible resolution.
      - Import & Export preferences (Themes) `importing is bug`

- [HackBar v2.8](https://youtu.be/iedurBw44Pw)
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

- [HackBar v2.9](https://youtu.be/hMQsY-34HCc)
  <p>Customize Hackbar are added to make easylly and good UI/Design of your own.</p>
  
    - <b>Tools (8 in 1)</b>
      - LiveHTTPHeader `working on CyberFox Browser` 
      - Tamper Data
      - View Source
      - JS on/off
      - noRedirect
      - Customize Hackbar 
      - HTTP Proxy `fixed`
      - Admin Finder `new`
     
    - <b>Added new Field</b>
      - Cookie set/get cookies method <i>`new`</i>
      
    - <b>New features</b>
      - Notification When have update
      - Anti modifications
      - Importing Preperences (Themes & dios) `JSON/TXT`
      - Importing Preperences (Themes & dios) `JSON/TXT`
      - Reset Into Default
      - BackUP Styles (Themes) `JSON`

      
    - <b>Added New Encoder/Decoder</b>
      - Unicode (\u00) <i>`new`</i>
      - \xHex (\x) <i>`new`</i>
      - &#xHex (&#x) <i>`new`</i>

Compatible OS
- Linux/Parrot (Fit)
- Windows (Fit)

Compatible Browser
- [CyberFox](https://sourceforge.net/projects/cyberfox/) (Compatible)
- Firefox (security issue to any version) 
- [article](https://www.zdnet.com/article/mozilla-announces-ban-on-firefox-extensions-containing-obfuscated-code)


For More Theme goto https://github.com/PhHitachi/HackBar/tree/master/Theme