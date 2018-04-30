/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let xoff = 0;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);

  let x = noise(xoff)*width;
  let y = noise(xoff+1)*height;
  xoff += 0.02;;

  ellipse(x, y, 24, 24);
}
