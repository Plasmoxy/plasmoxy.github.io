/* uses p5.js | by Plasmoxy */

let canvas, btn, slider;
let bgColor = color()

function preload() {
  
}

function setup() {
  canvas = createCanvas(600, 300);
  createP('');
  
  btn = createButton('hello');
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
