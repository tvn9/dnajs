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
function steps(num) {
  // const steps = [];
  for (let i = 0; i < num; i++) {
    let step = "";
    for (let j = 0; j < num; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}
steps(4);

