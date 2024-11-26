/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]

    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

console.log(+100);   //Num
console.log("100");  //Str

console.log(+"100");  //   =>>> Become a Num == 100
console.log(+"-100"); //   =>>> Become a Num == -100

console.log(+"Osama");  // NaN => Not A Num

console.log(+"15.5");  // =>>> Become a Num == 15.5
console.log(+0xff);    // a hexa num become => dec num ====> 255
console.log(+null);    // 0
console.log(+false);   // 0
console.log(+true);    // 1

console.log(-100);    // -100
console.log(-"100");  // -100
console.log(-"-100"); // 100
console.log(-"Osama");// NaN
console.log(-"15.5"); // -15.5
console.log(-0xff);   // -255
console.log(-null);   // -0
console.log(-false);  // -0
console.log(-true);   // -1

console.log(Number("100"));  // 100