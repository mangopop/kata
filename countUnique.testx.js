const countUnique = require('./countUniqueValues');
test('count Unique Value', () => {
  expect(countUnique([1,3,4,9])).toBe(4);
  expect(countUnique([0])).toBe(1);
  expect(countUnique([])).toBe(0);
  expect(countUnique([1,1,1,1])).toBe(1);
  expect(countUnique([2,2,3,3])).toBe(2);
  expect(countUnique([1,2,3])).toBe(3);
  expect(countUnique([1,1,2])).toBe(2);
  expect(countUnique([-1,-1,0,3])).toBe(3);
});