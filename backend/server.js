// import express from "express";
// import cors from "cors";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use(express.json());

// app.post("/api/check", async (req, res) => {
//   const { text } = req.body;
//   if (!text) return res.status(400).json({ error: "Text is required" });

//   try {
//     const response = await axios.post(
//       `https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`,
//       { inputs: text },
//       { headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` } }
//     );

//     console.log("Hugging Face response:", response.data);

//     // Check for nested array and extract top prediction
//     const predictions = response.data[0];
//     if (!predictions || !Array.isArray(predictions)) {
//       return res.status(500).json({ error: "Invalid response from Hugging Face API" });
//     }

//     // Pick the label with the highest score
//     const topPrediction = predictions.reduce((a, b) => (a.score > b.score ? a : b));
//     const label = topPrediction.label === "LABEL_1" ? "fake" : "real";
//     const score = topPrediction.score;

//     res.json({ result: label, score });
//   } catch (err) {
//     console.error("Error calling Hugging Face API:", err.response?.data || err);
//     res.status(500).json({ error: "Failed to get prediction from Hugging Face" });
//   }
// });

// app.listen(process.env.PORT || 5000, () =>
//   console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
// );

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import axios from "axios";

import newsRoutes from "./routes/news.js";

const app = express();

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173" })); // allow React frontend
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/news", newsRoutes);                // News API
// Note: /api/check route is added below for Hugging Face credibility check

// ✅ Hugging Face Text Credibility Check
app.post("/api/check", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`,
      { inputs: text },
      { headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` } }
    );

    console.log("Hugging Face response:", response.data);

    // Check for nested array and extract top prediction
    const predictions = response.data[0];
    if (!predictions || !Array.isArray(predictions)) {
      return res.status(500).json({ error: "Invalid response from Hugging Face API" });
    }

    // Pick the label with the highest score
    const topPrediction = predictions.reduce((a, b) => (a.score > b.score ? a : b));
    const label = topPrediction.label === "LABEL_1" ? "fake" : "real";
    const score = topPrediction.score;

    res.json({ result: label, score });
  } catch (err) {
    console.error("Error calling Hugging Face API:", err.response?.data || err);
    res.status(500).json({ error: "Failed to get prediction from Hugging Face" });
  }
});

// ✅ Health check route
app.get("/", (req, res) => res.send("Server is running 🚀"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


