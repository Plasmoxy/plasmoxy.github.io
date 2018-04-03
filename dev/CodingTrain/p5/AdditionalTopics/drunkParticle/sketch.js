/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let particles = [];

function preload() {
  
}

function setup() {
  bgColor = color(50);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(canvasPressed);
  
  for (let i = 0; i<20; i++) {
    particles.push(new Particle(width/2, height/2));
  }
  
  
}

function draw() {
  background(bgColor);
  
  for (let part of particles) {
    part.update();
    part.draw();
  }
}

function canvasPressed() {
  
}
