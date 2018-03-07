/* p5.js Bubbles by Plasmoxy */

var wentFullScreen = false, exitDetectionActive = false;
var infoDiv = document.getElementById("info");

var renderActive = true;
var bubbles = [];
var pxPerSec = 1/60;

var tscale;

var MOBILE = window.mobileCheck();

var song;

function setFullScreen(on) {
  var el = document.documentElement;
  var rfs =
     el.requestFullScreen
  || el.webkitRequestFullScreen
  || el.mozRequestFullScreen
  ;

  var efs =
    document.webkitExitFullscreen
  || document.mozCancelFullScreen
  || document.msExitFullscreen

  on ? rfs.call(el) : efs.call(document);
}

function Bubble(_x,_y,_radius,_speed) {
   this.x = _x;
   this.y = _y;
   this.r = _radius;
   this.speed = _speed;
   this.color = [0, 0, 255];
   this.draw = function() {
      noStroke()
      fill(this.color[0], this.color[1], this.color[2]);
      ellipse(this.x, this.y, this.r*2, this.r*2); // we need diameter
   }
}

function addBubble(x, y) { // random size and speed
  var a = new Bubble(x,
    y,
    Math.floor(Math.random()*(5*tscale-2*tscale))+2*tscale,
    -(Math.random()*(100-20)+20) * pxPerSec // minus cus le bubble may go up
  );
  a.color = [Math.random()*255,  Math.random()*255, Math.random()*255];
  bubbles.push(a);
}

function randomSpawner() {
  addBubble(Math.random()*windowWidth, windowHeight);
}

function move() {
  bubbles.forEach(function(a,i) {
    a.y += a.speed;
    a.speed += a.speed/200;
  });
}

function preload() {
  song = loadSound('/assets/sound/blueheron.mp3');
}

function setup() {
  if (wentFullScreen) createCanvas(windowWidth, windowHeight);
  else return;

  if (!song.isPlaying()) song.loop();

  tscale = windowWidth/64;

  setInterval(move, 1000/60); // 60hz move
  setInterval(randomSpawner, 1000);
}

function draw() {

   if(!renderActive) return;


   let textpos = 50;
   let textPadding = 30;
   const textdiff = 10;
   clear();

   fill("#E91E63");
   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   text("Bubbles by Plasmoxy <p5.js> " + (MOBILE ? "[MOBILE]" : "[PC]" ), textPadding, textpos);

   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   fill("#FFEB3B");
   text("Bubbles: "+ (bubbles.length), textPadding, textpos);

   textpos += 3*tscale + textdiff;
   textSize(3*tscale);
   fill("white");
   if (bubbles[0]) text("Last bubble : ["+parseInt(bubbles[bubbles.length-1].x)+",  "+parseInt(bubbles[bubbles.length-1].y) + "]", textPadding, textpos);

   // filter out bubbles that are out of screen
   bubbles.forEach(function(a,i) {
     if (a.y < 0|| isNaN(a.y)) {
       bubbles.splice(bubbles.indexOf(a), 1);
     }
   });

   // draw 'em
   bubbles.forEach(function(a,i) {
     a.draw();
   });

}

function mousePressed(){
  if (!MOBILE) addBubble(mouseX, mouseY); // ignore mouse on mobile
}

function mouseReleased(){

}

/* HTML LISTENERS */

function onFullScreenChange() {
  if (!window.fullScreen && exitDetectionActive) {
    exitDetectionActive = false;
    renderActive = false;
    createCanvas(0,0);
    wentFullScreen = false;
    infoDiv.style.display = "block";
    if (song.isPlaying()) song.stop();
  }
}

window.addEventListener('load', function(){

    if(MOBILE) document.body.addEventListener('touchstart', function(e){ // only on mobile
        var t = e.changedTouches;
        for(i=0; i<t.length; i++) {
          addBubble(t[i].pageX, t[i].pageY);
        }
    }, false)

    addEventListener("click", function() {
      if (!wentFullScreen) {
        wentFullScreen = true;
        infoDiv.style.display = "none";
        bubbles = []; // reset bubbles so there isnt an NaN object in there

        setFullScreen(true);
        renderActive = true;

        // this is ultra important as the fullscreenchange event is fired and window may not be fullscreen yet when onFullScreenChange is executed
        setTimeout(() => exitDetectionActive = true, 100);

        setTimeout(setup, 1000);
      }
    });

    addEventListener('webkitfullscreenchange', onFullScreenChange, false);
    addEventListener('mozfullscreenchange', onFullScreenChange, false);
    addEventListener('fullscreenchange', onFullScreenChange, false);

}, false);
