class Bubble {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.d = random(100);
    this.a = 255;
  }

  draw() {
    push();
    stroke(255);
    fill(255, this.a, this.a, 150);
    ellipse(this.x, this.y, this.d, this.d);
    pop();
  }

  move() {
    this.x += random(2) - 1;
    this.y += random(2) - 1;
  }

  intersects(b) {
    return dist(this.x, this.y, b.x, b.y) < this.r + b.r;
  }
}

let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) bubbles.push(new Bubble());
}

function draw() {
  clear();
  for (b of bubbles) {
    b.move();
    b.draw();
    for (b2 of bubbles) {
      if (b.intersects(b2)) {
        b.a = 100;
        b2.a = 100;
      } else {
        b.a = 255;
        b2.a = 255;
      }
    }
  };
}
