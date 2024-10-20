const { add } = require('../controllers/calculatorController')

test('should return 0 for empty string', () => {
  expect(add('')).toBe(0)
})

test('should return number for single number', () => {
  expect(add('1')).toBe(1)
})

test('should return sum for two numbers', () => {
  expect(add('1,2')).toBe(3)
})

test('should handle new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6)
})

test('should handle different delimiters', () => {
  expect(add('//;\n1;2')).toBe(3)
})

test('should throw exception for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2,-4')
})
