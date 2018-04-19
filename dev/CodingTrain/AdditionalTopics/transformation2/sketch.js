/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

let a = 0, i = 0.05;


function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');
  canvas.mousePressed(canvasPressed);
  
  
  
}

function draw() {
  background(bgColor);
  fill(255);
  
  push();
  rectMode(CENTER);
  translate(canvas.width/2, canvas.height/2);
  scale(a);
  rect(0, 0, 50, 50);
  pop();
  
  if (a > 3) i = -0.05;
  if (a < 0) i = 0.05;
  a += i;
  
}

function canvasPressed() {
  
}
