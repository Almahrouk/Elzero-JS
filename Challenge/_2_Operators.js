
/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] [+] [+b],[b++] [+] [+] [c++] [-] [+] [a++]  -> 11 + 20 + 80 - 11  => 100
a = 12
b = 21
c = 81
[++a] [+] [-b] [+] [+] [c++] [-] [-a][a++] [+] [+a] -> 12 - 21 + 81 + 13 + 14 =>  99
a = 14
b = 21
c = 82
[--c] [+] [+b] [+] [--a] [*] [+b][b++] [-] [+b] [*] [a] [+] [--a] [-] [+true] => 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 => 100
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log((++e) * ++g + -d + ++f); // 173