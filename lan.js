
//新規入力
function onButtonClick() {
  //リセット
  document.getElementById("table").innerHTML = '';


  //1単語
  //テーブル1-1生成
  var moji= document.createElement('div');
  moji.setAttribute('id','one1');
  table.insertBefore(moji, null);
  target = document.getElementById("one1");
  var tx0 = document.forms.id_form1.tx.value.replace(/\s+/g, "");
  var check = [];
  var dateb = [];
  var counts = {};
  for (var i = 1; i < tx0.length+1; i++) {

  if (i ==1) {
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
  document.getElementById("one1").innerHTML ='<style>#one1{width:200px;height:110px;overflow:auto;}</style>' + word;

  //文字数
  var moji= document.createElement('span');
  moji.innerHTML = '文字数';
  table.insertBefore(moji, null);
  var len= document.createElement('span');
  len.setAttribute('id','len');
  len.innerHTML =check.length;
  table.insertBefore(len, null);
  table.insertBefore(document.createElement('hr'), null);



  //テーブル1-2生成
  var moji= document.createElement('div');
  moji.setAttribute('id','one2');
  moji.innerHTML ='<style>#one2{width:200px;height:110px;overflow:auto;}</style>';
  table.insertBefore(moji, null);
  //各文字数
  ii = 0;
  for (var i = 1; i < tx0.length+1; i++) {
  if (dateb[i-1]!==undefined) {
  var ii = ii+1;
  var lenlan= document.createElement('span');
  lenlan.setAttribute('id','lenlan' + ii);
  lenlan.innerHTML = ("[" + "<span id='1moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='1mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
  one2.insertBefore(lenlan, null);
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



  //テーブル1-3生成
  var moji= document.createElement('div');
  moji.setAttribute('id','one3');
  moji.innerHTML ='<style>#one3{width:200px;height:110px;overflow:auto;}</style>';
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

//編集
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
  one3.insertBefore(top1, null);

  var topsu1= document.createElement('span');
  topsu1.setAttribute('id','1topsu' + ii);
  topsu1.innerHTML ="<span>" + onemojisu[i] + "</span>";
  one3.insertBefore(topsu1, null);
  one3.insertBefore(document.createElement('br'), null);
  }
  var moji= document.createElement('span');
  moji.innerHTML = 'top順';
  table.insertBefore(moji, null);
  table.insertBefore(document.createElement('hr'), null);
  table.insertBefore(document.createElement('hr'), null);





  //2単語
  //テーブル2-1生成
  var moji= document.createElement('div');
  moji.setAttribute('id','two1');
  moji.innerHTML ='<style>#two1{width:200px;height:110px;overflow:auto;}</style>';
  table.insertBefore(moji, null);


  //各二文字単語数
  var check = [];
  var dateb = [];
  for (var i = 1; i < tx0.length; i++) {
  if (i ==1) {
  var key = tx0.charAt(i-1)+tx0.charAt(i);
      counts[key] = (counts[key])? counts[key] + 1 : 1 ;
      dateb.push(tx0.charAt(i-1) + tx0.charAt(i));
      check.push('c');
  }
  else {
  var key = tx0.charAt(i-1)+tx0.charAt(i);
      counts[key] = (counts[key])? counts[key] + 1 : 1 ;
      dateb.push(tx0.charAt(i-1) + tx0.charAt(i));
      check.push('c');
 }

}
//各文字数
ii = 0;
for (var i = 1; i < tx0.length+1; i++) {
if (dateb[i-1]!==undefined) {
var ii = ii+1;
var lenlan= document.createElement('span');
lenlan.setAttribute('id','2lenlan' + ii);
lenlan.innerHTML = ("[" + "<span id='2moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='2mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
two1.insertBefore(lenlan, null);
}
var set = dateb[i-1];
for (var f = 0; f < dateb.length+1; f++) {
if (set==dateb[f]) {
delete dateb[f];
  }
 }
}
//２文字単語数
var moji= document.createElement('span');
moji.innerHTML = '2文字単語数';
table.insertBefore(moji, null);
var len= document.createElement('span');
len.setAttribute('id','2len');
len.innerHTML =check.length;
table.insertBefore(len, null);
table.insertBefore(document.createElement('hr'), null);

//2文字単語の数
var moji= document.createElement('span');
moji.innerHTML = '2文字単語種類';
table.insertBefore(moji, null);
var moji= document.createElement('span');
moji.setAttribute('id','2tanngo');
moji.innerHTML = ii;
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);


//テーブル2-2生成
var moji = document.createElement('div');
moji.setAttribute('id','two2');
moji.innerHTML ='<style>#two2{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);

//取得準備
var topmoji = document.getElementById('2tanngo').innerHTML;
var twomoji = [];
var twomojisu = [];

//取得
for (var i = 0; i < topmoji; i++) {
var ii = i+1;
var twosu = '2moji' + ii;
var twoji = '2mojisu' + ii;
    twomoji.push(document.getElementById(twosu).innerHTML);
    twomojisu.push(document.getElementById(twoji).innerHTML);
 }
 console.log(twomojisu)
//編集
do {
var session = 0;
for (var i = 0; i < topmoji; i++) {
var a = twomojisu[i]
var b = twomojisu[i+1]
if (a*10 < b*10) {

var c = twomojisu[i];
var sc = twomoji[i];
var d = twomojisu[i+1];
var sd = twomoji[i+1];

twomojisu[i] = d;
twomoji[i] = sd;
twomojisu[i+1] = c;
twomoji[i+1] = sc;
var session = 1;
}
}
}while (session == 1);

//添付
var topmoji = document.getElementById('2tanngo').innerHTML;

for (var i = 0; i < topmoji; i++) {
var ii = i+1;


var top2= document.createElement('span');
top2.setAttribute('id','2top' + ii);
top2.innerHTML = "[" + "<span>" + twomoji[i] + "</span>" + "]";
two2.insertBefore(top2, null);

var topsu2= document.createElement('span');
topsu2.setAttribute('id','2topsu' + ii);
topsu2.innerHTML ="<span>" + twomojisu[i] + "</span>";
two2.insertBefore(topsu2, null);
two2.insertBefore(document.createElement('br'), null);

}

var moji= document.createElement('span');
moji.innerHTML = 'top順';
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);
table.insertBefore(document.createElement('hr'), null);




//テーブル3-1生成
var moji= document.createElement('div');
moji.setAttribute('id','three1');
moji.innerHTML ='<style>#three1{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);


//各3文字単語数
var check = [];
var dateb = [];
for (var i = 1; i < tx0.length-1; i++) {
if (i ==1) {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1));
    check.push('c');
}
else {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1));
    check.push('c');
}

}
//各文字数
ii = 0;
for (var i = 1; i < tx0.length+1; i++) {
if (dateb[i-1]!==undefined) {
var ii = ii+1;
var lenlan= document.createElement('span');
lenlan.setAttribute('id','3lenlan' + ii);
lenlan.innerHTML = ("[" + "<span id='3moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='3mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
three1.insertBefore(lenlan, null);
}
var set = dateb[i-1];
for (var f = 0; f < dateb.length+1; f++) {
if (set==dateb[f]) {
delete dateb[f];
  }
 }
}
//3文字単語数
var moji= document.createElement('span');
moji.innerHTML = '3文字単語数';
table.insertBefore(moji, null);
var len= document.createElement('span');
len.setAttribute('id','3len');
len.innerHTML =check.length;
table.insertBefore(len, null);
table.insertBefore(document.createElement('hr'), null);

//3文字単語の数
var moji= document.createElement('span');
moji.innerHTML = '3文字単語種類';
table.insertBefore(moji, null);
var moji= document.createElement('span');
moji.setAttribute('id','3tanngo');
moji.innerHTML = ii;
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);




//テーブル7生成
var moji = document.createElement('div');
moji.setAttribute('id','three2');
moji.innerHTML ='<style>#three2{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);

//取得準備
var topmoji = document.getElementById('3tanngo').innerHTML;
var threemoji = [];
var threemojisu = [];

//取得準備
var topmoji = document.getElementById('3tanngo').innerHTML;
var threemoji = [];
var threemojisu = [];

//取得
for (var i = 0; i < topmoji; i++) {
var ii = i+1;
var threesu = '3moji' + ii;
var threeji = '3mojisu' + ii;
    threemoji.push(document.getElementById(threesu).innerHTML);
    threemojisu.push(document.getElementById(threeji).innerHTML);
 }
//編集
do {
var session = 0;
for (var i = 0; i < topmoji; i++) {
var a = threemojisu[i]
var b = threemojisu[i+1]
if (a*10 < b*10) {

var c = threemojisu[i];
var sc = threemoji[i];
var d = threemojisu[i+1];
var sd = threemoji[i+1];

threemojisu[i] = d;
threemoji[i] = sd;
threemojisu[i+1] = c;
threemoji[i+1] = sc;
var session = 1;
}
}
}while (session == 1);

//添付
var topmoji = document.getElementById('3tanngo').innerHTML;

for (var i = 0; i < topmoji; i++) {
var ii = i+1;

var top3= document.createElement('span');
top3.setAttribute('id','3top' + ii);
top3.innerHTML = "[" + "<span>" + threemoji[i] + "</span>" + "]";
three2.insertBefore(top3, null);

var topsu3= document.createElement('span');
topsu3.setAttribute('id','3topsu' + ii);
topsu3.innerHTML ="<span>" + threemojisu[i] + "</span>";
three2.insertBefore(topsu3, null);
three2.insertBefore(document.createElement('br'), null);

}

var moji= document.createElement('span');
moji.innerHTML = 'top順';
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);
table.insertBefore(document.createElement('hr'), null);




//テーブル4-1生成
var moji= document.createElement('div');
moji.setAttribute('id','four1');
moji.innerHTML ='<style>#four1{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);


//各4文字単語数
var check = [];
var dateb = [];
for (var i = 1; i < tx0.length-2; i++) {
if (i ==1) {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1)+tx0.charAt(i+2);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1) + tx0.charAt(i+2));
    check.push('c');
}
else {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1)+tx0.charAt(i+2);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1) + tx0.charAt(i+2));
    check.push('c');
}

}
//各文字数
ii = 0;
for (var i = 1; i < tx0.length+1; i++) {
if (dateb[i-1]!==undefined) {
var ii = ii+1;
var lenlan= document.createElement('span');
lenlan.setAttribute('id','4lenlan' + ii);
lenlan.innerHTML = ("[" + "<span id='4moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='4mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
four1.insertBefore(lenlan, null);
}
var set = dateb[i-1];
for (var f = 0; f < dateb.length+1; f++) {
if (set==dateb[f]) {
delete dateb[f];
  }
 }
}
//3文字単語数
var moji= document.createElement('span');
moji.innerHTML = '4文字単語数';
table.insertBefore(moji, null);
var len= document.createElement('span');
len.setAttribute('id','4len');
len.innerHTML =check.length;
table.insertBefore(len, null);
table.insertBefore(document.createElement('hr'), null);

//3文字単語の数
var moji= document.createElement('span');
moji.innerHTML = '4文字単語種類';
table.insertBefore(moji, null);
var moji= document.createElement('span');
moji.setAttribute('id','4tanngo');
moji.innerHTML = ii;
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);

//テーブル9生成
var moji = document.createElement('div');
moji.setAttribute('id','four2');
moji.innerHTML ='<style>#four2{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);

//取得準備
var topmoji = document.getElementById('4tanngo').innerHTML;
var fourmoji = [];
var fourmojisu = [];

//取得準備
var topmoji = document.getElementById('4tanngo').innerHTML;
var fourmoji = [];
var fourmojisu = [];

//取得
for (var i = 0; i < topmoji; i++) {
var ii = i+1;
var foursu = '4moji' + ii;
var fourji = '4mojisu' + ii;
    fourmoji.push(document.getElementById(foursu).innerHTML);
    fourmojisu.push(document.getElementById(fourji).innerHTML);
 }
//編集
do {
var session = 0;
for (var i = 0; i < topmoji; i++) {
var a = fourmojisu[i]
var b = fourmojisu[i+1]
if (a*10 < b*10) {

var c = fourmojisu[i];
var sc = fourmoji[i];
var d = fourmojisu[i+1];
var sd = fourmoji[i+1];

fourmojisu[i] = d;
fourmoji[i] = sd;
fourmojisu[i+1] = c;
fourmoji[i+1] = sc;
var session = 1;
}
}
}while (session == 1);

//添付
var topmoji = document.getElementById('4tanngo').innerHTML;

for (var i = 0; i < topmoji; i++) {
var ii = i+1;

var top4= document.createElement('span');
top4.setAttribute('id','4top' + ii);
top4.innerHTML = "[" + "<span>" + fourmoji[i] + "</span>" + "]";
four2.insertBefore(top4, null);

var topsu4= document.createElement('span');
topsu4.setAttribute('id','4topsu' + ii);
topsu4.innerHTML ="<span>" + fourmojisu[i] + "</span>";
four2.insertBefore(topsu4, null);
four2.insertBefore(document.createElement('br'), null);
　}
var moji= document.createElement('span');
moji.innerHTML = 'top順';
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);
table.insertBefore(document.createElement('hr'), null);






//テーブル5-1生成
var moji= document.createElement('div');
moji.setAttribute('id','five1');
moji.innerHTML ='<style>#five1{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);


//各4文字単語数
var check = [];
var dateb = [];
for (var i = 1; i < tx0.length-3; i++) {
if (i ==1) {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1)+tx0.charAt(i+2)+tx0.charAt(i+3);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1) + tx0.charAt(i+2)+tx0.charAt(i+3));
    check.push('c');
}
else {
var key = tx0.charAt(i-1)+tx0.charAt(i)+tx0.charAt(i+1)+tx0.charAt(i+2)+tx0.charAt(i+3);
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    dateb.push(tx0.charAt(i-1) + tx0.charAt(i) + tx0.charAt(i+1) + tx0.charAt(i+2)+tx0.charAt(i+3));
    check.push('c');
}

}
//各文字数
ii = 0;
for (var i = 1; i < tx0.length+1; i++) {
if (dateb[i-1]!==undefined) {
var ii = ii+1;
var lenlan= document.createElement('span');
lenlan.setAttribute('id','5lenlan' + ii);
lenlan.innerHTML = ("[" + "<span id='5moji" + ii + "'>" + dateb[i-1] + "</span>" + "]" + "<span id='5mojisu" + ii + "'>" +counts[dateb[i-1]] + "</span>" + "<br>");
five1.insertBefore(lenlan, null);
}
var set = dateb[i-1];
for (var f = 0; f < dateb.length+1; f++) {
if (set==dateb[f]) {
delete dateb[f];
  }
 }
}
//5文字単語数
var moji= document.createElement('span');
moji.innerHTML = '5文字単語数';
table.insertBefore(moji, null);
var len= document.createElement('span');
len.setAttribute('id','5len');
len.innerHTML =check.length;
table.insertBefore(len, null);
table.insertBefore(document.createElement('hr'), null);

//5文字単語の数
var moji= document.createElement('span');
moji.innerHTML = '5文字単語種類';
table.insertBefore(moji, null);
var moji= document.createElement('span');
moji.setAttribute('id','5tanngo');
moji.innerHTML = ii;
table.insertBefore(moji, null);
table.insertBefore(document.createElement('hr'), null);

//テーブル9生成
var moji = document.createElement('div');
moji.setAttribute('id','five2');
moji.innerHTML ='<style>#five2{width:200px;height:110px;overflow:auto;}</style>';
table.insertBefore(moji, null);

//取得準備
var topmoji = document.getElementById('5tanngo').innerHTML;
var fivemoji = [];
var fivemojisu = [];

//取得準備
var topmoji = document.getElementById('5tanngo').innerHTML;
var fivemoji = [];
var fivemojisu = [];

//取得
for (var i = 0; i < topmoji; i++) {
var ii = i+1;
var fivesu = '5moji' + ii;
var fiveji = '5mojisu' + ii;
    fivemoji.push(document.getElementById(fivesu).innerHTML);
    fivemojisu.push(document.getElementById(fiveji).innerHTML);
 }
//編集
do {
var session = 0;
for (var i = 0; i < topmoji; i++) {
var a = fivemojisu[i]
var b = fivemojisu[i+1]
if (a*10 < b*10) {

var c = fivemojisu[i];
var sc = fivemoji[i];
var d = fivemojisu[i+1];
var sd = fivemoji[i+1];

fivemojisu[i] = d;
fivemoji[i] = sd;
fivemojisu[i+1] = c;
fivemoji[i+1] = sc;
var session = 1;
}
}
}while (session == 1);

//添付
var topmoji = document.getElementById('5tanngo').innerHTML;

for (var i = 0; i < topmoji; i++) {
var ii = i+1;

var top5= document.createElement('span');
top5.setAttribute('id','5top' + ii);
top5.innerHTML = "[" + "<span>" + fivemoji[i] + "</span>" + "]";
five2.insertBefore(top5, null);

var topsu5= document.createElement('span');
topsu5.setAttribute('id','5topsu' + ii);
topsu5.innerHTML ="<span>" + fivemojisu[i] + "</span>";
five2.insertBefore(topsu5, null);
five2.insertBefore(document.createElement('br'), null);

　}
}
