// Write the algorithms that take and array of numbers as input and return the minimum
// value in the array
const numArray = [9, 22, 33, 3, 23, 34, 11, 2, 3, 4, 5];

function findSmallestNumber(numArray) {
  let smallet = numArray[0];
  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] < smallet) {
      smallet = numArray[i];
    }
  }
  return smallet;
}
console.log(findSmallestNumber(numArray));
