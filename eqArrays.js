const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log("⛔ ⛔ ⛔ Assertion failed: " + actual + " !== " + expected);
  }

};

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length)
    return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;


    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([0, 0, 0], [1, 1, 1]), false);