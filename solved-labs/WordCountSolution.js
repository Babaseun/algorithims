function wordCount(arrayOfStrings) {
 const removeDuplicateStr = [...new Set(arrayOfStrings)];
 const map = new Map();

 const data = {};

 var i = 0;
 var j = 0;

 while (j < removeDuplicateStr.length) {
  if (arrayOfStrings[i] === removeDuplicateStr[j]) {
   var arr = arrayOfStrings.filter((str) => str == removeDuplicateStr[j]);
   map.set(removeDuplicateStr[j], arr.length);
   j++;
   i = 0;
  } else {
   i++;
  }
 }
 for (let [key, value] of map.entries()) {
  data[key] = value;
 }
 return data;
}

module.exports = wordCount;

// wordCount(["a", "b", "a", "c", "b"]) → {"a": 2, "b": 2, "c": 1}
// wordCount(["c", "b", "a"]) → {"a": 1, "b": 1, "c": 1}
// wordCount(["c", "c", "c", "c"]) → {"c": 4}
