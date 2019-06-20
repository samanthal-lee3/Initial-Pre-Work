// when the condition for an if statement is true, then code is triggered
// else statements set the conditions for what code can be triggered if the the first condition is false

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }


  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
