// Write a bubble sort functon to sort  array of numbers

// Given array
const intArray = [2, 3, 6, 1, 9, 4, 5, 7, 8, 0];
console.log("Un-sorted: ", intArray);

function sortInt(intArr) {
  const arr = [...intArr];
  for (let i = 0; i < intArr.length; i++) {
    for (let j = i + 1; j < intArr.length; j++) {
      let temp = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log("Sorted List ", sortInt(intArray));