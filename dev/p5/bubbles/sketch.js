/* p5.js Bubbles by Plasmoxy */

var wentFullScreen = false;
var infoDiv = document.getElementById("info");

var bubbles = [];
var li = 0;

var pxPerSec = 1/60;
var speed = 500 * pxPerSec;

var MOBILE = window.mobileCheck();

function bubble(stx,sty) {
   this.x = stx;
   this.y = sty;
   this.r = 100;
   this.draw = function() {
      fill("#18FFFF");
      ellipse(this.x, this.y, this.r, this.r);
   }
}

function addBubble(x, y) {
   var a = new bubble(x, y);
   bubbles.push(a);
}

function move() {
  bubbles.forEach(function(a,i) {
    a.y += speed;
  });
}

function setup() {
  if (wentFullScreen) createCanvas(windowWidth-15, windowHeight-20);
  else createCanvas(0,0);
  setInterval(move, 1000/60);
}

function draw() {
   clear();

   fill("#E91E63");
   textSize(30);
   text("Bubbles by Plasmoxy <p5.js> " + (MOBILE ? "[MOBILE]" : "[PC]" ), 50, 50);

   textSize(100);
   fill("#FFEB3B");
   text("Bubbles: "+ (bubbles.length-1), 50, 150);

   textSize(50);
   fill("white");
   //if (bubbles[0]) text("Last bubble : ["+parseInt(bubbles[bubbles.length-1].x)+",  "+parseInt(bubbles[bubbles.length-1].y) + "]", 50, 230);

   bubbles.forEach(function(a,i) {
     if (a.y > windowHeight) {
       bubbles.splice(bubbles.indexOf(a), 1);
     }
     a.draw();
   });
}

function mousePressed(){
  if (!MOBILE) addBubble(mouseX, mouseY); // ignore mouse on mobile
}

function mouseReleased(){}

window.addEventListener('load', function(){

    if(MOBILE) document.body.addEventListener('touchstart', function(e){ // only on mobile
        var t = e.changedTouches;
        for(i=0; i<t.length; i++) {
          addBubble(t[i].pageX, t[i].pageY);
        }
    }, false)

}, false);

addEventListener("click", function() {
  if (!wentFullScreen) {
    wentFullScreen = true;
    infoDiv.style.display = "none";

    var el = document.documentElement, rfs =
      el.requestFullScreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
    ;
    rfs.call(el);

    setTimeout(setup, 1000);
  }
});
