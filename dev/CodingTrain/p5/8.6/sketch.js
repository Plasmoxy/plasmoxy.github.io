/* uses p5.js | by Plasmoxy */

class Ball {
  constructor(x, y, r) {
    this.r = r;
    this.x = x;
    this.y = y;
  }
  
  draw() {
    ellipse(this.x, this.y, this.r, this.r);
  }
}


let canvas;
let bgColor;
let b;

function preload() {
  
}

function setup() {
  bgColor = color(150);
  canvas = createCanvas(600, 300);
  canvas.mousePressed(canvasPressed);
  createP('');
  
  b = new Ball(100, 100, 30);
  
}

function draw() {
  background(slider.value());
  b.draw();
}

function canvasPressed() {
  
}
