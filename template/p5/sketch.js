/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.mousePressed(canvasPressed);
  createP('');
  
  
  
}

function draw() {
  background(bgColor);
  
}

function canvasPressed() {
  
}
