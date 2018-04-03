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


let canvas, bgColor;

let slider;

let b;

function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.mousePressed(canvasPressed);
  createP('');
  
  slider = createSlider(0, 300, 30);
  slider.input( () => {
    b.r = slider.value();
  });
  
  b = new Ball(canvas.width/2, canvas.height/2, 30);
  
}

function draw() {
  background(bgColor);
  b.draw();
}

function canvasPressed() {
  
}
