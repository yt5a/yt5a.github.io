window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;

  // スペース
  if (keyCode == 32) {
  space();
  }


  // 右
  else if (keyCode == 39) {
  right();
  }


  // 左
  else if (keyCode == 37) {
　light();
  }


  // 上
  else if (keyCode == 38) {
  up();
  }


  // 下
  else if (keyCode == 40) {
  down();
  }

}
