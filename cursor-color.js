(function() {

  var canvas;
  var ctx;
  var width;
  var height;
  var ballX;
  var ballY;
  var mouseX;
  var mouseY;


  // 初期化処理
  function initialize() {
    canvas = document.getElementById('canvas');
    if(!canvas && !canvas.getContext) {
      return false;
    }

    ctx = canvas.getContext('2d');
    width = ctx.canvas.width ;
    height = ctx.canvas.height;

    // ボールの初期位置は中心
    ballX = mouseX = width/2;
    ballY = mouseY = height/2;

    canvas.addEventListener('mousemove', getMousePosition, false);

    setInterval(drawBall, 10);
  };


  // マウス座標の更新
  function getMousePosition(e) {
    var rect = e.target.getBoundingClientRect();
    mouseX = Math.floor(e.clientX - rect.left);
    mouseY = Math.floor(e.clientY - rect.top);
  };


  // ボールの描画
  var hue = 0;

  function drawBall() {
    var radius = 10;
    var delay = 0;
    hue += 0.5;

    ballX = (mouseX + delay * ballX) / (delay+1);
    ballY = (mouseY + delay * ballY) / (delay+1);

    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    // 円の描画設定
    ctx.beginPath();
    ctx.arc(ballX, ballY, radius, 0, 2*Math.PI, true);
    ctx.closePath();

    // 色設定
    ctx.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
    ctx.fillStyle = 'hsl(' + hue + ', 50%, 50%)';
    ctx.shadowColor = 'hsl(' + hue + ', 50%, 50%)';
    ctx.shadowBlur = 30;

    // 描画実行
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  };


  // 初期化イベント
  window.addEventListener('load', initialize, false);

} ) ();
