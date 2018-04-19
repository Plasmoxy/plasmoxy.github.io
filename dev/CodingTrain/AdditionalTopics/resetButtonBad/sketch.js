/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let resetButton;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);  
  createP(''); // so the buttons is under canvas
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSketch);
}

function resetSketch() {
  clear();
  setup();
}

function draw() {
  
}
