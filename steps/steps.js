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
  let poundSign = "";
  for (let i = 1; i <= num; i++) {
    poundSign += "#";
  }
  return poundSign;
}

const spaceStrBuilder = function (num) {
  let spaceStr = "";
  for (let i = 1; i <= num; i++) {
    spaceStr += " ";
  }
  return spaceStr;
}

const stepsBuilder = function (num) {
  const steps = [];
  let str;
  let str2;
  for (let j = 1; j <= num; j++) {
    str = poundSignBuilder(j);
    str2 = spaceStrBuilder(num - j);
    steps.push(str + str2);
  }
  return steps;
}

const steps = stepsBuilder(4);
for (let step of steps) console.log(step);


