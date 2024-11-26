
/*
    Data types Intro
        - String
        - Number
        - Array => Object
        - Object => key & value
*/

console.log("Osama Mohammed");
console.log(typeof "Osama Mohammed"); // string

console.log(typeof 200); // number
console.log(typeof 200.564); // number

console.log(typeof [18, 31, 23]); // array => object
console.log(typeof ["da", "mo", "eg"]); // array => object

console.log(typeof { name: "Osama", age: 17, country: "jo" }); //object

console.log(typeof false); // Bool
console.log(typeof undefined); //
console.log(typeof null); //

/**                   Variable                  **/

/*
    Variables Intro
    - What Is Variable ?
    - Why We Use Variables ?
    - Declare A Variable And Use
    - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
    - Variable Without Var
    - Multiple Variables In The Same Line
    - Id And Global Variable
    - Loosely Typed vs Strongly Typed
*/
console.log(user); // undefined

var user = "Osama";
var age = 20;

console.log(user);
console.log(user);
console.log(user);

// You Can Accsses HTML id var
console.log(hello);
hello.innerHTML = "Option";

/**                   Variable                  **/
/*
    Identifiers
    - Name Conventions And Rules
    - Reserved Words

    - Camel Case => nameName
*/

// var us er = "Sayed"     => Space => not valid
// var 1user = "Sayed"     => Start With No  => not valid

// var #user = "Sayed"     => use spicial char => not valid
// var us$er = "Sayed"     => use spicial char => not valid
// var user@ = "Sayed"     => use spicial char => not valid

// var us_er = "Sayed"     => underline => valid
// var $user$ = "Sayed"    => doler sine => valid

/**                   Var & Let & const                  **/
/*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
*/

var a = 2;
var a = 3; //Redeclare (Yes)

// let q = "3";
// let q = "a"; Redeclare (No => Error)






/*** */



/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\ Web \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");





