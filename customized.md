# How to customize Hackbar?

### Description 
im using "about:config" config as `database` of browser for changing theme of hackbar and adding dios


### Article 
- [How to read profile preferences from Firefox add-on?](https://stackoverflow.com/questions/57202669/how-to-read-profile-preferences-from-firefox-add-on)
- [Automatic Update Preference - about:config](https://forum.imacros.net/viewtopic.php?t=28930)
- [Preferences - Archive of obsolete content](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/Preferences)


# Example of CRUD 

### Create
goto `\test\defaults\preferences`


and add js file example:
`prefs.js` 
then add `pref("extensions.myextension.example", 'hello world');`

### Read
```javascript

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

var mypref = pref.getCharPref("extensions.myextension.example");

alert(mypref) //hello world

```

### UPDATE
```javascript

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
//changing value 
var getMymypref = pref.getCharPref("extensions.myextension.example");
var mypref = pref.setCharPref("extensions.myextension.example","new value");

if(mypref){
	alert(getMymypref) //new value
}

```

### DELETE/RESET

in your file.xul files

addd prece
```xml
<!-- get preferences in about:config by name="[name of your precerences]" -->
<prefpane id="ClassicTRoptionsPane" flex="1">
    <preferences>
    	<preference id="example"      name="extensions.myextension.example" type="string"/>
    	<preference id="example2"      name="extensions.myextension.example2" type="string"/>
    </preferences>
</prefpane>

<!-- Display preferences on file.xul -->
<textbox  preference="example" type="text" min="12" max="72"/>
<textbox  preference="example2" type="text" min="12" max="72"/>

<!-- the preference="" attribute you need to add id in preference tags and get by preference="id" -->
```

```javascript
	//this code block is how to reset preferences by default in what you set in prefs.js
	var preferences = document.getElementsByTagName("preference");
    for (var preference of preferences) {
    	if(preference.name.indexOf("extensions.myextension.")!=-1){ //get all extensions.myextension.* preference
    		//reset to default value
			preference.value = preference.defaultValue == null ? undefined : preference.defaultValue;
		}
    }
```

# Customizing UI


```xml
<!-- file.xul -->
<?xml version="1.0"?>
<?xml-stylesheet href="chrome://global/skin/" type="text/css"?>
<?xml-stylesheet href="chrome://hackbar/skin/css/style.css" type="text/css"?>
<window id="tamper-options-window" 
        title="Crud example"
        xmlns:html="http://www.w3.org/1999/xhtml"
        xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
        width="750"
        height="550" 
        persist="screenX screenY">

<prefpane id="ClassicTRoptionsPane" flex="1">
    <preferences>
    	<preference id="example"      name="extensions.myextension.example" type="string"/>
    	<preference id="example2"      name="extensions.myextension.example2" type="string"/>
    </preferences>
</prefpane>

<script type="application/x-javascript" src="js/custom.js" />
   <vbox flex="1">
   	<description style="font-family:Tahoma;font-size:36px;font-style:bold;text-align:center;">
   		Crud
   	</description>
      <groupbox flex="1">
         <hbox>
            <textbox id="demo"  preference="example"/>
            <button oncommand="Update();" id="update" label="Update" class="btn"/>
            <button oncommand="Reset()" id="reset" label="Reset" class="btn"/>
         </hbox>
      <separator class="groove"/>
      <hbox>
         <spacer flex="1"/>
         <button label="Exit" oncommand="window.close();"/>
      </hbox>
   </vbox>
</window>
```

```js
//pref.js
//add this on \defaults\preferences\
pref("extensions.myextension.text","default value");
pref("extensions.myextension.color", '#FF000');
```
```js
//Custom.js
var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
var demo = document.getElementById('demo');

function Get(){
	//you don't need this if you use on preference tag on your main file
	var mypref = pref.getCharPref("extensions.myextension.example");
	demo.value = mypref;
}

function Update(){
	pref.setCharPref("extensions.myextension.example", demo.value);
}

function Reset(){
    var preferences = document.getElementsByTagName("preference");
    for (var preference of preferences) {
    	if(preference.name.indexOf("extensions.myextension.")!=-1){ //get all extensions.myextension.* preference
    		//reset to default value
		preference.value = preference.defaultValue == null ? undefined : preference.defaultValue;
	}
    }
}

