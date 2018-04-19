/* uses p5.js | by Plasmoxy */


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

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  
  pv = new PolarVector(0, 0);
}

function draw() {
  //background(bgColor);
  stroke(255);
  
  translate(width/2, height/2);
  let cv = toCart(pv);
  
  //line(0, 0, cv.x, cv.y);
  stroke(255, 0, 255, a);
  point(cv.x, cv.y);
  
  pv.ang += 0.1;
  pv.r += dr;
  
  dr += 0.0005;
  a -= 0.1;
}
