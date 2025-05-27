const verifyLogin = require("./authService");

describe("verifyLogin", () => {
  test('Valid userId should return "Access granted to <user.name>" if user is active', async () => {
    const result = await verifyLogin(1);
    expect(result).toBe("Access granted to Yokesh");
  });

  test('Valid userId should throw error "Access denied" when user is not active', async () => {
    await expect(verifyLogin(2)).rejects.toThrow("Access denied");
  });

  test('Unmatched userId should throw "User not found"', async () => {
    await expect(verifyLogin(3)).rejects.toThrow("User not found");
  });

  test('Missing userId should throw "UserId is not provided"', async () => {
    await expect(verifyLogin()).rejects.toThrow("UserId is not provided");
  });

  test('Invalid userId type (string) should throw "Invalid userId"', async () => {
    await expect(verifyLogin("Ammu")).rejects.toThrow("Invalid userId");
  });

  test('Invalid userId type (array) should throw "Invalid userId"', async () => {
    await expect(verifyLogin([1])).rejects.toThrow("Invalid userId");
  });
});
