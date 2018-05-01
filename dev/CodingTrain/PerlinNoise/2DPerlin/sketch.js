/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let inc = 0.01;

det = 0;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  noiseDetail(12, 0.4);
}

function draw() {

  let yoff = 0;

  loadPixels();
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < height; y++) {
      let i = (x + y*width)*4;
      let r = 255*noise(xoff, yoff);
      pixels[i + 0] = r;
      pixels[i + 1] = r;
      pixels[i + 2] = r;
      pixels[i + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}
