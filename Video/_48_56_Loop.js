/*
  Loop
  - For
  for ([1] [2] [3]) {
    Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}







// **************************** 49 - Loop On Sequences


/*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }





// **************************** 50 - Nested Loops And Trainings

/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}


/*
###############
# Keyboard
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Mouse
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Pen
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Pad
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021
###############
# Monitor
###############
Colors: 
- Red
- Green
- Black
Models: 
- 2020
- 2021

*/






// ************************* 51 - Loop Control – Break, Continue, Label

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

//let products = ["Keyboard", "Mouse", "Pen", 2, 10, "Pad", 33, "Monitor"];
//let colors = ["Red", "Green", "Black"];

for(let i=0; i<products.length; i++){
    if(products[i]=="Pen"){
        break;
    }
    console.log(products[i]);
}
/*
Keyboard
Mouse
*/



for(let i=0; i<products.length; i++){
    console.log(products[i]);
    if(typeof products[i]== "number"){
        continue;
    }
}
// All Value will print
/*
Keyboard
Mouse
Pen
2
10
Pad
33
Monitor
*/




for(let i=0; i<products.length; i++){
    if(typeof products[i]== "number"){
        continue;
    }
    console.log(products[i]);
}
// Only str will print
/*
Keyboard
Mouse
Pen
Pad
Monitor
*/




mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
      console.log(`- ${colors[j]}`);
    }
  }

/*

Keyboard
- Red
- Green
- Black
Mouse
- Red
- Green
- Black
Pen
- Red
- Green
- Black
Pad
- Red
- Green
- Black
Monitor
- Red
- Green
- Black

*/





mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}




// **** 
/*
  Loop For Advanced Example
*/


products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}









// ************************** 53 - Practice – Add Products To Page

/*
  Products Practice
*/

//let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
//let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}















// ******************************

/*
  Loop
  - While
*/

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;

while (index < 10) {   // Wrong
  console.log(products[index]);
  index += 1;
}

while (index < products.length) {   // Correct
  console.log(products[index]);
  index += 1;
}






// *******************************************

/*
  Loop
  - Do / While
*/

//let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
//let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);





// ***********************

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let ShowCount = 5;

document.write(`<h1>Show ${ShowCount} Products</h1>`);

for(let i=0; i<ShowCount; i++){
  document.write(`<div>`);
  document.write(`<h3>[${i+1}] ${products[i]}</h3>`);
  for(let j=0; j<colors.length; j++){ //Nested Loop
    document.write(`<p>${colors[j]}</p>`);
  }

  // Make a Join
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</h3>`);

}