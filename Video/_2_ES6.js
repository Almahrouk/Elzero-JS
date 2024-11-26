/*
1] Loosely Typed vs Strongly Typed (JS|Python) (C++|JAVA|TS)
2] Variable Scope Drama (Window Object) != (Local Scope)
3] Double Precision
4] Syntactic Sugar "_" "e"

5] Dynamic Object Proparties
6] Strict Mode -> this changed

7] innerText
*/


/*
    ES6
*/

var myName = "Osama";

// Without ES6
console.log("Hello" + myName);


// With ES6
console.log(`Hello ${myName}`);

// ES6 & Python
// print(f"Hello {myName}")





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


//  *****

/*
  Template Literals (Template Strings)
*/

// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a = " \"\" " + b +
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);