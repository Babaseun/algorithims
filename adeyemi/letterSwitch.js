function switchChar(inputChar, actualChar, changeChar) {
 // Code goes here
 var test = [];

 var result = '';
 var data = {};
 var splitActualChar = actualChar.split('');
 var splitChangeChar = changeChar.split('');
 var splitInputChar = inputChar.split('');
 var removeDuplicate = [...new Set(splitActualChar)];
 if (actualChar.length !== changeChar.length) {
  return 'Length mismatch';
 }
 if (removeDuplicate.length !== splitActualChar.length) {
  return 'Repeated value';
 }

 for (let i = 0; i < splitActualChar.length; i++) {
  var key = splitActualChar[i];
  data[key] = splitChangeChar[i];
 }
 for (let i = 0; i < splitInputChar.length; i++) {
  var getKey = splitInputChar[i];
  result += data[getKey];
  test.push(data[getKey]);
 }
 if (test.includes(undefined)) {
  return -1;
 }
 return result;
}
//console.log(switchChar('cade', 'abcdefgh', 'grdwqsdr'));
// the result for this is => "dgwq"

module.exports = switchChar;
