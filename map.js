const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, callback) {
  const results = [];
  for (i of arr) {
    results.push(callback(i))
  }
  return results;

}

const results1 = map(words, word => word[0]);
console.log(results1);