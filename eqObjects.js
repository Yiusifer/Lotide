const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log("⛔ ⛔ ⛔ Assertion failed: " + actual + " !== " + expected);
  }

};

const eqObjects = function (object1, object2) {
  for (first in object1) {
    if (object1[first] !== object2[first]) {
      return false;
    }
  }
  return true;
}



const ab = { a: "1", b: "0" };
const ba = { b: "0", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

eqObjects(ab, ba)
module.exports = eqObjects