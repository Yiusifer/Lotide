// Importing middle()
const middle = require('../middle');

// Importing assertArraysEqual()
const assertArraysEqual = require('../assertArraysEqual');


// Test cases
//console.log(middle([1]));

//middle([1, 2, 3, 4, 5]);

console.log(assertArraysEqual(middle([1, 2, 3, 4, 6, 8, 9]), middle([9, 8, 3, 8, 8])))


//middle([1, 2, 3, 4, 6, 8, 9])