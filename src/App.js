import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SIPCalculator from "./components/SIPCalculator";
import RDCalculator from "./components/RDCalculator";
import FDCalculator from "./components/FDCalculator";
import LoanEMICalculator from "./components/LoanEMICalculator";
import TaxCalculator from "./components/TaxCalculator";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/rd-calculator" element={<RDCalculator />} />
        <Route path="/fd-calculator" element={<FDCalculator />} />
        <Route path="/loan-emi-calculator" element={<LoanEMICalculator />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
