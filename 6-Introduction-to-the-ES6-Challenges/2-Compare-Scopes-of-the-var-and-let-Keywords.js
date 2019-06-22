// let scope is limited to the block of code where it is defined

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
     let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
