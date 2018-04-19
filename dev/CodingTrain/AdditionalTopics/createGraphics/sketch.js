/* uses p5.js | by Plasmoxy */

let canvas, bgColor;

let graphics;
let btn;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);

  graphics = createGraphics(windowWidth, windowHeight);

  btn = createButton("CLEAR");
  btn.position(5, 5);
  btn.mousePressed(graphics.clear);

  graphics.push();
  graphics.textSize(30);
  graphics.textAlign(CENTER);
  graphics.noStroke();
  graphics.fill(255, 0, 255);
  graphics.text("Helou guis, and today I'am preset you my draw,", width/2, height/2);
  graphics.pop();
}

function draw() {
  background(bgColor);
  image(graphics, 0, 0);
  //background(bgColor);
  if (mouseIsPressed) {
    graphics.strokeWeight(5);
    graphics.stroke(0, 255, 255);
    graphics.line(pmouseX, pmouseY, mouseX, mouseY);
  }

  fill(255, 255, 0);
  noStroke();
  ellipse(mouseX, mouseY, 5, 5);

}
