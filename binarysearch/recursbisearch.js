// Recursive binary search 

// Given array 
const biArray = [2, 5, 9, 3, 8, 23, 45, 56, 21, 34];
const search = 21;

function sortInt(arr) {
  return arr.sort(function (a, b) { return a - b });
}

function biSearch(arr, n, offset) {
  const sArray = sortInt(arr);
  let first = 0;
  let last = sArray.length - 1;
  console.log("Running!")
  const mid = Math.floor((last - first) / 2);
  if (n === sArray[mid]) {
    return mid + offset;
  }

  if (sArray[mid] < n) {
    first = mid + 1;
    offset = offset + mid + 1;
  } else {
    last = mid;
  }
  console.log(first, last);
  return biSearch(sArray.slice(first, last + 1), n, offset);
  // a = 1; b = 2; O(n^log2 1) => O(1)
  // Overall algorithm time complexity:
  // O(n^logb a * log n) => O(1 * log n) => O(log n)
}
console.log(sortInt(biArray));
console.log("found", search, "at index", biSearch(biArray, search, 0));