//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

function canBalance(array) {
 //Type your solutions here
 let scale = [];
 const arrayLength = array.length;

 const divideArrayInto2 = Math.ceil(array.length / 2);
 var firstCut = array.splice(0, divideArrayInto2);

 for (let i = 0; i < arrayLength; i++) {
  if (
   firstCut.reduce((x, y) => x + y, 0) == array.reduce((x, y) => x + y, 0) &&
   array.length != 0
  ) {
   scale.push(firstCut.length, array.length);
   break;
  } else {
   var cutFromSecondArr = array.splice(0, 1);
   firstCut.push(Number(cutFromSecondArr));
  }
 }

 return scale.length ? scale : -1;
}
// console.log(canBalance([1, 0, 0, -1]));
module.exports = canBalance;
// canBalance([1, 1, 1, 2, 1]) → [3,2]
// canBalance([2, 1, 1, 2, 1]) → -1
// canBalance([10, 10]) → [1,1]
// 3, 18, -5, -44, 23, 26, 20, -1, 0, -10, 30])).toEqual([10, 1])
