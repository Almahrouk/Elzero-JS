/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`); // true

console.log(myData);  // (6) [1, 1, 1, 2, 3, 'A']
console.log(myUniqueData); // Set(4) {1, 2, 3, 'A'}

console.log(myUniqueData.size); // 4

console.log(myData[0]);       // 1
console.log(myUniqueData[0]); // undefined

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));  // true

console.log(myUniqueData);  // Set(3) {1, 3, 'A'}
console.log(myUniqueData.size); // 3

myUniqueData.clear();

console.log(myUniqueData);  // Set(0) {size: 0}
console.log(myUniqueData.size); // 0

console.log(myUniqueData.has("A")); // false 




















// ********************************************************


// memory manegment in JS is Auto 
/*
memory manegment:
[Garbage Collection] ==> clean
if there are data has no referance to Access it ==> delete it
*/

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data
let myset = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(myset);  // Set(4) {1, 2, 3, 'A'}


// Size
console.log(`Size Of Elements Inside Set Is: ${myset.size}`);  // 4


/*
let iterator = myset.values();

console.log(iterator); // SetIterator {1, 2, 3, 'A'}

console.log(iterator); // {value: 1, done: false}
*/




// Values + Keys [Alias For Values]
let iterator = myset.keys();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // A
console.log(iterator.next()); // {value: undefined, done: true}




// forEach
myset.forEach((el) => console.log(el));
/*
1
2
3
A
*/

console.log("#".repeat(20)); // ####################


// Type Of Data

// invalid value in WeakSet
// let myws = new WeakSet([1, 1, 1, 2, 3, "A", "A"]); // Error
// console.log(myws); 


// WeakSet want Object
let myws = new WeakSet([{ A: 1, B: 2 }]);
console.log(myws);

// No Size
// No Keys
// No Entries
// No Iterator
// No forEach

// WeakSet Use Cases







// ********************************************************


/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {}; 
let myEmptyObject = Object.create(null); 

let my_map = new Map(); 

console.log(myObject); // has prototype [Object]
console.log(myEmptyObject); // No prototype &&  No Properties
console.log(my_map); // has prototype [Map]  &&  No Properties

let myNewObject = { // 10 == "10"
  10: "Number",
  "10": "String", // Overwrite
};

console.log(myNewObject[10]); // String 



let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10)); // Number
console.log(myNewMap.get("10")); // String

console.log("####");

console.log(myNewObject);
console.log(myNewMap);


















// ********************************************************


/*
  - Map Data Type
  Methods
  --- set(key, value)
  --- get(key)
  --- delete(key)  ==> true | false
  --- clear()
  --- has(key)

  Properties
  --- size
*/

let myMap_1 = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
  ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap_1); // Map(3) {10 => 'Number', 'Name' => 'String', false => 'Boolean'}

// Get Value
console.log(myMap_1.get(10));     // Number
console.log(myMap_1.get("Name")); // String
console.log(myMap_1.get(false));  // Boolean


console.log(myMap_1.has("Name")); // true
console.log(myMap_1.size); // 3
console.log(myMap_1.delete("Name")); // true


console.log(myMap_1.size); // 2

myMap_1.clear();
console.log(myMap_1.size); // 0


















// ********************************************************

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };  // object

let myMap = new Map();
myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);  // no delete

console.log("#".repeat(20));





let wMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");
wMapUser = null; // Override The Reference

console.log(myWeakMap);  // may delete  object value



















// ********************************************************

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama")); // (5) {'O', 's', 'a', 'm', 'a'}
console.log(Array.from(12345));   // {}
console.log(Array.from("12345")); // (5) {'1', '2', '3', '4', '5'}



console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
// console.log(Array.from("12345", (n) => +n + +n));



let MyArray = [1, 1, 1, 2, 3, 4];
let mySet = new Set(MyArray);  // 1, 2, 3, 4  ==> this can be iterable

console.log(Array.from(mySet)); // 1, 2, 3, 4

// scape operator
// console.log([...new Set(MyArray)]); // 1, 2, 3, 4 // Future


function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));



















// ********************************************************

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(target=0, start=0, end=last)
// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]     50 => B

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]    50 => B

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]   [20, 30] => [A, B]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]   20 => A

console.log(myArray); // [10, "A", 30, 40, 50, "A", "B"]



















// ********************************************************

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });


// let check = nums.some((e) => e > 5);

let Check = nums.some(function (e) {
  return e > this;
}, myNumber);


console.log(Check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));  // false
console.log(checkValues(nums, 5));   // true

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);



















// ********************************************************

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
  };
  
  let mainLocation = 15;
  
  let locationsArray = Object.keys(locations);
  
  console.log(locationsArray);
  
  let locationArrayNumbers = locationsArray.map((n) => +n);
  
  console.log(locationArrayNumbers);
  
  let check = locationArrayNumbers.every(function (e) {
    return e > this;
  }, mainLocation);
  
  console.log(check);



















// ********************************************************
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");     // Osama
console.log(..."Osama");  // O s a m a
console.log([..."Osama"]); // conver to Array ==> (5) ['O', 's', 'a', 'm', 'a']



// Concatenate Arrays
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays); // (6) [1, 2, 3, 4, 5, 6]



// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);



// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends); 

console.log(allFriends); // ["Osama", "Ahmed", "Sayed", "Sameh", "Mahmoud"]



// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 1000




// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

