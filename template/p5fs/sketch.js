/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(canvasPressed);
  
  
  
}

function draw() {
  background(bgColor);
  
}

function canvasPressed() {
  
}
