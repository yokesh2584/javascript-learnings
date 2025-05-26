function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    let result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

const memoizedFactorial = memoize(factorial);

module.exports = memoizedFactorial;
