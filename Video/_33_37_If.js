/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);




// ***************************************************************



/*
  Nested If

if( condition ){
    if( condition ){
        if( condition ){}
            if( condition ){}
            else{}
        else if(){}
        else if(){}
        else {}
    else if(){}
    else if(){}
    else {}
    }
else if(){}
else if(){}
else{}
}
*/

//let price = 100;
//let discount = false;
//let discountAmount = 30;
let country_2 = "Egypt";
let student = true;

if (discount === true) {
    price -= discountAmount;
} 
else if (country_2 === "Egypt") {
    if (student === true) {
        price -= discountAmount + 30;
    } 
    else {
        price -= discountAmount + 10;
    }
} 
else {
    price -= 10;
}

console.log(price);




// *********************************************************




/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20  // condition 1
  ? console.log(20)  // If condition 1 True
  : theAge > 20 && theAge < 60  // condition 2
  ? console.log("20 To 60") // else If condition 2 True
  : theAge > 60 // condition 3
  ? console.log("Larger Than 60") // else If condition 3 True
  : console.log("Unknown"); // else => If Non of condition True


// **********************************


/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));   // true
console.log(Boolean(-100));  // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false

let price_1 = 0;

console.log(`The Price Is ${price_1 || 200}`);  // 0 || 200 => 200
console.log(`The Price Is ${price_1 ?? 200}`);  // 0 ?? 200 => 0





// *****************************************************


/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if ("????" === "w") {
  console.log("Good");
}

if ("????" !== "string") {
  console.log("Good");
}

if ("????" === "number") {
  console.log("Good");
}

if ("????" === "ElzeroElzero") {
  console.log("Good");
}