import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page flex flex-col items-center justify-center text-center p-6">
      {/* Bigger Still Logo */}
    <img src={logo} alt="CredifAi" className="w-80 h-80 mb-6" />


      {/* Name with bigger font */}
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4 font-poppins">
        CredifAi
      </h1>

      {/* Animated description */}
      <p className="animated-words text-lg text-gray-600 max-w-xl mb-6 font-opensans">
        {"Your AI-powered assistant to detect fake news instantly from text, images, videos, or links."
          .split(" ")
          .map((word, i) => (
            <span
              key={i}
              style={{
                animation: `fadeIn 0.3s ease forwards`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {word}&nbsp;
            </span>
          ))}
      </p>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <button
        onClick={() => navigate("/home")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started →
      </button>
    </div>
  );
}
