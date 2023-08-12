const leapYears = function (number) {
  return number % 4 === 0 && (number % 400 === 0 || number % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;
