const getUserById = async (id) => {
  const users = [
    { id: 1, name: "Yokesh", isActive: true },
    { id: 2, name: "Ammu", isActive: false },
  ];
  return users.find((user) => user.id === id);
};

const isUserValid = async (user) => {
  return user.isActive === true;
};

const verifyLogin = async (userId) => {
  try {
    if (!userId) {
      throw new Error("UserId is not provided");
    } else if (typeof userId !== "number" || Array.isArray(userId)) {
      throw new Error("Invalid userId");
    }
    const user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const isActive = await isUserValid(user);
    if (!isActive) {
      throw new Error("Access denied");
    }

    return `Access granted to ${user.name}`;
  } catch (error) {
    throw error;
  }
};

module.exports = verifyLogin;
