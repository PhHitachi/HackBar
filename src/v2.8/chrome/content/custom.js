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

if ("undefined" == typeof(custom)) {
	var custom = {};
};
custom.hackbar = function () {
	var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

	return {
		main : function(){
			this.init();
		},
		// something changed, update UI
		init : function(){
			//URLField
			var urlField      = document.getElementById("hackBarTargetUrl");
    		var MainLayout    = document.getElementById("hackBarToolbar");
    		var postDataField = document.getElementById("hackBarTargetUrlPostField");
    		var referrerField = document.getElementById("hackBarTargetUrlReferrerField");
    		var CookiesField  = document.getElementById("hackBarTargetUrlCookieField");
    		//ToolbarsButton
    		var toolbarbutton = document.getElementsByClassName("hackbar-toolbarbutton-iconic");
    		var menupopup  	  = document.getElementsByClassName("hackbar-menupopup-iconic");
    		var menuitem  	  = document.getElementsByClassName("hackbar-menuitem");
    		//MainButton
    		var LoadURL  	  = document.getElementById("hackBarCopyButton");
    		var SplitURL  	  = document.getElementById("hackBarSplitButton");
    		var ExecuteURL	  = document.getElementById("hackBarWebButton");
    		var Selection  	  = document.getElementById("hackBarPlusMinusSelection");
    		//Replace Field
    		var rstring1  	  = document.getElementById("rstring1");
    		var rstring2  	  = document.getElementById("rstring2");
    		//Arrow Icon
    		var HexArrowLeft  	  = document.getElementById("HexArrowLeft");
    		var HexArrowRight  	  = document.getElementById("HexArrowRight");
    		var URLArrowLeft  	  = document.getElementById("URLArrowLeft");
    		var URLArrowRight  	  = document.getElementById("URLArrowRight");
    		var BASE64ArrowLeft  	  = document.getElementById("BASE64ArrowLeft");
    		var BASE64ArrowRight  	  = document.getElementById("BASE64ArrowRight");
    		var BINARYArrowLeft  	  = document.getElementById("BINARYArrowLeft");
    		var BINARYArrowRight  	  = document.getElementById("BINARYArrowRight");
    		var Replace  	  = document.getElementById("replace");
    		var Base64Spacer  	  = document.getElementById("Base64Spacer");
    		var Base64value  	  = document.getElementById("Base64value");
    		//id's for toolbars 
    		var SQLMenu = document.getElementById("SQLMenu");
			var UnionBased  = document.getElementById("UnionBased");	
			var OutFile = document.getElementById("OutFile");	
			var WafBased = document.getElementById("WafBased");
			var Custom  = document.getElementById("Custom");	
			var Error = document.getElementById("Error");	
			var Tools = document.getElementById("Tools");
			var WafBypass = document.getElementById("WafBypass");
			var LDAPFuzz = document.getElementById("LDAPFuzz");	
			var ENCODING = document.getElementById("ENCODING");	
			var HTML = document.getElementById("HTML");	
			var ENCRYPTION  = document.getElementById("ENCRYPTION");
			var OTHER = document.getElementById("OTHER");	
			var XSS = document.getElementById("XSS");	
			var LFI  = document.getElementById("LFI");	
			var LINKS = document.getElementById("LINKS");
    		var ReplaceField  	  = document.getElementById("ReplaceField");
			//
    		var MinusIcon  	  = document.getElementsByClassName("hackbar-minus-iconic");
    		var PlusIcon  	  = document.getElementsByClassName("hackbar-plus-iconic");
    		//Hackbar Main Field
			var hackbar_HUcolor = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.color");
			var hackbar_HUbg = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.backgroundColor");
			var hackbar_HUbT = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderTop");
			var hackbar_HUbL = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderLeft");
			var hackbar_HUbB = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderBottom");
			var hackbar_HUbR = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderRight");
			var hackbar_HUbS = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderSize");
			var hackbar_HUbRs = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.borderRadius");
			var hackbar_HUfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.fontSize");
			var hackbar_HUfF = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.font-family");
			var hackbar_HUfw = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.font-weight");
			var hackbar_HUfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrl.font-style");
			urlField.style.color = hackbar_HUcolor;
			urlField.style.backgroundColor = hackbar_HUbg;
			urlField.style.borderTop = hackbar_HUbS+"px solid "+hackbar_HUbT;
			urlField.style.borderLeft = hackbar_HUbS+"px solid "+hackbar_HUbL;
			urlField.style.borderBottom = hackbar_HUbS+"px solid "+hackbar_HUbB;
			urlField.style.borderRight = hackbar_HUbS+"px solid "+hackbar_HUbR;
			urlField.style.borderRadius = hackbar_HUbRs+"px";
			urlField.style.fontSize = hackbar_HUfS;
			urlField.style.fontFamily = hackbar_HUfF;
			urlField.style.fontWeight = hackbar_HUfw;
			urlField.style.fontStyle = hackbar_HUfS;

			//POST_DATA
			var hackbar_PFcolor = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.color");
			var hackbar_PFbg = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.backgroundColor");
			var hackbar_PFbT = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderTop");
			var hackbar_PFbL = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderLeft");
			var hackbar_PFbB = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderBottom");
			var hackbar_PFbR = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderRight");
			var hackbar_PFbS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderSize");
			var hackbar_PFbRs = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.borderRadius");
			var hackbar_PFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.fontSize");
			var hackbar_PFfF = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.font-family");
			var hackbar_PFfw = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.font-weight");
			var hackbar_PFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlPostField.font-style");
			postDataField.style.color = hackbar_PFcolor;
			postDataField.style.backgroundColor = hackbar_PFbg;
			postDataField.style.borderTop = hackbar_PFbS+"px solid "+hackbar_PFbT;
			postDataField.style.borderLeft = hackbar_PFbS+"px solid "+hackbar_PFbL;
			postDataField.style.borderBottom = hackbar_PFbS+"px solid "+hackbar_PFbB;
			postDataField.style.borderRight = hackbar_PFbS+"px solid "+hackbar_PFbR;
			postDataField.style.borderRadius = hackbar_PFbRs+"px";
			postDataField.style.fontSize = hackbar_PFfS;
			postDataField.style.fontFamily = hackbar_PFfF;
			postDataField.style.fontWeight = hackbar_PFfw;
			postDataField.style.fontStyle = hackbar_PFfS;
			//REFERRER FIELD
			var hackbar_RFcolor = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.color");
			var hackbar_RFbg = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.backgroundColor");
			var hackbar_RFbT = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderTop");
			var hackbar_RFbL = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderLeft");
			var hackbar_RFbB = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderBottom");
			var hackbar_RFbR = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderRight");
			var hackbar_RFbS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderSize");
			var hackbar_RFbRs = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.borderRadius");
			var hackbar_RFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.fontSize");
			var hackbar_RFfF = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.font-family");
			var hackbar_RFfw = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.font-weight");
			var hackbar_RFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlReferrerField.font-style");
			referrerField.style.color = hackbar_RFcolor;
			referrerField.style.backgroundColor = hackbar_RFbg;
			referrerField.style.borderTop = hackbar_RFbS+"px solid "+hackbar_RFbT;
			referrerField.style.borderLeft = hackbar_RFbS+"px solid "+hackbar_RFbL;
			referrerField.style.borderBottom = hackbar_RFbS+"px solid "+hackbar_RFbB;
			referrerField.style.borderRight = hackbar_RFbS+"px solid "+hackbar_RFbR;
			referrerField.style.borderRadius = hackbar_RFbRs+"px";
			referrerField.style.fontSize = hackbar_RFfS;
			referrerField.style.fontFamily = hackbar_RFfF;
			referrerField.style.fontWeight = hackbar_RFfw;
			referrerField.style.fontStyle = hackbar_RFfS;
			//COOKIE FIELD
			var hackbar_CFcolor = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.color");
			var hackbar_CFbg = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.backgroundColor");
			var hackbar_CFbT = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderTop");
			var hackbar_CFbL = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderLeft");
			var hackbar_CFbB = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderBottom");
			var hackbar_CFbR = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderRight");
			var hackbar_CFbS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderSize");
			var hackbar_CFbRs = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.borderRadius");
			var hackbar_CFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.fontSize");
			var hackbar_CFfF = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.font-family");
			var hackbar_CFfw = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.font-weight");
			var hackbar_CFfS = pref.getCharPref("extensions.hackbar.hackBarTargetUrlCookieField.font-style");

			CookiesField.style.color = hackbar_CFcolor;
			CookiesField.style.backgroundColor = hackbar_CFbg;
			CookiesField.style.borderTop = hackbar_CFbS+"px solid "+hackbar_CFbT;
			CookiesField.style.borderLeft = hackbar_CFbS+"px solid "+hackbar_CFbL;
			CookiesField.style.borderBottom = hackbar_CFbS+"px solid "+hackbar_CFbB;
			CookiesField.style.borderRight = hackbar_CFbS+"px solid "+hackbar_CFbR;
			CookiesField.style.borderRadius = hackbar_CFbRs+"px";
			CookiesField.style.fontSize = hackbar_CFfS;
			CookiesField.style.fontFamily = hackbar_CFfF;
			CookiesField.style.fontWeight = hackbar_CFfw;
			CookiesField.style.fontStyle = hackbar_CFfS;
			//MENUPOPUP
	    	var hackbar_MPPbg = pref.getCharPref("extensions.hackbar.menupopup.backgroundColor");
			var hackbar_MPPbT = pref.getCharPref("extensions.hackbar.menupopup.borderTop");
			var hackbar_MPPbL = pref.getCharPref("extensions.hackbar.menupopup.borderLeft");
			var hackbar_MPPbB = pref.getCharPref("extensions.hackbar.menupopup.borderBottom");
			var hackbar_MPPbR = pref.getCharPref("extensions.hackbar.menupopup.borderRight");
			var hackbar_MPPbS = pref.getCharPref("extensions.hackbar.menupopup.borderSize");
			var hackbar_MPPbRs = pref.getCharPref("extensions.hackbar.menupopup.borderRadius");
			var hackbar_MPPO = pref.getCharPref("extensions.hackbar.menupopup.opacity");
			for(var Elements of menupopup){
				Elements.style.backgroundColor = hackbar_MPPbg;
				Elements.style.borderTop = hackbar_MPPbS+"px solid "+hackbar_MPPbT;
				Elements.style.borderLeft = hackbar_MPPbS+"px solid "+hackbar_MPPbL;
				Elements.style.borderBottom = hackbar_MPPbS+"px solid "+hackbar_MPPbB;
				Elements.style.borderRight = hackbar_MPPbS+"px solid "+hackbar_MPPbR;
				Elements.style.borderRadius = hackbar_MPPbRs+"px";
				Elements.style.opacity=hackbar_MPPO;
			}
			//MENUITEM
			var hackbar_MPPcolor = pref.getCharPref("extensions.hackbar.menuitem.color");
			var hackbar_MPPfF = pref.getCharPref("extensions.hackbar.menuitem.font-family");
			var hackbar_MPPfS = pref.getCharPref("extensions.hackbar.menuitem.fontSize");
			var hackbar_MPPfw = pref.getCharPref("extensions.hackbar.menuitem.font-weight");
			var hackbar_MPPfS = pref.getCharPref("extensions.hackbar.menuitem.font-style");
			for(var Elements of menuitem){
				Elements.style.color = hackbar_MPPcolor;
				Elements.style.fontSize = hackbar_MPPfS;
				Elements.style.fontFamily = hackbar_MPPfF;
				Elements.style.fontWeight = hackbar_MPPfw;
				Elements.style.fontStyle = hackbar_MPPfS;
			}
			//TOOLBAR BUTTON
			var hackbar_TBBtncolor = pref.getCharPref("extensions.hackbar.toolbarbutton.color");
			var hackbar_TBBtnfS = pref.getCharPref("extensions.hackbar.toolbarbutton.fontSize");
			var hackbar_TBBtnfF = pref.getCharPref("extensions.hackbar.toolbarbutton.font-family");
			var hackbar_TBBtnfw = pref.getCharPref("extensions.hackbar.toolbarbutton.font-weight");
			var hackbar_TBBtnfS = pref.getCharPref("extensions.hackbar.toolbarbutton.font-style");
			for(Elements of toolbarbutton){
				Elements.style.color = hackbar_TBBtncolor;
				Elements.style.fontSize = hackbar_TBBtnfS;
				Elements.style.fontFamily = hackbar_TBBtnfF;
				Elements.style.fontWeight = hackbar_TBBtnfw;
				Elements.style.fontStyle = hackbar_TBBtnfS;
			}
			//HACKBAR LAYOUT
			var hackbar_TBbg = pref.getCharPref("extensions.hackbar.toolbar.backgroundColor");
			var hackbar_TBbT = pref.getCharPref("extensions.hackbar.toolbar.borderTop");
			var hackbar_TBbL = pref.getCharPref("extensions.hackbar.toolbar.borderLeft");
			var hackbar_TBbB = pref.getCharPref("extensions.hackbar.toolbar.borderBottom");
			var hackbar_TBbR = pref.getCharPref("extensions.hackbar.toolbar.borderRight");
			var hackbar_TBbS = pref.getCharPref("extensions.hackbar.toolbar.borderSize");
			var hackbar_TBbRs = pref.getCharPref("extensions.hackbar.toolbar.borderRadius");
			//for(var Elements of MainLayout){
				MainLayout.style.background = hackbar_TBbg;
				MainLayout.style.borderTop = hackbar_TBbS+"px solid "+hackbar_TBbT;
				MainLayout.style.borderLeft = hackbar_TBbS+"px solid "+hackbar_TBbL;
				MainLayout.style.borderBottom = hackbar_TBbS+"px solid "+hackbar_TBbB;
				MainLayout.style.borderRight = hackbar_TBbS+"px solid "+hackbar_TBbR;
				MainLayout.style.borderRadius = hackbar_TBbRs+"px";
			//}
			//REPLACE 1
			var hackbar_rs1color = pref.getCharPref("extensions.hackbar.rstring1.color");
			var hackbar_rs1bg = pref.getCharPref("extensions.hackbar.rstring1.backgroundColor");
			var hackbar_rs1bT = pref.getCharPref("extensions.hackbar.rstring1.borderTop");
			var hackbar_rs1bL = pref.getCharPref("extensions.hackbar.rstring1.borderLeft");
			var hackbar_rs1bB = pref.getCharPref("extensions.hackbar.rstring1.borderBottom");
			var hackbar_rs1bR = pref.getCharPref("extensions.hackbar.rstring1.borderRight");
			var hackbar_rs1bS = pref.getCharPref("extensions.hackbar.rstring1.borderSize");
			var hackbar_rs1bRs = pref.getCharPref("extensions.hackbar.rstring1.borderRadius");
			var hackbar_rs1fS = pref.getCharPref("extensions.hackbar.rstring1.fontSize");
			var hackbar_rs1fF = pref.getCharPref("extensions.hackbar.rstring1.font-family");
			var hackbar_rs1fw = pref.getCharPref("extensions.hackbar.rstring1.font-weight");
			var hackbar_rs1fS = pref.getCharPref("extensions.hackbar.rstring1.font-style");
			rstring1.style.color = hackbar_rs1color;
			rstring1.style.backgroundColor = hackbar_rs1bg;
			rstring1.style.borderTop = hackbar_rs1bS+"px solid "+hackbar_rs1bT;
			rstring1.style.borderLeft = hackbar_rs1bS+"px solid "+hackbar_rs1bL;
			rstring1.style.borderBottom = hackbar_rs1bS+"px solid "+hackbar_rs1bB;
			rstring1.style.borderRight = hackbar_rs1bS+"px solid "+hackbar_rs1bR;
			rstring1.style.borderRadius = hackbar_rs1bRs+"px";
			rstring1.style.fontSize = hackbar_rs1fS;
			rstring1.style.fontFamily = hackbar_rs1fF;
			rstring1.style.fontWeight = hackbar_rs1fw;
			rstring1.style.fontStyle = hackbar_rs1fS;
			//REPLACE 2
			var hackbar_rs2color = pref.getCharPref("extensions.hackbar.rstring2.color");
			var hackbar_rs2bg = pref.getCharPref("extensions.hackbar.rstring2.backgroundColor");
			var hackbar_rs2bT = pref.getCharPref("extensions.hackbar.rstring2.borderTop");
			var hackbar_rs2bL = pref.getCharPref("extensions.hackbar.rstring2.borderLeft");
			var hackbar_rs2bB = pref.getCharPref("extensions.hackbar.rstring2.borderBottom");
			var hackbar_rs2bR = pref.getCharPref("extensions.hackbar.rstring2.borderRight");
			var hackbar_rs2bS = pref.getCharPref("extensions.hackbar.rstring2.borderSize");
			var hackbar_rs2bRs = pref.getCharPref("extensions.hackbar.rstring2.borderRadius");
			var hackbar_rs2fS = pref.getCharPref("extensions.hackbar.rstring2.fontSize");
			var hackbar_rs2fF = pref.getCharPref("extensions.hackbar.rstring2.font-family");
			var hackbar_rs2fw = pref.getCharPref("extensions.hackbar.rstring2.font-weight");
			var hackbar_rs2fS = pref.getCharPref("extensions.hackbar.rstring2.font-style");
			rstring2.style.color = hackbar_rs2color;
			rstring2.style.backgroundColor = hackbar_rs2bg;
			rstring2.style.borderTop = hackbar_rs2bS+"px solid "+hackbar_rs2bT;
			rstring2.style.borderLeft = hackbar_rs2bS+"px solid "+hackbar_rs2bL;
			rstring2.style.borderBottom = hackbar_rs2bS+"px solid "+hackbar_rs2bB;
			rstring2.style.borderRight = hackbar_rs2bS+"px solid "+hackbar_rs2bR;
			rstring2.style.borderRadius = hackbar_rs2bRs+"px";
			rstring2.style.fontSize = hackbar_rs2fS;
			rstring2.style.fontFamily = hackbar_rs2fF;
			rstring2.style.fontWeight = hackbar_rs2fw;
			rstring2.style.fontStyle = hackbar_rs2fS;
			//LOADURL
			var hackbar_LUcolor = pref.getCharPref("extensions.hackbar.loadURL.color");
			var hackbar_LUbg = pref.getCharPref("extensions.hackbar.loadURL.backgroundColor");
			var hackbar_LUbT = pref.getCharPref("extensions.hackbar.loadURL.borderTop");
			var hackbar_LUbL = pref.getCharPref("extensions.hackbar.loadURL.borderLeft");
			var hackbar_LUbB = pref.getCharPref("extensions.hackbar.loadURL.borderBottom");
			var hackbar_LUbR = pref.getCharPref("extensions.hackbar.loadURL.borderRight");
			var hackbar_LUbS = pref.getCharPref("extensions.hackbar.loadURL.borderSize");
			var hackbar_LUbRs = pref.getCharPref("extensions.hackbar.loadURL.borderRadius");
			var hackbar_LUfS = pref.getCharPref("extensions.hackbar.loadURL.fontSize");
			var hackbar_LUfF = pref.getCharPref("extensions.hackbar.loadURL.font-family");
			var hackbar_LUfw = pref.getCharPref("extensions.hackbar.loadURL.font-weight");
			var hackbar_LUfS = pref.getCharPref("extensions.hackbar.loadURL.font-style");
			var hackbar_LU_icon = pref.getCharPref("extensions.hackbar.loadURL.LoadIcon");
			LoadURL.style.color = hackbar_LUcolor;
			LoadURL.style.backgroundColor = hackbar_LUbg;
			LoadURL.style.borderTop = hackbar_LUbS+"px solid "+hackbar_LUbT;
			LoadURL.style.borderLeft = hackbar_LUbS+"px solid "+hackbar_LUbL;
			LoadURL.style.borderBottom = hackbar_LUbS+"px solid "+hackbar_LUbB;
			LoadURL.style.borderRight = hackbar_LUbS+"px solid "+hackbar_LUbR;
			LoadURL.style.borderRadius = hackbar_LUbRs+"px";
			LoadURL.style.fontSize = hackbar_LUfS;
			LoadURL.style.fontFamily = hackbar_LUfF;
			LoadURL.style.fontWeight = hackbar_LUfw;
			LoadURL.style.fontStyle = hackbar_LUfS;
			LoadURL.image = hackbar_LU_icon;
			//SPLITURL
			var hackbar_SUcolor = pref.getCharPref("extensions.hackbar.SplitURL.color");
			var hackbar_SUbg = pref.getCharPref("extensions.hackbar.SplitURL.backgroundColor");
			var hackbar_SUbT = pref.getCharPref("extensions.hackbar.SplitURL.borderTop");
			var hackbar_SUbL = pref.getCharPref("extensions.hackbar.SplitURL.borderLeft");
			var hackbar_SUbB = pref.getCharPref("extensions.hackbar.SplitURL.borderBottom");
			var hackbar_SUbR = pref.getCharPref("extensions.hackbar.SplitURL.borderRight");
			var hackbar_SUbS = pref.getCharPref("extensions.hackbar.SplitURL.borderSize");
			var hackbar_SUbRs = pref.getCharPref("extensions.hackbar.SplitURL.borderRadius");
			var hackbar_SUfS = pref.getCharPref("extensions.hackbar.SplitURL.fontSize");
			var hackbar_SUfF = pref.getCharPref("extensions.hackbar.SplitURL.font-family");
			var hackbar_SUfw = pref.getCharPref("extensions.hackbar.SplitURL.font-weight");
			var hackbar_SUfS = pref.getCharPref("extensions.hackbar.SplitURL.font-style");
			var hackbar_SU_icon = pref.getCharPref("extensions.hackbar.SplitURL.SplitIcon");
			SplitURL.style.color = hackbar_SUcolor;
			SplitURL.style.backgroundColor = hackbar_SUbg;
			SplitURL.style.borderTop = hackbar_SUbS+"px solid "+hackbar_SUbT;
			SplitURL.style.borderLeft = hackbar_SUbS+"px solid "+hackbar_SUbL;
			SplitURL.style.borderBottom = hackbar_SUbS+"px solid "+hackbar_SUbB;
			SplitURL.style.borderRight = hackbar_SUbS+"px solid "+hackbar_SUbR;
			SplitURL.style.borderRadius = hackbar_SUbRs+"px";
			SplitURL.style.fontSize = hackbar_SUfS;
			SplitURL.style.fontFamily = hackbar_SUfF;
			SplitURL.style.fontWeight = hackbar_SUfw;
			SplitURL.style.fontStyle = hackbar_SUfS;
			SplitURL.image=hackbar_SU_icon;
			//EXECUTE
			var hackbar_EUcolor = pref.getCharPref("extensions.hackbar.ExcuteURL.color");
			var hackbar_EUbg = pref.getCharPref("extensions.hackbar.ExcuteURL.backgroundColor");
			var hackbar_EUbT = pref.getCharPref("extensions.hackbar.ExcuteURL.borderTop");
			var hackbar_EUbL = pref.getCharPref("extensions.hackbar.ExcuteURL.borderLeft");
			var hackbar_EUbB = pref.getCharPref("extensions.hackbar.ExcuteURL.borderBottom");
			var hackbar_EUbR = pref.getCharPref("extensions.hackbar.ExcuteURL.borderRight");
			var hackbar_EUbS = pref.getCharPref("extensions.hackbar.ExcuteURL.borderSize");
			var hackbar_EUbRs = pref.getCharPref("extensions.hackbar.ExcuteURL.borderRadius");
			var hackbar_EUfS = pref.getCharPref("extensions.hackbar.ExcuteURL.fontSize");
			var hackbar_EUfF = pref.getCharPref("extensions.hackbar.ExcuteURL.font-family");
			var hackbar_EUfw = pref.getCharPref("extensions.hackbar.ExcuteURL.font-weight");
			var hackbar_EUfS = pref.getCharPref("extensions.hackbar.ExcuteURL.font-style");
			var hackbar_EU_icon = pref.getCharPref("extensions.hackbar.ExcuteURL.ExcuteIcon");
			ExecuteURL.style.color = hackbar_EUcolor;
			ExecuteURL.style.backgroundColor = hackbar_EUbg;
			ExecuteURL.style.borderTop = hackbar_EUbS+"px solid "+hackbar_EUbT;
			ExecuteURL.style.borderLeft = hackbar_EUbS+"px solid "+hackbar_EUbL;
			ExecuteURL.style.borderBottom = hackbar_EUbS+"px solid "+hackbar_EUbB;
			ExecuteURL.style.borderRight = hackbar_EUbS+"px solid "+hackbar_EUbR;
			ExecuteURL.style.borderRadius = hackbar_EUbRs+"px";
			ExecuteURL.style.fontSize = hackbar_EUfS;
			ExecuteURL.style.fontFamily = hackbar_EUfF;
			ExecuteURL.style.fontWeight = hackbar_EUfw;
			ExecuteURL.style.fontStyle = hackbar_EUfS;
			ExecuteURL.image=hackbar_EU_icon;
			//MINUS PLUS SELECTION
			var hackbar_Slncolor = pref.getCharPref("extensions.hackbar.Selection.color");
			var hackbar_Slnbg = pref.getCharPref("extensions.hackbar.Selection.backgroundColor");
			var hackbar_SlnbT = pref.getCharPref("extensions.hackbar.Selection.borderTop");
			var hackbar_SlnbL = pref.getCharPref("extensions.hackbar.Selection.borderLeft");
			var hackbar_SlnbB = pref.getCharPref("extensions.hackbar.Selection.borderBottom");
			var hackbar_SlnbR = pref.getCharPref("extensions.hackbar.Selection.borderRight");
			var hackbar_SlnbS = pref.getCharPref("extensions.hackbar.Selection.borderSize");
			var hackbar_SlnbRs = pref.getCharPref("extensions.hackbar.Selection.borderRadius");
			var hackbar_SlnfS = pref.getCharPref("extensions.hackbar.Selection.fontSize");
			var hackbar_SlnfF = pref.getCharPref("extensions.hackbar.Selection.font-family");
			var hackbar_Slfw = pref.getCharPref("extensions.hackbar.Selection.font-weight");
			var hackbar_SlfS = pref.getCharPref("extensions.hackbar.Selection.font-style");
			Selection.style.color = hackbar_Slncolor;
			Selection.style.backgroundColor = hackbar_Slnbg;
			Selection.style.borderTop = hackbar_SlnbS+"px solid "+hackbar_SlnbT;
			Selection.style.borderLeft = hackbar_SlnbS+"px solid "+hackbar_SlnbL;
			Selection.style.borderBottom = hackbar_SlnbS+"px solid "+hackbar_SlnbB;
			Selection.style.borderRight = hackbar_SlnbS+"px solid "+hackbar_SlnbR;
			Selection.style.borderRadius = hackbar_SlnbRs+"px";
			Selection.style.fontSize = hackbar_SlnfS;
			Selection.style.fontFamily = hackbar_SlnfF;
			Selection.style.fontWeight = hackbar_Slfw;
			Selection.style.fontStyle = hackbar_SlfS;

			//Arrow Icon
			var hackbar_icon_HexAL = pref.getCharPref("extensions.hackbar.Arrow.HexArrowLeft");
			var hackbar_icon_HexAR = pref.getCharPref("extensions.hackbar.Arrow.HexArrowRight");	
			var hackbar_icon_URLAL = pref.getCharPref("extensions.hackbar.Arrow.URLArrowLeft");
			var hackbar_icon_URLAR = pref.getCharPref("extensions.hackbar.Arrow.URLArrowRight");	
			var hackbar_icon_BASE64AL = pref.getCharPref("extensions.hackbar.Arrow.BASE64ArrowLeft");
			var hackbar_icon_BASE64AR = pref.getCharPref("extensions.hackbar.Arrow.BASE64ArrowRight");
			var hackbar_icon_BINARYAL = pref.getCharPref("extensions.hackbar.Arrow.BINARYArrowLeft");
			var hackbar_icon_BINARYAR = pref.getCharPref("extensions.hackbar.Arrow.BINARYArrowRight");
			var hackbar_icon_replace = pref.getCharPref("extensions.hackbar.Arrow.Replace");
			var hackbar_icon_BASE64Spacer = pref.getCharPref("extensions.hackbar.Arrow.BASE64Spacer");
			
			HexArrowLeft.image=hackbar_icon_HexAL;
    		HexArrowRight.image=hackbar_icon_HexAR;
    		URLArrowLeft.image=hackbar_icon_URLAL;
    		URLArrowRight.image=hackbar_icon_URLAR;
    		BASE64ArrowLeft.image=hackbar_icon_BASE64AL;
    		BASE64ArrowRight.image=hackbar_icon_BASE64AR;
    		BINARYArrowLeft.image=hackbar_icon_BINARYAL;
    		BINARYArrowRight.image=hackbar_icon_BINARYAR;
    		Replace.image=hackbar_icon_replace;
    		Base64Spacer.image=hackbar_icon_BASE64Spacer;

    		//Hide Toolbars
    		var SQL_BASICvisibility = pref.getCharPref("extensions.hackbar.SQL BASIC");
			var UNION_BASEDvisibility = pref.getCharPref("extensions.hackbar.UNION BASED");	
			var OUT_FILEvisibility = pref.getCharPref("extensions.hackbar.OUT FILE");	
			var WAF_BASEDvisibility = pref.getCharPref("extensions.hackbar.WAF BASED");	
			var CUSTOMvisibility = pref.getCharPref("extensions.hackbar.CUSTOM");	
			var ERROR_DOUBLEvisibility = pref.getCharPref("extensions.hackbar.ERROR/DOUBLE QUERY");	
			var TOOLSvisibility = pref.getCharPref("extensions.hackbar.TOOLS");	
			var WAF_BYPASSvisibility = pref.getCharPref("extensions.hackbar.WAF BYPASS");
			var LDAP_FUZZvisibility = pref.getCharPref("extensions.hackbar.LDAP FUZZ");	
			var ENCODINGvisibility = pref.getCharPref("extensions.hackbar.ENCODING");	
			var HTMLvisibility = pref.getCharPref("extensions.hackbar.0xHTML");	
			var ENCRYPTIONvisibility = pref.getCharPref("extensions.hackbar.ENCRYPTION");	
			var OTHERSvisibility = pref.getCharPref("extensions.hackbar.OTHERS");	
			var XSSvisibility = pref.getCharPref("extensions.hackbar.XSS");	
			var LFIvisibility = pref.getCharPref("extensions.hackbar.LFI");	
			var LINKSvisibility = pref.getCharPref("extensions.hackbar.LINKS");
			var Replacevisibility = pref.getCharPref("extensions.hackbar.ReplaceField");
			
			SQLMenu.style.visibility=SQL_BASICvisibility;
			UnionBased.style.visibility=UNION_BASEDvisibility;
			OutFile.style.visibility=OUT_FILEvisibility;
			WafBased.style.visibility=WAF_BASEDvisibility;
			Custom.style.visibility=CUSTOMvisibility;
			Error.style.visibility=ERROR_DOUBLEvisibility;
			Tools.style.visibility=TOOLSvisibility;
			WafBypass.style.visibility=WAF_BYPASSvisibility;
			LDAPFuzz.style.visibility=LDAP_FUZZvisibility;
			ENCODING.style.visibility=ENCODINGvisibility;	
			HTML.style.visibility=HTMLvisibility;
			ENCRYPTION.style.visibility=ENCRYPTIONvisibility;
			OTHER.style.visibility=OTHERSvisibility;
			XSS.style.visibility=XSSvisibility;
			LFI.style.visibility=LFIvisibility;
			LINKS.style.visibility=LINKSvisibility;
			ReplaceField.style.visibility=Replacevisibility;

			var hackbar_MinusIcon = pref.getCharPref("extensions.hackbar.Selection.MinusIcon");
			var hackbar_PlusIcon  = pref.getCharPref("extensions.hackbar.Selection.PlusIcon");

			for(var Elements of MinusIcon){
    			Elements.image=hackbar_MinusIcon;
    		}
    		for(var Elements of PlusIcon){
    			Elements.image=hackbar_PlusIcon;
    		}
    		if(Replacevisibility == "collapse"){
    			Base64value.setAttribute('value','Base64Spacer');
    		}else{
    			Base64value.setAttribute('value','');
    		}
		}
	};
}();
/*** Load Custom ***/
window.addEventListener("load", function(e) { custom.hackbar.main(); }, false);