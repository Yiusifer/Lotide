// Importing the tail function
const tail = require('../tail');

// Importing assertEqual function

const assertEqual = require('../assertEqual');


// Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
assertEqual(words.length, 3);