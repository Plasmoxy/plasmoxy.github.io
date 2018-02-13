var s = 50;
var speed = 1;
var direction = false;
var minSize = 10, maxSize = 200;
var wentFullScreen = false;

function update() {
  if(direction) {
    if (s<maxSize)
      s+=speed;
  } else {
    if (s>minSize)
    s-=speed;
  }
}

addEventListener("click", function() {
  if (!wentFullScreen) {
    wentFullScreen = true;

    var el = document.documentElement, rfs =
      el.requestFullScreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
    ;
    rfs.call(el);

    setTimeout(setup, 1000);
  }
});

function setup() {
  if (wentFullScreen) createCanvas(windowWidth-15, windowHeight-20);
  else createCanvas(0,0);
  if (!wentFullScreen) setInterval(update, 1);
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
