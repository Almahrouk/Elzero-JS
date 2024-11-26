/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/


// As Same
console.log("Good"); // Good
window.console.log("Good"); // Good

// As Same
document.createElement("div");
window.document.createElement("div");


window.document.title = "Hello JS";


// We Can Use window keyword to Controll Every Thing About Window Of Brouser




// ***************************

// No Need To Used

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// Bad Object
alert("Test");
console.log("Test");

// New Better alert => sweetalert





let confirmMsg = confirm("Are You Sure?");
console.log(confirmMsg);

if (confirmMsg === true) {
  console.log("Item Deleted");
} else {
  console.log("Item Not Deleted");
}





let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
console.log(promptMsg);












// ***************************


/*
  BOM [Browser Object Model]
  To Call A Function After Set of Time 
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

setTimeout(function () {
  console.log("Msg");
}, 3000);




setTimeout(sayMsg, 3000);

function sayMsg() {
  console.log(`Iam Message`);
}



// Arcument
setTimeout(Msg, 3000, "Osama", 38);

function Msg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

//

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter_0 = setTimeout(sayMsg, 3000, "Osama", 38);
















// ***************************

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);








// ***************************

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href);

location.href = "https://google.com"; // Don't Delete The Last Web History Before This Web Visitors




/*
<div id="sec1">Section One</div>
<div id="sec2">Section Two</div>
*/
location.href = "/#sec02";


location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

console.log(location.host);     // 127.0.0.1:5500   [IP-DNS + Port]
console.log(location.hostname); // 127.0.0.1        [IP-DNS]

console.log(location.protocol); // http: | https:

console.log(location.hash);

location.reload();  // Do Reload To Page















// ***************************


/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
    window.open("", "_self", "", false);
  }, 2000);
  
  setTimeout(function () {
    window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
  }, 2000);


/*
Parameter	Description

URL	
The URL of the page to open.
If no URL is specified, a new blank window/tab is opened


name	
The target attribute or the name of the window.
The following values are supported:

Value	Description
_blank	URL is loaded into a new window, or tab. This is the default
_parent	URL is loaded into the parent frame
_self	URL replaces the current page
_top	URL replaces any framesets that may be loaded
name	The name of the window (does not specify the title of the window)




specs	
A comma-separated list of items, no whitespaces.
The following values are supported:

Value	                Description
fullscreen=yes|no|1|0	Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
height=pixels	        The height of the window. Min. value is 100
left=pixels	            The left position of the window. Negative values not allowed
location=yes|no|1|0	    Whether or not to display the address field. Opera only
menubar=yes|no|1|0	    Whether or not to display the menu bar
resizable=yes|no|1|0	Whether or not the window is resizable. IE only
scrollbars=yes|no|1|0	Whether or not to display scroll bars. IE, Firefox & Opera only
status=yes|no|1|0	    Whether or not to add a status bar
titlebar=yes|no|1|0	    Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
toolbar=yes|no|1|0	    Whether or not to display the browser toolbar. IE and Firefox only
top=pixels	            The top position of the window. Negative values not allowed
width=pixels	        The width of the window. Min. value is 100
*/














// ***************************

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);







// ***************************

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth"
});




// ***************************
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};


// ***************************

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/


// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);


// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
















// ***************************

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <link rel="stylesheet" href="main.css" />
    <style>
      body {
        background-color: #eee;
      }
      ul {
        padding: 0;
        margin: 0;
        background-color: #ddd;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
      ul li {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
      }
      ul li.active,
      ul li:hover {
        opacity: 1;
      }
      ul li:first-child {
        background-color: red;
      }
      ul li:nth-child(2) {
        background-color: green;
      }
      ul li:nth-child(3) {
        background-color: blue;
      }
      ul li:nth-child(4) {
        background-color: black;
      }
      .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
      }
    </style>
  </head>
  <body>
    <ul>
      <li class="active" data-color="red"></li>
      <li data-color="green"></li>
      <li data-color="blue"></li>
      <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    <script src="main.js"></script>
  </body>
</html>


*/


/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});











/// **************************


/*

<form action="">
  <input type="text" class="name" />
</form>

*/



/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
    // console.log(this.value);
    window.localStorage.setItem("input-name", this.value);
  };










