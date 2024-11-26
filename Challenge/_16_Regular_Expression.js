/*
    Regular Expression
    - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';


//let Re = /(https?:\/\/)?(www.)?\w.(org)\w*/ig;
let re = /^(https?:\/\/)?(www\.)?elzero\.([a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?$/;
let RE = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?$/;


console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));