var tu;

var bounds = {
  width: 0,
  height: 0
};

var graphConf = {
  minX: -5.0,
  maxX: 5.0,
  minY: -5.0,
  maxY: 5.0,
  step: 0.001
};

var functions = [
  { f: function(x) {return x;}, clr: [255, 0, 0] },
  { f: function(x) {return sin(x);}, clr: [0, 255, 0]},
  { f: function(x) {return 1/x;}, clr: [0, 0, 255]},
  { f: function(x) {return tan(4*x);}, clr: [0, 255, 255]}
];

function relativeX(x) {
  return map(x, graphConf.minX, graphConf.maxX, 0, bounds.width);
}

function relativeY(y) {
  return bounds.height - map(y, graphConf.minY, graphConf.maxY, 0, bounds.height);
}

function setup() {
  bounds.width = windowWidth - 15;
  bounds.height = windowHeight - 20;
  tu = bounds.width / 64;
  createCanvas(bounds.width, bounds.height);

  background(0);

  // draw guide lines
  stroke(255, 255, 255);
  fill(255, 255, 255);

  line(
    bounds.width/2, 0,
    bounds.width/2, bounds.height
  );
  line(
    0, bounds.height/2,
    bounds.width, bounds.height/2
  );

  textSize(tu);
  // draw number lines and stuff
  for (i = graphConf.minX; i<=graphConf.maxX; i++) {
    line(
      relativeX(i), bounds.height/2 - 5,
      relativeX(i), bounds.height/2 + 5
    );
    text(""+i, relativeX(i) - 5, bounds.height/2 + 20)

  }

  for (i = graphConf.minY; i<=graphConf.maxY; i++) {
    line(
      bounds.width/2 - 5, relativeY(i),
      bounds.width/2 + 5, relativeY(i)
    );
    text(""+i, bounds.width/2 - 15, relativeY(i) + 5);
  }

  // draw each function
  functions.forEach(function(obj, index) {
    stroke(obj.clr[0], obj.clr[1], obj.clr[2]);
    for (x = graphConf.minX; x<=graphConf.maxX; x+=graphConf.step) {
      point(
        relativeX(x),
        relativeY(obj.f(x))
      );
    }
  });

}

function draw() {

}
