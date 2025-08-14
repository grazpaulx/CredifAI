import express from "express";
import fetch from "node-fetch"; // make sure to install: npm install node-fetch
const router = express.Router();

// Replace with your NewsAPI key
const API_KEY = "88be209a74264be6a77763c3d90ba151";  

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`
    );

    const data = await response.json();

    if (!data.articles) {
      return res.json([]);
    }

    const newsData = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage
    }));

    res.json(newsData);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;
