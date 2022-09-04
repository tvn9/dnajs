// Linear Search

const uArray = [2, 3, 5, 3, -5, -33, 9, 29, 76, 39];

function linearSearch(arr, el) {
  for (let i = 0; i <= arr.length; i++) {
    if (el == arr[i]) {
      return i;
    }
  }
}

console.log(linearSearch(uArray, 39))