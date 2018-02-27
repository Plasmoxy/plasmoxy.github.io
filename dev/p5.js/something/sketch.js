var progress = 0.0;
var kolor = "white";
var c = {};

function prog() {
   if ( progress < 100) progress += 0.05;
   else {
     kolor = "green";
     progress = 100;
   }
}

function setup() {
  createCanvas(windowWidth-15, windowHeight-20);
  
  setInterval(prog, 1);
  
  c = {
   x: windowWidth/2,
   y: windowHeight/2
  }
  
}

function draw() {
   clear();
   fill("white");
   textSize(100);
   text(""+int(progress)+" %", 50,100);
   
   fill(kolor);
   arc(c.x,c.y, 500,500, 0, progress/100*2*PI);
}