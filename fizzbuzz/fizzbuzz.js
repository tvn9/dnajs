// Write a program that console logs the numbers from 1 to n, print fizz if a number is multipiles
// five and print buzz if number is multiples of three, and print fizzBuzz if the number is 
// multipiles of both three and five.

// Given any number
const num = Number(prompt("Enter a number"));

function fizzBuzz(number) {
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else {
        console.log(i);
      }
    }
  }
}
fizzBuzz(num);