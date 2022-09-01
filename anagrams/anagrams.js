// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1

// Given string

const str1 = "rail safety";
const str2 = "fairy tales";

newStr = str1.split(" ").join("");
newStr2 = str2.split(" ").join("");
console.log(newStr, newStr2);
newStr.sort();

console.log("First Print out", newStr)

// 1. convert the string into lowercase 
console.log(str1);

// 2. remove spaces from string
function strSplitSortTrim(str) {
  const strArr = [];
  for (let l of str) strArr.push(l);
  newStr = strArr.sort().join("").toLowerCase();
  console.log(newStr);
  return newStr;
}

function anagrams(str1, str2) {
  const newStr1 = strSplitSortTrim(str1);
  const newStr2 = strSplitSortTrim(str2);
  return newStr1 === newStr2;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));


// 3. short the string in alphabetical order 

// 4. compare the two string for equality

// Solution 2

// 1. covert the two string into lowercase

// 2. create two maps for the two strings 

// 3. compare the map element for equality

