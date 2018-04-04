console.log('[p5background.js] STARTING');

/* uses p5.js | by Plasmoxy */

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }
  
  update() {
    this.x += random(-20, 20);
    this.y += random(-20, 20);
    
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
    fill(0, 255, 255, 100);   
    for (let v of this.history) {
      ellipse(v.x, v.y, 30, 30);
    }
    ellipse(this.x, this.y, 40, 40);
  }
  
}


let canvas, bgColor;
let particles = [];

function setup() {
  bgColor = color(50);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-12');
  
  for (let i = 0; i<20; i++) {
    particles.push(new Particle(width/2, height*0.8));
  }
  
  
}

function draw() {
  
  clear();
  
  for (let part of particles) {
    part.update();
    part.draw();
  }
}
