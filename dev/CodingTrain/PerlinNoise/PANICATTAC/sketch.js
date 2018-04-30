/* uses p5.js | by Plasmoxy | @template=fullscreen */

let canvas, bgColor;

let xoff = 0;

let messages = [
  "dud pls help",
  "y u no do somethin",
  "fag",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "aayayayayayayayayay",
  "this is really depressing",
  "Lorem ipsum dolor sit amet",
  "do you know da wae",
  "HELP ME"
];

let msg;

function randomMsg() {
  msg = random(messages);
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  stroke(255);
  fill(255);
  randomMsg();
  setInterval(randomMsg, 2000);
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
  text(msg, x, y + 50);
}
