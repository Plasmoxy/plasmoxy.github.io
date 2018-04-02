/* uses p5.js | by Plasmoxy */

let blyat;

function preload() {
  blyat = loadImage('/assets/img/cliccblyat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  image(blyat, mouseX-200, mouseY-150, 400, 300);
}
