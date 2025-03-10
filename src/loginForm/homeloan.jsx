import React from 'react';
import { Link } from "react-router-dom";

const Homeloans = () => {
  const imageStyle = {
    float: 'left',
    width: '40%',
    height: '40%',
    clipPath: 'circle(40%)',
    shapeOutside: 'circle(45%)',
    marginRight: '20px',
  };

  const containerStyle = {
    padding: '10px',
    overflow: 'hidden',
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

  const buttonWrapperStyle = {  // New wrapper style to center the button
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <h1 className="text-center text-warning"> Home Loan </h1>
      <p className="text-center">
        <strong>Real estate value typically increases over time, boosting your investment</strong>
      </p>
      
      <div style={containerStyle}>
        <img
          src="img/debt-1500774_1280.png"
          alt="Pineapple"
          style={imageStyle}
        />
        <p>
          A home loan is a type of financial assistance provided by banks, housing finance companies,
          and government bodies to help individuals buy, build, or renovate a house. Borrowers repay the
          loan amount over time, typically in monthly installments (EMIs), along with interest.
        </p>

        <h5>Home Loan Benefits (Explained)</h5> 
<p><strong>Affordable Interest Rates</strong>
Banks and financial institutions offer competitive rates, making home ownership more affordable.
Interest rates are lower for women borrowers or first-time home buyers under certain schemes.</p> 
<p><strong>Flexible Tenure</strong>
Home loans offer long repayment periods, ranging from 5 to 30 years.
Longer tenure = lower EMIs, making it easier to manage your monthly budget.</p>
<p><strong>Flexible Tenure</strong>
Home loans offer long repayment periods, ranging from 5 to 30 years.
Longer tenure = lower EMIs, making it easier to manage your monthly budget.</p>
<p><strong>3️Tax Benefits</strong>
Borrowers get tax deductions on both principal repayment and interest paid.
Section 80C: Deduction up to ₹1.5 lakh on principal.
Section 24(b): Deduction up to ₹2 lakh on interest.
Additional benefit for first-time buyers under Section 80EEA (up to ₹1.5 lakh). </p>
<p><strong>High Loan Amounts</strong>
Banks offer up to 80-90% of the property value as a loan.
This helps buyers purchase homes with minimal upfront payment.</p>
<p><strong> Top-up Loans</strong>
If you already have a home loan, you can apply for a top-up loan.
This is an additional amount you can borrow on top of your existing loan for renovation, furnishing, or other needs.</p>

<p><strong>Government Subsidies:</strong>
Under Pradhan Mantri Awas Yojana (PMAY), eligible borrowers (especially economically weaker sections (EWS) and lower-income groups (LIG)) can get an interest subsidy.
This makes home ownership even more affordable.</p>
    </div>
      {/* Corrected Button Section */}
      <div style={buttonWrapperStyle}>
        <Link to="/loanForm">
          <button style={buttonStyle}>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Homeloans;
