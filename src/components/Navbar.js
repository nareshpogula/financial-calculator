import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-calculator"></i> Financial Calculator
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/sip-calculator"><i className="fas fa-chart-line"></i> SIP Calculator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/rd-calculator"><i className="fas fa-piggy-bank"></i> RD Calculator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/fd-calculator"><i className="fas fa-coins"></i> FD Calculator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/loan-emi-calculator"><i className="fas fa-home"></i> Loan EMI Calculator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tax-calculator"><i className="fas fa-file-invoice-dollar"></i> Tax Calculator</Link></li>
          </ul>
          <button className="btn btn-outline-light" onClick={() => setDarkMode(!darkMode)}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
