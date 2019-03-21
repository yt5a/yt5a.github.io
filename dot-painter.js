
  (function() {
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('convert-button').addEventListener('click', function() {
        svg2imageData(document.getElementById('svg'), function(data) {
          console.log(data);
          document.getElementById('convertedimage').src = data;
        }, function(error) {
          console.log(error);
          alert('failed to convert');
        });
      });
    });


    function svg2imageData(svgElement, successCallback, errorCallback) {
      var canvas = document.createElement('canvas');
      canvas.width = svgElement.width.baseVal.value;
      canvas.height = svgElement.height.baseVal.value;
      var ctx = canvas.getContext('2d');
      var image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0, image.width, image.height);
        successCallback(canvas.toDataURL());
      };
      image.onerror = (e) => {
        errorCallback(e);
      };
      var svgData = new XMLSerializer().serializeToString(svgElement);
      image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svgData);
    }
  }());
