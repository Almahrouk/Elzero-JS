/*
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/

var myTitel = "Elzero" , descriptionOne = "Elzero Web School", studentDate = "25/10";
var Div = `
    <div>
        <h3> Hello ${myTitel} </h3>
        <p>${descriptionOne}</p>
        <span>${studentDate}</span>
    </div>
`;

Div.repeat(4);






// ************************************************************************************************


/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] [+] [+b],[b++] [+] [+] [c++] [-] [+] [a++]  -> 11 + 20 + 80 - 11  => 100
a = 12
b = 21
c = 81
[++a] [+] [-b] [+] [+] [c++] [-] [-a][a++] [+] [+a] -> 12 - 21 + 81 + 13 + 14 =>  99
a = 14
b = 21
c = 82
[--c] [+] [+b] [+] [--a] [*] [+b][b++] [-] [+b] [*] [a] [+] [--a] [-] [+true] => 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 => 100
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log((++e) * ++g + -d + ++f); // 173






// ********************************************************************

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










// ****************************************


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























// ********************************************


/*
    If Condition Challenge
*/

let r = 10;

if (r < 10) {
    console.log(10);
    } 
else if (r >= 10 && r <= 40) {
    console.log("10 To 40");
} 
else if (r > 40) {
    console.log("> 40");
} 
else {
    console.log("Unknown");
}

console.log(  (r < 10) ? 10 : (r >= 10 && r <= 40) ? "10 To 40" : (r > 40) ? "> 40" : "Unknown" );

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";
if (typeof st === typeof "34") {
    console.log("Good");
}
// W Position May Change
if (st.toLowerCase().includes("w")) {
    console.log("Good");
}
if (!(typeof st) !== "string") {
    console.log("Good");
}
if ((typeof st.length) === "number") {
    console.log("Good");
}
if ((st.split(" ", 1).toString().repeat(2)) === "ElzeroElzero") {
    console.log("Good");
}






















// 



/*
    Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} 
else if (job === "IT" || job === "Support") {
    salary = 6000;
} 
else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} 
else {
    salary = 4000;
}
console.log(salary);
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
    case "Developer":
    case "Designer":
        salary = 7000;
    default:
        salary = 4000;
}
console.log(salary);


/*
    If Challenge
*/

let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}






























// *************************
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
















































// ************

/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let count = 0;
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

let myAd = [];
for (let i=0; i<myAdmins.length; i++) {
    myAd.push(myAdmins[i]);
    if(myAdmins[i+1].charAt(0).includes(myAdmins[i].charAt(0))){
        break;
    }
}

for (let i=0; i<myAd.length; i++) {
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${i} Is ${myAd[i]}</div>`);
    document.write(`<h3>Team Members: </h3>`);
    for(let j=0; j<myEmployees.length; j++) {
        if(myAd[i].charAt(0) === myEmployees[j].charAt(0)) {
            document.write(`<p>-${j} ${myEmployees[j]} </p>`);
        }
    }
}





















































// *****
/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function showDetails(one, two, three){
    var all = [one, two, three];
    var name, age, gender;
    
    for(let i=0; i<all.length; i++) {
        if(typeof all[i] === 'string'){
            name = all[i];
        }
        if(typeof all[i] === 'number'){
            age = all[i];
        }
        if(typeof all[i] === 'boolean'){
            gender = all[i];
        }
    }
    
    /*
    name = (typeof one === 'string'? one:
            typeof two === 'string'? two:
            three);
    age =  (typeof one === 'number'? one:
            typeof two === 'number'? two:
            three);
    gender = (typeof one === 'boolean'? one:
            typeof two === 'boolean'? two:
            three);
    */
    if(gender === false) {
        gender = "Not ";
    }
    else {
        gender = "";
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${gender}Available For Hire`);
}





































/*
    Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
let names = function (...namess) {
    // Parameter ?
    return `String [${namess.join('], [')}] => Done !`;
};

let Names = (...Names) => `String [${Names.join('], [')}] => Done !`;


console.log(Names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */


// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => "???";

console.log(calc(10, "???", "???")); // 80




//

let myNumber = [20, 50, 10, 60];

let cal = (one, two, ...nums) => -one - two + nums.reduce((acc, num) => acc + num, 0);

console.log(cal(10, 10, ...myNumber)); // 80
