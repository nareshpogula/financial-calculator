import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../animations.css";

// Register the necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [tax, setTax] = useState(null);
  const [netIncome, setNetIncome] = useState(null);

  const calculateTax = () => {
    const incomeAmount = parseFloat(income);
    const rate = parseFloat(taxRate) / 100;

    if (incomeAmount && rate) {
      const taxAmount = incomeAmount * rate;
      const netIncomeAmount = incomeAmount - taxAmount;

      setTax(taxAmount.toFixed(2));
      setNetIncome(netIncomeAmount.toFixed(2));
    } else {
      setTax(null);
      setNetIncome(null);
    }
  };

  const pieData = {
    labels: ["Net Income", "Tax"],
    datasets: [
      {
        data: [parseFloat(netIncome), parseFloat(tax)],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: ["Income", "Tax", "Net Income"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [parseFloat(income), parseFloat(tax), parseFloat(netIncome)],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-success">
        <i className="fas fa-coins"></i> Tax Calculator
      </h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-rupee-sign"></i> Annual Income
          </label>
          <input
            type="number"
            className="form-control"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-percentage"></i> Tax Rate (%)
          </label>
          <input
            type="number"
            className="form-control"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100 btn-animate" onClick={calculateTax}>
          <i className="fas fa-calculator"></i> Calculate
        </button>
        {tax && (
          <div className="mt-3 text-center">
            <h3>
              <i className="fas fa-wallet"></i> Tax: ₹{tax}
            </h3>
            <h4>
              <i className="fas fa-chart-line"></i> Net Income: ₹{netIncome}
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

export default TaxCalculator;