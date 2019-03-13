
function board(){
document.body.innerHTML = '<canvas id="main" style="background-color:gray;"></canvas>'+
'<canvas id="sub1" style="background-color:gray;"></canvas>';;
var wtop=window.innerWidth*0.6;
//描画
var canvas1 = document.getElementById('main');
canvas1.setAttribute('width',wtop)
canvas1.setAttribute('height',wtop)
c1height =canvas1.height;
c1width =canvas1.width;

var mainw = document.getElementById('main').width
var canvas2 = document.getElementById('sub1');
canvas2.setAttribute('width',mainw/3)
canvas2.setAttribute('height',mainw/3)
c2height =canvas2.height;
c2width =canvas2.width;
//設定
var mainpx = 10;
//図形描写
var canvas = document.getElementById('main');
var c1 = canvas.getContext('2d');

mph = c1height*0.95;
mphp = (c1height-mph)/2;
mpx = mph/mainpx

mpw = c1width*0.95;
mpwp = (c1width-mpw)/2;
mpy = mpw/mainpx

for (var i = 0; i <= mainpx; i++) {
  c1.beginPath() ;
  c1.moveTo(mphp+mpx*i,0+mphp) ;
  c1.lineTo(mphp+mpx*i,c1height-mphp)
  c1.stroke() ;
}

for (var i = 0; i <= mainpx; i++) {
  c1.beginPath() ;
  c1.moveTo(0+mpwp,mphp+mpx*i) ;
  c1.lineTo(c1width-mpwp,mpwp+mpy*i)
  c1.stroke() ;
}

c1.beginPath();
c1.fillRect(20, 20,80,240);

let target = document.getElementById('main');

target.addEventListener('click', getPosition);
function getPosition(e) {
alert('x' + Math.floor(e.offsetX-mphp) + 'y' + Math.floor(e.offsetY-mpwp))
}


//図形描写2
var canvas = document.getElementById('sub1');
var c2 = canvas.getContext('2d');

sph = c2height*0.95;
sphp = (c2height-sph)/2;
spx = sph/7

spw = c2width*0.95;
spwp = (c2width-spw)/2;
spy = spw/7

for (var i = 0; i <= 7; i++) {
  c2.beginPath() ;
  c2.moveTo(sphp+spx*i,0+sphp) ;
  c2.lineTo(sphp+spx*i,c2height-sphp)
  c2.stroke() ;
 }

for (var i = 0; i <= 7; i++) {
  c2.beginPath() ;
  c2.moveTo(0+spwp,sphp+spx*i) ;
  c2.lineTo(c2width-spwp,spwp+spy*i)
  c2.stroke() ;
 }
}
