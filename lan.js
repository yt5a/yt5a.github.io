
//新規入力
function onButtonClick() {
  //リセット
  document.getElementById("table").innerHTML = '';

  //テーブル1生成
  var moji= document.createElement('div');
  moji.setAttribute('id','one');
  table.insertBefore(moji, null);
  target = document.getElementById("one");
  var tx0 = document.forms.id_form1.tx.value.replace(/\s+/g, "");

  var check = [];
  var dateb = [];
  var counts = {};
  for (var i = 1; i < tx0.length+1; i++) {

  if (i ==1) {
  var datec = dateb.indexOf(tx0.charAt(i-1));
      dateb.push(tx0.charAt(i-1));
  var key = tx0.charAt(i-1);
      counts[key] = (counts[key])? counts[key] + 1 : 1 ;
      check.push('c');
  var word= '<span>' + i + '</span>' + '[' + '<span id= "word' + i +'">' + tx0.charAt(i-1) + '</span>' + ']' + '<br>';

  }

  else {
  var key = tx0.charAt(i-1);
      counts[key] = (counts[key])? counts[key] + 1 : 1 ;
      check.push('c');
  var datec = dateb.indexOf(tx0.charAt(i-1));
      dateb.push(tx0.charAt(i-1));
  var word = word + '<span>' + i + '</span>' + '[' + '<span id= "word' + i +'">' + tx0.charAt(i-1) + '</span>' + ']' + '<br>';

 }

}
if (word==undefined) {
word = "";
}
  document.getElementById("one").innerHTML ='<style>#one{width:200px;height:110px;overflow:auto;}</style>' + word;

  //文字数
  var moji= document.createElement('span');
  moji.innerHTML = '文字数';
  table.insertBefore(moji, null);
  var len= document.createElement('span');
  len.setAttribute('id','len');
  len.innerHTML =check.length;
  table.insertBefore(len, null);
  table.insertBefore(document.createElement('hr'), null);



  //テーブル2生成
  var moji= document.createElement('div');
  moji.setAttribute('id','two');
  moji.innerHTML ='<style>#two{width:200px;height:110px;overflow:auto;}</style>';
  table.insertBefore(moji, null);
  //各文字数
  ii = 0;
  for (var i = 1; i < tx0.length+1; i++) {
  if (dateb[i-1]!==undefined) {
  var ii = ii+1;
  var lenlan= document.createElement('span');
  lenlan.setAttribute('id','lenlan' + ii);
  lenlan.innerHTML = ("[" + "<span id='1moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='1mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
  two.insertBefore(lenlan, null);
  }
  var set = dateb[i-1];
  for (var f = 0; f < dateb.length+1; f++) {
  if (set==dateb[f]) {
  delete dateb[f];
    }
   }
  }


  //一文字の数
  var moji= document.createElement('span');
  moji.innerHTML = '文字種類';
  table.insertBefore(moji, null);
  var moji= document.createElement('span');
  moji.setAttribute('id','jisu');
  moji.innerHTML = ii;
  table.insertBefore(moji, null);

  table.insertBefore(document.createElement('hr'), null);
  //テーブル3生成
  var moji= document.createElement('div');
  moji.setAttribute('id','three');
  moji.innerHTML ='<style>#three{width:200px;height:110px;overflow:auto;}</style>';
  table.insertBefore(moji, null);


//取得準備
  var topmoji = document.getElementById('jisu').innerHTML;
  var onemoji = [];
  var onemojisu = [];

//取得
  for (var i = 0; i < topmoji; i++) {
  var ii = i+1;
  var onesu = '1moji' + ii;
  var oneji = '1mojisu' + ii;
      onemoji.push(document.getElementById(onesu).innerHTML);
      onemojisu.push(document.getElementById(oneji).innerHTML);
   }

do {
  var session = 0;
  for (var i = 0; i < topmoji+1; i++) {
  var a = onemojisu[i]
  var b = onemojisu[i+1]
  if (a*10 < b*10) {

  var c = onemojisu[i];
  var sc = onemoji[i];
  var d = onemojisu[i+1];
  var sd = onemoji[i+1];

  onemojisu[i] = d;
  onemoji[i] = sd;
  onemojisu[i+1] = c;
  onemoji[i+1] = sc;
  var session = 1;
  }
 }
}while (session == 1);

//添付
  var topmoji = document.getElementById('jisu').innerHTML;

  for (var i = 0; i < topmoji; i++) {
  var ii = i+1;

  var top1= document.createElement('span');
  top1.setAttribute('id','1top' + ii);
  top1.innerHTML = "[" + "<span>" + onemoji[i] + "</span>" + "]";
  three.insertBefore(top1, null);

  var topsu1= document.createElement('span');
  topsu1.setAttribute('id','1topsu' + ii);
  topsu1.innerHTML ="<span>" + onemojisu[i] + "</span>";
  three.insertBefore(topsu1, null);

  three.insertBefore(document.createElement('br'), null);
  }
}
