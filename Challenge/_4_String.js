/*
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/

let x = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(`${x.charAt(2).toUpperCase()}${x.slice(3, 6)}` ); // Zero

// 8 H
console.log((x.charAt(13).repeat(8)).toUpperCase()); // HHHHHHHH

// Return Array
console.log(x.split(' ', 1)); // ["Elzero", "Web", "School"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${x.substr(0, 6)} ${x.substr(11, 6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${x.toLowerCase().charAt(0)}${x.slice(1, -1).toUpperCase()}${x.toLowerCase().charAt(x.length-1)}`); // eLZERO WEB SCHOOl
