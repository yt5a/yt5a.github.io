
//新規入力
function onButtonClick() {
  var moji= document.createElement('div');
  moji.setAttribute('id','one');
//  moji.innerHTML = '<div id= "one">';
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
  document.getElementById("one").innerHTML ='<style>#one{width:200px;height:100px;overflow:auto;}</style>' + word;


  //文字数
  var moji= document.createElement('span');
  moji.innerHTML = '文字数';
  table.insertBefore(moji, null);
  var len= document.createElement('span');
  len.setAttribute('id','len');
  len.innerHTML =check.length;
  table.insertBefore(len, null);
  table.insertBefore(document.createElement('hr'), null);



  //各文字数
  var moji= document.createElement('div');
  moji.setAttribute('id','two');
  moji.innerHTML ='<style>#two{width:200px;height:100px;overflow:auto;}</style>';
  table.insertBefore(moji, null);
  ii = 0;
  for (var i = 1; i < tx0.length+1; i++) {
  if (dateb[i-1]!==undefined) {
  var ii = ii+1;
  var lenlan= document.createElement('span');
  lenlan.setAttribute('id','lenlan' + ii);
  lenlan.innerHTML = ("[" + "<span>" + dateb[i-1] + "</span>" + "]" + "<span>" +counts[dateb[i-1]] + "</span>" + "<br>");
  two.insertBefore(lenlan, null);
  }
  var set = dateb[i-1];
  for (var f = 0; f < dateb.length+1; f++) {
  if (set==dateb[f]) {
  delete dateb[f];
   }
  }
//  dateb.filter(function(dated) {!dated === dateb[i-1];})
     }

  var moji= document.createElement('span');
  moji.innerHTML = '文字種類';
  table.insertBefore(moji, null);
  var moji= document.createElement('span');
  moji.setAttribute('id','jisu');
  moji.innerHTML = ii;
  table.insertBefore(moji, null);
  console.log(dateb);
  }
