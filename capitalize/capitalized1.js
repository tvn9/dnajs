"use strict";
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// given string
const testString = "a short sentence";

// use regex to select the fist letter of each word assuming earch word start after a
// blank space
function capitalized(str) {
  console.log(str.length);
  if (str.length != 0) {
    console.log(str.toUpperCase(/\b\w?/));

  } else {
    return "error: fails to process string"
  }
  return str;
}

// covert the select letter to upper case 

// Return the string

console.log(capitalized(testString));