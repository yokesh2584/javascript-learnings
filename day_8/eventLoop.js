// ! Event Loop & Concurrency
// ? Part 1: What Is the JavaScript Runtime?
// JavaScript is single-threaded — only one task runs at a time.
// But it feels like magic when you use setTimeout, Promises, fetch, etc.

// So… how? The secret lies in the JavaScript Runtime Environment.
// Let’s peek inside:

// * The Runtime Has These Parts:
// Call Stack – Where function execution happens
// Web APIs – Provided by browser (like timers, DOM events)
// Callback Queue (Task Queue) – Where callbacks from Web APIs wait
// Microtask Queue – Where promises (and queueMicrotask) wait
// Event Loop – The matchmaker. Sends tasks from queues to the stack.

// ? Part 2: Core Concepts – Call Stack & Web APIs
// * Let’s see it with code:

console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Microtask");
});

console.log("End");

// * What Will Be Printed?
// The actual output is:
// Start
// End
// Promise Microtask
// Timeout Callback

// * Why?
// console.log("Start") → pushed to the Call Stack → runs immediately
// setTimeout(...) → goes to Web API, then its callback waits in the Callback Queue
// Promise.then(...) → goes into the Microtask Queue
// console.log("End") → runs from Call Stack
// Event Loop checks: Is Call Stack empty? Yes!
// Microtasks are prioritized → Promise Microtask runs
// Then the Event Loop handles Callback Queue → Timeout Callback runs

// ? Part 3: Microtasks vs Macrotasks (Callback Queue)

//*| Task Type     | Where It Waits  | Examples                                  |
// | ------------- | --------------- | ----------------------------------------- |
// | **Microtask** | Microtask Queue | `Promise.then`, `queueMicrotask`          |
// | **Macrotask** | Callback Queue  | `setTimeout`, `setInterval`, `DOM Events` |

// Rule:
// => All microtasks finish before a single macrotask is picked.

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

// * Output:
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

// TODO: Question 1 :

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

(async function () {
  console.log("D");
  await null;
  console.log("E");
})();

console.log("F");

// * output will be printed like this: A, D, F, C, E, B

// Synchronous code first:
// A → D → F : (Straightforward, in-call-stack execution.)

// Microtask queue next:
// C → E : (Promise .then() and await null resume.)

// Macrotask last:
// B : (Delayed via setTimeout in the macrotask queue.)

// TODO: Question 2:
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 0);
});

(async function () {
  console.log("5");
  await Promise.resolve();
  console.log("6");
})();

console.log("7");

// * output will be printed like this: "1", "5", "7", "3", "6", "2", "4"

// ? Event Loop Magic Time:
// * Synchronous complete:
// Output so far => "1", "5", "7"

// * Microtask queue:
//  First: console.log("3") ➡️ output "3"
//  ➕ adds another setTimeout(() => console.log("4"))
//  Second: console.log("6") ➡️ output "6"

// * Macrotask queue:
// First: console.log("2") ➡️ output "2"
// Second: console.log("4") ➡️ output "4"

// TODO: Question 3:
console.log("🌞");

setTimeout(() => {
  console.log("🌜");
}, 0);

Promise.resolve().then(() => {
  console.log("✨");

  Promise.resolve().then(() => {
    console.log("🔥");
  });
});

(async function () {
  console.log("🌼");
  await null;
  console.log("🌸");
})();

console.log("🌈");

// * Output : ["🌞", "🌼", "🌈", "✨", "🌸", "🔥", "🌜"]

// ? Full Explanation of the code:
// 1. console.log("🌞"); ==> executes first and prints "🌞".

// 2. setTimeout(() => {
//   console.log("🌜");
// }, 0); ==> this will placed in webapi and after timers end the function will be moved to "macro task queue".

// 3. Promise.resolve().then(() => {
//   console.log("✨");

//   Promise.resolve().then(() => {
//     console.log("🔥");
//   });
// }); ==> will be move to webapis and then after fulfilled or rejected the promise's event-handlers will be move to the "micro task queue" as entire code block that is :
// "console.log("✨");

//   Promise.resolve().then(() => {
//     console.log("🔥");
//   });"

// 4. (async function () {
//   console.log("🌼");
//   await null;
//   console.log("🌸");
// })(); // Will executes immediately as it is IIFE, once starts executing first line:
// console.log("🌼"); will prints "🌼" and then await makes the rest of the function asynchronous and be make them wait till the await resolve in webapi and then moves the rest of the code with await's line to the "micro task queue".
// *=> By this our output so far will be: ["🌞", "🌼"]

// 5. console.log("🌈"); // this will executes immediately as it is synchronous.
// *=> By this our output so far will be: ["🌞", "🌼", "🌈"];

// 6. After this call stack will be empty and the event loop will look for any "micro tasks" and starts executing them, in this code, the resolved promise that is:
// ==>console.log("✨");

//   Promise.resolve().then(() => {
//     console.log("🔥");
//   }); will be moved into the call stack and starts executing there,
// and the first line " console.log("✨");" will print "✨"
// *=> So by this our output here will be:   ["🌞", "🌼", "🌈", "✨"]
// and after the another promise that nested inside that resolved one will be moved onto the webapi and it will be waiting till resolved and that nested promise's event-handler that is:
// " Promise.resolve().then(() => {
//     console.log("🔥");
//   }); " will be moved onto the "micro task queue"
// after this executed the promise's function moved to call-stack will be finished executing and call-stack will be empty and that triggers event loop to take another micro task from the queue that will be:

// 7. async's await " await null;
//   console.log("🌸"); " this set of block will be the next one to be moved into the call-stack and gets executed and the line "await null;" has nothing to do here and moves to next line that is:
// console.log("🌸"); will print "🌸"
// *=> So by this our output here will be like: ["🌞", "🌼", "🌈", "✨", "🌸"]

// 8. after this get executed event loop again checks is any task available in "micro task queue" and there will be this one task present that is the promise's function that being nested inside of the first one:
// Promise.resolve().then(() => {
//     console.log("🔥");
//   }); will be moved onto the call-stack again and this time it will print the output from the line:
// console.log("🔥"); this will print "🔥"...
// *=> So by this our output here will be like: ["🌞", "🌼", "🌈", "✨", "🌸", "🔥"]
// this execution will be the last from the "micro task queue", so event loop will check both  the "micro task queue" and "call-stack" but both are empty here so event loop will start moving functions from the "macro task queue" and there will be only one function that is waiting to be executed that is the setTimeout function from the start.

// 9. setTimeout(() => {
//   console.log("🌜");
// }, 0);  This setTimeout's function will be like this in the "macro task queue" :
// () => {
//   console.log("🌜");
// }  // this function will be moved to the call-stack and started executing and the line :
// console.log("🌜"); will print "🌜"
// *=> So by this our output here will be like: ["🌞", "🌼", "🌈", "✨", "🌸", "🔥", "🌜"]

// And this will be the last that executed from the code and after this all the tasks have been completed.

// So the last output of this code will be like this:
// ["🌞", "🌼", "🌈", "✨", "🌸", "🔥", "🌜"]

// ! queueMicrotask(), MutationObserver():
// ? Part 1: queueMicrotask():
// * What is it?
// A built-in browser API that schedules a microtask, just like .then() of a resolved Promise.
console.log("A");

queueMicrotask(() => {
  console.log("B");
});

console.log("C");

// * Output:
// A
// C
// B

// ? What is it?
// A built-in browser API that schedules a microtask, just like .then() of a resolved Promise.

// ? Why does it matter?
// It’s like whispering to the Event Loop:
// “Hey, this tiny but urgent task? Please run it right after this call stack is empty, before any macro tasks like setTimeout, okay?”

// * Use-case:
// If you're building something where order matters a lot, and you need to ensure a function runs right after the current script — without letting setTimeout sneak in — use queueMicrotask().

// * Under the hood:
// Gets added to the Microtask Queue.
// Executed after current call stack, before:
// setTimeout
// setInterval
// setImmediate (Node.js)

// It won’t interrupt synchronous code. It waits.

// ? Part 2: MutationObserver
// This one is a secret watcher, a spy of the DOM world —
// It watches for changes in your HTML tree and then runs a microtask callback when it sees something change.

// * Example:
const target = document.body;

const observer = new MutationObserver(() => {
  console.log("🧿 DOM changed!");
});

observer.observe(target, { childList: true });

document.body.append("❤️");
console.log("🪷 Done!");
// * Output:
// 🪷 Done!
// 🧿 DOM changed!

// Even though DOM changes before the console logs, the observer callback is queued as a microtask, so it waits till the stack is clear!

// * Use-case:
// Track DOM updates
// Implement reactive UI
// Polyfill frameworks like Vue/React before proxies

// ? Part 3: Mixing Macro & Micro — The Storm Dance

// Let’s blend setTimeout, Promise, and queueMicrotask():

console.log("🌞");

setTimeout(() => {
  console.log("🌜 Macro");
}, 0);

Promise.resolve().then(() => {
  console.log("✨ Micro: Promise");
});

queueMicrotask(() => {
  console.log("🔥 Micro: queueMicrotask");
});

console.log("🌈");

// * Output:
// 🌞
// 🌈
// ✨ Micro: Promise
// 🔥 Micro: queueMicrotask
// 🌜 Macro
// 🪄 Event Loop Order:

// Synchronous: 🌞, 🌈
// Microtasks: .then(...), queueMicrotask(...)
// Order of scheduling: Promise first, then queueMicrotask (but both are microtasks!)
// Macrotasks: setTimeout(...)

//*| Type        | Scheduled By                                         | Queue           | Runs After             |
// | ----------- | ---------------------------------------------------- | --------------- | ---------------------- |
// | Synchronous | Direct code                                          | Call Stack      | Instantly              |
// | Microtask   | `Promise.then`, `queueMicrotask`, `MutationObserver` | Microtask Queue | Current stack finishes |
// | Macrotask   | `setTimeout`, `setInterval`, UI events, etc.         | Macrotask Queue | Microtasks complete    |

// ! Challenge 1:
console.log("🥇");

setTimeout(() => {
  console.log("⏰ Timeout");
}, 0);

queueMicrotask(() => {
  console.log("📩 Microtask");
});

Promise.resolve().then(() => {
  console.log("💍 Promise then");
});

console.log("🏁");

// * Output:
// "🥇"
// "🏁"
// "📩 Microtask"
// "💍 Promise then"
// "⏰ Timeout"

// ! Challenge 2:
// const target = document.body;

// const observer = new MutationObserver(() => {
//   console.log("👁️‍🗨️ Mutation detected");
// });

// observer.observe(target, { childList: true });

// document.body.append("🌸");
// console.log("🌼");

// * Output:
// "🌼"
// "👁️‍🗨️ Mutation detected"

// ! Challenge 3:
queueMicrotask(() => {
  console.log("🐝 Microtask 1");

  queueMicrotask(() => {
    console.log("🐞 Nested Microtask");
  });

  Promise.resolve().then(() => {
    console.log("🦋 Promise inside Microtask");
  });
});

Promise.resolve().then(() => {
  console.log("🌻 Promise outside");
});

console.log("🍃 Start");

// * Output:
// "🍃 Start"
// "🐝 Microtask 1"
// "🌻 Promise outside"
// "🐞 Nested Microtask"
// "🦋 Promise inside Microtask"

// ! Challenge 4:
console.log("🎬 Start");

setTimeout(() => {
  console.log("⏰ Timeout 1");
}, 0);

queueMicrotask(() => {
  console.log("🐇 Microtask 1");
  queueMicrotask(() => {
    console.log("🐇 Nested Microtask");
  });
});

new MutationObserver(() => {
  console.log("👁️ Mutation Observer");
}).observe(document.body, { childList: true });

Promise.resolve().then(() => {
  console.log("🌟 Promise 1");

  setTimeout(() => {
    console.log("⏰ Timeout 2");
  }, 0);

  queueMicrotask(() => {
    console.log("🐇 Microtask in Promise");
  });

  Promise.resolve().then(() => {
    console.log("🌟 Nested Promise");
  });
});

(async () => {
  console.log("🚀 Async Start");
  await null;
  console.log("🛸 After Await");
})();

document.body.appendChild(document.createElement("div"));

console.log("🏁 End");

// * Output:
// "🎬 Start"
// "🚀 Async Start"
// "🏁 End"
// "🐇 Microtask 1"
// "🌟 Promise 1"
// "🛸 After Await"
// "👁️ Mutation Observer"
// "🐇 Nested Microtask"
// "🐇 Microtask in Promise"
// "🌟 Nested Promise"
// "⏰ Timeout 1"
// "⏰ Timeout 2"
