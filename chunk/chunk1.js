// Given a array and chunk size, divide the array into many subarrays
// where each subarrays is of length size
// chunk([1,2,3,4],2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]

// Given Array
const givenArr = [1, 2, 3, 4, 5];
const num = 2

function chunk(inArr, num) {
  // Create a new empty trunk 
  const newArr = [];

  for (let el of inArr) {
    const end = newArr[newArr.length - 1];
    if (!end || end.length === num) {
      newArr.push([el]);
    } else {
      end.push(el);
    }
  }
  return newArr;
}
console.log(chunk(givenArr, num));