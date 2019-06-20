// strict equality === is the counterpart to the equality operator
// does not perform a type of conversion
// == can set different types of data equal, like 7 and '7', but strict value will only allow 7 === 7



// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
