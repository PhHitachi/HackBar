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
		var Progressmeter = document.getElementById('ProgressmeterID');
		//var admins = document.getElementById('admins');
		Progressmeter.style.visibility="collapse";
	},
	
	Start: function() {

		try{
			var uri = document.getElementById('url').value;
			var Start = document.getElementsByClassName('btn');
			for(var btn of Start){
				btn.disabled = true;
			}
			var Progressmeter = document.getElementById('ProgressmeterID');
			Progressmeter.style.visibility="visible";
			var wordlist = document.getElementById('wordlist').value.split('\n');
			var request = new XMLHttpRequest();
			(function loop(i, length) {
			if (i>= length) {
					return;
			}

			var Total = document.getElementById('Total');
			Total.setAttribute("value","Total Wordlist: " + wordlist.length);

			var ProgressmeterID = Math.round(((i+1) * 100) / wordlist.length);
			 	Progressmeter.value = ProgressmeterID;
			if(ProgressmeterID == 100){
				setTimeout(function() {
					Progressmeter.style.visibility="collapse";
					for(var btn of Start){
						btn.disabled = false;
					}
				}, 2000); 
			}

			var url = uri + wordlist[i];
			request.open("GET", url, true);
			request.onreadystatechange = function() {
					if(request.readyState === XMLHttpRequest.DONE) {
						var Status = request.status;
						var statusText = request.statusText;
						HackBar.AdminFinder.Addrow(url, Status, statusText);
						
						if (Status == 200) {
							HackBar.AdminFinder.Admins(url);
						}
						
						//loop
						loop(i + 1, length);
					}
			}
			request.send();
			})(0, wordlist.length);
		}catch(e){
			Cu.reportError(e);
		}
	},
	
	loadFromFile: function() {
		try{
			const nsIFilePicker = Ci.nsIFilePicker;
			var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
			var stream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
			var streamIO = Cc["@mozilla.org/scriptableinputstream;1"].createInstance(Ci.nsIScriptableInputStream);

			fp.defaultExtension = "txt";
			fp.defaultString = "wordlist.txt";
			fp.init(window, null, nsIFilePicker.modeOpen);
			fp.appendFilters(nsIFilePicker.filterText);

			if (fp.show() != nsIFilePicker.returnCancel) {
				stream.init(fp.file, 0x01, parseInt("0777", 8), null);
				streamIO.init(stream);
				var wordlist = streamIO.read(stream.available());
				streamIO.close();
				stream.close();
				document.getElementById('wordlist').value = wordlist;
			}
			return null;
		} catch(e) {
			Cu.reportError(e);
		}
		return true;
	},

	saveToFile: function(aPattern, aType) {
		try{
			if (!aType === "txt" || !aType === "json" || aPattern.length === 0) return false;

			const nsIFilePicker = Ci.nsIFilePicker;
			var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
			var stream = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);

			fp.init(window, null, nsIFilePicker.modeSave);
			fp.defaultExtension = aType;
			fp.defaultString = "Admin." + aType;

			if (aType === "txt") {
			  fp.appendFilters(nsIFilePicker.filterText);
			} else if (aType === "json") {
			  fp.appendFilters(nsIFilePicker.filterAll);
			}

			if (fp.show() != nsIFilePicker.returnCancel) {
			  var file = fp.file;
			  if (aType === "txt") {
				if (!/\.txt$/.test(file.leafName.toLowerCase()))
				  file.leafName += ".txt";
			  } else if (aType === "json") {
				if (!/\.json$/.test(file.leafName.toLowerCase()))
				  file.leafName += ".json";
			  }
			  if (file.exists())
				file.remove(true);
			  file.create(file.NORMAL_FILE_TYPE, parseInt("0666", 8));
			  stream.init(file, 0x02, 0x200, null);

			  switch (aType) {
				case "txt":
				  for (var i = 0; i < aPattern.length; i++) {
					aPattern[i] = aPattern[i] + "\n";
					stream.write(aPattern[i], aPattern[i].length);
				  }
				  break;
				case "json":
				  var patternItems = JSON.stringify(aPattern.preference);
				  stream.write(patternItems, patternItems.length)
				  break;
			  }
			  stream.close();
			}
			return true;
		  } catch(e) {
			Cu.reportError(e);
		  }
	  },

	Clear: function() {
		document.getElementById('wordlist').value = null;
		document.getElementById('Total').value = 0;
	},

	Addrow : function(url, Status, statusText) {
		var item = document.createElement('listitem');
		item.setAttribute("url", url);
		item.setAttribute("Status",Status);
		item.appendChild(HackBar.AdminFinder.url(url));
		item.appendChild(HackBar.AdminFinder.StatusText(Status, statusText));
		document.getElementById('StatusField').appendChild(item);
		if(Status == 0){
			alert("Please Check your url, make sure you add http://*/ or https://*/  \n\nthis AdminFinder Based on Response Status Code");
			window.close();
		}
	},

	url : function(url) {
		var cell = document.createElement("listcell");
		cell.setAttribute("label", url);
		cell.setAttribute("class", 'text-link');
		return cell;
 	},

	StatusText : function(Status, statusText) {
		var cell = document.createElement("listcell");
		if(Status == 0){
			cell.setAttribute("label", "Something went wrong");
		}else{
			cell.setAttribute("label", Status +" "+ statusText);
		}
		cell.setAttribute("class", '_'+Status);
		return cell;
 	},
 	
 	Admins: function(url){
		var admins = document.getElementById('admins');
		admins.style.visibility="visible";
	var item = document.createElement('label');
	item.setAttribute("href", url);
	item.setAttribute("value", url);
	item.setAttribute("class", 'text-link');
		document.getElementById('admins').appendChild(item);
 	},
 	
};
global.HackBar = HackBar;
}(this));
window.addEventListener("load", function(e) { HackBar.AdminFinder.init(); }, false);