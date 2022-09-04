// Write a function to sum up a list of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumNumbers(nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
} // O(n)

function sumNums(nums) {
  // return (nums / 2) * (nums + 1);
  return nums.reduce((sum, curNum) => sum + curNum, 0);
}
console.log(sumNumbers(numbers));
console.log(sumNums(numbers));