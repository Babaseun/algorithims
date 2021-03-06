const switchChar = require('./letterSwitch');

test(`a simple case of switchChar('we', 'wkeap', 'mgren') to expect mr`, () => {
 expect(switchChar('we', 'wkeap', 'mgren')).toEqual('mr');
});

test(`a simple case of more characters switchChar('america', 'atvmeprciqz', 'mgrenskilop') to expect menklim`, () => {
 expect(switchChar('america', 'atvmeprciqz', 'mgrenskilop')).toEqual('menklim');
});

test(`a simple case of no character switchChar('', 'atvmeprciqz', 'mgrenskilop') to expect ''`, () => {
 expect(switchChar('', 'atvmeprciqz', 'mgrenskilop')).toEqual('');
});

test(`a simple case where actualChar and changeChar are of different lengths, switchChar('decagon', 'lmnbvcxzasdfghjktyrueiwoqpf', 'zdewsaqxcfrtgvbhyujnmkilop') to expect 'Length mismatch'`, () => {
 expect(
  switchChar(
   'decagon',
   'lmnbvcxzasdfghjktyrueiwoqpf',
   'zdewsaqxcfrtgvbhyujnmkilop'
  )
 ).toEqual('Length mismatch');
});

test(`a simple case where character inputChar is not in actualChars, switchChar('hectorial', 'swagerominthcl', 'mgrenskilopcqvx') to expect "cnqpkslrv"`, () => {
 expect(switchChar('hectorial', 'swagerominthcl', 'mgrenskilopcqv')).toEqual(
  'cnqpkslrv'
 );
});

test(`a simple case where inputChar has a length more than that of actualChar and changeChar, switchChar('hectorialityofaboss', 'swagerominthcl', 'mgrenskilopcqvx') to expect -1`, () => {
 expect(
  switchChar('hectorialityofaboss', 'swagerominthcl', 'mgrenskilopcqv')
 ).toEqual(-1);
});

test(`a simple case where actualChar has repeating characters, switchChar('menarick', 'wkeapincrgome', 'mgrenskilopca') to expect -1`, () => {
 expect(switchChar('menarick', 'wkeapincrgome', 'mgrenskilopca')).toEqual(
  'Repeated value'
 );
});

test(`a simple case where character inputChar is not in actualChar, switchChar('z', 'swagerominthcl', 'mgrenskilopcqvx') to expect -1`, () => {
 expect(switchChar('z', 'swagerominthcl', 'mgrenskilopcqv')).toEqual(-1);
});
