// Importing assertEqual and eqArrays function
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');



assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([0, 0, 0], [1, 1, 1]), false);