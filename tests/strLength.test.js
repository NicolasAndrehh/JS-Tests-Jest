const stringLength = require('../modules/strLength');

test('works', () => {
    expect(stringLength('Nicolas')).toBe(7);
    expect(stringLength('123456789')).toBe(9);
    expect(stringLength('1')).toBe(1);
})

test('stringLength throws error if string is not between 1 and 10 characters', () => {
    expect(() => stringLength('')).toThrowError();
    expect(() => stringLength('1234567890a')).toThrowError();
    expect(() => stringLength('a')).not.toThrow();
});