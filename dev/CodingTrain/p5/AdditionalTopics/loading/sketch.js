/* uses p5.js | by Plasmoxy */

let canvas, bgColor;
let song;
let angle = 0;

function loadTheSong(file) {
  function onSongLoad(name) {
    console.log('loaded');
  }
  song = loadSound(file, onSongLoad);
}

function setup() {
  bgColor = color(10);
  canvas = createCanvas(windowWidth, windowHeight);
  
  loadTheSong('/assets/sound/blueheron.mp3');
  
  console.log(millis());
  //song.play();
}

function draw() {
  background(bgColor);
  
  push()
  translate(width/2, height/2);
  rotate(angle);
  strokeWeight(4);
  stroke(255);
  line(0, 0, 100, 0);
  angle += 0.1;
  pop();
    
}
