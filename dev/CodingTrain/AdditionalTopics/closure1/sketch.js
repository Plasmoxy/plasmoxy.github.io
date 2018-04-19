/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let timerp, timerp2;

function preload() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');
  canvas.mousePressed(canvasPressed);
  
  timerp = createP('');
  timerp2 = createP('');
  
  makeTimer(timerp2, 1000);
  makeTimer(timerp, 500);
  
  
  // console.log(counter); // should output undefined
  
}

// this is a CLOSURE
function makeTimer(elem, wait) {
  let counter = 0; // counter for this function
  
  function timeIt() {
    elem.html(counter);
    counter++;
  }
  
  // even after the function finishes, the counter variable
  // will still be alive as setInterval NEEDS it
  return setInterval(timeIt, wait);
}

function draw() {
  background(bgColor);
  
}

function canvasPressed() {
  
}
