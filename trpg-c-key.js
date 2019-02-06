
sessionStorage['phase'] = 0

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;

  // スペース
  if (keyCode == 32) {
  var key = sessionStorage['phase']

  if (key == 0) {tx1();sessionStorage['phase'] = 1}

  if (key == 1) {tx2();sessionStorage['phase'] = 2}

  if (key == 2.2) {tx0();reset1();sessionStorage['phase'] = 3}

  }


  // 右
  else if (keyCode == 39) {
  var key = sessionStorage['phase']

  if (key == 4) {tx0();reset1();sessionStorage['phase'] = 3}
  }


  // 左
  else if (keyCode == 37) {
  var key = sessionStorage['phase']

  if (key == 4) {tx0();reset1();sessionStorage['phase'] = 3}
  }


  // 上
  else if (keyCode == 38) {
  var key = sessionStorage['phase']

  if (key == 2||key == 2.2) {tx2a();sessionStorage['phase'] = 2.1;}
  }


  // 下
  else if (keyCode == 40) {
  var key = sessionStorage['phase']
  if (key == 2||key == 2.1) {tx2b();sessionStorage['phase'] = 2.2;}
  }

}
