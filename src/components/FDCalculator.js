// Code to calculate Fixed Deposit (FD) maturity amount and interest earned

import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../animations.css";

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function FDCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [type, setType] = useState("compound"); // Default to Compound Interest
  const [frequency, setFrequency] = useState("annually"); // Default to Annually
  const [result, setResult] = useState(null);
  const [interestEarned, setInterestEarned] = useState(null);

  const calculateFD = () => {
    const P = parseFloat(amount); // Principal amount
    const r = parseFloat(rate); // Annual interest rate
    const t = parseFloat(years); // Tenure in years

    if (P && r && t) {
      let maturityAmount = 0;

      if (type === "simple") {
        maturityAmount = P + (P * r * t) / 100;
      } else {
        let n = 1; // Default to annually
        if (frequency === "quarterly") n = 4;
        maturityAmount = P * Math.pow(1 + r / (n * 100), n * t);
      }

      const interest = maturityAmount - P;
      setResult(maturityAmount.toFixed(2));
      setInterestEarned(interest.toFixed(2));
    } else {
      setResult(null);
      setInterestEarned(null);
    }
  };

  const pieData = {
    labels: ["Principal", "Interest Earned"],
    datasets: [
      {
        data: [parseFloat(amount), parseFloat(interestEarned)],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: ["Principal", "Interest Earned", "Maturity Amount"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [parseFloat(amount), parseFloat(interestEarned), parseFloat(result)],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
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
        {type === "compound" && (
          <div className="mb-3">
            <label className="form-label">
              <i className="fas fa-clock"></i> Compounding Frequency
            </label>
            <select className="form-select" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
              <option value="annually">Annually</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>
        )}
        <button className="btn btn-success w-100 btn-animate" onClick={calculateFD}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {result && (
          <div className="mt-3 text-center">
            <h3>
              <i className="fas fa-wallet"></i> Maturity Amount: ₹{result}
            </h3>
            <h4>
              <i className="fas fa-chart-line"></i> Interest Earned: ₹{interestEarned}
            </h4>
            <div className="mt-4">
              <Pie data={pieData} width={300} height={300} />
            </div>
            <div className="mt-4">
              <Bar data={barData} width={600} height={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FDCalculator;