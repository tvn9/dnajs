"use strict";

const nums = 100;
let sum = 0;

function calcSum(num) {
    let t0 = performance.now();
    for (let i = 1; i <= num; i++) {
        sum += i;
        console.log(`#${i}`, sum);
    }
    let t1 = performance.now();
    console.log("Calculate 100", (t1-t0));
    console.log(sum);
}

calcSum(nums);