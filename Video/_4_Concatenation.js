// *****************************************************************



/*
    Concatenation
*/

let aa = "We Love";
let AA = "JavaScript";

document.write(aa + " " + AA);

console.log(aa, AA);



/*
    Template Literals (Template Strings)
*/

// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";


// Old
console.log(a = " \"\" " + b +
"\n" + c + " " + d);


// New
console.log(`${a} "" '' \\ ${b}
${c} ${d}`);





// Second Example


//Old
//"use strict";
//var title = "Elzero";
//var desc = "Elzero Web School";
//var markup = "\n    <div class=\"card\">\n        <div class=\"child\">\n            <h2>".concat(title, "</h2>\n            <p>").concat(desc, "</p>\n        </div>\n    </div>\n");






//New
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