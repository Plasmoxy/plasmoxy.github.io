/* uses p5.js | by Plasmoxy */

let canvas, btn, slider;
let bgColor;
let title;
let input, inputBtn;

function preload() {
  
}

function setup() {
  title = createElement('h1', 'DOM test');
  
  canvas = createCanvas(600, 300);
  canvas.mousePressed(canvasPressed);
  createP('');
  
  bgColor = color(150);
  
  btn = createButton('get value');
  btn.mousePressed(btnPressed);
  
  slider = createSlider(0, 255, 0);
  
  createP('type yor name:')
  input = createInput();
  
  inputBtn = createButton('submit');
  inputBtn.mousePressed(inputBtnPressed);
  
}

function draw() {
  background(slider.value());
  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 50, 50);
  textSize(20);
  text('Hello, ' + input.value(), 30, 50);
}

function btnPressed() {
  createP('SLIDER VALUE: ' + slider.value());
}

function inputBtnPressed() {
  createP(input.value() + ' provides unaccepable behaviour');
}

function canvasPressed() {
  createP('< mousePos : ' + mouseX + ' ' + mouseY);
}
