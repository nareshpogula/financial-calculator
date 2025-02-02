import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../animations.css";

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function LoanEMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(years) * 12;

    if (P && r && n) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      setEmi(emi.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));
      setTotalInterest(totalInterest.toFixed(2));
    } else {
      setEmi(null);
      setTotalPayment(null);
      setTotalInterest(null);
    }
  };

  const pieData = {
    labels: ["Principal", "Total Interest"],
    datasets: [
      {
        data: [parseFloat(principal), parseFloat(totalInterest)],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: ["Principal", "Total Interest", "Total Payment"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [parseFloat(principal), parseFloat(totalInterest), parseFloat(totalPayment)],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-success">
        <i className="fas fa-coins"></i> Loan EMI Calculator
      </h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-rupee-sign"></i> Principal Amount
          </label>
          <input
            type="number"
            className="form-control"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
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
            <i className="fas fa-hourglass-half"></i> Loan Tenure (Years)
          </label>
          <input
            type="number"
            className="form-control"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100 btn-animate" onClick={calculateEMI}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {emi && (
          <div className="mt-3 text-center">
            <h3>
              <i className="fas fa-wallet"></i> EMI: ₹{emi}
            </h3>
            <h4>
              <i className="fas fa-chart-line"></i> Total Payment: ₹{totalPayment}
            </h4>
            <h4>
              <i className="fas fa-chart-line"></i> Total Interest: ₹{totalInterest}
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

export default LoanEMICalculator;