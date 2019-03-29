var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 950, 
  s, a, b,
  x, y, _x, _y,
  _t = 1 / 60; 

var anim = function() {
  $.fillStyle = 'hsla(0, 0%, 90%, 12)';
  $.fillRect(0, 0, w, h);
  for (var i = 0; i < 1; i++) {
    x = 0; 
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= .212 * Math.sin(15);
      y = x * Math.sin(i + 2.0 * t + x /20)/0.75;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j*6) * Math.PI /17.9;
      $.lineTo(w / 2- _x, h / 2 -_y);
    }
    $.lineWidth = .5;
    $.strokeStyle = 'hsla(0,0%,5%,.8)';
    $.stroke();
  }
  t += _t;
  window.requestAnimationFrame(anim);
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);