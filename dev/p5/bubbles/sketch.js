var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

var list = new Array();
var li = 0;

var speed = 5;

function bubble(stx,sty) {
   this.x = stx;
   this.y = sty;
   this.r = 100;
   this.draw = function() {
      fill("white");
      ellipse(this.x, this.y, this.r, this.r);
   }
}

function add() {
   var a = new bubble(mouseX, mouseY);
   list[li] = a;
   li++;
}

function move() {
  for (i=0;i<list.length;i++) {
     list[i].y += speed;
  }
}

function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
  setInterval(move, 1);
}

function draw() {
   clear();
   fill("white");
   textSize(100);
   text(li, 100, 100);
   for (i=0;i<list.length;i++) {
      list[i].draw();
   }
}

window.addEventListener('load', function(){ // on page load

    document.body.addEventListener('touchstart', function(e){
        alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
    }, false)

}, false)

function mouseReleased(){

}

function mousePressed(){
  if (!isAndroid) {
    add();
  }
}

function touchStarted() {
  if (isAndroid) add();
}
