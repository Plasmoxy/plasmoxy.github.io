let arr = [1, 2, 3, 8, 1];

let isEven = (a) => a%2;

// factory function
let biggerThan = (num) => {
  return (a) => a > num;
};

console.log(arr.filter(isEven));
console.log(arr.filter(biggerThan(2)))

let str = "It was   a dark and cold night.";
let words = str.split(/\W+/).filter(s => s.length > 3);
console.log(words);
