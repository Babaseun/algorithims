function sumNumbers(str) {
 // your code goes here...
 var arr = [];
 var i = 0;
 var j = 0;
 if (str.length == 2) {
  return Number(str);
 }
 var splitStr = str.split('');

 while (i < splitStr.length) {
  if (!Number(splitStr[i])) {
   var data = splitStr.slice(j, i);
   arr.push(data.join(''));
   j = i + 1;
  }

  i++;
 }

 return arr
  .map(Number)
  .filter(Boolean)
  .reduce((x, y) => x + y, 0);
}

console.log(
 sumNumbers('hsel32l4n34l545llnbj34j2v2.bv34b5n63m5m6m35m356m,3,63.65')
);
module.exports = sumNumbers;
