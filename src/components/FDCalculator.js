//can you please help me with this code. I am trying to create a FD calculator using React. I have created the code but it is not working. Can you please help me with this code?. please use same UI and functionality. 

// 1. Create a new component named FDCalculator.js
// 2. Copy and paste the following code into FDCalculator.js
// 3. Run the code and test the functionality

// Code:
// import React, { useState } from "react";

// function FDCalculator() {
//   const [amount, setAmount] = useState("");
//   const [rate, setRate] = useState("");
//   const [years, setYears] = useState("");
//   const [result, setResult] = useState(null);

//   const calculateFD = () => {
//     const maturity = amount * Math.pow(1 + rate / 100, years);
//     setResult(maturity.toFixed(2));
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center text-success"><i className="fas fa-coins"></i> FD Calculator</h2>
//       <div className="card shadow p-4">
//         <div className="mb-3">
//           <label className="form-label"><i className="fas fa-rupee-sign"></i> Principal Amount</label>
//           <input type="number" className="form-control" onChange={(e) => setAmount(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label"><i className="fas fa-percentage"></i> Annual Interest Rate (%)</label>
//           <input type="number" className="form-control" onChange={(e) => setRate(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label"><i className="fas fa-hourglass-half"></i> Duration (Years)</label>
//           <input type="number" className="form-control" onChange={(e) => setYears(e.target.value)} />
//         </div>
//         <button className="btn btn-success w-100" onClick={calculateFD}>
//           <i className="fas fa-calculator"></i> Calculate
//         </button>
//         {result && <h3 className="mt-3 text-center"><i className="fas fa-wallet"></i> Maturity Amount: ₹{result}</h3>}
//       </div>
//     </div>
//   );
// }

// export default FDCalculator;

// 1. Create a new component named FDCalculator.js
// 2. Copy and paste the following code into FDCalculator.js
// 3. Run the code and test the functionality

// Code:
import React, { useState } from "react";
import "../animations.css";

function FDCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [type, setType] = useState("compound"); // Default to Compound Interest
  const [frequency, setFrequency] = useState("annually"); // Default to Annually
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
        // Compound Interest Formula
        let n = 1; // Default to annually
        if (frequency === "quarterly") n = 4;
        // Compound Interest Formula: M = P * (1 + r/n / 100)^(n*t)
        maturityAmount = P * Math.pow(1 + r / (n * 100), n * t);
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
          <h3 className="mt-3 text-center">
            <i className="fas fa-wallet"></i> Maturity Amount: ₹{result}
          </h3>
        )}
      </div>
    </div>
  );
}

export default FDCalculator;