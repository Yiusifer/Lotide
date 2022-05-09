// Importing relevant functions
const { assert } = require('chai');
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test cases
describe('#tail', () => {
  it ('should return Lighthouse and Labs for ["Yo Yo", "Lighthouse", "Labs"]', () => {
  assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
});

  it ('should return true for words.length === 3', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(words.length, 3)
  });
});




