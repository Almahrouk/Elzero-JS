
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