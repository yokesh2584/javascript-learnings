const {
  findMax,
  sumOfArray,
  filterEvenNumbers,
} = require("./arrayUtilities.js");

const arrOfNums = [5, 2, 6, 14, -33, 64, 84, 91, 27, 18];

test('Max number of an array "arrOfNums" is 91', () => {
  expect(findMax(arrOfNums)).toBe(91);
});

test('Sum of all numbers of an array "arrOfNums" is 278', () => {
  expect(sumOfArray(arrOfNums)).toBe(278);
});

test('Even numbers of an array "arrOfNums" is [2, 6, 14, 64, 84, 18]', () => {
  expect(filterEvenNumbers(arrOfNums)).toStrictEqual([2, 6, 14, 64, 84, 18]);
});
