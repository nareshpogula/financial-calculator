import React, { useState } from "react";
import "../animations.css";

function SIPCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const maturity = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setResult(maturity.toFixed(2));
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-primary"><i className="fas fa-chart-line"></i> SIP Calculator</h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-rupee-sign"></i> Monthly Investment</label>
          <input type="number" className="form-control" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-percentage"></i> Annual Interest Rate (%)</label>
          <input type="number" className="form-control" onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-hourglass-half"></i> Investment Duration (Years)</label>
          <input type="number" className="form-control" onChange={(e) => setYears(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100 btn-animate" onClick={calculateSIP}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {result && <h3 className="mt-3 text-center"><i className="fas fa-wallet"></i> Maturity Amount: ₹{result}</h3>}
      </div>
    </div>
  );
}

export default SIPCalculator;
