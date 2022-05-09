// Importing the assert equal function from assertEqual.js
const assertEqual = require('./assertEqual');

function head(array) {
  if (array === undefined) {
    return undefined;
  } else {
    return array[0]
  }
}

module.exports = head;
