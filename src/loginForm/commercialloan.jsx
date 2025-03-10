import React from 'react';
import { Link } from "react-router-dom";

const CommercialVehicleLoan = () => {
  const containerStyle = {
    padding: '10px',
    overflow: 'hidden',
  };

  const imageStyle = {
    float: 'left',
    width: '40%',
    height: '40%',
    marginRight: '20px',
    borderRadius: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '20px',
  };

  const buttonWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <h1 className="text-center text-warning"> Commercial Vehicle Loan </h1>
      <p className="text-center"><strong>Drive your business forward with tailored vehicle financing</strong></p>

      <div style={containerStyle}>
        <img
          src="img/home-2408953_1280.jpg"
          alt="Commercial Vehicle Loan"
          style={imageStyle}
        />
        <p>
          A commercial vehicle loan is designed to help businesses and individuals purchase vehicles for commercial purposes. These loans are ideal for buying trucks, buses, taxis, and other transport vehicles.
        </p>

        <h5>Commercial Vehicle Loan Benefits (Explained)</h5>
        <p><strong>Flexible Loan Amount</strong> — Avail financing for a wide range of commercial vehicles with high loan-to-value ratios.</p>
        <p><strong>Customizable Repayment Plans</strong> — Choose repayment tenures that align with your cash flow, ranging from 1 to 5 years.</p>
        <p><strong>Attractive Interest Rates</strong> — Competitive rates designed for businesses to ease financial burden.</p>
        <p><strong>Quick Processing</strong> — Fast approval and disbursal ensure your business stays on track.</p>
        <p><strong>Minimal Documentation</strong> — Simple application process with minimal paperwork.</p>
        <p><strong>Tax Benefits</strong> — Interest paid on commercial vehicle loans is tax-deductible as a business expense.</p>
      </div>

      <div style={buttonWrapperStyle}>
        <Link to="/LoanForm">
          <button style={buttonStyle}>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CommercialVehicleLoan;
