const Calculator = require('../modules/calculator');
const calculator = new Calculator();

describe('Method tests', () => {
    
    // Add Method Test
    describe('Add method', () => {
        test('Adds two positive numbers', () => {
            expect(calculator.add(5, 7)).toBe(12)
        });

        test('Adds two negative numbers', () => {
            expect(calculator.add(-8, -6)).toBe(-14)
        });

        test('Adds a positive and a negative number', () => {
            expect(calculator.add(5, -3)).toBe(2)
        });
    })

    // Subtract Method Test
    describe('Subtract method', () => {
        test('Subtract two positive numbers', () => {
            expect(calculator.subtract(8, 5)).toBe(3)
        });

        test('Subtract two negative numbers', () => {
            expect(calculator.subtract(-5, -9)).toBe(4)
        });

        test('Subtract a positive and a negative number', () => {
            expect(calculator.subtract(-4, 6)).toBe(-10)
        });
    })

    // Divide Method Tests
    describe('Divide method', () => {
        test('Divide two positive numbers', () => {
            expect(calculator.divide(5, 10)).toBe(0.5)
        });

        test('Divide two negative numbers', () => {
            expect(calculator.divide(26, 2)).toBe(13)
        });

        test('Divide a positive and a negative number', () => {
            expect(calculator.divide(64, 8)).toBe(8)
        });
    })

    // Multiply Method Test
    describe('Multiply method', () => {
        test('Multiply two positive numbers', () => {
            expect(calculator.multiply(5, 5)).toBe(25)
        });

        test('Multiply two negative numbers', () => {
            expect(calculator.multiply(6, 2)).toBe(12)
        });

        test('Multiply a positive and a negative number', () => {
            expect(calculator.multiply(9, 6)).toBe(54)
        });
    })
})