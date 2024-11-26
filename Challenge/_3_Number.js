
/*
    Number Challenge
*/

let A = 100;
let B = 2_00.5;
let C = 1e2;
let D = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(A, B, C, D)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(A, Math.trunc(D))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(D));
console.log(Math.round(D));
console.log(Math.floor(D));
console.log(D.toFixed(0));

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number