/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2)); // 99 down
console.log(Math.round(99.5)); // 100 up

console.log(Math.ceil(99.2));  // 100
console.log(Math.floor(99.9)); // 99

console.log(Math.trunc(99.1));  // 99
console.log(Math.trunc(99.5));  // 99
console.log(Math.trunc(99.9));  // 99


console.log(Math.min(10, 20, 100, -100, 90));   // -100
console.log(Math.max(10, 20, 100, -100, 90));   // 100

console.log(Math.pow(2, 4));   // 2 ^ 4 = 2 ** 4 = 16
console.log(Math.random());    // random number
console.log(Math.trunc(99.5));