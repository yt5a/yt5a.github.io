function tx0(){
  document.getElementById("tx1").innerHTML = '<p></p>';
}

function tx1(){
  document.getElementById("tx1").innerHTML = '<p>' + 'Welcome player。このゲームをプレイしていただき、まことにありがとうございます。' + '</p>';
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
  document.getElementById("tx1").innerHTML = '<p>' + 'それでは[メインキャラクター]の設定に移ります。まずはキャラクターの性別を決めましょう。' + '</p>' + '<p id="y">男性</span>' + '<p id="n">女性</p>';
}

function tx3a(){
  document.getElementById("y").innerHTML = '<p id = y>' + '男性←' + '</p>';
  document.getElementById("n").innerHTML = '<p id="n">女性</p>';
}

function tx3b(){
  document.getElementById("n").innerHTML = '<p id= n>' + '女性←' + '</p>';
  document.getElementById("y").innerHTML = '<p id="y">男性</p>';
}


function tx4(){
  var gender = ['男性','女性'];
  var a = sessionStorage['gender1']-1;
  document.getElementById("tx1").innerHTML = '<p>[' + gender[a] + ']ですね。では、ステータスを決めます。スペースキーを押してください。' + '</p>';
  sessionStorage['gender1'] = gender[a]
  st1();
}

function tx5(){
  document.getElementById("tx1").innerHTML = '<p>' + 'ステータスはこれでよろしいですか？設定のやり直しが可能です。これで良いなら「はい」を、再度設定し直すなら「いいえ」を選択してください。' + '</p>' + '<p id="y">はい</span>' + '<p id="n">いいえ</p>';
}

function tx5a(){
  document.getElementById("y").innerHTML = '<p id = y>' + 'はい←' + '</p>';
  document.getElementById("n").innerHTML = '<p id="n">いいえ</p>';
}

function tx5b(){
  document.getElementById("n").innerHTML = '<p id= n>' + 'いいえ←' + '</p>';
  document.getElementById("y").innerHTML = '<p id="y">はい</p>';
}
