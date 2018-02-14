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

var released = true;

function mouseReleased(){
	released = true;
	return false;
}

function mousePressed(){

	if(!released){
		return;
	}
	released = false;

	//rest of your code

  add();
}
