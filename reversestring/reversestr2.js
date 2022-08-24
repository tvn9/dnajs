// --- Directions
// Given a string, return a new string with the reversed
// order of characters
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
  }
  return newStr;
}

console.log(reverseStr(fullName));

function reverseStrBuiltinFunc(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStrBuiltinFunc(fullName));

function reverseStrReduce(str) {
  return str.split("").reduce((frist, last) => last + frist, "");
}
console.log(reverseStrReduce(fullName));

