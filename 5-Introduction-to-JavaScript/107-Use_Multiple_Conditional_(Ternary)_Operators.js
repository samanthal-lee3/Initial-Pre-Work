// conditional operator can be chained together for multiple conditions

function checkSign(num) {
  return (num === 0) ? "zero": (num > 0) ? "positive" : "negative";
}

checkSign(10);
