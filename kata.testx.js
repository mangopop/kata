const kata = require('./sameIfSquared');

test('freq counter matches all arrays', () => {
  expect(kata([1, 2, 3], [4, 1, 9])).toBe(true);
  expect(kata([2, 2, 2], [4, 4, 4])).toBe(true);
  expect(kata([1, 2, 2, 2, 2, 4], [1, 4, 4, 4, 4, 16])).toBe(true);
  expect(kata([], [])).toBe(true);
  expect(kata([1, 2, 3], [1, 9])).toBe(false);
  expect(kata([1, 2, 1], [4, 4, 1])).toBe(false);
  expect(kata([1, 2, 1], [4, 4, 1, 2])).toBe(false);
});