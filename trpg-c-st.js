

function st1(){
  var a = sessionStorage['gender1']
  document.getElementById("sta1").innerHTML = '性別　'+ a;
//ステータスセット。
  var dice= document.createElement('div');
  dice.setAttribute('id','dice');
  dice.innerHTML = '<span id="str1"></span>' + "<br>" + '<span id="con1"></span>' + "<br>" + '<span id="siz1"></span>' + "<br>" + '<span id="int1"></span>' + "<br>" + '<span id="pow1"></span>' + "<br>" + '<span id="dex1"></span>' + "<br>" + '<span id="app1"></span>' + "<br>" + '<span id="edu1"></span>';
  sta1.insertBefore(dice, null);
}

//ステータス1//
  function st2(){

  var z = document.getElementById('str1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="str1">' + "STR" + o +'</span>';

  var z = document.getElementById('con1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="con1">' + "CON" + o +'</span>';

  var z = document.getElementById('siz1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="siz1">' + "SIZ" + o +'</span>';

  var z = document.getElementById('int1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="int1">' + "INT" + o +'</span>';

  var z = document.getElementById('pow1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="pow1">' + "POW" + o +'</span>';

  var z = document.getElementById('dex1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="dex1">' + "DEX" + o +'</span>';

  var z = document.getElementById('app1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="app1">' + "APP" + o +'</span>';

  var z = document.getElementById('edu1');
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  var c = Math.floor(Math.random() * 6) + 1;
  var o = a + b + c;
      z.innerHTML = '<span id="edu1">' + "EDU" + o +'</span>';

    var first = document.createElement('div');
    first.setAttribute('id','first');
    first.innerHTML = '<input type="button" value="スタート" onclick="reset2()">'
    sta1.insertBefore(first, null)

//  sta1.style.backgroundColor = '#999999';
  }
