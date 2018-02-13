var s = 10;
var speed = 2;
var direction = false;
var minSize = 10, maxSize = 200;
var wentFullScreen = false;

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
  createCanvas(windowWidth, windowHeight);
  setInterval(function() {
    if(direction) {
      if (s<100)
        s+=speed;
    } else {
      if (s>10)
      s-=speed;
    }
  }, 1);
}

function draw() {
  background("#111111");
  ellipse(mouseX,mouseY,s,s);
}

function mousePressed() {
  direction = true;
}

function mouseReleased() {
  direction = false;
}
