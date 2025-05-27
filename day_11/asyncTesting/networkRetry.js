const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchDataWithRetry = async (url, retries, delayMs = 500) => {
  let attempts = 0;
  let lastError;

  while (attempts <= retries) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Fetch failed");

      const data = await response.json();
      return data.name;
    } catch (err) {
      lastError = err;
      attempts++;
      if (attempts > retries) break;
      await delay(delayMs);
    }
  }

  throw new Error("Failed to fetch after retries");
};

module.exports = fetchDataWithRetry;
