"use strict";
(function(global) {
if (typeof customize == "undefined") {
	var customize = {};
};
if (!customize.hackbar) {
	customize.hackbar = {};
};

var Cc = Components.classes, Ci = Components.interfaces, Cu = Components.utils;

var {CustomizableUI} = Cu.import("resource:///modules/CustomizableUI.jsm", {});
var {AddonManager} = Cu.import("resource://gre/modules/AddonManager.jsm", {});
var {Services} = Cu.import("resource://gre/modules/Services.jsm", {});
var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
var mainWindow = wm.getMostRecentWindow("navigator:browser");
var Service = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
customize.hackbar = {

  prefs:			Services.prefs.getBranch("extensions.hackbar."),
  DefaultTheme:		Services.prefs.getBranch("general.skins.").getCharPref("selectedSkin") == 'classic/1.0',
  needsRestart: 	false,
 
  initprefwindow: function() {
   
	try{
		if (this.DefaultTheme) document.getElementById("ClassicTRoptionsPane").setAttribute('defaultfxtheme',true);
		  else {
			var thirdpartytheme = Services.prefs.getBranch("general.skins.").getCharPref("selectedSkin");
			if(thirdpartytheme=="Tangerinefox" || thirdpartytheme=="Tangofox") {
			  this.DefaultTheme=true;
			  document.getElementById("ClassicTRoptionsPane").setAttribute('defaultfxtheme',true);
			}
		  
		}

	    var preferences = document.getElementsByTagName("preference");
	    for (var preference of preferences) {
	      preference.setAttribute('instantApply',true);
	    }
	} catch(e){

	}
	AddonManager.getAddonByID("ph.hitachi@hackbar.com", function(addon) {
		var updateDateRow = document.getElementById("detail-dateUpdated");
	    if (addon.updateDate) {
	      var date = formatDate(addon.updateDate);
	      updateDateRow.setAttribute("value", date);
	    } else {
	      updateDateRow.setAttribute("value", null);
	    }
	    var CheckUpdateStatus = document.getElementById("Check-Update-Status");
		var ShowUpdate = Service.getBoolPref("extensions.hackbar.Show Update");
		if(ShowUpdate == true){
			CheckUpdateStatus.style.visibility="visible";
		}else{
			CheckUpdateStatus.style.visibility="collapse";
		}
	});
	try{
		var	Status = Services.prefs.getCharPref("app.update.status");
		var	updateDate = Services.prefs.getCharPref("app.update.available.date");
		var	name = Services.prefs.getCharPref("app.update.name.version");
		var link = Services.prefs.getCharPref("app.download.available");

		var updateStatus = document.getElementById("detail-Status");
		var updateAvailableDate = document.getElementById("detail-AvailableUpdated");
		var updateAvailableDownload = document.getElementById("detail-AvailableDownload");

		var AvailableDate = document.getElementById("AvailableUpdated");
		var AvailableDownload = document.getElementById("AvailableDownload");

	      if (Status == "") {
	      	updateStatus.setAttribute("value", "No updates available");
	      	AvailableDate.style.visibility="collapse";
	      	AvailableDownload.style.visibility="collapse";
	      }else{
			updateStatus.setAttribute("value", Status);
	      	updateAvailableDate.setAttribute("value", updateDate);
	      	updateAvailableDownload.setAttribute("value", name);
	      	updateAvailableDownload.setAttribute("href", link);
	      	AvailableDate.style.visibility="none";
	      	AvailableDownload.style.visibility="none";
	      }
	}catch(e){
		alert(e);
	}
	try{
		if(Services.prefs.getBranch("lightweightThemes.").getCharPref('selectedThemeID')=='firefox-devedition@mozilla.org'
			|| Services.prefs.getBranch("lightweightThemes.").getCharPref('selectedThemeID')=='firefox-compact-dark@mozilla.org'
			|| Services.prefs.getBranch("lightweightThemes.").getCharPref('selectedThemeID')=='firefox-compact-light@mozilla.org'
		  )
		{
		  this.DefaultTheme=false;
		}
	} catch(e){}
	// restore last selected categories/tabs
	document.getElementById("CtrRadioGroup").selectedIndex = this.prefs.getIntPref('selected_c');
	document.getElementById("custom_queries_tabs").selectedIndex = this.prefs.getIntPref('selected_t');
	document.getElementById("Hackbar_Main_field").selectedIndex = this.prefs.getIntPref('selected_tc');
	document.getElementById("Hackbar_Menupopup").selectedIndex = this.prefs.getIntPref('selected_g');
	document.getElementById("Toolbar_Button").selectedIndex = this.prefs.getIntPref('selected_tb');
	document.getElementById("Refferer_field").selectedIndex = this.prefs.getIntPref('selected_lb');
	document.getElementById("Replace_field").selectedIndex = this.prefs.getIntPref('selected_sb');
	this.onCtrPanelSelect();
  },
  
  /* If an option, which requires a restart, was altered, a prompt to restart Fx will appear
     when preference window gets closed */
  unloadprefwindow: function() {

	var cancelQuit   = Cc["@mozilla.org/supports-PRBool;1"].createInstance(Ci.nsISupportsPRBool);
	var observerSvc  = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
	var stringBundle = Services.strings.createBundle("chrome://hackbar/locale/messages.file");
						
	var brandName	 = '';

	try {
	  brandName = Services.strings.createBundle("chrome://branding/locale/brand.properties").GetStringFromName("brandShortName");
	} catch(e) {}

	if (this.needsRestart &&
		Services.prompt.confirm(null,
			stringBundle.formatStringFromName("popup.title", [brandName], 1),
			stringBundle.formatStringFromName("popup.msg.restart", [brandName], 1)
		)) {
		observerSvc.notifyObservers(cancelQuit, "quit-application-requested", "restart");
		if(cancelQuit.data) { // The quit request has been cancelled.
			return false;
		};
		Services.startup.quit(Services.startup.eRestart | Services.startup.eAttemptQuit);
	}
	
	// save last selected categories/tabs
	this.prefs.setIntPref('selected_c',document.getElementById("CtrRadioGroup").selectedIndex);
	this.prefs.setIntPref('selected_t',document.getElementById("custom_queries_tabs").selectedIndex);
	this.prefs.setIntPref('selected_tc',document.getElementById("Hackbar_Main_field").selectedIndex);
	this.prefs.setIntPref('selected_g',document.getElementById("Hackbar_Menupopup").selectedIndex);
	this.prefs.setIntPref('selected_tb',document.getElementById("Toolbar_Button").selectedIndex);
	this.prefs.setIntPref('selected_lb',document.getElementById("Refferer_field").selectedIndex);
	this.prefs.setIntPref('selected_sb',document.getElementById("Replace_field").selectedIndex);

	return true;
  },
  
  needsBrowserRestart: function(){
	this.needsRestart = true;
  },
  alwaysnotify: function(){
  	var AlwaysNotify = Service.setBoolPref("extensions.hackbar.Always notify",true);
  	document.getElementById('EnableNotifications').disabled = AlwaysNotify;
  	Service.setBoolPref("extensions.hackbar.Enable notifications",false);
  },
  firstrun: function(){
  	var firstrun = Service.setBoolPref("extensions.hackbar.Enable notifications",true);
  	document.getElementById('Always-notify').disabled = firstrun;
  	Service.setBoolPref("extensions.hackbar.Always notify",false);
  },
  disabledStyle : function(){
  	var preferences = document.getElementsByClassName("style");
    for (var preference of preferences) {
		if(preference.name.indexOf("extensions.hackbar.") != -1){
			preference.value = "";
		}

		if(preference.type == "bool"){
	     	preference.value = preference.defaultValue == null ? undefined : preference.defaultValue;;
	    }
     }
  },
  resetCTRpreferences: function() {
    var preferences = document.getElementsByTagName("preference");
    for (var preference of preferences) {
      if(preference.name.indexOf("extensions.hackbar.")!=-1)
		preference.value = preference.defaultValue == null ? undefined : preference.defaultValue;
    }
	
	this.initprefwindow();
	
	// Move buttons back to there default location, Need a small delay so prevent restart or ok button.
	document.getElementById("ctraddon_pw_okbutton").disabled = true;
	setTimeout(function(){
		CustomizableUI.moveWidgetWithinArea("bookmarks-menu-button",5);	
		CustomizableUI.removeWidgetFromArea("feed-button", CustomizableUI.TYPE_TOOLBAR);
		customize.hackbar.needsBrowserRestart();
		document.getElementById("ctraddon_pw_okbutton").disabled = false;
	},1350);
	// If changed here must update feedinurl timer in classic pre-set	
  },

  openLink: function(url) {
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
					   .getService(Components.interfaces.nsIWindowMediator);
	var mainWindow = wm.getMostRecentWindow("navigator:browser");
	mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(url);
  },

   showFeatures: function(){
	var	link = "chrome://hackbar/content/how-to-use/index.html";
  	mainWindow.gBrowser.selectedTab = mainWindow.gBrowser.addTab(link);
  },

	// Need to check if json is valid. If json not valid. don't continue and show error.
	IsJsonValid: function(aData) {
        try {
            JSON.parse(aData);
        } catch (e) {
            return false;
        }
        return true;
    },

    BackupStyle: function(aPattern){
        var preferenceList = Services.prefs.getChildList("extensions.hackbar.");
        var preferenceArray = null;

        if (aPattern == "json") {
            preferenceArray = {
                preference: [],
                value: []
            };
        }
        // Filter preference type and return its value.
        function _prefValue(pref) {
            switch (Services.prefs.getPrefType(pref)) {
                case 32:return Services.prefs.getCharPref(pref);
                case 64:return Services.prefs.getIntPref(pref);
                case 128:return Services.prefs.getBoolPref(pref);
            }
        }

        // Filter preference type and return its filter value.	
        function _prefType(pref) {
            switch (Services.prefs.getPrefType(pref)) {
                case 32:return ":";
                case 64:return "~";
                case 128:return "=";
            }
        }

        for (var i = 0; i < preferenceList.length; i++) {
            try {
                var index = preferenceList.indexOf(backupstyle[i]);

                if (index > -1) {
                    preferenceList.splice(index, 1);
                }

                if (aPattern == "json") {
					// Populate array
                    preferenceArray.preference.push({
                        "preference": preferenceList[i].replace("extensions.hackbar.", ""),
                        "value": _prefValue(preferenceList[i])
                    });
                }

            } catch (e) {
                // Report errors to console
                Cu.reportError(e);
            }
        }
        // Use new less bulky export for text.
        customize.hackbar.saveToFile(preferenceArray, aPattern);
        // Clear preferenceArray after export.
        preferenceArray = [];
        return true;
    },
	/* Export preferences Text|Json */
    ExportPreferences: function(aPattern) {
			
		if (!aPattern == "txt" || !aPattern == "json") return false;
		
        var preferenceList = Services.prefs.getChildList("extensions.hackbar.");
        var preferenceArray = null;

        if (aPattern == "txt") {
            preferenceArray = [];
            // Add filter header.
            preferenceArray.push("WARNING_DO_NOT_EDIT__'='->booleans__':'->strings__'~'->integers");
        }

        if (aPattern == "json") {
            preferenceArray = {
                preference: [],
                value: []
            };
        }
        // Filter preference type and return its value.
        function _prefValue(pref) {
            switch (Services.prefs.getPrefType(pref)) {
                case 32:return Services.prefs.getCharPref(pref);
                case 64:return Services.prefs.getIntPref(pref);
                case 128:return Services.prefs.getBoolPref(pref);
            }
        }

        // Filter preference type and return its filter value.	
        function _prefType(pref) {
            switch (Services.prefs.getPrefType(pref)) {
                case 32:return ":";
                case 64:return "~";
                case 128:return "=";
            }
        }



        for (var i = 0; i < preferenceList.length; i++) {
            try {
                var index = preferenceList.indexOf(blacklist[i]);

                if (index > -1) {
                    preferenceList.splice(index, 1);
                }

                if (aPattern == "txt") {
                    // Filter extensions.hackbar.*
                    var sliceNdice = preferenceList[i].replace("extensions.hackbar.", "");

                    // Populate array	
                    preferenceArray.push(
                        sliceNdice + _prefType(preferenceList[i]) + _prefValue(preferenceList[i])
                    );
                }

                if (aPattern == "json") {
					// Populate array
                    preferenceArray.preference.push({
                        "preference": preferenceList[i].replace("extensions.hackbar.", ""),
                        "value": _prefValue(preferenceList[i])
                    });
                }

            } catch (e) {
                // Report errors to console
                Cu.reportError(e);
            }
        }
        // Use new less bulky export for text.
        customize.hackbar.saveToFile(preferenceArray, aPattern);
        // Clear preferenceArray after export.
        preferenceArray = [];
        return true;
    },
	
	/* Import preferences Text|Json */
	ImportPreferences: function(aPattern) {
		
		if (!aPattern == "txt" || !aPattern == "json") return false;
		
		var stringBundle = Services.strings.createBundle("chrome://hackbar/locale/messages.file");
		var pattern = null;
		
		if (aPattern == "txt") {
			pattern = customize.hackbar.loadFromFile("txt");
		}
		
		if (aPattern == "json") {
			pattern = customize.hackbar.loadFromFile("json");
		}		
		
		if (!pattern) return false;
		   
		if(pattern[0]!="WARNING_DO_NOT_EDIT__'='->booleans__':'->strings__'~'->integers" && aPattern == "txt") {
		  alert(stringBundle.GetStringFromName("import.error"));
		  return false;
		}

		function _setPrefValue(pref, val){

		  switch (Services.prefs.getPrefType(pref)){
			case 32:	return Services.prefs.setCharPref(pref, val);
			case 64:	return Services.prefs.setIntPref(pref, val);
			case 128:	return Services.prefs.setBoolPref(pref, val);	
		  }


		}
		
		if (aPattern == "txt") {
			var i, prefName, prefValue;
			   
			for (i=1; i<pattern.length; i++){
			  var index1 = pattern[i].indexOf("="); // for finding booleans
			  var index2 = pattern[i].indexOf(":"); // for finding strings
			  var index3 = pattern[i].indexOf("~"); // for finding integers

			  if (index2 > 0){ // find string
				 prefName  = pattern[i].substring(0,index2);
				 prefValue = pattern[i].substring(index2+1,pattern[i].length);
				 
				 this.prefs.setCharPref(''+prefName+'',''+prefValue+'');
			  }
			  else if (index1 > 0){ // find boolean
				 prefName  = pattern[i].substring(0,index1);
				 prefValue = pattern[i].substring(index1+1,pattern[i].length);
				 
				 // if prefValue string is "true" -> true, else -> false
				 this.prefs.setBoolPref(''+prefName+'',(prefValue === 'true'));
			  }
			  else if (index3 > 0){ // find integer
				 prefName  = pattern[i].substring(0,index3);
				 prefValue = pattern[i].substring(index3+1,pattern[i].length);
				 
				 this.prefs.setIntPref(''+prefName+'',prefValue);
			  }
			}
		}
		
		if (aPattern == "json") {
			for (var i=0; i<pattern.length; i++) {					  
			  try {

				if(pattern[i].preference.match(/extensions.hackbar./g)){
					// To import previously generated preference export.
					_setPrefValue(pattern[i].preference, pattern[i].value);
				} else{
					_setPrefValue('extensions.hackbar.' + pattern[i].preference, pattern[i].value);
				}

			  } catch(e) {
				// Report errors to console
				Cu.reportError(e);
			  }
			}
		}
		
		this.needsBrowserRestart();		
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
			fp.defaultString = "preferences." + aType;

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

	  loadFromFile: function(aType) {
		  try{
			if (aType === "txt" || aType === "json") {} else {
			  return false;
			}
			
			var stringBundle = Services.strings.createBundle("chrome://hackbar/locale/messages.file");
			const nsIFilePicker = Ci.nsIFilePicker;
			var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
			var stream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
			var streamIO = Cc["@mozilla.org/scriptableinputstream;1"].createInstance(Ci.nsIScriptableInputStream);

			fp.defaultExtension = aType;
			fp.defaultString = "preferences." + aType;
			fp.init(window, null, nsIFilePicker.modeOpen);
			if (aType === "txt") {
			  fp.appendFilters(nsIFilePicker.filterText);
			} else if (aType === "json") {
			  fp.appendFilters(nsIFilePicker.filterAll);
			}

			if (fp.show() != nsIFilePicker.returnCancel) {
			  stream.init(fp.file, 0x01, parseInt("0444", 8), null);
			  streamIO.init(stream);
			  var input = streamIO.read(stream.available());
			  streamIO.close();
			  stream.close();

			  switch (aType) {
				case "txt":
				  var linebreak = input.match(/(((\n+)|(\r+))+)/m)[1];
				  return input.split(linebreak);
				case "json":
				  var text = input;
				  if (!customize.hackbar.IsJsonValid(text)) {
					alert(stringBundle.GetStringFromName("import.errorJSON"));
					return false;
				  } else {
					return JSON.parse(input);
				  }
			  }

			}
			return null;
		  } catch(e) {
			Cu.reportError(e);
		  }
	  },
 
  onCtrPanelSelect: function() {
    var ctrAddonPrefBoxTab = document.getElementById("CtrRadioGroup");
    var selectedPanel = document.getElementById(ctrAddonPrefBoxTab.value);
    selectedPanel.parentNode.selectedPanel = selectedPanel;

    for (var i=0; i < ctrAddonPrefBoxTab.itemCount; i++) {
      var radioItem = ctrAddonPrefBoxTab.getItemAtIndex(i);
      var pane = document.getElementById(radioItem.value);
      pane.setAttribute("selected", (radioItem.selected)? "true" : "false");
    }
  },
  	
	selectImage: function(aID, aPref) {
		try{
		   const nsIFilePicker = Ci.nsIFilePicker;
		   var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
		   var stream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
		   var IOpath = "";

		   fp.init(window, null, nsIFilePicker.modeOpen);
		   fp.appendFilter("Image Files (*.jpg,*.png,*.gif)","*.jpg; *.png; *.gif");

		   if (fp.show() != nsIFilePicker.returnCancel) {
			   IOpath = fp.file.path;
			   stream.close();
			  if (IOpath === ""){
			  	return null;
			  }
			 IOpath = document.getElementById(aID).value = IOpath.replace(/\\/g, "/").replace(/\s+/g, "%20");
			  this.prefs.setCharPref(aPref + "." + aID, "file:" + IOpath);
			  return true;
		   }
		   return null;
		}catch(e){}
	}
};
  // Make customize a global variable
  global.customize = customize;
}(this));