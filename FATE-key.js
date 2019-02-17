
//キーボード処理
window.addEventListener("keydown", handleKeydown);
function handleKeydown(event){
  var keyCode = event.keyCode;

  if (keyCode == 32) {
    mei(2);
  }
  if (keyCode == 38) {
  document.getElementById("mode").innerHTML = '<div id="name">'+'<p id="名前">'+'</p>'+'</div>'+'<div id="テキスト">'+'<p>あああああああああああああい</p>'+'</div>';
　mei(0);
  }
}
