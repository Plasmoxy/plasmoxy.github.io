// addup

let arr4 = [1, 2, 3, 4];
let sum = 0;

let summation = (acc, val) => acc + val;
sum = arr4.reduce(summation);
console.log(sum);

// find max
let arr5 = [2, 3, 54, 1, 53];
let findMax = (acc, val) => {
  if (val > acc) {
    acc = val;
  }
  return acc;
};

console.log(arr5.reduce(findMax));
console.log(arr5.reduce((acc, val) => val > acc ? val : acc));
