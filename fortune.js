
  document.getElementById("fortune").innerHTML = rr();


function rr() {
  var hi = localStorage['days'];
  var now = new Date();
  var day = now.getDate();
if (hi == day) {
  var tday = localStorage['mo'];
  var head = localStorage['w1'];
  var body = localStorage['w2'];
}
else {
 var tday = Math.floor(Math.random() * 12);
 var head = Math.floor(Math.random() * 22);
 var body = Math.floor(Math.random() * 40);
}

localStorage['mo'] = tday;
localStorage['w1'] = head;
localStorage['w2'] = body;
localStorage['days'] = day;


var stera = ['おひつじ','おうし','ふたご','かに','しし','おとめ','てんびん','さそり','いて','やぎ','みずがめ','うお',]
var as     = ['冒涜的な','かわいい','ふしぎな','きれいな','大きな','小さな','空飛ぶ','光る','柔らかい','腐った','いつも使っている','高い','安い','暖かい','冷たい','凍った','流行りの','汚い','華やかな','風情ある','マイナーな','よくある']
var bs     = ['マント','トマト','チョーク','石','肉','メガネ','本','ふとん','ランボルギーニ','牛乳','スマートフォン','5円玉','靴下','靴','男性','女性','チョコ','パン','楽譜','ジェンガ','ボタン','望遠鏡','タイヤ','マフラー','バイク','ペット','モデルガン','鉛筆','貝殻','机','ちりとり','イヤホン','ポスター','切符','ランドセル','竹刀','消しゴム','ハサミ','パソコン','ネックレス']
var seiza = stera[tday]
var a = as[head]
var b = bs[body]




  var s =　"今日一番のハッピーさんは"　+ seiza + "座！" + "ラッキーアイテムは" + a + b + "!";
  return s;
}
