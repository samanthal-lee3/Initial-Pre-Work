// switch statements test a value and can have many case statements which define possible values
// executes from the first matched case value until a break is encountered
// tested with strick equality
// break tells js to stop executing statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
  case 1:
    return "alpha";
    break;
  case 2:
    return "beta";
    break;
  case 3:
    return "gamma";
    break;
  case 4:
    return "delta";
    break;
}
  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
