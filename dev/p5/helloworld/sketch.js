var s = 10;
var speed = 2;
var direction = false;
var minSize = 1, maxSize = 200;
var wentFullScreen = false;

var canvasElement, messageDiv;

addEventListener("click", function() {
  if (!wentFullScreen) {
    wentFullScreen = true;

    var el = document.documentElement, rfs =
      el.requestFullScreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
    ;
    rfs.call(el);

    setTimeout(setup, 500);
  }
});

function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
  if (wentFullScreen) setInterval(function() {
    if(direction) {
      if (s<maxsize)
        s+=speed;
    } else {
      if (s>minsize)
      s-=speed;
    }
  }, 1);
}

function draw() {
  background("#111111");
  fill("#00ffd9");
  ellipse(mouseX,mouseY,s,s);
}

function mousePressed() {
  direction = true;
}

function mouseReleased() {
  direction = false;
}