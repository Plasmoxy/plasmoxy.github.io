/* uses p5.js | by Plasmoxy | @template=gui */


class Point {
  constructor(x, y){
    this.x = x
    this.y = y
    this.done = false
  }

  draw() {
    noStroke()
    fill(255)
    ellipse(this.x, this.y, 10, 10)
  }
}

let canvas, bgColor
let points = []
let pointCount = 0

function calc() {
  
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');

  $("#calculate").click(() => {

  })
}

function draw() {
  background(bgColor);
  for (pt of points) {
    pt.draw()
  }
  
  fill(0, 255, 255)
  text("n = " + pointCount, 20, 20)
}

function mousePressed() {
  points.push(new Point(mouseX, mouseY))
  pointCount = points.length
}
