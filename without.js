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

const without = function (source, itemsToRemove) {
  let filtered = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      filtered.push(source[i]);
    }
  } console.log (filtered);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
