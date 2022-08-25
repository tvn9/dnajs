// Given a array and chunk size, divide the array into many subarrays
// where each subarrays is of length size
// chunk([1,2,3,4],2) --> [[1,2], [3,4]]
// chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]

// Given Array
const msArray = [1, 2, 3, 4, 5, 6, 7, 8];



// 0. Determine how many innerArray we need to create base on the function's parameter
function chunk(msArray, num) {
  // 1. create the empty innerArrays
  let nArr = msArray.length / num;
  nArr = nArr > Math.floor(nArr) ? Math.floor(nArr) + 1 : Math.floor(nArr);
  console.log(nArr);

  let arr = [];
  const count = nArr;
  for (let i = 0; i <= msArray.length - 1; i++) {
    for (let j = 0; j <= count; j++) {
      arr.push(msArray[i]);
    }
    msArray[i] = append(msArray[i], arr)
    console.log(arr);
    console.log(msArray);
  }

}
chunk(msArray, 3);

// 2. interate through the given array 

// 3. assign the number of elements needed to the innerArrays

// 4. assign the innerArrays back to the original array start from index 0, 1, 2...

// 5. perform array structure and data testing
      // a. Check the length of the about moust array
      // b. Check the length of the interArray
      // c. Do we need to check for the content and value of each elements? 

