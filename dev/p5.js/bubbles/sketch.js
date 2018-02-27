/* p5.js Bubbles by Plasmoxy */

var wentFullScreen = false;
var infoDiv = document.getElementById("info");

var bubbles = [];
var pxPerSec = 1/60;
var speed = 200 * pxPerSec;

var tscale;

var MOBILE = window.mobileCheck();

function bubble(stx,sty) {
   this.x = stx;
   this.y = sty;
   this.r = 100;
   this.color = [0, 0, 255];
   this.draw = function() {
      fill(this.color[0], this.color[1], this.color[2]);
      ellipse(this.x, this.y, this.r, this.r);
   }
}

function addBubble(x, y) {
   var a = new bubble(x, y);
   a.color = [Math.random()*255,  Math.random()*255, Math.random()*255];
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

  tscale = windowWidth/64;

  setInterval(move, 1000/60);
}

function draw() {

   var textpos = 50;
   let textdiff = 10;
   clear();

   fill("#E91E63");
   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   text("Bubbles by Plasmoxy <p5.js> " + (MOBILE ? "[MOBILE]" : "[PC]" ), 50, textpos);

   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   fill("#FFEB3B");
   text("Bubbles: "+ (bubbles.length), 50, textpos);

   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   fill("white");
   if (bubbles[0]) text("Last bubble : ["+parseInt(bubbles[bubbles.length-1].x)+",  "+parseInt(bubbles[bubbles.length-1].y) + "]", 50, textpos);

   bubbles.forEach(function(a,i) {
     if (a.y > windowHeight || isNaN(a.y)) {
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
    bubbles = []; // reset bubbles so there isnt an NaN object in there

    var el = document.documentElement, rfs =
      el.requestFullScreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
    ;
    rfs.call(el);

    setTimeout(setup, 1000);
  }
});