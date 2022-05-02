const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log("⛔ ⛔ ⛔ Assertion failed: " + actual + " !== " + expected);
  }

};

const tail = function(array) {
  let modified = [];
  for (let i = 1; i < array.length; i++) {
    modified.push(array[i]);
  } return modified;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);