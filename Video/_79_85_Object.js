/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

/*
In Web Console Write:

window
typeof window // ==> "object"

window.location
typeof window.location // ==> "object"

window.location.href
typeof window.location.href // ==> "string"

window.location.assign("https://google.com")

*/


// Cerate Object
let userInfo = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
      return `Hello`;
    },
};

console.log(userInfo.theName);   // Osama
console.log(userInfo.theAge);    // 38
console.log(userInfo.sayHello()); // Hello




// **************************




/*
  Object
  - Dig Deeper
  - Dot Notation (.) vs Bracket Notation ([])
  - Dynamic Property Name
*/

// 

let myVar = "country";

let myUser = {
  theName: "Osama", // Valid Identifyer
  country: "Egypt", // Valid Identifyer
  "the Age": 20,    // Invalid 
};

console.log(myUser.theName);    // True
console.log(myUser["theName"]); // True

// console.log(myUser."the Age"); // => Error
// console.log(myUser["the Age"]); // => Correct

console.log(myUser.country); // myUser.country  => Egypt
console.log(myUser.myVar); // myUser.country  => Egypt
console.log(myUser[myVar]); // myUser.country  => Egypt





// ****



/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let bigUser = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (bigUser.available === true) {
      return `Free For Work`; 
    } 
    else {
        return `Not Free`;
      }
  },
};

console.log(bigUser.name);  // Osama
console.log(bigUser.age);   // 38

console.log(bigUser.skills);  // array => (3) ["HTML", "CSS", "JS"]
console.log(bigUser.skills.join(" | "));  // HTML | CSS | JS
console.log(bigUser.skills[2]); // Access With Index  => JS


console.log(bigUser.addresses.ksa); // Riyadh

console.log(bigUser.addresses.egypt.one); // Cairo
console.log(bigUser["addresses"].egypt.one); // Cairo
console.log(bigUser["addresses"]["egypt"]); // {one: "Cairo", two: "Giza"}
console.log(bigUser["addresses"]["egypt"]["one"]); // Cairo

console.log(bigUser.checkAv()); // Not Free





// ***************************


/*
  Object
  - Create With New Keyword new Object();
*/


// Cerate Object On Old Way
let olduser = {
  age: 20,
};

// Cerate Object On New Way
let newuser = new Object({
  age: 20,
});

console.log(newuser);

newuser.age = 38;  // Update 
newuser["country"] = "Egypt";  // Create New Att In Object

// Create New Method In Object
newuser.sayHello = function () { 
  return `Hello`;
};

// Call
console.log(newuser);
console.log(newuser.age);
console.log(newuser.country);
console.log(newuser.sayHello());






// **************************************




/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);  // window
console.log(this === window);  // true


myVar = 100;
console.log(window.myVar); // 100 => The Variable is accessuble to window
console.log(this.myVar);  // 100


function sayHello() {
  console.log(this);
  return this;
}
sayHello(); // window
console.log(sayHello() === window); // true




document.getElementById("cl").onclick = function () {  // Anumeus Function
  console.log(this);  // Owner Of The Function ==>  <button id="cl">Click</button> 
};




//

let user_0 = {
  age: 38,
  ageInDays: function () {  // Method inside Object
    console.log(this); // this === <Object> === user<as object>
    return this.age * 365;  // this.age === user.age
  },
};

console.log(user_0.age);
console.log(user_0.ageInDays());






// *******************************


/*
  Object
  - Create Object With Create Method
  - To Create Object By Using A Prototype Object
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // if you use [user.age] , then all prototype will be as same as this origen object
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});  // Without Prototype Object (Empty)
obj.a = 100;  // Insert properyt inside object
console.log(obj);

let copyObj = Object.create(user); // uesr<Object> is the Prototype
copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());






// *********************************


/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
console.log(finalObject);
finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);
  
  let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
  
  console.log(newObject);