
class Circle {

  constructor(x, y, r, rs) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = 50;
    this.vy = 50;
    this.rspeed = rs;
  }

  draw() {
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= windowWidth) this.vx = -random(this.rspeed);
    if (this.x <= 0) this.vx = random(this.rspeed);
    if (this.y >= windowHeight) this.vy = -random(this.rspeed);
    if (this.y <= 0) this.vy = random(this.rspeed);
  }
}

let c = new Circle(0, 100, 5, 3);
let alpha = 0;
let col = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
  frameRate(120);

}

function iterateCircle() {
  fill(col[0], col[1], col[2], alpha);
  c.draw();
  c.move();
  alpha += 0.1;
  if ( alpha >= 255) {
    alpha = 0;
    col = [random(255), random(255), random(255)]
  }
}

function draw() {
  for (let i = 0; i<=10; i++) {
    iterateCircle();
  }
}
