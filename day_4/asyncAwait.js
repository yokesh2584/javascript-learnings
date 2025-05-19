// ! Async/Await & Promises

const { use } = require("react");

// ? Question 1.
// * Create a function delayedGreet(name, delay) that:
// Waits for delay milliseconds using setTimeout (with a Promise wrapper),
// Then logs: "Hello, [name]!".

async function delayedGreet(name = "Guest", delay = 1000) {
  await wait(delay);
  console.log(`Hello, ${name}!`);
}
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delayedGreet("Yokesh", 3000);

// ? Question 2.
// * Create an async function getUsersWithCompany(companyName) that:
// Fetches all users from https://jsonplaceholder.typicode.com/users
// Filters and logs users only from the given companyName.

const getUsersWithCompany = async (companyName) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    const filteredUsers = users.filter(
      (user) => user.company.name === companyName
    );
    filteredUsers.forEach((filteredUser) => console.log(filteredUser));
  } catch (error) {
    console.log("Error:", error.message);
  }
};
getUsersWithCompany("Romaguera-Crona");

// ? Question 3. Sequential Fetcher
// * Create an async function fetchSequential() that:
//  Fetches post with ID 1.
//  After that, fetches the user of that post using the userId in the response.
//  Logs both post and user data in sequence.
// * API endpoints:
//  Post: https://jsonplaceholder.typicode.com/posts/1
//  User: https://jsonplaceholder.typicode.com/users/[userId]

const fetchSequential = async () => {
  try {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const postData = await postResponse.json();
    const userId = postData.userId;
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = await userResponse.json();
    console.log("Post data:", postData);
    console.log("Post's user:", userData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
fetchSequential();

// ? Question 4. Parallel Fetch
// * Create an async function fetchMultiplePosts(postIds) that:
//  Accepts an array of post IDs.
//  Fetches all posts in parallel using Promise.all.
//  Logs all the fetched posts.

const fetchMultiplePosts = async (postIds) => {
  try {
    for (let i = 0; i < postIds.length; i++) {
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postIds[i]}`
      );
      const postsData = await postsResponse.json();
      console.log(postsData);
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
};

fetchMultiplePosts([1, 3, 5]);

// ? Question 5. Retry Mechanism
// * Create a function retryFetch(url, retries) that:
// Tries to fetch a URL.
// If it fails, retries n times before giving up.
// Logs success or failure at the end.

const retryFetch = async (url, retries) => {
  try {
    let reFetch = 0;
    while (reFetch < retries) {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Success! URL fetched.");
        break;
      }
      reFetch++;
      if (reFetch === retries) console.log("Failure! Couldn't fetch the url.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};
retryFetch("https://jsonplaceholder.typicode.com/posts/1", 3);
