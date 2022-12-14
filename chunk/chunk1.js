// Given a array and chunk size, divide the array into many subarrays
// where each subarrays is of length size
// chunk([1,2,3,4],2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]

// Given Array
const givenArr = [1, 2, 3, 4, 5, 6, 7, 8];
const chNum = 3

function chunk(inArr, chNum) {
  // Create a new empty chunk array 
  const newChunkArr = [];

  for (let el of inArr) {
    const end = newChunkArr[newChunkArr.length - 1];
    if (!end || end.length === chNum) {
      newChunkArr.push([el]);
    } else {
      end.push(el);
    }
  }
  return newChunkArr;
}
console.log(chunk(givenArr, chNum));