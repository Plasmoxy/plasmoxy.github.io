/* uses p5.js | by Plasmoxy */

let canvas, btn, slider;

function preload() {
  
}

function setup() {
  canvas = createCanvas(600, 400);
  createP('');
  
  btn = createButton('XD');
  btn.mousePressed(btnPressed);
  
  slider = createSlider(10, 100, 47);
  
}

function draw() {
  
}

function btnPressed() {
  createP('XD');
}

function mousePressed() {
  
}

function mouseReleased() {
  
}
