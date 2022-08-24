// --- Directions
// Given a string, return a new string with the reversed
// order of characters
<<<<<<< HEAD

/// Given a string
let fullName = "Thanh Nguyen";

// Solution 1
function reverseStr(str) {
  let newStr = "";
  for (last of str) {
    newStr = last + newStr;
=======
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }

// Given a string

let fullName = "Thanh Nguyen";

function reverseStr(str) {
  let newStr = "";
  for (temp of str) {
    newStr = temp + newStr;
>>>>>>> 2d17c29fb1e65b23aa2de7d733062eeb4731ff0e
  }
  return newStr;
}

console.log(reverseStr(fullName));

<<<<<<< HEAD
// Solution 2
=======
>>>>>>> 2d17c29fb1e65b23aa2de7d733062eeb4731ff0e
function reverseStrBuiltinFunc(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStrBuiltinFunc(fullName));

<<<<<<< HEAD
// Solution 3
=======
>>>>>>> 2d17c29fb1e65b23aa2de7d733062eeb4731ff0e
function reverseStrReduce(str) {
  return str.split("").reduce((frist, last) => last + frist, "");
}
console.log(reverseStrReduce(fullName));

<<<<<<< HEAD

=======
>>>>>>> 2d17c29fb1e65b23aa2de7d733062eeb4731ff0e
