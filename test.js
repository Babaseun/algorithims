function minimumSteps(stairs, maxPace) {
 // write your code here ....
 if (stairs[0] === 0) {
  return `Stopped at position 0 with 0 step`;
 }
 if (stairs.every((x) => x == 1) && stairs.length < maxPace) {
  let steps = 0;
  for (let i = 1; i < stairs.length; i++) {
   steps++;
  }
  return `Finished with ${steps} steps`;
 }
 if (!stairs.every((x) => x == 1) && stairs.length < maxPace) {
  let position = 0;
  for (let i = 0; i < stairs.length; i++) {
   if (stairs[i] === 1) {
    position++;
   }
  }
  return `Stopped at position ${position} with ${1} step`;
 }
 if (stairs.every((x) => x == 1) && stairs.length > maxPace) {
  let steps = 1;
  for (let i = stairs.length; i < stairs.length; i++) {
   if (stairs[i] === 1) {
    steps++;
   }
  }
  return `Finished with ${steps} step`;
 }
 if (!stairs.every((x) => x == 1) && maxPace > stairs.length) {
  let position = 0;
  for (let i = 0; i < stairs.length; i++) {
   if (stairs[i] === 1) {
    position++;
   }
  }
  return `Stopped at position ${position} with ${1} step`;
 }
 if (stairs.length > maxPace) {
  var j = 0;
  var steps = 0;
  var start = 0;
  var stop = maxPace + 1;

  while (start < stairs.length) {
   var data = stairs.slice(j, stop);

   if (data[data.length - 1] === 0) {
    steps++;
    stop--;
   }

   if (data[data.length - 1] !== 0) {
    steps++;
   } else {
    j = stop - 1;
    stop += maxPace;
   }
   data = stairs.slice(j, stop);
   start += data.length - 1;
  }
  return `Finished with ${steps} stepsd`;
 }
}
console.log(minimumSteps([1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], 7));

module.exports = minimumSteps;
