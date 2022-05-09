
const assertArraysEquals = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return ("⛔ ⛔ ⛔ Assertion failed: " + arrayOne + " !== " + arrayTwo);
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return ("⛔ ⛔ ⛔ Assertion failed: " + arrayOne + " !== " + arrayTwo);
    }
  }
  return (`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`);
}


// Exporting assertArraysEquals function

module.exports = assertArraysEquals;