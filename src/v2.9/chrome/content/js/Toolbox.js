HackBar.Toolbox = {

  alphabet: new Array( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ),

  alphanum: new Array( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                       '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ),

  sortByKey: function ( a )
  {
    var keys = new Array();
    for(k in a) { keys.push(k); }
    keys.sort();
    var nA = new Array();
    for (var i = 0; i < keys.length; i++) { nA[i] = a[keys[i]]; }
    return nA;
  },

  getIndexByKey: function ( a, key )
  {
    var i = 0;
    for ( k in a ) {
      if ( k == key ) return i;
      i++;
    }
    return -1;
  },

  dec2hex: function ( d ) { return d.toString( 16 ); },
  hex2dec: function ( h ) { return parseInt( h, 16 ); },

  dec2oct: function ( d ) { return d.toString( 8 ); },
  oct2dec: function ( o ) { return parseInt( o, 8 ); },

  dec2alphabet: function ( d ) { return this.alphabet[d]; },
  alphabet2dec: function ( a )
  {
    for ( var i = 0; i < this.alphabet.length; i++ ) {
      if ( this.alphabet[i] == a ) return i;
    }
    return a;
  },

  dec2alphanum: function ( d ) { return this.alphanum[d]; },
  alphanum2dec: function ( a )
  {
    for ( var i = 0; i < this.alphanum.length; i++ ) {
      if ( this.alphanum[i] == a ) return i;
    }
    return a;
  },

  consoleLog: function ( obj )
  {
    var consoleService = Components.classes["@mozilla.org/consoleservice;1"]
        .getService(Components.interfaces.nsIConsoleService)
        .logStringMessage( hackBarToolbox.debug( obj ) );
  },

  debug: function (arr,level) {
    var dumped_text = "";
    if(!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') { //Array/Hashes/Objects
      for(var item in arr) {
        var value = arr[item];

        if(typeof(value) == 'object') { //If it is an array,
          dumped_text += level_padding + "'" + item + "' ...\n";
          dumped_text += dump(value,level+1);
        } else {
          dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
      }
    } else { //Stings/Chars/Numbers etc.
      dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
  }
}
