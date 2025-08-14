import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Newsroom from "./pages/Newsroom";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsroom" element={<Newsroom />} />
      </Routes>
    </Router>
  );
}
