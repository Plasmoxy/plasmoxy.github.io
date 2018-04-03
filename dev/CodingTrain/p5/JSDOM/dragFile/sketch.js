/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let dropZone;

let img;

function preload() {
  //flower = loadImage('/images/flower.png');
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');
  canvas.mousePressed(canvasPressed);
  
  dropZone = select('#drop');
  
  
  dropZone.drop(gotFile);
  
}

function draw() {
  background(bgColor);
  if (img) image(img, 0, 0);
}

function gotFile(file) {
  img = createImg(file.data).hide();
}

function highlight() {
  dropZone.style('background', '#333');
}

function unhighlight() {
  dropZone.style('background', 'none');
}

function canvasPressed() {
  
}
