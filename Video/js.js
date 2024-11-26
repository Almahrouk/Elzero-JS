window.onload = function() {
    document.querySelector("h1").style.color = "Blue";
};

// Single Line Comment
/*
    Multiple Line comment

    Ctrl + /
*/

/******************** Print **********************/

/*
    Output To Screen
        
        1) window.alert()
        2) document.write()
        3) console.log()
*/

// 1) window.alert("Hello From JS File");  => No More Need



// document.write("<h2>Hello<span>world</span></h2>");
// document.createElement("")

// console.log("Hello From Js File")

// End lesson

/* **************************************** */

/* Console Type

    1) console.log("write text in console") =>> 
    2) console.error("write error line in console")
    3) console.table("");

*/



console.log("Log");
console.error("Error text ");
console.table(["Osama", "Ahmed", "Ameer"]);


/*  
    web API

    Styling Console
        Directive %c
*/

console.log("Hello From %cJS %cFile", "color: red; font-size: 20px;", "color: blue; font-size: 20px;");