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
   textSize(30);
   text("Bubbles by Plasmoxy <p5.js> " + (MOBILE ? "[MOBILE]" : "[PC]" ), 50, 50);
   textSize(100);
   text("Bubbles: "+ bubbles.length, 50, 150);

   bubbles.forEach(function(a,i) {
     if (a.y > windowHeight) {
       bubbles.splice(bubbles.indexOf(a), 1);
     }
     a.draw();
   });

   textSize(50);
   if (bubbles[0]) text("Last bubble : ["+parseInt(bubbles[bubbles.length-1].x)+",  "+parseInt(bubbles[bubbles.length-1].y) + "]", 50, 230);
}

function mousePressed(){
  if (!MOBILE) addBubble(mouseX, mouseY); // ignore mouse on mobile
}

function mouseReleased(){}

window.addEventListener('load', function(){

    document.body.addEventListener('touchstart', function(e){ // only on mobile
        var t = e.changedTouches;
        for(i=0; i<t.length; i++) {
          addBubble(t[i].pageX, t[i].pageY);
        }
    }, false)

}, false)
