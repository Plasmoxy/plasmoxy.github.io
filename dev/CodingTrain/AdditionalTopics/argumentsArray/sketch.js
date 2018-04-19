/* uses p5.js | by Plasmoxy */

class Particle {
  constructor() {
    for (let arg of arguments) {
      if (arguments.length == 1 && arg instanceof p5.Vector) {
        this.pos = arg;
      }
    }
    
    if (!arguments.length) this.pos = createVector(width/2, height/2);
    
  }
  
  draw() {
    push();
    fill(255, 0, 255);
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, 16, 16);
    pop();
  }
}

// arguments keyword variable of a JS function contains its arguments
function sum() {
  let val = 0;
  
  for (let arg of arguments) {
    if (arg instanceof Array) {
      for (let num of arg) {
        val += num;
      }
    } else {
      val += arg;
    }
  }
  
  return val;
}

let canvas, bgColor;

let particles = [];

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  particles.push(
    new Particle(createVector(30,30)),
    new Particle()
  );
  
}

function draw() {
  background(bgColor);
  for (let p of particles) {
    p.draw();
  }
}
