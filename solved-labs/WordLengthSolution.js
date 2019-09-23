function wordLength(arr) {
 //code goes here
 const map = new Map();
 const toLowerCase = arr.map((string) => string.toLowerCase());
 const removeDuplicateStr = [...new Set(toLowerCase)];
 removeDuplicateStr.forEach((string) => {
  map.set(string, string.length);
 });
 return map;
}

module.exports = wordLength;

// wordLen(["a", "bb", "a", "bb"]) → {"bb": 2, "a": 1}
// wordLen(["this", "and", "that", "and"]) → {"that": 4, "and": 3, "this": 4}
// wordLen(["code", "code", "code", "bug"]) → {"code": 4, "bug": 3}
