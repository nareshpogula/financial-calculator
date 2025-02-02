import React, { useState } from "react";
import "../animations.css";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    let taxableIncome = parseFloat(income);
    let taxAmount = 0;

    if (taxableIncome <= 250000) {
      taxAmount = 0;
    } else if (taxableIncome <= 500000) {
      taxAmount = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      taxAmount = (250000 * 0.05) + (taxableIncome - 500000) * 0.2;
    } else {
      taxAmount = (250000 * 0.05) + (500000 * 0.2) + (taxableIncome - 1000000) * 0.3;
    }

    setTax(taxAmount.toFixed(2));
  };

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center text-info"><i className="fas fa-file-invoice-dollar"></i> Tax Calculator</h2>
      <div className="card shadow p-4 zoom-in">
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-rupee-sign"></i> Annual Income</label>
          <input type="number" className="form-control" onChange={(e) => setIncome(e.target.value)} />
        </div>
        <button className="btn btn-info w-100 btn-animate" onClick={calculateTax}>
          <i className="fas fa-calculator"></i> Calculate Tax
        </button>
        {tax && <h3 className="mt-3 text-center"><i className="fas fa-wallet"></i> Tax Payable: ₹{tax}</h3>}
      </div>
    </div>
  );
}

export default TaxCalculator;
