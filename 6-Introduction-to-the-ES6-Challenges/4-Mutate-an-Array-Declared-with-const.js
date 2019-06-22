// const only prevents reassignment of variables identifier
// for example, if you set an array named a as a const, you can still mutate the elements in the array
// in thise case, you just couldn't change a to anything. it will stay an array

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2
  s[1] = 5
  s[2] = 7

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
