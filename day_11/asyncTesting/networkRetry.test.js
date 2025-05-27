const fetchDataWithRetry = require("./networkRetry");

global.fetch = jest.fn();

describe("Network retry mechanism", () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test("Should succeed on first attemp", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: "Yokesh the Dev" }),
    });

    const result = await fetchDataWithRetry("https://fakeurl.com/user", 3);
    expect(result).toBe("Yokesh the Dev");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("Should retry and then succeed", async () => {
    fetch
      .mockRejectedValueOnce(new Error("Network down"))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ name: "Ammu the Angel" }),
      });

    const result = await fetchDataWithRetry("https://fakeurl.com/user", 3);
    expect(result).toBe("Ammu the Angel");
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  test("Should retry twice and then succeed", async () => {
    fetch
      .mockRejectedValueOnce(new Error("Network down"))
      .mockRejectedValueOnce(new Error("Network down"))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ name: "Ammu the Angel" }),
      });

    const result = await fetchDataWithRetry("https://fakeurl.com/user", 3);
    expect(result).toBe("Ammu the Angel");
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  test("Should fail after all retries", async () => {
    fetch.mockRejectedValue(new Error("Total blackout"));

    await expect(
      fetchDataWithRetry("https://fakeurl.com/user", 2)
    ).rejects.toThrow("Failed to fetch after retries");

    expect(fetch).toHaveBeenCalledTimes(3);
  });
});
