/* uses p5.js | by Plasmoxy */



let sketch = function(p) {
  
  p.setup = function() {
    p.createCanvas(p.windowHeight, p.windowWidth);
    p.background(10);
  }
  
  p.draw = function() {
    ellipse(50,50,50,50);
  }
  
}


let project = new p5(sketch);
