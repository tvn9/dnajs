// Write a quick sort function

// Given array
const intArray = [2, 3, 6, 1, -4, -69, -29, 9, 2, 3, 4, 5, 7, 8, 0];
console.log("Un-sorted: ", intArray);

function qsort(arr) {
  const qsArr = [...arr];
  let temp = qsArr.shift();
  const small = [];
  const equal = [temp];
  const large = [];
  if (qsArr.length <= 1) {
    return qsArr;
  }

  while (qsArr.length) {
    const curEl = qsArr.shift();
    if (curEl < temp) {
      small.push(curEl);
    } else if (curEl > temp) {
      large.push(curEl);
    } else {
      equal.push(curEl);
    }
  }
  console.log("Mall = ", small, "Equal = ", equal, "Larg = ", large);

  const smallSorted = qsort(small);
  const largeSorted = qsort(large);

  return smallSorted.concat(equal, largeSorted);
}
console.log(qsort(intArray));