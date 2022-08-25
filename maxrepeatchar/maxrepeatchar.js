// Find max repeated character in a string

// Given string
const fullName = "abccccccccd";

function maxRepChar(str) {
  const stringMap = {};
  let max = 0;
  let maxChar = "";
  // Iterate through the string
  for (let char of fullName) {
    // insert the letter in to a new object 
    if (!stringMap[char]) {
      stringMap[char] = 1;
    } else {
      // increment the repeated letters count
      stringMap[char] += 1;
    }
  }

  for (let char in stringMap) {
    if (max < stringMap[char]) {
      max = stringMap[char];
      maxChar = char;
    }
  }
  // Return and new object 
  return maxChar;
}

console.log(maxRepChar(fullName));