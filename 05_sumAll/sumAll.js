function swap(num1, num2) {}

const sumAll = function (num1, num2) {
  if (
    (typeof num1 != "number") |
    (typeof num2 != "number") |
    (num1 < 0) |
    (num2 < 0)
  ) {
    return "ERROR";
  }

  if (num1 > num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }

  var result = 0;
  var current_number = num1;

  while (current_number <= num2) {
    result += current_number;
    current_number++;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
