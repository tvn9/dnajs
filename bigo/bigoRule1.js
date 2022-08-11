"use strict";

const book = "BookE";
const books = ["BookA", "BookB", "BookC", "BookD", "BookE", "BookF", "BookG", "BookH", "BookI"];

function findBook(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Running", i);
        console.log(arr[i]);
        if (arr[i] === book) {
            console.log("found", arr[i]);
            break;
        }
    }
}

findBook(books); 

// BigO rule 1 (only concern of the worst case)