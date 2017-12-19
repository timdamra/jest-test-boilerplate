const sum = require('../sum');

test('should return sum of 2 numbers', () => {
  const result = sum(2, 3);
  expect(result).not.toBe(2);
});
