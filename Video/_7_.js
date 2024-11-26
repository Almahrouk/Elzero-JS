/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let a = "100";
let aa = "Dana";
let b = 20;
let c = true;


console.log( a + b );   //10020
console.log( +a + b );   //120
console.log( Number(a) + b );   //120
console.log( a - b );   //80

console.log( aa + b );   //Dana20
console.log( aa - b );   //NaN



console.log(+a + b + c);
//console.log(Number("100"));  // 100
console.log(Number(a) + b + c);










/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let x = "10";
let y = 20;
let z = true;

console.log(x + y);      // 1020
console.log(+x + y);     // x become a Number  30   
console.log(Number(x) + y);      //1020
console.log(x - y);      // -10   => Tytasting



console.log(+"");   // 0
console.log("" -2);   // -2   => 0 - 2 = -2

console.log(true - false);   // 1 - 0 = 1
console.log(+true - +false);   // 1 - 0 = 1

console.log(y + z);  // 20 + 1 = 21
console.log(x + y + z);  // 1020true
console.log(+x + y + z); // 31