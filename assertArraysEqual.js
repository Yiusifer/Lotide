const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log("⛔ ⛔ ⛔ Assertion failed: " + actual + " !== " + expected);
  }

};

const assertArraysEquals = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log("⛔ ⛔ ⛔ Assertion failed: " + arrayOne + " !== " + arrayTwo);

    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        console.log("⛔ ⛔ ⛔ Assertion failed: " + arrayOne + " !== " + arrayTwo);
        break;

      } else {
        console.log(`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`)
      }

    }
  }
}
assertArraysEquals([1, 2, 3], [2])