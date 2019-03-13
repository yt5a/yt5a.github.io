window.addEventListener("keydown", handleKeydown);
function handleKeydown(event){
  var keyCode = event.keyCode;

  if (keyCode == 32) {
board();
 }
}
