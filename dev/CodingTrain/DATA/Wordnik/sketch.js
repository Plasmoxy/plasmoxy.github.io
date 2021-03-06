/* uses p5.js | by Plasmoxy | @template=hybrid */

function getRelated(word, callback, error) {
  loadJSON(
    'https://api.wordnik.com/v4/word.json/'
    +word
    +'/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
  ,callback,error);
}

function setup() {
  noCanvas();
  select('#word').changed(loadData);
  select('#submit').mousePressed(loadData);
}

function loadData() {
  getRelated(select('#word').value(), gotData, gotError);
}

function gotData(data) {
  select('#synonyms').html(''); // clear
  console.log(data);
  for (let obj of data) {
    if (obj.relationshipType == 'synonym') {
      for (let syn of obj.words) {
        select('#synonyms').child(createDiv(syn));
      }
    }
  }

}

function gotError(err) {
  console.log(err);
}

function draw() {}
