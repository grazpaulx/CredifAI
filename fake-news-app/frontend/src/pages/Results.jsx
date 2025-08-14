import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.png"; // Make sure the image is in src/assets/

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  const { result, input } = state;

  const isFake = result.result === "fake";
  const symbol = isFake ? "❌" : "✔️";
  const resultColor = isFake ? "text-red-600" : "text-green-600";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Credibility Result</h1>
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl w-full text-black text-center">
          <p className="mb-4 text-left break-words"><strong>Input Text:</strong> {input}</p>
          <p className={`text-2xl font-bold ${resultColor} mt-4 flex items-center justify-center`}>
            <span className="text-3xl mr-2">{symbol}</span> 
            Result: {result.result.toUpperCase()} ({(result.score * 100).toFixed(2)}%)
          </p>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
        >
          Check Another
        </button>
      </div>
    </div>
  );
}
