HackBar.Crypto = {

  isMD5: function (s) 
  {
    return (/^[A-Fa-f0-9]{32}$/).test(s);
  },

  isSHA1: function (s) 
  {
    return (/^[A-Fa-f0-9]{40}$/).test(s);
  },

  getClearTextPassword: function ( hash )
  {
    var value = hackBar.getSelectedText();
    
    if ( (hash == "md5" && this.isMD5(value)) || (hash == "sha1" && this.isSHA1(value)))
    {
      var req = new XMLHttpRequest();
      req.onreadystatechange = function (event) {
        var cleartext = "";
        var response = req.responseText;
        // Check to avoid receive dangerous data
        switch(hash)
        {
          case "md5":
            if (HackBar.Encrypt.md5(response) == value)
              cleartext = response;
            else
              cleartext = "No results :(";
            break;
          case "sha1":
            if (HackBar.Encrypt.sha1(response) == value)
              cleartext = response;
            else
              cleartext = "No results :(";
            break;
          default:
            cleartext = "No results :(";
            break;
        }      
        hackBar.setSelectedText( cleartext );
      }
      req.open('GET', 'https://hashtoolkit.com/?p&s='+ hash +'&q=' + value + '&hackbar=1.5.1', true);
      req.send(null);  
    }
    else
    {
      hackBar.setSelectedText( "To avoid sending private password to public databases only MD5 and SHA1 hashes will be submited" );
    } 
  }
}
