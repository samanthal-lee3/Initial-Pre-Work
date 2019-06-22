// spread operator unpacks all contents of an array into a comma-separated list
// with the spread operator, you cannot pick or choose which elements you want to assign to variables
// array destructing can individualize elements

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
