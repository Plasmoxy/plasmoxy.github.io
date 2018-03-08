function Player() {
  this.x = windowWidth/2;
  this.y = windowHeight/2;
  this.r = 20;
  this.xvel = 0;
  this.yvel = 0;
  this.draw = function() {
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
    pop();
  }
  this.simulate = function() {
    this.x += this.xvel;
    this.y += this.yvel;
  }
}

var player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
}

function draw() {
  background(10);
  player.draw();
  player.simulate();
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW: player.yvel = -5; break;
  }
}

function keyReleased() {
  switch(keyCode) {
    case UP_ARROW: player.yvel = 0; break;
  }
}
