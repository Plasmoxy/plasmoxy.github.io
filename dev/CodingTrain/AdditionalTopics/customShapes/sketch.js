/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function vertexCircle(xpos, ypos, spacing) {
  push();
  translate(xpos, ypos);
  beginShape();
  for (let i = 0; i < 360; i += spacing) {
    let x = 100*sin(i);
    let y = 100*cos(i);
    vertex(x, y);
  }
  endShape(CLOSE);



  pop();
}


function curveee() {
  push();
  beginShape();
  curveVertex(mouseX, mouseY);
  curveVertex(250, 50);
  curveVertex(350, 60);
  curveVertex(400, 200);
  endShape(CLOSE);

  strokeWeight(7);
  point(mouseX, mouseY);
  point(250, 50);
  point(350, 60);
  point(400, 200);
  pop();
}

function draw() {
  background(bgColor);
  noFill();
  stroke(color(0, 255, 225));

  //vertexCircle(width/2, height/2, map(mouseX, 0, width, 5, 100));
  curveee(width/2, height/2);

}
