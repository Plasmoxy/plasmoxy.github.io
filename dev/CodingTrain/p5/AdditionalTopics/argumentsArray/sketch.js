/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

// arguments keyword variable of a JS function contains its arguments
function sum() {
  let val = 0;
  for (let arg of arguments) {
    val += arg;
  }
  return val;
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  
  
}

function draw() {
  background(bgColor);
  
}
