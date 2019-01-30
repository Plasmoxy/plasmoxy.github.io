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
let sum = 0

function calc() {
  // clear perm
  perm.clear()
  perm.stroke(255, 0, 255)
  perm.strokeWeight(2)

  // true for already used points
  let state = new Array(points.length).fill(false)

  // current point iterator
  let current = 0

  // reset sum
  sum = 0

  while(true) {
    let closest = -1
    let m = 10000 // set big minimum

    // check all points except current (d > 0)
    for (let i = 0; i < points.length; i++) {
      
      // if that points has been used, dont check for it anymore
      if (state[i]) continue

      // get points and their distance
      let A = points[current] // current point
      let B = points[i] // target point
      let dx = B.x - A.x
      let dy = B.y - A.y
      let d = Math.sqrt(dx**2 + dy**2)

      // if that point is closer, set it as closest
      if (d > 0 && d < m) {
        m = d
        closest = i
      }
    }

    // if no point is closer, closest should be -1 -> break out of while
    if (closest == -1) {
      break
    }

    // set state of current point as used
    state[current] = true

    // draw a line from current to closest
    let A = points[current]
    let B = points[closest]
    perm.line(A.x, A.y, B.x, B.y)

    // set closest point as current point and continue
    current = closest

    // add to sum
    sum += m

    // print current point
    console.log("Current point = " + current)
  }
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth - 50, windowHeight - 100);
  canvas.parent('canvasroot');

  perm = createGraphics(windowWidth - 50, windowHeight - 100);

  $("#calculate").click(() => {calc()})
  $("#reset").click(() => {
    points = []
    perm.clear()
  })
}

function draw() {
  background(bgColor);
  for (pt of points) {
    pt.draw()
  }
  
  fill(0, 255, 255)
  text("n = " + points.length, 20, 20)
  text("sum = " + sum, 20, 40)

  image(perm, 0, 0) // draw graphics
}

function mousePressed() {
  if (mouseX > 0 && mouseY > 0 && mouseX < canvas.width && mouseY < canvas.height) {
    let pt = new Point(mouseX, mouseY)
    points.push(pt)
  }
}
