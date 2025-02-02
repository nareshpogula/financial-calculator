import React, { useState } from "react";
import "../animations.css";

function LoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const N = parseFloat(loanTenure) * 12; // Total months

    if (P && R && N) {
      const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(EMI.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-danger"><i className="fas fa-home"></i> Loan EMI Calculator</h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-rupee-sign"></i> Loan Amount</label>
          <input type="number" className="form-control" onChange={(e) => setLoanAmount(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-percentage"></i> Interest Rate (%)</label>
          <input type="number" className="form-control" onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-hourglass-half"></i> Loan Tenure (Years)</label>
          <input type="number" className="form-control" onChange={(e) => setLoanTenure(e.target.value)} />
        </div>
        <button className="btn btn-danger w-100 btn-animate" onClick={calculateEMI}>
          <i className="fas fa-calculator"></i> Calculate EMI
        </button>
        {emi && <h3 className="mt-3 text-center"><i className="fas fa-wallet"></i> Monthly EMI: ₹{emi}</h3>}
      </div>
    </div>
  );
}

export default LoanEMICalculator;
