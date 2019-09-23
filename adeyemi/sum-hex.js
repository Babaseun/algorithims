function highestSum(Y, N) {
 // write your code...
 var sumOfEachArr = [];
 var arr = [];
 var splitY = Y.split('');
 var len = splitY.length;
 if (Y.length < N) {
  return 0;
 }
 var hexSymbols = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
 for (let i = 0; i < len; i++) {
  var cut = splitY.splice(0, N);
  if (cut.length === N) {
   arr.push(cut);
  }
 }
 arr.forEach((collection) => {
  var getEachCollection = collection;

  for (let i = 0; i < getEachCollection.length; i++) {
   if (!Number(getEachCollection[i])) {
    var getSymbol = getEachCollection[i];
    var getIndex = getEachCollection.indexOf(getSymbol);
    getEachCollection.splice(getIndex, 1, hexSymbols[getSymbol]);
   }
  }
 });

 arr.forEach((collection) => {
  var convertToNumber = collection.map(Number);
  var sumCollection = convertToNumber.reduce((x, y) => x + y);
  sumOfEachArr.push(sumCollection);
 });
 return Math.max(...sumOfEachArr);
}

module.exports = highestSum;
/*


highestSum('12F7A9348', 3) to return 26;
highestSum('453DAF12F', 2) to return 25;
highestSum('1231ADE', 4) to return 7;
highestSum('ADE', 4) to return 0;*/
