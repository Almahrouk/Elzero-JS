/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

console.log(typeof console.log); // function

/* To Create Function

function function_Name (parameter_1, parameter_2, parameter_3, ...){
    Block of code;
    / Return Something ;
}

function_Name(try_value);

paremeter == variable
call == value
*/


function sayHello(userName) {
    console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");






// *********************************



/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(1982, 2021, 2020);











/*
    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interrupting
*/

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `Interrupting`;   // Stope Execution For Code
        }
        console.log(i);
    }
}

generate(10, 20);














//* 






/*
    Function
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //   age = "Unknown";
    // }
    // age = age || "Unknown";
    return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());
// "Hello Unknown Your Age Is Unknown"











/*
    Function
    - Rest Parameters     // Allow Unkown Number of parameter
    - Only One Allowed
    - Must Be Last Element
*/


// ...numbers ===> This is Array of argument
// console.log(Array.isArray(numbers));  // true

function calc(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));









//*




/*
    Function Advanced Practice
    - Parameters
    - Default
    - Rest
    - Loop
    - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
        } else {
            document.write(`<p>Skills: No Skills</p>`);
        }
    } else {
        document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");








//*


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






//*


/*
    Function
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
    console.log("Good");
}, 2000);






//*

/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Osama", "Mohamed"));



  // Example 2

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));


// Example 3

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));





//*


/*
    Function
    - Arrow Function
    -- Regular vs Arrow [Param + No Param]
    -- Multiple Lines
*/

let Print = function () {
    return 10;
};

let Print_1 = () => 10;
/*
let Print_1 = () => {
    return 10;
}
*/
//let Print_1 = _ => 10;




let Print_2 = function (num) {
    return num;
};

let Print_3 = num => num;




let Print_4 = function (num1, num2) {
    return num1 + num2;
};

let Print_5 = (num1, num2) => num1 + num2;

console.log(Print(100, 50));



//*
/*
    Scope
    - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();



//*

/*
    Scope
    - Block Scope [If, Switch, For]
*/



var x = 10;

if (10 === 10) {
    var x = 50;
}
console.log(x);  // 50 ===> Overwrite


var y = 30;
if (10 === 10) {
    let y = 90;
}
console.log(y);  // 30 ===> when you use let >> create your own scope





var z = 10;

if (10 === 10) {
    let z = 50;
    console.log(`From If Block ${z}`);   // 50
}

console.log(`From Global ${z}`); // 10
















//*
/*
    Scope
    - Lexical Scope

    Search
    - Execution Context
    - Lexical Environment
*/

function parent() {
    let a = 10;

    function child() {
        console.log(a);
        console.log(`From Child ${b}`);

        function grand() {
            let b = 100;
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        grand();
    }
    child();
}
parent();