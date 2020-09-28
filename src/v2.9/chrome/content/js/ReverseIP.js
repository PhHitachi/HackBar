"use strict";
(function(global) {
if (typeof HackBar == "undefined") {
	var HackBar = {};
};
if (!HackBar.AdminFinder) {
	HackBar.AdminFinder = {};
};

var Cc = Components.classes, Ci = Components.interfaces, Cu = Components.utils;

var {CustomizableUI} = Cu.import("resource:///modules/CustomizableUI.jsm", {});
var {AddonManager} = Cu.import("resource://gre/modules/AddonManager.jsm", {});
var {Services} = Cu.import("resource://gre/modules/Services.jsm", {});
var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
var mainWindow = wm.getMostRecentWindow("navigator:browser");
var Service = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
HackBar.AdminFinder = {
 
	init: function(){
	},
	
	Start: function() {

		try{
			var subdomain = document.getElementById('subdomain');
			var uri = document.getElementById('url').value;
			//var Start = document.getElementsByClassName('btn');
			/*for(var btn of Start){
				btn.disabled = true;
			}*
			var Progressmeter = document.getElementById('ProgressmeterID');
			Progressmeter.style.visibility="visible";
			var wordlist = document.getElementById('wordlist').value.split('\n');
			*/
			var request = new XMLHttpRequest();

			var url = uri; /*"https://api.hackertarget.com/nmap/?q="+*/
			request.open("GET", url, true);
			request.onreadystatechange = function() {
					if(request.readyState === XMLHttpRequest.DONE) {
						var Status = request.status;
						var responseText = request.responseText;
						console.log(responseText);
						subdomain.value=request.getAllResponseHeaders()+"\n\n"+responseText;
					}
			}
			request.send();
		}catch(e){
			Cu.reportError(e);
		}
	},
};
global.HackBar = HackBar;
}(this));
window.addEventListener("load", function(e) { HackBar.AdminFinder.init(); }, false);