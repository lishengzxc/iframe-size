(function () {
  var interval = +document.currentScript.getAttribute('data-interval');

  function resize() {
    var h = document.body.scrollHeight;
    parent.postMessage(h, '*');
  }

  resize();

  setInterval(resize, interval || 500);
}());
