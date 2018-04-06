console.log('[p5background.js] STARTING');

/* uses p5.js | by Plasmoxy */

class Particle {
  constructor(x, y, isFollower) {
    this.x = x;
    this.y = y;
    this.isFollower = isFollower;
    this.history = [];
  }

  update() {
    this.x += random(-20, 20);
    this.y += random(-20, 20);

    if (this.x > width) this.x -= 10;
    if (this.y > height) this.y -= 10;
    if (this.x < 0) this.x += 10;
    if (this.y < 0) this.y += 10;

    this.history.push(createVector(this.x, this.y));

    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }

    // follow mouse
    if (this.isFollower) {
      this.x += (mouseX - this.x)*0.02;
      this.y += (mouseY - this.y)*0.02;
    }

  }

  draw() {

    noStroke();
    fill(255, 200, 0, 150); 
    for (let v of this.history) {
      ellipse(v.x, v.y, 10, 10);
    }
    ellipse(this.x, this.y, 10, 10);
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
    particles.push(new Particle(random(width), random(height), true));
  }


}

function draw() {

  clear();

  for (let part of particles) {
    part.update();
    part.draw();
  }
}
