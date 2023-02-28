const reverseString = require('../modules/reverseString');

test('works', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Yes')).toBe('seY');
    expect(reverseString('Full-Stack')).toBe('kcatS-lluF');
});