// just testing objects

function br() {
  document.write("<br>");
}

function person() {
  this.name = "XD";
}

var a = new person();
document.write(a.name);

br();

document.write({name:4}.name);

br();

// array
var people = ["Jack", "Daniel", "Joe"];
document.write(people);
br();
var otherpeople = ["Lea", "Daphne"];
people = people.concat(otherpeople);
document.write(people);

br();
