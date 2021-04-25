const sameFrequency = require('./sameFrequency');
test('2 args have same freq', () => {
  // expect(sameFrequency(123,321)).toBe(true);
  expect(sameFrequency(123123,321321)).toBe(true);
  expect(sameFrequency(9867,6789)).toBe(true);
  expect(sameFrequency()).toBe(false);
  expect(sameFrequency(0,0)).toBe(true);
  expect(sameFrequency(123,234)).toBe(false);
});