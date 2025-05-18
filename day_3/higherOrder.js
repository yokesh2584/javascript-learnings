// ! 1. Write a HOF called operationOnArray that takes an array and a function (callback) to perform a transformation (like doubling every number).
const numsArr = [1, 2, 3, 4, 5];
const operationOnArray = (nums, double) => double(nums);
const doubled = operationOnArray(numsArr, (nums) => nums.map((num) => num * 2));
console.log(doubled);

// ! 2. Write a HOF called transformInventory that takes an array of item names and a callback.
// ! The callback will uppercase each item.
const transformInventory = (arr, transform) => transform(arr);
const transform = (arr) => arr.map((ele) => ele.toUpperCase());
const arrayOfLoot = ["sword", "shield", "potion"];
const elements = transformInventory(arrayOfLoot, transform);
console.log(elements);

// ! 3. Create a HOF countCriticalHits that takes an array of damage values and a callback.
// ! The callback should count how many values are greater than 50 (critical hits!).
const countCriticalHits = (arr, count) => count(arr);
const countHit = (hits) => hits.filter((hit) => hit > 50);
const hits = [39, 21, 18, 70, 80, 71, 64, 92, 59, 65];
const criticHits = countCriticalHits(hits, countHit);
const desc = (a, b) => b - a;
console.log(criticHits.sort(desc));
console.log(`Number of critical hits: ${criticHits.length}`);
