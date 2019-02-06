function tx0(){
  document.getElementById("tx1").innerHTML = '<p></p>';
}

function tx1(){
  document.getElementById("tx1").innerHTML = '<p>' + 'ようこそplayer。このゲームをプレイしてくださりありがとうございます。' + '</p>';
}

function tx2(){
  document.getElementById("tx1").innerHTML = '<p>' + 'このゲームの説明を聞きますか？' + '</p>' + '<p id="y">はい</span>' + '<p id="n">いいえ</p>';
}

function tx2a(){
  document.getElementById("y").innerHTML = '<p id = y>' + 'はい←' + '</p>';
  document.getElementById("n").innerHTML = '<p id="n">いいえ</p>';
}

function tx2b(){
  document.getElementById("n").innerHTML = '<p id= n>' + 'いいえ←' + '</p>';
  document.getElementById("y").innerHTML = '<p id="y">はい</p>';
}
