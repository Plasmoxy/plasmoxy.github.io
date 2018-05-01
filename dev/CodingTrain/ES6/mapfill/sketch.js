
let arr = [2, 3, 4, 5];

// map applies to every element
arr = arr.map(x => x*2);

let arr2 = Array(30);
arr2.fill(2);
//console.log(arr2);


let arr3 = Array(100).fill().map((a, i) => i%2);
//console.log(arr3);
