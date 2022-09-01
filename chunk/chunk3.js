"use strict";
// Given a array and chunk size, divide the array into many subarrays
// where each subarrays is of length size
// chunk([1,2,3,4],2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]

// gevin array
const givenArr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;

const chunk = function (arr, size) {
  const newChunk = [];

  for (let chArr of arr) {
    const last = newChunk[newChunk.length - 1];
    if (!last || last.length === size) {
      newChunk.push([chArr]);
    } else {
      last.push(chArr);
    }
  }
  return newChunk;
}
console.log(chunk(givenArr, size));