// Write the functions to find Even and odd number
function even(...nums) {
  const evenNum = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  return evenNum;
}

function odd(...nums) {
  const oddNum = [];
  for (let num of nums) {
    if (num % 2 != 0) {
      oddNum.push(num);
    }
  }
  return oddNum;
}

console.log(even(1, 2, 3, 4, 5, 6, 7));
console.log(odd(1, 2, 3, 4, 5, 6, 7));
