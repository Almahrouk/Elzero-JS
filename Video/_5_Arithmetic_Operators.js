/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post / Pre ]      
        num++ => Post
        ++num => Pre

    -- Decrement [ Post / Pre ]
        num-- => Post
        --num => Pre

*/

console.log(10 + 20);       //30
console.log(10 + "Osama"); // 10Osama

console.log(10 - 20);      //-10
console.log(10 - "Osama"); // NaN   =>> Not A Number
console.log(typeof NaN);   // Number

console.log(10 * 20);     // 200
console.log(10 * -20);    // -200

console.log(20 / 5);    // 4
console.log(20 / 3);    // 6.66666666667

console.log(2 ** 4);          // 16 
console.log(2 * 2 * 2 * 2);   // 16

console.log(10 % 2); // 0
console.log(11 % 2); // Remove 1



var num = 1;
console.log("Pos: ", num++);         //Post : 1, Result: undefined
console.log("Pre:", (++num));        //Result: 3

console.log("Pos: ", num--);         //Post : 3, Result: undefined
console.log("Pre:", (--num));        //Result: 1
