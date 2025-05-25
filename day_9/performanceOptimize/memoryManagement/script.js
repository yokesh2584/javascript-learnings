// ! Memory Management in JavaScript
// ? 1. What is Memory in JavaScript?
// In simple words, memory is like the space in your mind where thoughts are stored.
// In JavaScript, it's the space where values live when the code runs.

// There are two special places where this memory is kept:
// Stack (🎯 small, fast, simple) – for simple values like numbers, strings, booleans, references.
// Heap (🏰 big, slower, magical) – for complex values like objects, arrays, functions.

// ? 2. Garbage Collection – The Magic Janitor
// Garbage Collector — the one who removes unused things to free up memory 🧹✨

// ? 3. Memory Leaks
// Sometimes, Garbage Collector can't clean things because:

// They're still referenced but never used again
// They’re trapped in closures
// Event listeners were not removed
// Or we left things in window or global variables!

// These uncleaned rooms pile up... and the memory usage grows 😵
// That’s what we call a memory leak.

// ? 4. How Can We Avoid Memory Leaks?
// 🧼 Nullify references when you no longer need them
// element = null;

// 🧹 Remove event listeners when they’re done
// element.removeEventListener('click', handler);

// 🌱 Use local scopes instead of global variables
// 🔍 Use Chrome DevTools → Memory tab → Take heap snapshots and track detached DOM nodes

// ?  5. Example of Memory Leak
// let arr = [];
// function pushForever() {
//   arr.push(new Array(1000000).fill("*"));
// }
// Called again and again – memory fills up but we never free it

//*| Concept                | Meaning                                      |
// | ---------------------- | -------------------------------------------- |
// | **Memory Allocation**  | Giving space for values                      |
// | **Garbage Collection** | Auto cleanup of unused data                  |
// | **Memory Leak**        | Keeping unused data that’s still “reachable” |
// | **Heap** & **Stack**   | Places where values live                     |
// | **DevTools**           | Our telescope to peek into memory universe   |

// TODO:
// ? Step 1: Try a Simple Allocation & Observe in DevTools
let data = [];

function allocateMemory() {
  for (let i = 0; i < 1000; i++) {
    data.push(new Array(1000).fill("🌸"));
  }
  console.log("Memory allocated!");
}
allocateMemory();
allocateMemory();

// * How to Test in DevTools (Chrome):
// Open DevTools → go to Memory tab
// Click on "Heap snapshot" 📸
// Run allocateMemory() a few times in the Console
// Take another snapshot
// 🧠 Look at objects → Array, String — see how they grew?

// You can also watch Memory Timeline by switching to the Performance tab → start recording → run function → stop → see the memory curve!

// ? Step 2: Cleaning Up – Releasing Memory
// Now let’s free up space manually and see what happens.
data = null;
console.log("Memory released (waiting for garbage collection)");

// Then, in DevTools, force garbage collection by clicking the 🧹 icon in the Memory tab!
// Take another snapshot — see how memory goes down
