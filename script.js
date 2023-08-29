"use strict";

//QUESTION 1
/* create a function that will count through the string and show the number of a, b, d and y each contained in the string "abdsgyhidsaadgbdaasbvcydsaabdgsaayre". */

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

checker("abdsgyhidsaadgbdaasbvcydsaabdgsaayre");

//QUESTION 2
/*Given a string of items to be "rice, yam, beans, cocoyam, banana,semo, table, tyre, milk, phone, watch, chair" use methods to separate the edible and non-edible items from the string.*/

let items =
  "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";

let checkItems = items.split(", ");
let edible = [];
let nonEdible = [];

for (let i = 0; i < checkItems.length; i++) {
  if (
    checkItems[i] === "rice" ||
    checkItems[i] === "yam" ||
    checkItems[i] === "beans" ||
    checkItems[i] === "cocoyam" ||
    checkItems[i] === "banana" ||
    checkItems[i] === "semo" ||
    checkItems[i] === "milk"
  ) {
    edible.push(checkItems[i]);
  } else {
    nonEdible.push(checkItems[i]);
  }
}
let joinEdibleStr = edible.join(",");
let joinNonEdibleStr = nonEdible.join(",");
console.log(`The general items are "${items}"`);
console.log(`Edible items of the general items are "${joinEdibleStr}"`);
console.log(`Non Edible items of the general items  are "${joinNonEdibleStr}"`);
