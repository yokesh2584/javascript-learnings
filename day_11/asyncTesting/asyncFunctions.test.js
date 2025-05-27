const { fetchUserData, getGreeting } = require("./asyncFunctions");

// * Promise method
describe("Fetch user data", () => {
  test("resolves when userId is provided", async () => {
    const result = await fetchUserData(101);
    expect(result).toEqual({ id: 101, name: "Yokesh", role: "Web Dev" });
  });

  test("should throw error when userId is not provided", async () => {
    expect(() => fetchUserData()).toThrow("User not found");
  });

  test("handles timeout correctly", async () => {
    const start = Date.now();
    const result = await fetchUserData(201);
    const duration = Date.now() - start;

    expect(result.id).toBe(201);
    expect(duration).toBeGreaterThanOrEqual(100);
  });
});

// * Async getGreeting method
describe("getGreeting - async/await function", () => {
  test("return a greeting message when name is provided", async () => {
    const result = await getGreeting("Yokesh");
    expect(result).toBe("Hello, Yokesh!");
  });

  test("should throw error when name is not provided", async () => {
    await expect(getGreeting()).rejects.toThrow("Name is required");
  });
});
