function bubble(stx,sty) {
   this.x = stx;
   this.y = sty;
   this.r = 200;
   this.draw = function() {
      fill("red");
      ellipse(this.x, this.y, this.r, this.r);
   }
}

function add() {
   var a = new bubble(mouseX, mouseY);
   list[li] = a;
   li++;
}

var list = new Array();
var pressActive = false;

var li = 0;

function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
}

function draw() {
   clear();
   fill(0);
   textSize(100);
   text(li, 100, 100);
   for (i=0;i<list.length;i++) {
      list[i].draw();
   }
}

function mousePressed() {
   li = li+1;
}

function mouseReleased() {}
