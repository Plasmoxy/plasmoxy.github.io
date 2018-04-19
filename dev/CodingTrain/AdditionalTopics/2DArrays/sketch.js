/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

let cols = 10;
let rows = 10;


let colors;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let j = 0; j < arr.length; j++) {
    arr[j] = new Array(rows);
  }
  return arr;
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  colors = make2DArray(cols, rows);
  
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i].length; j++) {
      colors[i][j] = color(random(255), random(255), random(255));
    }
  }
  
}

function draw() {
  background(bgColor);
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i*30;
      let y = j*30;
      stroke(0);
      fill(colors[i][j]);
      rect(x, y, 30, 30);
    }
  }
  
}
