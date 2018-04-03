/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

let circles = [];

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  let iterations = 0;
  const MAX_ITERATIONS = 10000;
  const MAX_CIRCLES = 1000;
  
  for (let i = 0; i < MAX_CIRCLES; i++) {
    
    let overlapping = false;
    
    let circle = {
      x: random(width),
      y: random(height),
      r: random(1, 36)
    }
    
    for (let c of circles) {
      if (dist(circle.x, circle.y, c.x, c.y) < circle.r + c.r ) {
        overlapping = true;
        break;
      }
    }
    
    if (overlapping) {
      i--; // reiterate
    } else {
      circles.push(circle);
    }
    
    iterations++;
    if( iterations > MAX_ITERATIONS) break;
    
  }
  
  
  // draw them
  fill(255, 0, 255);
  noStroke();
  
  for (let c of circles) {
    ellipse(c.x, c.y, 2*c.r, 2*c.r);
  }
  
  textSize(30);
  fill(255);
  text('CIRCLES: ' + circles.length, 30, 30);
  
}
