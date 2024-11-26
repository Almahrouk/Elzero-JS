function reverse(nums) {
    for (let i = nums.length - 1; i >= 0; i--){
        console.log(nums[i]);
    }
}

reverse([1, 3, 5, 7]);




function reverse(nums) {
    let Rnums = new Array(nums.length);
    for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
        Rnums[j] = nums[i];
    }
    return Rnums;
}

console.log(reverse([1, 3, 5, 7]));










// Elzero
function conver(n) {
    // Convert To String
    let str = n.toString();

    // Conver To Array
    let arr = str.split("");

    // Conver All Elements To Number
    arr = arr.map( (x) => +x );

    // Reverse The Array
    arr = arr.reverse();

    return arr;
}



function conver(n) {
    // Convert To String
    let str = n.toString();

    // Create Empty Array
    let emptyArray = [];

    // Loop On String
    for (let i=0; i<str.length; i++) {
        emptyArray.push(+str[i]);
        // emptyArray.unshift(+str[i]); -> No Need To Reverse
    }

    // Reverse The Array
    let result = emptyArray.reverse();

    return result;
}

console.log(conver(23456789));
