HackBar.TabManagement = function ()
{
  this.construct()
}

HackBar.TabManagement.prototype = {
  urlField: null,
  refField: null,
  postField: null,
  urlTabIndex: new Array(),
  refTabIndex: new Array(),
  postTabIndex: new Array(),
  currentTabIndex: 0,
  
  construct: function ()
  {
    var container = gBrowser.tabContainer;
    this.urlField = document.getElementById("hackBarTargetUrl");
    this.postField = document.getElementById("hackBarTargetUrlPostField");
    this.refField = document.getElementById("hackBarTargetUrlReferrerField");
    
    var me = this;
    container.addEventListener("TabSelect", function ( event) { me.onTabSelect( event ); }, false);
    container.addEventListener("TabMove",   function ( event) { me.onTabMove( event ); }, false);
    container.addEventListener("TabClose",  function ( event) { me.onTabClose( event ); }, false);
    window.addEventListener("unLoad",       function ( event) { me.destruct( event ); }, false);
  },
  
  destruct: function ()
  {
    var container = gBrowser.tabContainer;
    var me = this;
    container.removeEventListener("TabSelect", function ( event) { me.onTabSelect( event ); }, false);
    container.removeEventListener("TabMove",   function ( event) { me.onTabMove( event ); }, false);
    container.removeEventListener("TabClose",  function ( event) { me.onTabClose( event ); }, false);
    window.removeEventListener("unLoad",       function ( event) { me.destruct( event ); }, false);
    window.removeEventListener("load", this.init, false );
  },
  
  onTabSelect: function ( event )
  {
    if ( this.urlField.value && this.currentTabIndex >= 0 ) this.urlTabIndex[this.currentTabIndex] = this.urlField.value;
    if ( this.refField.value && this.currentTabIndex >= 0 ) this.refTabIndex[this.currentTabIndex] = this.refField.value;
    if ( this.postField.value && this.currentTabIndex >= 0 ) this.postTabIndex[this.currentTabIndex] = this.postField.value;
    
    if ( this.refTabIndex[gBrowser.tabContainer.selectedIndex] ) this.refField.value = this.refTabIndex[gBrowser.tabContainer.selectedIndex];
    if ( this.postTabIndex[gBrowser.tabContainer.selectedIndex] ) this.postField.value = this.postTabIndex[gBrowser.tabContainer.selectedIndex];
    if ( this.urlTabIndex[gBrowser.tabContainer.selectedIndex] ) this.urlField.value = this.urlTabIndex[gBrowser.tabContainer.selectedIndex];
    else this.urlField.value = this.refField.value = this.postField.value = '';
    this.currentTabIndex = gBrowser.tabContainer.selectedIndex;
  },
  
  onTabClose: function ( event )
  {
    var closedIndex = event.target._tPos;
    var count = 0;
    for ( var i in this.urlTabIndex ) {
      if ( i == closedIndex ) {
        this.urlTabIndex.splice( count, 1 );
        this.refTabIndex.splice( count, 1 );
        this.postTabIndex.splice( count, 1 );
        this.currentTabIndex = -1;
        break;
      }
      count++;
    }
  },
  
  onTabMove: function ( event )
  {
    var tmpUrl = this.urlTabIndex[event.target._tPos];
    var tmpRef = this.refTabIndex[event.target._tPos];
    var tmpPost = this.postTabIndex[event.target._tPos];
    
    this.urlTabIndex[event.target._tPos] = this.urlTabIndex[this.currentTabIndex];
    this.refTabIndex[event.target._tPos] = this.refTabIndex[this.currentTabIndex];
    this.postTabIndex[event.target._tPos] = this.postTabIndex[this.currentTabIndex];
    
    this.urlTabIndex[this.currentTabIndex] = tmpUrl;
    this.refTabIndex[this.currentTabIndex] = tmpRef;
    this.postTabIndex[this.currentTabIndex] = tmpPost;
    
    this.currentTabIndex = event.target._tPos;
  }
}
