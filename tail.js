

const tail = function(array) {
  let modified = [];
  for (let i = 1; i < array.length; i++) {
    modified.push(array[i]);
  } return modified;
};

// Exporting the tail function

module.exports = tail;