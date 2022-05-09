const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let valueOne of arrayOne) {
    for (let valueTwo of arrayTwo) {
      if (valueOne !== valueTwo) {
        return false;
      }
    }
  }
  return true;
}
    // Exporting eqArrays function
    module.exports = eqArrays;

