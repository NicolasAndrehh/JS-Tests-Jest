const capitalize = require('../modules/capitalize')

test('works', () => {
    expect(capitalize('nicolas')).toBe('Nicolas')
    expect(capitalize('france')).toBe('France')
    expect(capitalize('colombia')).toBe('Colombia')
});