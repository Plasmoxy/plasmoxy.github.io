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

// swaggity swooty obejct
new function() {
  this.name = "";
  this.setName = function(name) {
    this.name = name;
    return this;
  },
  this.introduce = function() {
    document.write("Hello, I am " + this.name);
    return this;
  }
}().setName("John").introduce();

br();
