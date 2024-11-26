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