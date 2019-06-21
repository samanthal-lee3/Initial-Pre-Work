// default can be used in a switch statement if no cases are met

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
