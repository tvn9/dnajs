"use strict";

function funChallenge(input) {
    let a = 10; // this line only run once O(1)
    a = 5 + 3; //  same here O(1)

    for (let i = 0; i < input.length; i++) { // Leanear time depend on the length of the input
        anotherFunction(); // not defined O(n)
        let stranger = true; // 0(n)
        a++; // O(n)
    }
    return a; 
}

console.log(funChallenge(10)); 

// BIO O(3*O(1) + 4*O(n)) => O(3 + 4n) => O(7n) => O(n)