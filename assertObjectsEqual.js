const assertObjectsEqual = function (actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return "Fail";
  }
  for (first in actual) {
    if (actual[first] !== expected[first]) {
      return "Fail";
    }
  }
  return "Pass";
}


console.log(assertObjectsEqual({ A: 1, B: 2, C: 3, D: 4, E: 6 }, { A: 1, B: 2, C: 3, D: 4 }));
//const a = Object.keys({ A: 1, B: 2, C: 3, D: 5 }).length
//const b = Object.keys( {A: 1, B: 2, C: 3} ).length

//console.log(a === b)


/*let a = { A: 1, B: 2, C: 3 };

let b = {A: 1, B: 2, C: 3 };

console.log(Object.keys(a))
console.log(Object.keys(b))
console.log(Object.values(a))
console.log(Object.values(b))*/