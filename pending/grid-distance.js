function gridDistance(arrayOfDirections) {
 // write your code here
 var originalDir = [];
 var directions = [];
 var values = [];
 var result = '';

 arrayOfDirections.forEach((direction) => {
  var getEachDirection = direction.match(/[a-z]/g).join('');
  var eachValue = direction.match(/[0-9]/g).join('');
  directions.push(getEachDirection);
  values.push(Number(eachValue));
 });
 for (let i = 0; i < directions.length; i++) {
  if (directions[i] === 'kmwest' && directions[i + 1] === 'kmsouth') {
   originalDir.push(values[i]);
  }
  if (directions[i] === 'kmwest' && directions[i + 1] === 'kmnorth') {
   originalDir.push(values[i]);
  }
  if (directions[i] === 'kmwest' && directions[i + 1] === 'kmnorth') {
   originalDir.push(values[i]);
  }
  if (directions[i] === 'kmnorth' && directions[i + 1] === 'kmeast') {
   originalDir.push(values[i + 1]);
  }
 }
 if (values.length === 1) {
  return Number(values) + 'km';
 }
 return originalDir.reduce((x, y) => x + y, 0) + 'km';
}

console.log(
 gridDistance([
  '300km-south',
  '50km-south',
  '70km-north',
  '160km-east',
  '79km-south',
  '50km-east'
 ])
);
/*


gridDistance(['2km-west', '4km-south', '0km-north', '12km-east']) => 14km
gridDistance(['5km-east', '2km-west', '5km-north', '2km-east', '4km-north']) => 14km
*/

module.exports = gridDistance;
