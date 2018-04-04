/* uses p5.js | by Plasmoxy */

function Particle() {
  this.x = 100;
  this.y = 99;
}

Particle.prototype.show = function() {
  point(this.x, this.y);
}

let canvas, bgColor;

let p, p2;
let v;

p5.Vector.prototype.double = function() {
  this.x *= 2;
  this.y *= 2;
  this.z *= 2;
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  p = new Particle();
  p2 = new Particle();
  
  v = createVector(1, 2);
  v.double();
  console.log(v);
  
}

function draw() {
  background(bgColor);
  
}
