// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// kayak
// deified
// rotator
// repaper
// deed
// peep
// wow
// noon


// Questions:
// What is the difinition of palindrome? 
// 1. will there be a single letter left over?
// 2. will the last middle two letter required to be a match?
// 3. will upper case or lower case be condered?
// 4. will there be any number invole?

// Solutions 
// 
let palindrome = "abba";

// Not the recomanded solution due to double validation
function checkPalindrome1(str) {
  let result;
  const l = str.length - 1;
  for (let i = 0; i <= l; i++) {
    for (let j = l; j >= 0; j--) {
      if (str[i] === str[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
}
console.log(checkPalindrome1(palindrome));

// Solution 2 - creat a new reverse string, then compare the two string for equality
function checkPalindrome2(str) {
  let str1 = str;
  let str2 = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str1 === str2;
}
console.log(checkPalindrome2(palindrome));

// Solution 3 - using JS built-in string and array functions
function checkPalindrome3(str) {
  const newStr = str;
  const rev = newStr.split("").reverse().join("");
  return rev === newStr;
}
console.log(checkPalindrome3(palindrome));


// Solution 4 - using every array built-in function 
function checkPalindrome4(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - (i + 1)];
  });
}
console.log(checkPalindrome4(palindrome));