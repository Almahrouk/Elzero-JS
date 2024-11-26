/*
    Array Challenge
*/
// slice => cut
// join => arr to str
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.splice(zero,counter+1).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero+1,counter).reverse()); // ["Elham", "Mazero"]

my.splice(zero,my.length);
my.push("Elzero")
console.log(my); // "Elzero"



console.log(`${my.join("").slice(-2,-1)}${my.join("").slice(-2)[1].toUpperCase()}`); // "rO"
