import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommissionWork from "./pages/CommissionWork";
import TattooFlash from "./pages/TattooFlash";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tattoo_flash" element={<TattooFlash />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commission_work" element={<CommissionWork />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
