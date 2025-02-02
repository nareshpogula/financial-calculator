import React from "react";
import "../animations.css"; // Import animation styles

function Home() {
  return (
    <div className="container text-center mt-5 fade-in">
      <h1 className="display-4 text-primary">Welcome to Financial Calculator</h1>
      <p className="lead">Use the calculators to plan your investments wisely.</p>
      <img src="https://source.unsplash.com/800x400/?finance,money" alt="Finance" className="img-fluid rounded shadow-lg" />
    </div>
  );
}

export default Home;
