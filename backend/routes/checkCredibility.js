// server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // your React frontend
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Text credibility check
app.post("/api/check", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  console.log("Received text:", text);

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`,
      { inputs: text },
      { headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` } }
    );

    console.log("Hugging Face response:", response.data);

    // Handle nested array response
    const predictions = response.data[0];
    if (!predictions || predictions.length === 0) {
      return res
        .status(500)
        .json({ error: "Invalid response from Hugging Face API" });
    }

    const topPrediction = predictions[0];
    const label = topPrediction.label === "LABEL_1" ? "fake" : "real";
    const score = topPrediction.score;

    res.json({ result: label, score });
  } catch (err) {
    console.error(
      "Error calling Hugging Face API:",
      err.response?.data || err.message
    );
    res.status(500).json({ error: "Failed to get prediction from Hugging Face" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
