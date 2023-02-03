import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommissionWork from "./pages/CommissionWork";
import Flashbook from "./pages/Flashbook";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flashbook" element={<Flashbook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commission_work" element={<CommissionWork />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
