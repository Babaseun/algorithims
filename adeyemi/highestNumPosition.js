function highestNumPosition(array) {
 // write you code here...
 if (array.length === 0) {
  return [0, 0];
 }
 var i = 0;
 var j = 0;
 var allMaxValuesForEachRow = [];
 var data = {};
 while (i < array.length) {
  if (j == array[i].length - 1) {
   var max = Math.max(...array[i]);
   var index = [...array[i]].indexOf(max);
   data[index] = max;
   allMaxValuesForEachRow.push(max);
   i++;
   j = 0;
  }
  j++;
 }
 var columnAndRow = [];
 var keys = [];
 var values = [];

 keys = [...Object.keys(data)];
 values = [...Object.values(data)];

 var findMax = Math.max(...values);
 var findIndexOfMax = values.indexOf(findMax);

 columnAndRow.push(Number(keys[findIndexOfMax]));

 var getMaxForRows = Math.max(...allMaxValuesForEachRow);
 var getIndexForRows = allMaxValuesForEachRow.findIndex(
  (x) => x == getMaxForRows
 );
 columnAndRow.unshift(getIndexForRows);

 return columnAndRow;
}

module.exports = highestNumPosition;
