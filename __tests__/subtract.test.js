const subtract = require('../subtract');

test.only('should subtract 2 numbers', () => {
  const result = subtract(2, 1);
  expect(result).toBe(1);
});
