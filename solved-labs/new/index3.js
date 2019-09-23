function extractNames(data) {
 return data.map(({ name }) => name);
}
console.log(extractNames(register));

function sumNumbers(str) {
 var matchAllNumbers = str.match(/[0-9]/g);
 return matchAllNumbers.map(Number).reduce((x, y) => x + y);
}
console.log(sumNumbers('2,g,65,e,3,7,5,g,3'));

function totalPositiveSum(arr1, arr2) {
 var collection = [];

 for (let i = 0; i < arr1.length; i++) {
  var sum = arr2[i] - arr1[i];
  collection.push(sum);
 }
 return collection.filter((x) => x > 0).reduce((x) => x + y);
}

console.log(totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
