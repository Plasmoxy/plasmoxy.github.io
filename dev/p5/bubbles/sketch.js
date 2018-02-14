/* p5.js Bubbles by Plasmoxy */

var bubbles = new Array();
var li = 0;

var pxPerSec = 1/60;
var speed = 500 * pxPerSec;

var MOBILE = window.mobileCheck();

function bubble(stx,sty) {
   this.x = stx;
   this.y = sty;
   this.r = 100;
   this.draw = function() {
      fill("white");
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
  createCanvas(windowWidth-15, windowHeight-20);
  setInterval(move, 1000/60);
}

function draw() {
   clear();

   fill("white");
   textSize(100);
   text(""+ (MOBILE ? "[MOBILE] " : "[PC] " ) + bubbles.length, 100, 100);

   bubbles.forEach(function(a,i) {
     a.draw();
   });
}

function mousePressed(){
  if (!MOBILE) addBubble(mouseX, mouseY); // ignore mouse on mobile
}

function mouseReleased(){}

window.addEventListener('load', function(){

    document.body.addEventListener('touchstart', function(e){ // only on mobile
        // example : alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
        e.changedTouches.forEach(function (a,i) {
          addBubble(a.pageX, a.pageY);
        });
    }, false)

}, false)
