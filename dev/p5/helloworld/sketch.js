var s = 50;
var speed = 30;
var direction = false;
var minSize = 10, maxSize = 200;
var wentFullScreen = false;
/*

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
*/
function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
  setInterval(function() {
    if(direction) {
      if (s<400)
        s+=speed;
    } else {
      if (s>10)
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