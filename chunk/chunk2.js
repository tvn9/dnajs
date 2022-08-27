// Given a array and chunk size, divide the array into many subarrays
// where each subarrays is of length size
// chunk([1,2,3,4],2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]

// Given Array
const givenArr = [1, 2, 3, 4, 5, 6, 7, 8];
const chNum = 3

function chunk(inArr, chNum) {
  const chunkArr = [];
  let index = 0;

  while (index < inArr.length) {
    chunkArr.push(inArr.slice(index, index + chNum));
    index += chNum;
  }
  return chunkArr;
}
console.log(chunk(givenArr, chNum));

