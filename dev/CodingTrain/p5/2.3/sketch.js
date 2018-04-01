
class Circle {

  constructor(x, y, r, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.vx = this.speed;
    this.vy = this.speed;
  }

  draw() {
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= windowWidth) this.vx = -random(50);
    if (this.x <= 0) this.vx = random(50);
    if (this.y >= windowHeight) this.vy = -random(50);
    if (this.y <= 0) this.vy = random(50);
  }
}

let c = new Circle(0, 100, 30, 20);
let alpha = 0;
let col = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
}

function draw() {
  fill(col[0], col[1], col[2], alpha);
  c.draw();
  c.move();
  alpha += 1;
  if ( alpha >= 255) {
    alpha = 0;
    col = [random(255), random(255), random(255)]
  }
}
