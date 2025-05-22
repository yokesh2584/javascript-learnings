// ! Module Pattern
// ? What it is:
// A design pattern used to encapsulate private variables and expose public methods using closures.

// ? What it does:
// Helps organize code, avoid polluting the global scope, and create reusable components.

// * Example:
const Counter = (function () {
  let count = 0;

  function changeByVal(val) {
    count += val;
  }

  function resetCountVal() {
    count = 0;
  }

  return {
    increment() {
      changeByVal(1);
    },
    decrement() {
      changeByVal(-1);
    },
    reset() {
      resetCountVal();
    },
    value() {
      return count;
    },
  };
})();

Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.value()); // 3
Counter.decrement();
console.log(Counter.value()); // 2
Counter.reset();
console.log(Counter.value()); // 0

// ! Revealing Module Pattern
// ? What it is:
// A variation of the Module Pattern where we define all functions and variables privately, then return only the public ones.

// ? What it does:
// It makes code more readable and structured—what’s private stays hidden, and what’s public gets revealed explicitly.

// * Example:
const Calculator = (function () {
  let result = 0;

  function add(num) {
    result += num;
  }

  function subtract(num) {
    result -= num;
  }

  function getResult() {
    return result;
  }

  // Revealing public methods
  return {
    add,
    subtract,
    getResult,
  };
})();

Calculator.add(5);
Calculator.subtract(2);
console.log(Calculator.getResult()); // 3

// ! IIFE (Immediately Invoked Function Expression)
// ? What it is:
// A function that runs as soon as it is defined.

// ? What it does:
// Creates a local scope instantly and helps avoid polluting the global namespace.

// * Example:
(function () {
  const message = "Hello from IIFE!";
  console.log(message);
})();

// You can also make it return values:
const magicNumber = (function () {
  let num = 18;
  return num * num;
})();
console.log(magicNumber); // 49

// ! Memoization
// ? What it is:
// An optimization technique where results of expensive function calls are cached for future use.

// ? What it does:
// Speeds up performance by avoiding redundant computations.

// * Example:
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.toString();
    if (cache[key]) {
      console.log("From cache", key);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    console.log("Cache:", cache);
    return result;
  };
}
function slowSquare(n) {
  console.log("Computing square of", n);
  return n ** 2;
}
const memoizedSquare = memoize(slowSquare);
console.log(memoizedSquare(3)); // Output: Computing square of 3 => 9
console.log(memoizedSquare(5)); // Output: Computing square of 5 => 25
console.log(memoizedSquare(8)); // Output: Computing square of 8 => 64
console.log(memoizedSquare(5)); // Output: From cache 5 => 25
console.log(memoizedSquare(10)); // Output: Computing square of 10 => 100

// ! Memoization in fibonacci:
// TODO: Write a memoFibonacci(n) that caches results and returns the Fibonacci of n.
// TODO: You can use the memoize helper or create a custom version.

function memoFibonacci(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const memoizedFibonacci = memoFibonacci(function fibonacci(n) {
  const fibSeq = [0, 1];
  if (n === 0) return fibSeq[0];
  if (n === 1) return fibSeq[1];
  for (let i = fibSeq.length; i <= n; i++) {
    fibSeq[i] = memoizedFibonacci(i - 1) + memoizedFibonacci(i - 2);
  }
  return fibSeq[n];
});

console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(15));

// ! Recursive Memoization in pure function:
function memoizeFib2(func) {
  const cache = new Map();
  return function memoizedFunc(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(memoizedFunc, ...args);
    cache.set(key, result);
    return result;
  };
}
const newMemoizedFibonacci = memoizeFib2(function (fib, n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
});
console.log(newMemoizedFibonacci(5));
console.log(newMemoizedFibonacci(10));
console.log(newMemoizedFibonacci(15));

// ! Memoization in Factorial Recursion:
function memoizeFact(fn) {
  const cache = new Map();
  return function memoizedFn(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(memoizedFn, ...args);
    cache.set(key, result);
    return result;
  };
}
const memoizedFactorial = memoizeFact(function (factorial, n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
});
console.log(memoizedFactorial(6));

// ! Memoized Grid Traveler:
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
