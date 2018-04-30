/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let xoff = 0;

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  stroke(255);
  fill(255);

}

function draw() {
  background(bgColor);

  textSize(30);
  text("UYYY AM HAV PANIC ATTAC :(((", 20, 40);

  let x = noise(xoff)*width;
  let y = noise(xoff+1)*height;
  xoff += 0.02;;

  textSize(30);
  textAlign(CENTER);
  ellipse(x, y, 24, 24);
  text("dud pls help", x, y + 50);
}
