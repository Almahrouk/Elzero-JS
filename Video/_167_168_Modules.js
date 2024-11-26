/*

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <script src="main.js" type="module"></script>
    <script src="app.js" type="module"></script>
  </body>
</html>

*/



// main.js
/*
  Modules
  - Import And Export
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };





// app.js
import { a, arr, saySomething as s } from "./main.js";

console.log(a);
console.log(arr);
console.log(s());
















// Named vs Default Export And Import All


/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

// main
let A = 10;
let Arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { A as myNumber, Arr, saySomething };

export default function () {
  return `Hello`;
}

// app
// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.Arr);