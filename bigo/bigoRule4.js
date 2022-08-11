// Log all paris of array
const letters = ["a", "b", "c", "d", "e", "f"]; // 6 elements
let index = 0;
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) { // nested loop
            console.log(array[i], array[j]);
            index++; // 36
        }
    }
    console.log(index);
}

logAllPairsOfArray(letters);

// nested loop BigO rules 
// BIGO O(n * n) => O(n^2) 