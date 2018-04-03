/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let angle = 0;

function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');
  canvas.mousePressed(canvasPressed);
  angleMode(DEGREES);
  
}

function draw() {
  background(bgColor);
  
  fill(255);
  stroke(255, 0, 0);
  push();
  translate(canvas.width/2, canvas.height/2);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, 50, 50);
  line(0, 0, 100, 100);
  pop();
  
  angle++;
}

function canvasPressed() {
  
}
