var bounds = {
  width: 0,
  height: 0
};

var graphBounds = {
  min: -1.0,
  max: 1.0,
  step: 0.1
};


var f = function(x) {return x;};

function setup() {
  bounds.width = windowWidth - 15;
  bounds.height = windowHeight - 20;
  createCanvas(bounds.width, bounds.height);

  background(0);
  stroke(255, 0, 0);

  for (i = -1; i<=1; i++) {
    point(i + 200, f(i) + 200);
  }

}

function draw() {

}
