// without a break statement, the switch statement will continue until it reaches a break
// multiple inputs with the same output can be combined before 1 break statement


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
