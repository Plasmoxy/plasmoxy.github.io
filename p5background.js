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
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    if (this.x > width - 20) this.x -= 10;
    if (this.y > height - 20) this.y -= 10;
    if (this.x < 20) this.x += 10;
    if (this.y < 20) this.y += 10;

    this.history.push(createVector(this.x, this.y));

    if (this.history.length > 10) {
      this.history.splice(0, 1);
    }

    // follow mouse
    if (this.isFollower) {
      this.x += (mouseX - this.x)*0.01;
      this.y += (mouseY - this.y)*0.01;
    }

  }

  draw() {

    noStroke();
    fill(255, 255, 0, 200);
    for (let v of this.history) {
      ellipse(v.x, v.y, 3, 3);
    }
    ellipse(this.x, this.y, 6, 6);
  }

}


let canvas, bgColor;
let particles = [];

function setup() {
  bgColor = color(50);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-8');

  for (let i = 0; i<10; i++) {
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
