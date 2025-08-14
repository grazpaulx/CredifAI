import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 shadow-md bg-gray-100">

      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="CredifAi" className="w-10 h-10" />
        <span className="text-2xl font-bold text-gray-800">CredifAi</span>
      </div>

      {/* Right: Nav Links */}
      <div className="space-x-6 text-gray-800 font-medium">
        <Link to="/home" className="hover:text-blue-500 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500 transition-colors">
          About Us
        </Link>
        <Link to="/newsroom" className="hover:text-blue-500 transition-colors">
          Newsroom
        </Link>
        
      </div>
    </nav>
  );
}
