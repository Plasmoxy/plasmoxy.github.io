
function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0, 50);
  noStroke();
}

function draw() {
  let x = random(200) - 100, y = random(200) - 100;
  if (mouseIsPressed) ellipse(mouseX, mouseY, 5, 5);
}
