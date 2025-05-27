// * Promise method
function fetchUserData(userId) {
  if (!userId) throw new Error("User not found");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Yokesh", role: "Web Dev" });
    }, 100);
  });
}

const getGreeting = async (name) => {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
};

module.exports = { fetchUserData, getGreeting };
