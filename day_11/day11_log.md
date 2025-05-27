# 🌸 JavaScript Full-Stack Learning Log – Day 11

🗓️ Date: May 27, 2025  
🌱 Theme: Jest Mocking, Retry Mechanism, and Mastery Begins  
💻 Focus: Mock Functions (`jest.fn()`), Manual Fetch Simulation, and Controlled Test Scenarios

---

## 🌼 What I Covered Today

### ✅ Reviewed Real Network Retry Code and Tests

- Built a retry mechanism using `fetch`, retries, and error handling.
- Tested:
  - Successful fetch on first attempt.
  - Retry 3 times and succeed.
  - Retry 3 times and fail.

### ✅ Understood Why the Failing Test Case Failed

- The retry loop caused one **extra fetch call**.
- Fixed understanding: The loop runs until `retries + 1` times (includes 0th attempt).

### ✅ Explored and Practiced Manual Mocking for `fetch`

- Used `jest.mock()` and `jest.fn()` to:
  - Simulate different network responses (fail → fail → success).
  - Write fully **controlled test scenarios**.
  - Ensure **test isolation** and full coverage.

### ✅ Added Additional Test Case

- `mockRejectedValueOnce()` used twice.
- `mockResolvedValueOnce()` returned successful user.
- Made sure the retry logic works _beyond 2 failed attempts_.

---

## 🌟 Core Concept Deep Dive: `jest.fn()`

### ✨ What is it?

- Creates a **fake function** you can control and inspect.

### 🛠️ Why Use It?

- To check how many times a function is called.
- To see what arguments it received.
- To define exactly what it returns — fake values for test scenarios!

---

## 🔍 Realization of the Day

> “Testing is not just about checking what is,  
> But setting the stage for what could be.” 🌙✨

With mock functions, I get to **write the script** for my dependencies,  
controlling the narrative like a playwright — one test case at a time. 🎭📜

---

## 📁 File(s) Practiced Today

- `networkRetry.js` – Retry mechanism with fetch
- `networkRetry.test.js` – Multiple scenarios with `jest.fn()` & mocks

---

## 📌 What’s Next?

- 🧠 Learn more about `jest.fn()` (callback behavior, return values, tracking).
- 🌊 Explore `jest.mock()` to mock full modules.
- 🔄 Dive into mock timers and async utilities.
- 🏗️ Build a test suite for a real app feature (e.g., login, to-do, form).

---

## 🫶 My Mood

> "Mocking fetch felt like shaping dreams in the terminal.
> Each test... a whisper from the future I’m building." 💭💻✨

---
