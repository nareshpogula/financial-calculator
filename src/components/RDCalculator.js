import React, { useState } from "react";
import "../animations.css";

function FDCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [type, setType] = useState("compound"); // Default to Compound Interest
  const [result, setResult] = useState(null);

  const calculateFD = () => {
    const P = parseFloat(amount); // Principal amount
    const r = parseFloat(rate); // Annual interest rate
    const t = parseFloat(years); // Tenure in years

    if (P && r && t) {
      let maturityAmount = 0;

      if (type === "simple") {
        // Simple Interest Formula: M = P + (P * r * t / 100)
        maturityAmount = P + (P * r * t) / 100;
      } else {
        // Compound Interest Formula: M = P + P * ((1 + r/100)^t - 1)
        maturityAmount = P + P * (Math.pow(1 + r / 100, t) - 1);
      }

      setResult(maturityAmount.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-success">
        <i className="fas fa-coins"></i> FD Calculator
      </h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-rupee-sign"></i> Principal Amount
          </label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-percentage"></i> Annual Interest Rate (%)
          </label>
          <input
            type="number"
            className="form-control"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-hourglass-half"></i> Investment Duration (Years)
          </label>
          <input
            type="number"
            className="form-control"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-calculator"></i> Interest Type
          </label>
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="compound">Compound Interest</option>
            <option value="simple">Simple Interest</option>
          </select>
        </div>
        <button className="btn btn-success w-100 btn-animate" onClick={calculateFD}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {result && (
          <h3 className="mt-3 text-center">
            <i className="fas fa-wallet"></i> Maturity Amount: ₹{result}
          </h3>
        )}
      </div>
    </div>
  );
}

export default FDCalculator;
