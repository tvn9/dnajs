// --- Directions
// Given a string, return a new string with the reversed
// order of characters

/// Given a string
let fullName = "Thanh Nguyen";

// Solution 1
function reverseStr(str) {
  let newStr = "";
  for (last of str) {
    newStr = last + newStr;
  }
  return newStr;
}

console.log(reverseStr(fullName));

// Solution 2
function reverseStrBuiltinFunc(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStrBuiltinFunc(fullName));

// Solution 3
function reverseStrReduce(str) {
  return str.split("").reduce((frist, last) => last + frist, "");
}
console.log(reverseStrReduce(fullName));


