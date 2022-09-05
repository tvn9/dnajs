// Write the binary search function

// Given array 
const biArray = [2, 5, 9, 3, 8, 23, 45, 56, 21, 34];
const search = 56;

function sortInt(arr) {
  return arr.sort(function (a, b) { return a - b });
}

function biSearch(arr, n) {
  const sArray = sortInt(arr);
  let first = 0;
  let last = sArray.length - 1;
  while (first <= last) {
    console.log("Running!")
    let mid = first + Math.floor((last - first) / 2);
    if (sArray[mid] === n) {
      return mid;
    } else if (n < sArray[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  console.log(first, last);
}
console.log(sortInt(biArray));
console.log("found", search, "at index", biSearch(biArray, search));
