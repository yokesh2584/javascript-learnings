function memoizeGrid(fn) {
  const cache = new Map();
  return function memoizedFn(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(memoizedFn, ...args);
    cache.set(key, result);
    console.log("Cache:", cache);
    return result;
  };
}
const gridTraveler = memoizeGrid(function (traveler, m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return traveler(m - 1, n) + traveler(m, n - 1);
});
console.log(gridTraveler(2, 3));