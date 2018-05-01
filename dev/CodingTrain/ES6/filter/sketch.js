let arr = [1, 2, 3, 8, 1];

let isEven = (a) => a%2;

// factory function
let biggerThan = (num) => {
  return (a) => a > num;
};

console.log(arr.filter(isEven));
console.log(arr.filter(biggerThan(2)))
