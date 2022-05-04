const countLetters = function (word) {
  const object = {

  }
  for (const letter of word) {
    if (letter !== " ") {
      if (!object[letter]) {
        object[letter] = 1;

      } else {
        object[letter] += 1
      }
    }
  }
  return object
}

console.log(countLetters('Lighthouse is cool'))

