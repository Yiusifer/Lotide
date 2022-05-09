// Importing middle()
const middle = require('../middle');

// Importing assertArraysEqual()
const assertArraysEqual = require('../assertArraysEqual');

// Importing Mocha & Chai
const { assert } = require('chai');


// Test cases
 describe('#middle', () => {
   it ('should return [] for arrays with two or less values', () => {
     assert.deepEqual(middle([1]), []);
   });

   it ('should return 3 for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it ('should return [4, 6] for [1, 2, 3, 4, 6, 8, 9, 10]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 6, 8, 9, 10]), [4, 6]);
  });

  it ('should return false for (middle([1, 2, 3, 4, 6, 8, 9]) === middle([9, 8, 3, 8, 8]))', () => {
    assert.notStrictEqual(middle([1, 2, 3, 4, 6, 8, 9]), middle([9, 8, 3, 8, 8]));
  });
 });





