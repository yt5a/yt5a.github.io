
//名前
var name = new Array("前川","陽介","茂木");
var date = JSON.stringify(name.split(","));
sessionStorage.setItem( "none" ,date);

function mei(family){
 if (family == 0) {
  document.getElementById("名前").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
 }
 else {
   var arr = JSON.parse(sessionStorage.getItem("none") );
   document.getElementById("名前").innerHTML= arr[family-1];
 }
}
