//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw, code_words) {
 var arr = [];
 var data = {};
 var keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

 for (let i = 0; i < code_words.length; i++) {
  var key = keys[i];
  data[key] = code_words[i];
 }
 for (let i = 0; i < raw.length; i++) {
  var targetKey = raw[i];
  arr.push(data[targetKey]);
 }
 return arr;
}

/*

Write a function that replaces the words in `raw` with the words in `code_words` such that the first occurrence of
each word in `raw` is assigned the first unassigned word in `code_words`.
Assume that the total number of unique elements in `raw` string is greater than the total number of unique elements in `code_words`

encoder(["a"], ["1", "2", "3", "4"]) → ["1"]
encoder(["a", "b"], ["1", "2", "3", "4"]) → ["1", "2"]
encoder(["a", "b", "a"], ["1", "2", "3", "4"]) → ["1", "2", "1"]
encoder(["a", "b", "a", "c"], ["1", "2", "3", "4"]) → ["1", "2", "1", "3"]
*/
module.exports = encoderSolution;
