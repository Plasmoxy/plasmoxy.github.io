/* uses p5.js | by Plasmoxy */

let data;

function preload() {
  data = loadJSON('/data/ct/birds_antarctica.json');
}

function setup() {
  noCanvas();

  let birds = data.birds;

  for (let family of birds) {
    createElement('h1', family.family);
    for (let member of family.members) {
      createDiv(member);
    }
  }

}

function draw() {}
