import React from 'react';
import { Link } from "react-router-dom";

const CarLoan = () => {
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
    backgroundColor: '#205781',
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
      <h1 className="text-center text-warning"> Car Loan </h1>
      <p className="text-center"><strong>Get the keys to your dream car with easy financing options</strong></p>

      <div style={containerStyle}>
        <img
          src="img/6386783.jpg"
          alt="Car Loan"
          style={imageStyle}
        />
        <p>
          A car loan is a secured loan that helps you finance the purchase of your vehicle. Banks and financial institutions offer competitive interest rates and flexible repayment terms to make car ownership easier.
        </p>

        <h5 className="text-warning">Car Loan Benefits (Explained)</h5>
        <p><strong>Low Interest Rates</strong> — Financial institutions offer attractive interest rates for new and used cars.</p>
        <p><strong>Flexible Repayment Options</strong> — Choose repayment tenures ranging from 1 to 7 years, ensuring manageable EMIs.</p>
        <p><strong>Minimal Down Payment</strong> — Many lenders finance up to 90-100% of the car's on-road price.</p>
        <p><strong>Quick Approvals</strong> — Fast loan processing helps you get your car sooner than expected.</p>
        <p><strong>Pre-approved Offers</strong> — Existing customers may receive special offers for hassle-free financing.</p>
        <p><strong>Tax Benefits for Businesses</strong> — Self-employed individuals and businesses can claim tax benefits on car loans used for business purposes.</p>
      </div>

      <div style={buttonWrapperStyle}>
        <Link to="/LoanForm">
          <button style={buttonStyle}>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CarLoan;
