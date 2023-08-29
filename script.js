"use strict";
/* create a function that will count through the string and show the number of a, b, d and y each contained in the string "abdsgyhidsaadgbdaasbvcydsaabdgsaayre", . */

function checker(test) {
  let checkStr = test.split("");
  let setofa = [];
  let setofb = [];
  let setofd = [];
  let setofy = [];

  for (let i = 0; i < checkStr.length; i++) {
    if (checkStr[i] === "a") {
      setofa.push(checkStr[i]);
    }
    if (checkStr[i] === "b") {
      setofb.push(checkStr[i]);
    }
    if (checkStr[i] === "d") {
      setofd.push(checkStr[i]);
    }
    if (checkStr[i] === "y") {
      setofy.push(checkStr[i]);
    }
  }

  console.log(`The number of a in the "${test}" is ${setofa.length}}`);
  console.log(`The number of b in the "${test}" is ${setofb.length}}`);
  console.log(`The number of d in the "${test}" is ${setofd.length}}`);
  console.log(`The number of y in the "${test}" is ${setofy.length}}`);
}
