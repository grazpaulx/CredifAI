import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImg from "../assets/background.png";

export default function Newsroom() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched news articles:", data);
        setNews(data);
      })
      .catch(err => {
        console.error("Error fetching news:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
      className="min-h-screen"
    >
      {/* Navbar */}
      <Navbar />

      {/* Content Below Fixed Navbar */}
      <div className="pt-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Real-Time News Updates
        </h1>

        {loading ? (
          <p className="text-center text-gray-700">Loading news...</p>
        ) : news.length === 0 ? (
          <p className="text-center text-gray-700">No news available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
              >
               {item.image ? (
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-48 object-cover"
  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-4 inline-block"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
