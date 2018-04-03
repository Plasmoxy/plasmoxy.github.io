/* uses p5.js | by Plasmoxy */

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }
  
  update() {
    this.x += random(-30, 30);
    this.y += random(-30, 30);
    
    if (this.x > width) this.x -= 20;
    if (this.y > height) this.y -= 20;
    if (this.x < 0) this.x += 20;
    if (this.y < 0) this.y += 20;
    
    this.history.push(createVector(this.x, this.y));
    
    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }
  
  draw() {
    
    noStroke();
    fill(0, 200);
    for (let v of this.history) {
      ellipse(v.x, v.y, 30, 30);
    }

    fill(0);
    ellipse(this.x, this.y, 40, 40);
    
    
  }
  
}


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
