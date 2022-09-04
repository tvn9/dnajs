// Write a function to calculate Fibonacci of a number


// Improving performance

function fibonacci(num, memo) {
  let result;
  if (memo[num]) {
    return memo[num];
  }
  if (num < 1 || num === 1) {
    result = 1;
  } else {
    result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  memo[num] = result;
  return result;
}
console.log(fibonacci(5, {}));
console.log(fibonacci(30, {}));