//////////////////////////////////////////////////////////////////////////////////
//																				//
//																				//
//				Customize your hackbar features added by ph.hitachi				//
//																				//
//						Contact: fb.com/PH.HITACHI.GOV.PH						//
//																				//
//						   Email: ph.hitachi@gmail.com						   	//
//																				//
//							published date: 09/24/2019							//
//																				//
//				   -=[ Philippines Hacker/Developer/modifier ]=-				//
//																				//
//////////////////////////////////////////////////////////////////////////////////

if ("undefined" == typeof(Decoder)) {
	var Decoder = {};
};
Decoder.hackbar = function () {
	var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

	return {
		main : function(){
			this.init();
		},
		// something changed, update UI
		init : function(){

		}
		
	};
}();
/*** Load Decoder ***/
window.addEventListener("load", function(e) { Decoder.hackbar.main(); }, false);