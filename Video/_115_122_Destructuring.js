/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let MyFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = MyFriends;

console.log(a);  // Ahmed
console.log(b);  // Sayed
console.log(c);  // Ali
console.log(d);  // Maysa
console.log(e);  // Osama

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);  // Sayed
console.log(z);  // Maysa






















// *************************************
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriend = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [q, , [, u]]] = myFriend;

console.log(q); // Shady
console.log(u); // Gamal













// *************************************

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);









// *************************************

/*
  Destructuring
  - Destructuring Object
*/

const User = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
  };
  
  // console.log(user.theName);   // Osama
  // console.log(user.theAge);    // 39
  // console.log(user.theTitle);  // Developer
  // console.log(user.theCountry); // Egypt
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry;
  
  // console.log(theName);  // Osama
  // console.log(theAge);   // 39
  // console.log(theTitle); // Developer
  // console.log(theCountry);  // Egypt
  
  // ({ theName, theAge, theTitle, theCountry } = user);
  const { theName, theAge, the_Country } = User;
  
  console.log(theName); // Osama
  console.log(theAge);  // 39
  console.log(the_Country); // Egypt
































// *************************************
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const me = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  const {
    theName: N,
    theAge: A,
    theCountry,
    theColor: co = "Red",
    skills: { html: h, css },
  } = me;
  
  console.log(N);
  console.log(A);
  console.log(theCountry);
  console.log(co);
  console.log(`My HTML Skill Progress Is ${h}`);
  console.log(`My CSS Skill Progress Is ${css}`);
  
  const { html: skillOne, css: skillTwo } = me.skills;
  
  console.log(`My HTML Skill Progress Is ${skillOne}`);
  console.log(`My CSS Skill Progress Is ${skillTwo}`);































// *************************************
/*
  Destructuring
  - Destructuring Function Parameters
*/

const users = {
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  showDetails(users);
  
  // function showDetails(obj) {
  //   console.log(`Your Name Is ${obj.theName}`);
  //   console.log(`Your Age Is ${obj.theAge}`);
  //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
  // }
  
  function showDetails({ theName: n, theAge: a, skills: { css: c } } = users) {
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
  }






































// *************************************

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
    },
  };
  
  const {
    theName: n,
    theAge: aa,
    skills: [, , three],
    addresses: { egypt: e },
  } = user;
  
  console.log(`Your Name Is: ${n}`);
  console.log(`Your Age Is: ${aa}`);
  console.log(`Your Last Skill Is: ${three}`);
  console.log(`Your Live In: ${e}`);
















// *************************************

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];






// *************************************
// *************************************
// *************************************
