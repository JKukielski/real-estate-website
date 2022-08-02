import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="app__cta">
      <h1 className="app__cta-heading">Subscribe to our newsletter</h1>
      <div className="app__cta-input_container">
        <input
          type="text"
          placeholder="Enter your email address to subscribe..."
        />
        <button className="app__cta-input_btn">Subscribe</button>
      </div>
    </div>
  );
};

export default CTA;
