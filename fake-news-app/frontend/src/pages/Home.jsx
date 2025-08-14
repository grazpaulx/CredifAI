import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.png"; // Make sure background.png is in src/assets/

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return alert("Please enter some text!");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/check", { text });
      navigate("/results", { state: { result: res.data, input: text } });
    } catch (err) {
      console.error(err);
      alert("Error checking credibility");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-black">
          Fake News Credibility Checker
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste the news article or text here..."
            rows={6}
            className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow text-black bg-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Checking..." : "Check Credibility"}
          </button>
        </form>
      </div>
    </div>
  );
}
