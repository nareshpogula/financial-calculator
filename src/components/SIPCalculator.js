import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../animations.css";

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(null);
  const [interestEarned, setInterestEarned] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (P && r && n) {
      const maturityAmount =
        P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      const totalInvestment = P * n;
      const interestEarned = maturityAmount - totalInvestment;

      setMaturityAmount(maturityAmount.toFixed(2));
      setTotalInvestment(totalInvestment.toFixed(2));
      setInterestEarned(interestEarned.toFixed(2));
    } else {
      setMaturityAmount(null);
      setTotalInvestment(null);
      setInterestEarned(null);
    }
  };

  const pieData = {
    labels: ["Total Investment", "Interest Earned"],
    datasets: [
      {
        data: [parseFloat(totalInvestment), parseFloat(interestEarned)],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: ["Total Investment", "Interest Earned", "Maturity Amount"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [parseFloat(totalInvestment), parseFloat(interestEarned), parseFloat(maturityAmount)],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-success">
        <i className="fas fa-coins"></i> SIP Calculator
      </h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-rupee-sign"></i> Monthly Investment
          </label>
          <input
            type="number"
            className="form-control"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
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
        <button className="btn btn-success w-100 btn-animate" onClick={calculateSIP}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {maturityAmount && (
          <div className="mt-3 text-center">
            <h3>
              <i className="fas fa-wallet"></i> Maturity Amount: ₹{maturityAmount}
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

export default SIPCalculator;