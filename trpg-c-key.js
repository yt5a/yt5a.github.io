
sessionStorage['phase'] = 0
sessionStorage['select'] = 0

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;

  // スペース
  if (keyCode == 32) {
  var key = sessionStorage['phase']
  var or = sessionStorage['select']

  if (key == 0) {tx1();sessionStorage['phase'] = 1}

  if (key == 1) {tx2();sessionStorage['phase'] = 2;}

  if (key == 2&&or == 2) {tx3();sessionStorage['phase'] = 3}

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

  if (key == 2) {tx2a();sessionStorage['select'] = 1;}

  if (key == 3) {tx3a();sessionStorage['select'] = 1;}
  }


  // 下
  else if (keyCode == 40) {
  var key = sessionStorage['phase']

  if (key == 2) {tx2b();sessionStorage['select'] = 2;}

  if (key == 3) {tx3b();sessionStorage['select'] = 2;}
  }

}
