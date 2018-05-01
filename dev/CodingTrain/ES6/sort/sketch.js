let vals = [ {x:2, y:6}, {x:1, y:2}]

console.log(vals.slice());
vals.sort((a, b) => a.x > b.x ? 1 : -1);
console.log(vals.slice());

console.log("== WORDS ==");
let words = "It was a dark but wonderful night".split(' ');
words.sort((a, b) => a.length - b.length);
console.log(words);
