/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

let flower;

function preload() {
  flower = loadJSON("/data/ct/flower.json");
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor)
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 50, 50);
}
