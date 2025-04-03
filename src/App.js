import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Booking from "./pages/Booking";
import Events from "./pages/Events";  // ✅ Added Events Route
import Sports from "./pages/Sports";  // ✅ Added Sports Route
import Offers from "./pages/Offers";  // ✅ Added Offers Route
import Footer from "./components/Footer";
import "./assets/css/darkmode.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/movies" element={<Movies darkMode={darkMode} />} />
          <Route path="/booking" element={<Booking darkMode={darkMode} />} />
          <Route path="/events" element={<Events darkMode={darkMode} />} />  {/* ✅ Added */}
          <Route path="/sports" element={<Sports darkMode={darkMode} />} />  {/* ✅ Added */}
          <Route path="/offers" element={<Offers darkMode={darkMode} />} />  {/* ✅ Added */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
