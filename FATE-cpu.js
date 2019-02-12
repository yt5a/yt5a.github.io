
//キーボード処理
window.addEventListener("keydown", handleKeydown);
function handleKeydown(event){
  var keyCode = event.keyCode;

  if (keyCode == 32) {
    mei(1);
  }
}
