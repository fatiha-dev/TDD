const reverseString = require('./reverseString');
test('reverse Hello gives olleH', () => {
    expect(reverseString('Hello')).toBe('olleH');
    
  });