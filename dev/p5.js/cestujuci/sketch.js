/* uses p5.js | by Plasmoxy | @template=gui */


class Point {
  constructor(x, y){
    this.x = x
    this.y = y
  }

  draw() {
    noStroke()
    fill(255)
    ellipse(this.x, this.y, 10, 10)
  }
}

let canvas, bgColor, perm
let points = []
let pointCount = 0

function calc() {
  let state = new Array(points.length).fill(false)
  let current = 0
  while(true) {
    let closest
    for (let i = 0; i < points.length; i++) {
      let A = points[i]
      let B = points[current]
      let dx = A.x - B.x
      let dy = A.y - B.y
      let d = Math.sqrt(dx**2 + dy**2)
      if (d > 0 && d < min) {
        min = d
        perm.stroke(255, 0, 0)
        perm.line(A.x, A.y, B.x, B.y)
      }
    }
    console.log(min)
    break
  }
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(600, 300);
  canvas.parent('canvasroot');

  perm = createGraphics(600, 300);

  $("#calculate").click(() => {calc()})
}

function draw() {
  background(bgColor);
  for (pt of points) {
    pt.draw()
  }
  
  fill(0, 255, 255)
  text("n = " + pointCount, 20, 20)

  image(perm, 0, 0) // draw graphics
}

function mousePressed() {
  if (mouseX > 0 && mouseY > 0 && mouseX < canvas.width && mouseY < canvas.height) {
    let pt = new Point(mouseX, mouseY)
    points.push(pt)
    pointCount = points.length
    console.log(pt)
  }
}
