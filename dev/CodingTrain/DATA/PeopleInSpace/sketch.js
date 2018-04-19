/* uses p5.js | by Plasmoxy | @template=hybrid */


function setup() {
  let c = createCanvas(200, 200);
  loadJSON('https://api.open-notify.org/astros.json', gotData);
}

function gotData(data) {
  createElement('h1', 'People in space : ');
  for (let i = 0; i < data.number; i++) {
    let person = data.people[i];

    fill(255);
    ellipse(random(width), random(height), 16, 16);
    createDiv(person.name + ' - ' + person.craft);
  }
}

function draw() {}
