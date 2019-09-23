function evenlySpaced(first, second, last) {
 //Provide your solution here

 var stack = [];
 var track = 0;
 var arr = [first, second, last].sort((a, b) => a - b);

 for (let i = 0; i < arr.length; i++) {
  track += arr[0];
  stack.push(track);
 }

 for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== stack[i]) {
   return false;
  }
 }
 return true;
}

module.exports = evenlySpaced;
