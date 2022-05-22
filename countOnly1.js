const countOnly = function (allItems, itemsToCount) {
  const object = {};
  for (let values in itemsToCount) {
    for (let names of allItems) {
      if ((itemsToCount[values] === true) && (values === names)) {
        if (!object[names]) {
          object[names] = 1
        } else {
          object[names] += 1
        }


      }
    }

  }
  return object
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)