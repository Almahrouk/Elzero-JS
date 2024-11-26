/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function showDetails(one, two, three){
    var all = [one, two, three];
    var name, age, gender;
    
    for(let i=0; i<all.length; i++) {
        if(typeof all[i] === 'string'){
            name = all[i];
        }
        if(typeof all[i] === 'number'){
            age = all[i];
        }
        if(typeof all[i] === 'boolean'){
            gender = all[i];
        }
    }
    
    /*
    name = (typeof one === 'string'? one:
            typeof two === 'string'? two:
            three);
    age =  (typeof one === 'number'? one:
            typeof two === 'number'? two:
            three);
    gender = (typeof one === 'boolean'? one:
            typeof two === 'boolean'? two:
            three);
    */
    if(gender === false) {
        gender = "Not ";
    }
    else {
        gender = "";
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${gender}Available For Hire`);
}