
# HackBar Updates New Features
[![GitHub issues](https://img.shields.io/github/issues/PhHitachi/HackBar)](https://GitHub.com/PhHitachi/HackBar/issues/)
[![Github all releases](https://img.shields.io/github/downloads/Naereen/StrapDown.js/total.svg)](https://github.com/PhHitachi/HackBar/releases/)
[![GitHub forks](https://img.shields.io/github/forks/Naereen/StrapDown.js.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/PhHitachi/HackBar/network/)
[![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://GitHub.com/PhHitachi/HackBar/graphs/contributors/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/PhHitachi/HackBar/tree/master/src)
[![GitHub release](https://img.shields.io/github/release/PhHitachi/HackBar)](https://github.com/PhHitachi/HackBar/releases/)
[![GitHub license](https://img.shields.io/github/license/PhHitachi/HackBar?style=flat-square)](https://github.com/PhHitachi/HackBar/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://github.com/PhHitachi/HackBar/stargazers/)


# HackBar For firefox add-ons


### Description

HackBar is a security audit tool that will enable you to pentest websites more easily. ... You can use it to check site security by performing SQL injections, XSS holes and more. It also has a user-friendly interface that makes it easy for you to do fuzz testing, hash generation, encoding and more.

### add-ons
 - LiveHTTPHeader 
 - Tamper Data
 - View Source
 - JS on/off
 - noRedirect
 - HTTP Proxy 
 - Admin Finder

### HOW TO CUSTOMIZE HACKBAR?

- [Read here](https://github.com/PhHitachi/Hackbar/blob/master/customized.md)

### HOW TO MODIFY HACKBAR?

<b>Needed:</b>
- [7-zip](https://www.7-zip.org/)

<b>Steps</b>:

 1. git clone https://github.com/PhHitachi/HackBar.git
 2. cd HackBar/test `this open source you are available to modify the code`
    `Compressing Hackbar as addons`
 3. `7z a hackbar.xpi *` 

![](https://github.com/PhHitachi/Hackbar/blob/master/img/compress.png)

 <b>NOTE:</b> if you are windows and and you face this error in step 3:

 `7z is not recognized as an internal or external command`

run this command on your terminal `set PATH=%PATH%;C:\Program Files\7-Zip\`
this command is adding `7-zip` in environment

### HOW TO INSTALL ON BROWSER?

<b>Note</b>: If you are using Firefox this is working only on v52.* bellow and you need disable "xpinstall.signatures.required" in config but if you are using [CyberFox Browser](https://sourceforge.net/projects/cyberfox/) you don't need to disable the "xpinstall.signatures.required" because the cyberfox allowed all extention/add-ons.
 
Steps: //this on firefox browser
1. goto about:config
2. search "xpinstall.signatures.required"
![](https://github.com/PhHitachi/Hackbar/blob/master/img/xpiinstall.png)
3. change into "false"

goto "about:addons" 
Click settings and "install addons from file.." and goto hackbar file and install 
![](https://github.com/PhHitachi/Hackbar/blob/master/img/install-from-files.png)

- [HackBar v2.6](https://github.com/PhHitachi/Hackbar/blob/master/HackBar%20v2.6.md)
- [HackBar v2.7](https://github.com/PhHitachi/Hackbar/blob/master/HackBar%20v2.7.md)
- [HackBar v2.8](https://github.com/PhHitachi/Hackbar/blob/master/HackBar%20v2.8.md)
- [HackBar v2.9](https://github.com/PhHitachi/Hackbar/blob/master/HackBar%20v2.9.md)

