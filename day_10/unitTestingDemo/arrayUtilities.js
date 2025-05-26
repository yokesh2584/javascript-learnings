// 🔧 findMax.js
// Find max number in an array.
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

// 🔧 sumOfArray.js
// Sum up all numbers in an array.
function sumOfArray(arr) {
  const sum = arr.reduce((prevSum, currentVal) => prevSum + currentVal, 0);
  return sum;
}

// 🔧 filterEvenNumbers.js
// Return even numbers from an array.
function filterEvenNumbers(arr) {
  const evenNums = arr.filter((num) => num % 2 === 0);
  return evenNums;
}

module.exports = { findMax, sumOfArray, filterEvenNumbers };
