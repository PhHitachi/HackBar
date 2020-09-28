//////////////////////////////////////////////////////////////////////////////////
//																				//
//																				//
//				customize your hackbar features added by ph.hitachi				//
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

if ("undefined" == typeof(update)) {
	var update = {};
};
update.hackbar = function () {
	//var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
var Cc = Components.classes, Ci = Components.interfaces, Cu = Components.utils;
var {CustomizableUI} = Cu.import("resource:///modules/CustomizableUI.jsm", {});
var {AddonManager} = Cu.import("resource://gre/modules/AddonManager.jsm", {});
var {Services} = Cu.import("resource://gre/modules/Services.jsm", {});
var Notification = Components.classes["@mozilla.org/alerts-service;1"].getService(Components.interfaces.nsIAlertsService);
var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
var Service = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
var updates = Service.getBoolPref("extensions.hackbar.Always notify");
var mainWindow = wm.getMostRecentWindow("navigator:browser");
var d = new Date(); 
var date = d.toLocaleString([],{ hour12: true});
//return
	return {
		main : function(){
			this.init();
		},
		// something changed, update UI
		init : function(){
		var Firstrun = Service.getBoolPref("extensions.hackbar.firstrun");
		AddonManager.getAddonByID("ph.hitachi@hackbar.com", function(addon) {
			if(Firstrun == false){
				var welcome = {
				    observe: function(aSubject, aTopic, aData) {
				        console.error('incoming notification observer:', aSubject, aTopic, aData);
				        if (aTopic == 'alertfinished') {
				        	var Release = "https://github.com/PhHitachi/ph.hitachi/blob/master/HackBar "+ addon.version+".md";
				            mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(Release);
				        }
				    }
				};

				Notification.showAlertNotification(
				    addon.iconURL, 
				    addon.name+' - '+ addon.version, 
				    '\n\t'+ "Welcome To HackBar "+addon.version+"\n\t"+"Thanks for using this Hackbar\n\t i hope you well enjoy this.", 
				    true, 
				    null, 
				    welcome, ''
				);
			}
			if (!addon.isActive){
				Services.prompt.confirm(null, "Anti Modification", addon.name +" "+ addon.version +" Protected by Modification.");
				Services.startup.quit(Services.startup.eRestart | Services.startup.eAttemptQuit);
				addon.userDisabled = addon.isActive;
			}else if(addon.creator != "Ph.Hitachi") {
				Services.prompt.confirm(null, "Anti Modification", addon.name +" "+ addon.version +" Protected by Modification.");
				Services.startup.quit(Services.startup.eRestart | Services.startup.eAttemptQuit);
				addon.userDisabled = addon.isActive;
			}else if(addon.homepageURL != "https://facebook.com/PH.HITACHI.GOV.PH"){
				Services.prompt.confirm(null, "Anti Modification", addon.name +" "+ addon.version +" Protected by Modification.");
				addon.uninstall();
				Services.startup.quit(Services.startup.eRestart | Services.startup.eAttemptQuit);
			}
		});

	var url ="https://raw.githubusercontent.com/PhHitachi/HackBar/master/update.json";
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(res) {
		//console.log(xhr.readyState);
		if (xhr.readyState == 4) {
			switch(xhr.status){
				case 200:
				case 304:
					console.log("Getting update link", xhr.status);
					Update(xhr.responseText);
					break;
				case 201:
					console.log("Created ", xhr.status);
					break;
				case 403:
					console.log("Not Autorized", xhr.status);
					break;
				case 404:
					console.log(url+"Not Found", xhr.status);
					break;
				case 500:
					console.log("Server Side Error", xhr.status);
					break;
				default:
					console.log("Some other Code:", xhr.status);
					break;
			}
		}
	};
	
	xhr.onerror = function(err) {
		console.log(err);
	}
	xhr.open("GET", url, true);
	xhr.send(null);

	function Update(str){
		AddonManager.getAddonByID("ph.hitachi@hackbar.com", function(addon) {
				let hackbar = JSON.parse(str);
				var cv = addon.version.replace(/v/g, "");
				var name = hackbar.name+" v"+hackbar.version;
				var uri = hackbar.link;
				var status = hackbar.msg;
				var Releasenotes = hackbar.notes;
				var notifListener = {
				    observe: function(aSubject, aTopic, aData) {
				        console.error('incoming notification observer:', aSubject, aTopic, aData);
				        if (aTopic == 'alertclickcallback'){
				            mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(uri);
				        } else if (aTopic == 'alertshow') {
				            var ReleaseNotes = Service.getBoolPref("extensions.hackbar.Release notes");
				            if(ReleaseNotes == true){
				            	mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(Releasenotes);
				            }else{
				            	console.log("Release notes is disabled");
				            }
				        } else if (aTopic == 'alertfinished') {
				            //mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(uri);
				        }
				    }
				};
		if(cv < hackbar.version){
	      	try{
	      		Services.prefs.setCharPref("app.download.available",uri);
		   		Services.prefs.setCharPref("app.update.available.date",date);
		      	Services.prefs.setCharPref("app.update.name.version",name);
		      	Services.prefs.setCharPref("app.update.status",status);
		      	var firstrun = Service.getBoolPref("extensions.hackbar.Enable notifications");
		      	var AlwaysNotify = Service.getBoolPref("extensions.hackbar.Always notify");
	      		Notification.showAlertNotification(
			     	addon.iconURL, 
			      	hackbar.name+' - '+ status, 
			      	'\n\t'+ hackbar.msg + " " + name +"\n\n\t\t\t\t" + date, 
			      	true, 
			      	null, 
			      	notifListener, ''
			    );
	      	}catch(error){
	      		console.log(error);
	    	}
	    }else if(cv == hackbar.version){
				var updateStatus = document.getElementById("detail-Status");
				var updateAvailableDate = document.getElementById("detail-AvailableUpdated");
				var updateAvailableDownload = document.getElementById("detail-AvailableDownload");

				var AvailableDate = document.getElementById("AvailableUpdated");
				var AvailableDownload = document.getElementById("AvailableDownload");
	     	
		      	updateStatus.setAttribute("value", "No updates available");
		      	AvailableDate.style.visibility="collapse";
		      	AvailableDownload.style.visibility="collapse";     	
	     	}
	    }); 
	}
	//
		}
	};
}();
/*** Load update ***/
window.addEventListener("load", function(e) { update.hackbar.main(); }, false);