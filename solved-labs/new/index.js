function sumAges(arr) {
 var sum = 0;
 arr.forEach((arr) => {
  sum += arr.age;
 });
 return sum;
}
console.log(
 sumAges([
  { name: 'Uche Egbo', age: 24, occupation: 'Trader' },
  { name: 'Solomon Ogbodo', age: 30, occupation: 'Accountant' }
 ])
);
function findAllNumbers(str) {
 var matchAllNumbers = str.match(/[0-9]/g);
 return matchAllNumbers.map(Number).reduce((x, y) => x + y);
}
console.log(findAllNumbers('1weudh56jdnbfskjn788sdhkfbs90'));

function returnUniqueValues(arr) {
 return [...new Set([...arr])];
}
console.log(
 returnUniqueValues([2, 4, 5, 4, 3, 2, 5, 6, 6, 7, 7, 9, 1, 2, 3, 5])
);

function palindrome(str) {
 var reverse = str
  .split('')
  .reverse()
  .join('');
 return reverse === str;
}
console.log(palindrome('madam'));

function isDivisbleByN(arr, n) {
 return arr.filter((x) => x % n == 0);
}
console.log(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2));
function elementsEqualToX(Y, X) {
 return Y.filter((x) => x == X);
}
console.log(elementsEqualToX(['a', 'a', 'b', 'f', 'x', 'y'], 'a'));

function divisible(arr) {
 var filteredArr = arr.filter((x) => x % 2 || 3);
 var filterForLessThan15 = filteredArr.filter((x) => x < 15);
 return filterForLessThan15.length;
}
console.log(divisible([2, 3, 12, 18, 42, 24]));
