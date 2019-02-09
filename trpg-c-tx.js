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

function tx6(){
  var prs = ["医師","警官","探偵","弁護士","ミュージシャン","研究家"]
  for (var i = 1; i < prs.length+1; i++) {
  if (i ==1) {
  var pr= '<p id= "pr' + i +'">' + i + '[' + prs[i-1] + ']' + '</p>';
  }
  else {
  var pr = pr + '<p id= "pr' + i +'">' + i + '[' + prs[i-1] + ']' + '</p>';
 }
}
  document.getElementById("tx1").innerHTML = '<p id= "pr">' + 'それでは職業の設定を行います。' + '</p>' + pr;
  }


//  var pro= document.createElement('div');
//  pro.setAttribute('id','pro');
//  pro.innerHTML = '<p id="pro">あああ</p>';
//  pr.insertBefore(pro, null);
//}
