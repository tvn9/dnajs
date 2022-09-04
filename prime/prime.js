"use strict";
// Write a function that return true or false if a number is a prime or not
function isPrime(num) {
  if (num <= 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrime(num) {
  let prime = [];
  for (let i = 1; i < num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}
const prime = findPrime(100);
console.log(prime);
console.log(isPrime(2));
