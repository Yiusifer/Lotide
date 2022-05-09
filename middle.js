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
  return newArray;
}



// Exporting middle()
module.exports = middle;