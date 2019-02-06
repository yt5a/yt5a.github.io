
sessionStorage['phase'] = 0;
sessionStorage['select'] = 0;
sessionStorage['gender1'] = 0;

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;

  // スペース
  if (keyCode == 32) {
  var key = sessionStorage['phase']
  var or = sessionStorage['select']

  if (key == 0) {sessionStorage['phase'] = 1;tx1();img1()}

  if (key == 1) {sessionStorage['phase'] = 2;tx2()}

  if (key == 2&&or == 2) {sessionStorage['phase'] = 3;tx3()}

  if (key == 3&&or == 1) {sessionStorage['gender1'] = sessionStorage['select'];sessionStorage['phase'] = 4;tx4()}

  if (key == 3&&or == 2) {sessionStorage['gender1'] = sessionStorage['select'];sessionStorage['phase'] = 4;tx4()}

  if (key == 4) {sessionStorage['phase'] = 5;st2()}
  }


  // 右
  else if (keyCode == 39) {
  var key = sessionStorage['phase']

  if (key == 100) {tx0();st1();sessionStorage['phase'] = 3}
  }


  // 左
  else if (keyCode == 37) {
  var key = sessionStorage['phase']

  if (key == 100) {tx0();st1();sessionStorage['phase'] = 3}
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
