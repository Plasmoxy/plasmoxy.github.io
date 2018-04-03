/* uses p5.js | by Plasmoxy */

/* I have an array of points,
  how can I every point to every another point so
  that the sum of all lengths of those connections
  is minimal ? */
  
  
/* SOLUTION: Prim's algorithm */
/*
let there be vertices: unreached or reached 
let all be unreached at start
let pick a vertex -> now a reached vertex
? to which v can i connect this v, so i have minimal distance ?
-> check others, pickup minimal
(first complete)
-> for entire set of reached (foreach reached in set), check all unreached
select minimal dist as reached
(continue iteration, construct reached body)

*/

let canvas, bgColor;

let vectors = [];

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  
  
}

function mousePressed() {
  vectors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(bgColor);
  
  let reached = [];
  let unreached = [];
  
  // all unreached
  for (let v of vectors) {
    unreached.push(v);
  }
  
  // push first from unreached
  reached.push(unreached[0]);
  unreached.splice(0, 1);
  
  while (unreached.length > 0) {
    let minimum = 10000; // impossible start
    let rIndex;
    let uIndex;
    
    for (let ri = 0; ri < reached.length; ri++) {
      for (let ui = 0; ui < unreached.length; ui++) {
        let vr = reached[ri];
        let vu = unreached[ui];
        
        let d = dist(vr.x, vr.y, vu.x, vu.y); // check distance
        
        if ( d < minimum ) {
          minimum = d;
          // store indexes of shortest one
          rIndex = ri;
          uIndex = ui;
        }
      }
    }
    
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    
    // push minimum distance reached to unreached
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
    
  }
  
  // draw vectors
  fill(255);
  stroke(255);
  for (let v of vectors) {
    ellipse(v.x, v.y, 16, 16);
  }
  
}
