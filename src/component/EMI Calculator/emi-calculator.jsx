import React, { useState } from "react";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();

    if (!principal || !rate || !tenure) {
      alert("Please fill in all fields.");
      return;
    }

    const principalAmount = parseFloat(principal);
    const interestRate = parseFloat(rate) / 12 / 100;
    const tenureMonths = parseInt(tenure);

    const emiAmount =
      (principalAmount * interestRate * Math.pow(1 + interestRate, tenureMonths)) /
      (Math.pow(1 + interestRate, tenureMonths) - 1);

    setEmi(emiAmount.toFixed(2));
  };

  return (
    <div className="container-EMI mt-5 mx-auto" id="EMI Calculator">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">EMI Calculator</h2>
          <form onSubmit={calculateEMI}>
            <div className="form-group">
              <label>Principal Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter loan amount"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Rate of Interest (%)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter interest rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
  <label>Loan Tenure (in months)</label>
  <input
    type="number"
    className="form-control"
    placeholder="Enter loan tenure in months"
    value={tenure}
    onChange={(e) => setTenure(e.target.value)}
    required
  />
</div>

            <button type="submit" className="btn btn-primary btn-block">
              Calculate EMI
            </button>
          </form>

          {emi !== null && (
  <div className="mt-3 text-center">
    <h3>Monthly EMI: ${emi} per month</h3>
    <h4>Yearly EMI: ${emi * 12} per year</h4>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
