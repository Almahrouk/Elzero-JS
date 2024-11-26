/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays     =>> Array inside Array
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/


// Create + Nested Arrays
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// Access
console.log(`Hello ${myFriends[0]}`);    // Hello Ahmed
console.log(`Hello ${myFriends[2]}`);    // Hello Sayed
console.log(`${myFriends[1][2]}`);       // h 
console.log(`Hello ${myFriends[3][1]}`); // Hello Ali
console.log(`${myFriends[3][1][2]}`);    // i

// Change
console.log(myFriends);  // ["Ahmed", "Mohamed", "Sayed", Array(2)]

myFriends[1] = "Gamal";
console.log(myFriends);  // ["Ahmed", "Gamal", "Sayed", Array(2)]

myFriends[3] = ["Sameh"];
console.log(myFriends);  // ["Ahmed", "Gamal", "Sayed", "Sameh"]  => change array(str) to one string

myFriends[3] = ["Sameh", "Ameer"]; 
console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", Array(2)]  => change array(str) to array(str)

console.log(typeof myFriends); // Object
console.log(Array.isArray(myFriends)); // True

let x = "Monah";
console.log(Array.isArray(x)); // False


// ************************************  41 Length

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends.length); // 4

//myFriends[6] = "Noor";
//console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", empty * 2, "Noor"]
//console.log(myFriends.length); // 7

// push back JS Dymanic Way
// insert end
myFriends[myFriends.length] = "Noor"; 
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Noor"]


// Update Last element
myFriends[myFriends.length - 1] = "Con"; 
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Con"]


// Control Array
myFriends.length = 2;
console.log(myFriends); // ["Ahmed", "Mohamed"]


myFriends.length = 5;
console.log(myFriends); // ['Ahmed', 'Mohamed', empty × 3]










// ********************************** 42  Add & Remove

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array   // & Return It
  - pop() Remove Last Element From Array      // & Return It
*/

let myFriends = ["Ahmed"];
console.log(myFriends);

myFriends.unshift("Osama", "Nabil");
console.log(myFriends);  //  ["Osama", "Nabil", "Ahmed"]

myFriends.push("Samah", "Eman");  //  ["Osama", "Nabil", "Ahmed", "Samah", "Eman"]
console.log(myFriends);



let first = myFriends.shift(); // "Osama"
console.log(myFriends);        // ["Nabil", "Ahmed", "Samah", "Eman"]
console.log(`First Name Is ${first}`); // First Name Is Osama


let last = myFriends.pop();  // "Eman"
console.log(myFriends);      // ["Nabil", "Ahmed", "Samah"]
console.log(`Last Name Is ${last}`); // Last Name Is Eman









// ********************************** 43 - Searching 

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));    // 0
console.log(myFriends.indexOf("Ahmed", 2)); // 4

console.log(myFriends.lastIndexOf("Ahmed")); // 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0

console.log(myFriends.includes("Ahmed")); // True
console.log(myFriends.includes("Ahmed", 2)); // True

if (myFriends.lastIndexOf("Osama") === -1) {  // True
  console.log("Not Found");
}

console.log(myFriends.indexOf("Osama")); // -1
console.log(myFriends.lastIndexOf("Osama")); // -1










// ********************************** 44 - Sorting Array

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])    ====> ABC
  - reverse                 ====> Reverse All 
*/


let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort()); // [-10, -20, 10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed']  


myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends.reverse()); // [-10, -20, '10', 20, 100, 9000, '90', 'Mohamed', 'Sayed', 10]


// Do sort() Then Do reverse()
console.log(myFriends.sort().reverse()); // ['Sayed', 'Mohamed', 9000, '90', 20, 100, 10, '10', -20, -10]






// ********************************** 45 - Slicing  => Return New Array

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice()); // All ==>               ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1));// (index(1) to end) ==> ["Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, 3)); // (index(1) to index(3)) ==> ["Sayed", "Ali"]

// Negative Count From End
console.log(myFriends.slice(-3));  // (index(-3) to end)  ==> ["Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, -2)); //  ["Sayed", "Ali", "Osama"]
console.log(myFriends.slice(-4, -2)); // ["Ali", "Osama"]
console.log(myFriends);


// myFriends.splice(0, 0, "Sameer", "Samara");  // no delete & only add to begin => "Sameer", "Samara"

myFriends.splice(1, 2, "Sameer", "Samara");  // start from index(1) & delete 2 items & add "Sameer", "Samara"

console.log(myFriends); // ["Ahmed", "Sameer", "Samara", "Ali", "Osama", "Gamal", "Ameer"]












// ********************************** 46 - Joining Arrays


/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator) ===> Conver to str 
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends_0 = myFriends.concat(myNewFriends, schoolFriends);
console.log(allFriends); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer", "Samar", "Sameh", "Haytham", "Shady"]


let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);
// ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer", "Samar", "Sameh", "Haytham", "Shady", "Gameel", 1, 2]



console.log(allFriends.join());       // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2
console.log(allFriends.join(""));     // AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12
console.log(allFriends.join(" "));    // Ahmed Sayed Ali Osama Gamal Ameer Samar Sameh Haytham Shady Gameel 1 2
console.log(allFriends.join(" @ "));  // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2
console.log(allFriends.join("|"));    // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2
console.log(allFriends.join("|").toUpperCase());

