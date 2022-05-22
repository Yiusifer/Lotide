const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i]
    } else {
      results[sentence[i]] = [i]
    }



    //if (!results[i]) {
   //   results[i] = [sentence[i]];
   // }
  }
  return results;
};


  console.log(letterPositions("Lighthouse Labs"))