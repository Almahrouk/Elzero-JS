function findMissingLetter (SeqLetter) {
    // let x = String.fromCharCode(...Array(123).keys()).slice(97);
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let Start = alpha.indexOf(SeqLetter[0]);
    for (let i = 0; i<SeqLetter.length; i++) {
        if (SeqLetter[i] !== alpha[Start]) {
            // return SeqLetter[i];
            console.log(alpha[Start]);
            return;
        }
        Start++;
    }
}


function findMissingLetterIn (givenLetter) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(givenLetter[0]);

    for (let i = 0; i<givenLetter.length; i++) {
        console.log(alpha[start + i]); // Loop On Alpha
        console.log(givenLetter[i]); // Loop On Given Letters
        if (givenLetter[i] !== alpha[start + i]) {
            return alpha[start + i];
        }
    }
    return "No Missing Letter In Sequence";
}

findMissingLetter("abcdeg");
findMissingLetter("mnpqr");
findMissingLetter("xyz");

console.log(findMissingLetterIn("abcdeg"));
console.log(findMissingLetterIn("mnpqr"));
console.log(findMissingLetterIn("xyz"));

// console.log(...Array(123).keys());
// Output => 0 1 2 3 4 5 6 7 8 9 10 11 ... 122

// String.fromCharCode(...Array(123).keys()).slice(97);
// Ouput => abcdefghijklmnopqrstuvwxyz