function minimumSteps(stairs, maxPace) {
 // write your code here ....
 if (stairs[0] === 0) {
  return `Stopped at position 0 with 0 step`;
 }
 if (stairs.length === 0) {
  return `Finished with 0 step`;
 }
 if (stairs.length > maxPace) {
  var m = 0;
  var j = maxPace + 1;
  var steps = 0;
  var trackLength = 0;
  for (let i = 0; i < stairs.length; i++) {
   var data = stairs.slice(m, j);
   trackLength += data.length;
   if (data[data.length - 1] === 0) {
    j = trackLength;
    steps++;
    console.log(data);
   }
   if (data[data.length - 1] !== 0) {
    steps++;
   }
   m += j - 1;
   j += maxPace + 1;
  }
  return steps;
 }
}
console.log(minimumSteps([1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], 3));

module.exports = minimumSteps;
