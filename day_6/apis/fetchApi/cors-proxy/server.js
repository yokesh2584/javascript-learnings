const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/quote", async (req, res) => {
  try {
    const response = await axios("https://zenquotes.io/api/random");
    const data = await response.data[0];
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.listen(PORT, () =>
  console.log(`CORS proxy running at "http://localhost:${PORT}"`)
);
