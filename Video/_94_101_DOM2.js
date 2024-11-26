/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};





// ************************************



/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

/*
<div id="my-div" class="one two show test">Div With Many Classes</div>
*/


let element = document.getElementById("my-div");

console.log(element.classList); // one two show test 
console.log(typeof element.classList); // Object
console.log(element.classList.contains("osama")); // false
console.log(element.classList.contains("show")); // true
console.log(element.classList.item("3")); // test

element.onclick = function () {
  // element.classList.add("three", "Osama");
  // element.classList.add("three", "Anaa");
  element.classList.toggle("show"); // Switches <add | remove>
};



// *********************************

/*
<link rel="stylesheet" href="main.css" />
<div id="my-div">Div With Many Classes</div>
*/

/*
div {
  font-size: 30px;
  line-height: 2;
}
*/

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

// Use CSS Coding
element.style.cssText = "font-weight: bold;  color: green;  opacity: 0.9;";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty(line-height);

// ***********************************


/*
  DOM [Deal With Elements]
  - Out Of Element
  --- before [Element || String]
  --- after [Element || String]

  - Inside The Element
  --- append [Element || String]
  --- prepend [Element || String]


  - remove
*/

/*
<div id="my-div"><spam></spam></div>
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// Put A Text (Before | After) An Element
element.before("Text Before This Element");
element.after("Text After This Element");
// The Div Will Become:
/*

"Text Before This Element"
<div id="my-div"><spam></spam></div>
"Text After This Element"

*/


// Put An Element (Before | After) An Element
element.after(createdP); // Paragraph

// element.remove();





// ***********************************



/*
  DOM [Traversing]  => Brothers
  - nextSibling
  - nextElementSibling

  - previousSibling
  - previousElementSibling

  - parentElement  ==> Father Element
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
}

// ***********************************


/*
  DOM [Cloning]
  - cloneNode(Deep)  => Copying
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);











// ***********************************

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;  // This Line Will Overwrite The Before Line

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";










// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// Attach Multiple Events
// It Can Attach More Than One Event At Same Time
// myP.addEventListener("click", one);
// myP.addEventListener("click", two);






// Error Test
// myP.addEventListener("click", "String"); // Error => You Must Use Object On The 2nd 

myP.onclick = function () {
  let newP = myP.cloneNode(true); // Copy P
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };


// Put Event To Element That Isn't Exest Yet
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});















// ***********************************
// ***********************************
// ***********************************
