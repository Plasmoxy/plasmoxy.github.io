/* uses p5.js | by Plasmoxy */

let WIDTH = 0;
let HEIGHT = 0;

let kolore = 0;


class PolarVector {
  constructor(r, ang) {
    this.r = r || 0;
    this.ang = ang || 0;
  }
}


function toCart(pv) {
  return {
    x: pv.r * Math.cos(pv.ang),
    y: pv.r * Math.sin(pv.ang)
  };
}


let canvas, bgColor;
const pi = Math.PI;

let pv;
let dr = 0;
let a = 255;

let tickActivated = false;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  //pixelDensity(2);
  strokeWeight(32);

  pv = new PolarVector(0, 0);
  updateWH();
  setInterval(quickTick, 1);
}

function quickTick() {

  //background(bgColor);
  stroke(255);

  let cv = toCart(pv);

  //line(0, 0, cv.x, cv.y);
  stroke(0, kolore%255, kolore%255, a);
  point(WIDTH/2 + cv.x, HEIGHT/2 + cv.y);

  pv.ang += 0.1;
  pv.r += dr;

  dr += 0.00001;
  a -= 0.02;
  kolore += 1;
}

function draw() {
  updateWH();
}

function updateWH() {
  WIDTH = width;
  HEIGHT = height;
}
