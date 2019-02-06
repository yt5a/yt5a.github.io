function tx0(){
  document.getElementById("tx1").innerHTML = '<p></p>';
}

function tx1(){
  document.getElementById("tx1").innerHTML = '<p>' + 'Welcome player。このゲームをプレイしてくださりありがとうございます。' + '</p>';
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

function tx3(){
  document.getElementById("tx1").innerHTML = '<p>' + 'それではメインキャラクターの設定に移ります。まずはキャラクターの性別を決めましょう。' + '</p>' + '<p id="y">男性</span>' + '<p id="n">女性</p>';
}

function tx3a(){
  document.getElementById("y").innerHTML = '<p id = y>' + '男性←' + '</p>';
  document.getElementById("n").innerHTML = '<p id="n">女性</p>';
}

function tx3b(){
  document.getElementById("n").innerHTML = '<p id= n>' + '女性←' + '</p>';
  document.getElementById("y").innerHTML = '<p id="y">男性</p>';
}
