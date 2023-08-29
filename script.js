"use strict";

//QUESTION 1
/* create a function that will count through the string and show the number of a, b, d and y each contained in the string "abdsgyhidsaadgbdaasbvcydsaabdgsaayre". */

//Create Function
function checker(test) {
  //Convert the string input to array
  let checkStr = test.split("");
  //Create empty cotainers to store set of same alphabets
  let setofa = [];
  let setofb = [];
  let setofd = [];
  let setofy = [];

  //loop through the array of contents
  for (let i = 0; i < checkStr.length; i++) {
    //Check for duplicates
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

  //Display the output
  console.log(`The number of a in the "${test}" is ${setofa.length}`);
  console.log(`The number of b in the "${test}" is ${setofb.length}`);
  console.log(`The number of d in the "${test}" is ${setofd.length}`);
  console.log(`The number of y in the "${test}" is ${setofy.length}`);
}

//Invoke the function
checker("abdsgyhidsaadgbdaasbvcydsaabdgsaayre");

//QUESTION 2
/*
Use methods to separate the edible and non-edible items from the string of items "rice, yam, beans, cocoyam, banana,semo, table, tyre, milk, phone, watch, chair"*/

let items =
  "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";
//Convert the string input to array
let checkItems = items.split(", ");
//Create empty cotainers to store set of same items
let edible = [];
let nonEdible = [];
//Loop through the items
for (let i = 0; i < checkItems.length; i++) {
  //Conditions to check for edible and non-edible
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

//Display the output
console.log(`The general items are "${items}"`);
console.log(`Edible items of the general items are "${joinEdibleStr}"`);
console.log(`Non Edible items of the general items  are "${joinNonEdibleStr}"`);
