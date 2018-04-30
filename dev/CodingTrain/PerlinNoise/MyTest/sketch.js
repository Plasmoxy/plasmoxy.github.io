/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let i = 0;
let px = 0, py = 0, x = 0, y = 0;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  background(0, 0, 5);
}

function draw() {
  stroke(0, 255, 255);
  if (i < width) {
    x = i;
    y = height*noise(i);
    line(px, py, x, y);
    i += 5;
    px = x;
    py = y;
  }
}
