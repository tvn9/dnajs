// Write the fuction to calculate return the factorial of a number

function factorial(num) {
  const result = [];
  let temp = 1;
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      result.push(temp *= i);
    }
  }
  return result;
}

function factoRecursion(num) {
  if (num === 1) {
    return 1;
  }
  return num * factoRecursion(num - 1);
}
console.log(factorial(5));
console.log(factoRecursion(5));