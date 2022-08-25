// Find max repeated character in a string

// Given string
const fullName = "Thanh Vu Nguyen"
const stringMap = {};

function maxRepChar(str) {
  // Iterate through the string
  for (char of fullName) {
    // insert the letter in to a new object 
    if (!stringMap[char]) {
      stringMap[char] = 1;
    } else {
      // increment the repeated letters count
      stringMap[char] += 1;
    }
  }
  // Return and new object 
  return stringMap;
}

console.log(maxRepChar(fullName));