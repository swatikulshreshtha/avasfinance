import React, { useState } from 'react';
import Header from '../component/comman/header';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanTerm: '',
    interestRate: '',
    borrowerName: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Loan Application:', formData);
  };

  return (
    <div>
      <Header />
      <style>{`
        .loan-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 16px;
          box-sizing: border-box;
        }
        .loan-form-wrapper {
          width: 100%;
          max-width: 500px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 24px;
        }
        .loan-form-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 24px;
          text-align: center;
        }
        .loan-form-field {
          margin-bottom: 16px;
        }
        .loan-form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 6px;
        }
        .loan-form-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          box-sizing: border-box;
        }
        .loan-form-button {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .loan-form-button:hover {
          background-color: #1d4ed8;
        }
        @media (max-width: 480px) {
          .loan-form-wrapper {
            padding: 16px;
          }
        }
      `}</style>

      <div className="loan-form-container">
        <div className="loan-form-wrapper">
          <h2 className="loan-form-title">Loan Application Form</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Loan Amount', name: 'loanAmount', type: 'number' },
              { label: 'Loan Term (Months)', name: 'loanTerm', type: 'number' },
              { label: 'Interest Rate (%)', name: 'interestRate', type: 'number', step: '0.01' },
              { label: 'Borrower Name', name: 'borrowerName', type: 'text' },
              { label: 'Contact Number', name: 'contactNumber', type: 'tel' }
            ].map(({ label, name, type, step }) => (
              <div key={name} className="loan-form-field">
                <label className="loan-form-label">{label}</label>
                <input
                  type={type}
                  step={step || undefined}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="loan-form-input"
                  required
                />
              </div>
            ))}
            <button type="submit" className="loan-form-button">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;
