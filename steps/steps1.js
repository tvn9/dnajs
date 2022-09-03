"use strict";
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const poundSignBuilder = function (num) {
  return "#".repeat(num);
}

const spaceStrBuilder = function (num) {
  return " ".repeat(num);
}

const stepsBuilder = function (num) {
  const steps = [];
  for (let j = 1; j <= num; j++) {
    let str = poundSignBuilder(j);
    let str2 = spaceStrBuilder(num - j);
    steps.push(str + str2);
  }
  return steps;
}

const steps = stepsBuilder(5);
console.log(steps);
for (let step of steps) console.log(step);


