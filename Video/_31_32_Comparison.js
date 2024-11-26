/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // True        Compare Value Only          => Don't Care About Data Type
console.log(-100 == "-100"); // True    Compare Value Only
console.log(10 != "10"); // False       Compare Value Only

console.log(10 === "10"); // False      Compare Value + Type        => Care About Data Type
console.log(10 !== "10"); // True       Compare Value + Type
console.log(10 !== 10); // False        Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");   // String === String



// ****************************************************************************



/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);  // True
console.log(!true); // False

console.log(!(10 == "10"));  // False

console.log(10 == "10" && 10 > 8 && 10 > 50);  // True && True && False ===> False

console.log(10 == "10" || 10 > 80 || 10 > 50); // True || False || False ===> True