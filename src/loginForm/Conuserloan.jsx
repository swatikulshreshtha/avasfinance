import React from 'react';
import { Link } from "react-router-dom";

const ConsumerLoan = () => {
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
      <h1 className="text-center text-warning"> Consumer Loan </h1>
      <p className="text-center"><strong>Finance your lifestyle with easy consumer loan solutions</strong></p>

      <div style={containerStyle}>
        <img
          src="img/consimerloan.png"
          alt="Consumer Loan"
          style={imageStyle}
        />
        <p>
          A consumer loan is a type of personal loan designed for financing various personal expenses like purchasing electronics, household appliances, vacations, or emergency expenses.
        </p>

        <h5>Consumer Loan Benefits (Explained)</h5>
        <p><strong>Flexible Usage</strong> — Use the funds for any personal need, such as shopping, travel, or emergencies.</p>
        <p><strong>Quick Disbursal</strong> — Most consumer loans are processed quickly, ensuring you get the funds when you need them.</p>
        <p><strong>Minimal Documentation</strong> — Simple paperwork ensures hassle-free loan approval.</p>
        <p><strong>Attractive Interest Rates</strong> — Competitive rates make repayment easier on your budget.</p>
        <p><strong>Flexible Repayment Tenure</strong> — Choose repayment periods that suit your financial stability, typically ranging from 6 months to 5 years.</p>
        <p><strong>No Collateral Required</strong> — Most consumer loans are unsecured, removing the need for assets as security.</p>
      </div>

      <div style={buttonWrapperStyle}>
        <Link to="/LoanForm">
          <button style={buttonStyle}>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ConsumerLoan;
