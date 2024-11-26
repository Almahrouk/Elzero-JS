/*
    String Methods
    - Access With Index
    - Access With charAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - Chain Methods
*/
let a = "Ahmed";
console.log(a);     // Ahmed
console.log(a[1]);  // h
console.log(a[5]);  // undefined

console.log(a[-1]); // undefined
console.log(a[-0]); // A

console.log(a.charAt(1));  // h
console.log(theName.charAt(5)); // 
console.log(theName.length);  // 5



let theName = "  Ahmed  ";

console.log(theName);    //  Ahmed  
console.log(theName[1]); //
console.log(theName[5]); // e

console.log(theName.charAt(1));  //
console.log(theName.charAt(5));  // e

console.log(theName.length);   // 9

console.log(theName.trim()); //Ahmed
// Removes the leading and trailing white space and line terminator characters from a string.

console.log(theName.toUpperCase()); //  AHNED  
console.log(theName.toLowerCase()); //  ahmed  

console.log(theName.trim().charAt(2).toUpperCase());  // [  Ahmed  ] => [Ahmed] => m => M












/***************************************************************/



/*
    String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])
*/

let dana = "Elzero Web School Web";

console.log(dana.indexOf("Web"));      // index of W => 7
console.log(dana.indexOf("Web", 8));   // start search from index 8 => Not Found => -1 
console.log(dana.lastIndexOf("Web"));  // 19


console.log(dana.lastIndexOf("o")); // 15


console.log(dana.indexOf("o"));     // 5     First "o" will found 
console.log(dana.lastIndexOf("o")); // 15    Last "o" will found


console.log(dana.slice(0));     // Elzero Web School Web => all [beggine from index 0 to end]
console.log(dana.slice(2));     // zero Web School Web
console.log(dana.slice(2, 6));  // zero     => Not including the end index [6]
console.log(dana.slice(-5, -3));


console.log(dana.slice(-1));     // b 
console.log(dana.slice(-5));     // l Web
console.log(dana.slice(-9,-2));  // chool We

let qq = "Dana ";
console.log(qq.repeat(5));  // Dana Dana Dana Dana Dana 
console.log(qq * 5);        // NaN


console.log(dana.split());    // Conver "Elzero Web School Web" String  => To Array [Elzero Web School Web]

console.log(qq.split());     // [ 'Dana ' ]
console.log(qq.split(""));   // [ 'D', 'a', 'n', 'a', ' ' ]
console.log(qq.split(" "));  // [ 'Dana', '' ]
console.log(typeof( qq.split("")));   // object



let mm = "Dana@Mohammed@AlMahrouk";
console.log(mm.split("@"));   // [ 'Dana', 'Mohammed', 'AlMahrouk' ]
console.log(mm.split("@", 2));   // [ 'Dana', 'Mohammed' ]




















/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let AAA = "Elzero Web School";

console.log(AAA.length);

console.log(AAA.substring(2, 6));
console.log(AAA.substring(6, 2));
console.log(AAA.substring(-10, 6)); // 0 - 6
console.log(AAA.substring(AAA.length - 5, AAA.length - 3));

console.log(AAA.substr(0, 6));
console.log(AAA.substr(17));
console.log(AAA.substr(-3));
console.log(AAA.substr(-5, 2));

console.log(AAA.includes("Web"));
console.log(AAA.includes("Web", 8));

console.log(AAA.startsWith("E"));
console.log(AAA.startsWith("E", 2));
console.log(AAA.startsWith("zero", 2));

console.log(AAA.endsWith("l"));