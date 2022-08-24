"use strict";

function printItems(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (let i = 0; i < 100; i++) {
        console.log("Do something");
    }
}

// BIGO O(n/2 + 1) => O(a)