/*
  Number
  - Double Precision
  - Syntactic Sugar "_"      => .  => 1000 == 1_000 = 1K
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);  // Syntactic Sugar "_"  => 1000000 
// 1000000 == 1_000_000

console.log(1e6);   // e => N.O Of Zeros => ( 1e6 == 1000000 == 1_000_000 )

console.log(10 ** 6);   // 10 ** 6 == 10 ^ 6 == 1_000_000 
console.log(10 * 10 * 10 * 10 * 10 * 10);

console.log(1000000.0000);   // 1000000
console.log(1000000.0001);   // 1000000.0001


console.log(Number("10"));  // 10 -As Number-
console.log(typeof Number); // Function



console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(Number.MAX_VALUE);               // 1.7976931348623157E+308
console.log(Number.MAX_VALUE + 23434343434); // 1.7976931348623157E+308  -Same- 
