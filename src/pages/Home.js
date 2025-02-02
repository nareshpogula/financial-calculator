import React from "react";
import "../animations.css"; // Import animation styles
import logo from "../logo.svg"; // Import the logo
import financeImage from "../assets/finance.jpg"; // Import the finance image

function Home() {
  return (
    <div className="container text-center mt-5 fade-in">
      {/* <img src={logo} alt="Logo" className="img-fluid rounded mx-auto d-block mb-4" width="150" /> */}
      <h1 className="display-4 text-primary">Welcome to Financial Calculator</h1>
      <p className="lead">Use the calculators to plan your investments wisely.</p>
      <img src={financeImage} alt="Finance" className="img-fluid rounded shadow-lg mb-4" />
      <div className="row">
        {/* <div className="col-md-4">
          <img src="https://source.unsplash.com/400x400/?investment" alt="Investment" className="img-fluid rounded shadow-lg mb-4" />
        </div> */}
        {/* <div className="col-md-4">
          <img src="https://source.unsplash.com/400x400/?growth" alt="Growth" className="img-fluid rounded shadow-lg mb-4" />
        </div>
        <div className="col-md-4">
          <img src="https://source.unsplash.com/400x400/?savings" alt="Savings" className="img-fluid rounded shadow-lg mb-4" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;