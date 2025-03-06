import React from "react";

const Watchicons = () => {
  return (
    <div className="container-container">
      {/* Icon Section */}
      <div className="icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3448/3448601.png"
          alt="Lightbulb"
        />
      </div>

      {/* Text Section */}
      <div className="text-text">
        <h2>Fill in an application form on our website</h2>
        <p>
          Make a request on our website and wait for a response via email within
          15-30 minutes during business hours.
        </p>
        <button className="btn btn-dark text-warning">Go to the form</button>
      </div>
    </div>
  );
};

export default Watchicons;
