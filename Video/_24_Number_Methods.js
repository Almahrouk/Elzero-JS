/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());     // Conver A Number 100 => To String 100
console.log(100..toString());     // 100
//console.log(100.toString());   // Error
console.log(100.10.toString());    // 100.1

console.log(100.555555.toFixed(2));  // 100.56
console.log(100.554555.toFixed(2));  // 100.55


console.log(Number("100"));       // Conver A String 100 => To Number 100
console.log(+"100");              // Conver A String 100 => To Number 100
console.log(parseInt("100"));     // Conver A String 100 => To Number 100





console.log(Number("100 Osama"));    // NaN
console.log(+"100 Osama");           // NaN
console.log(parseInt("100 Osama"));  // 100


console.log(parseInt("Osama 100 Osama")); // NaN


console.log(parseInt("100.500 Osama"));   // 100
console.log(parseFloat("100.500 Osama")); // 100.5
console.log(parseFloat("100.00 Osama"));  // 100


console.log(Number.isInteger("100"));      // false
console.log(Number.isInteger(100.500));    // false
console.log(Number.isInteger(100));        // true
console.log(Number.isInteger(100.00));      // true


console.log(Number.isNaN("Osama"));      // false
console.log(Number.isNaN("Osama" / 20)); // true
