/*

Select        [Element + Att]
Get           [Att]
Set + Create  [Att]
Check         [Att]
Create        [Element + Att + Comment + TextNode + appendChild]
Deal With Childrens
Events
*/


/*
  DOM [Document Object Method]
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID  ==> Fast
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

/*
Use Array Way To Access ... 

document.getElementById("");
document.getElementsByTagName("p div h2 ...");
document.getElementsByClassName("");
document.querySelector("");
document.querySelectorAll("");

document.title
document.body
document.forms[0].one.value
document.links[1].href
document.images[0].className



************************

innerHTML
textContent

getAttribute("att-name");
setAttribute("att-name","value");


*************************

document.getElementsByTagName("p")[0].attributes;
document.getElementsByTagName("p")[0].hasAttribute("data-src");
document.getElementsByTagName("p")[0].hasAttributes();
document.getElementsByTagName("p")[0].removeAttribute("data-src");


**************************

- createElement
- createComment
- createTextNode
- createAttribute
- appendChild

*/


/*
<body>
  <span class="my-span">My Span</span>
  <p>Hellow Paragraph 1</p> 
  <p>Hellow Paragraph 2</p> 
  <div id="my-div">Hello Div</div>

  <form action="">
    <input type="text" name="one" value"Hello" />
  </form>
  <form action="">
    <input type="text" name="two" value"Hello" />
  </form>

  <a href="https://google.com">Google</a>
  <a href="https://facebook.com">Facebook</a>

  <script src="main.js"></script>
</body>
*/


let myIdElement = document.getElementById("my-div"); // Id is unique
let myTagElements = document.getElementsByTagName("p"); // Tag is Not unique
let myClassElement = document.getElementsByClassName("my-span"); // Class is Not unique
let myQueryElement = document.querySelector(".my-span"); // Any Type Of Selectors [.class | #id | ]
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement); // <div id="my-div">Hello Div</div>
console.log(myTagElements[1]); // 2nd <p> ==> <p>Hellow Paragraph 2</p>
//myTagElements[1].innerHTML = "Test";
//console.log(myTagElements[1]); // 2nd <p> ==> <p>Test</p>

console.log(myClassElement[1]);
console.log(myQueryElement); // Select The 1st only
console.log(myQueryAllElement[1]); // Select The 2st 


console.log(document.title); // [Name Of Page Title] => Learn JaveScript
console.log(document.body); // <body> ... </body>
console.log(document.forms[0].one.value); // Hello
console.log(document.links[1].href); // https://facebook.com/





// *******************************


/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute("att-name");
  --- setAttribute("att-name","value");

  Search
  - innerText
*/




/*
<body>
  <div class="js">JavaScript <span>Div</span>  <!--  &lt;span&gt;  --> </div>
  <img src="" alt="" />
  <a class="link" href="#">Google</a>
  <script src="main.js"></script>
</body>

*/


let myElement = document.querySelector(".js"); // Element which class name is js

// Get
console.log(myElement); // <div class="js">JavaScript <span>Div</span>  <!--  &lt;span&gt;  --> </div>
console.log(myElement.innerHTML); // JavaScript <span>Div</span>  &lt;span&gt; 
console.log(myElement.textContent); //  JavaScript Div <span>


// Set
myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";


// Set
document.images[0].src = "https://google.com"; // Overwrite
document.images[0].alt = "Alternate"; // Overwrite
document.images[0].title = "Picture"; // This Attribute is Not Define ==> It Wiil Create It
document.images[0].id = "pic";
document.images[0].className = "img";





let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class")); // link
console.log(myLink.getAttribute("href")); // #

myLink.setAttribute("href", "https://twitter.com"); // Change href att (from "link" to "https://twitter.com") 
myLink.setAttribute("title", "Twitter"); // This Att is not exist // Change title att (from none to "Twitter")





// ***********************

/*
  DOM [Check Attributes]
  - Element.attributes        -> All Element Att [none + has-value + empty]
  - Element.hasAttribute (T,F)-> check if element has Att [exist]
  - Element.hasAttributes
  - Element.removeAttribute
*/

/*
<body>
  <div>Div</div>
  <p class="para" title="Paragraph" data-src="Testing">Paragraph</p>
  <script src="main.js"></script>
</body>
*/


console.log(document.getElementsByTagName("p")[0].attributes); // NameNodeMap

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") { // If Empty 
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) { // Any Att
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}





// ******************************




/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

/*
<body>
  <script src="main.js"></script>
</body>
*/

let myElement = document.createElement("div");
console.log(myElement); // <div></div>


myElement.className = "product";
console.log(myElement); // <div class="product"></div>


let myAttr = document.createAttribute("data-custom"); // Create Att 
myElement.setAttributeNode(myAttr); // Set Att Empty 
myElement.setAttribute("data-test", "Testing");
console.log(myElement); // <div class="product"  data-custom  data-test="Testing" ></div>



let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");



// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);
console.log(myElement); // <div class="product"  data-custom  data-test="Testing" >Product One</div>

// Append Element To Body
document.body.appendChild(myElement);  // Now The Element Will Be in the body 

/*
<body>
  <!-- This Is Div -->
  <div class="product"  data-custom  data-test="Testing" >Product One</div>
</body>

*/


// ********************************



/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);















// ************************************


/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
    <script src="main.js"></script>
  </body>
</html>
*/


/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);






// *************************


/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu   => Right Click
  --- onmouseenter    => put mouse on element without click
  --- onmouseleave    => put mouse on element without click and leave

  --- onload
  --- onscroll
  --- onresize

  (form)
  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {  // Right Click ==> Ex: Google Drive
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};







// ***********************************

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/


/*
event.preventDefault(); ||||| Anomeuos Function
*/

/*

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
}

*/


/*
<body>
  <form action="">
    <input type="text" name="username" placeholder="Max 10 Chars Only" />
    <input type="text" name="age" placeholder="Can't Be Empty" />
    <input type="submit" value="Submit Data" />
  </form>
  <a href="https://google.com">Google</a>
  <script src="main.js"></script>
</body>

*/



let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");


document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
/*
  console.log(typeof userInput.value);
  console.log(typeof userInput.value.length);

  console.log(userInput.value);
  console.log(userInput.value.length);
*/

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};