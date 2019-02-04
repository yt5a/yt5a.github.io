
  function ss(){
a();
b();
  }
  function a(){
    var z = document.getElementById('str');
    var o = Math.floor(Math.random() * 5);
        z.innerHTML = '<span id="str">' + o +'</span>';
  }
  function b(){
    var z = document.getElementById('con');
        z.innerHTML = '<a href="https://yt5a.github.io/comic.html">漫画</a>' + '<p>ライトノベル</p>' + '<p><a href="https://yt5a.github.io/general-book.html">一般書籍</p></a>';
  }
