/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let part;

function preload() {
  
}

function setup() {
  bgColor = color(50);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(canvasPressed);
  
  part = new Particle(width/2, height/2);
  
}

function draw() {
  background(bgColor);
  part.update();
  part.draw();
}

function canvasPressed() {
  
}
