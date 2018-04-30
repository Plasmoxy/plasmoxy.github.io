/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let inc = 0.01;
let start = 0;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(bgColor);

  beginShape();
  stroke(0, 255, 255);
  noFill();

  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff)*height;
    vertex(x, y);

    xoff += inc;
  }

  start += inc;

  endShape();

  //noLoop();

}
