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


const middle = function (array) {
  let newArray = []
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    const middle = (array.length / 2) - 1;
    const secondMiddle = array.length / 2;
    newArray.push(array[middle], array[secondMiddle]);
  } else {
    const middle = ((array.length / 2) + 0.5) - 1;
    newArray.push(array[middle]);
  }
  console.log(newArray);
}

middle([1, 2, 3])
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]