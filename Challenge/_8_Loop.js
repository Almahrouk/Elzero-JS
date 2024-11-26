/*
    Loop Challenge
*/
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let count = 0;
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

let myAd = [];
for (let i=0; i<myAdmins.length; i++) {
    myAd.push(myAdmins[i]);
    if(myAdmins[i+1].charAt(0).includes(myAdmins[i].charAt(0))){
        break;
    }
}


for (let i=0; i<myAd.length; i++) {
    document.write(`<hr>`);
    document.write(`<div>The Admin For Team ${i} Is ${myAd[i]}</div>`);
    document.write(`<h3>Team Members: </h3>`);
    let start = 1;
    for(let j=0; j<myEmployees.length; j++) {
        if(myAd[i].charAt(0) === myEmployees[j].charAt(0)) {
            document.write(`<p>-${start} ${myEmployees[j]} </p>`);
            start++;
        }
    }
}
