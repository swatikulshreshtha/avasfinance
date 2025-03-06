import { useState } from "react";

const Loanfivesection = () => {
  const [formData, setFormData] = useState({
    loanType: "home",
    loanAmount: "",
    loanTerm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <section>
      <div className="container-fluid p-5">
        <h2 className="text-center">How much do you need?</h2>
        <p className="text-center fw-bold">YOU COULD GET UP TO $5000!*</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {[
            "five1.jpg",
            "five2.jpg",
            "five3.jpg",
            "five4.jpg",
            "five5.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={`img/${img}`}
              alt="Finance"
              className="img-fluid"
              width="80"
            />
          ))}
        </div>
      </div>

      {/* Loan Info Section */}
      <div className="container text-center d-flex border border-2 p-4">
        <div className="row w-100">
          {/* Left Column */}
          <div className="col-12 col-md-6">
            <h2>How much do you need?</h2>
            <p className="text-primary fw-bold">YOU COULD GET UP TO $5000!*</p>
            <div className="d-flex justify-content-center">
              <img
                src="img/mainfive1.jpg"
                alt="Finance"
              
                style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
              />
            </div>
          </div>

          {/* Right Column - Loan Application Form */}
          <div className="col-12 col-md-6">
            <div className="fs-5">
              <i className="fa-solid fa-user-tie"></i>
            </div>

            <h2 className="p-2">Loan Application Form</h2>
            <p>How much do you need</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="loanType" className="form-label">Loan Type</label>
                <select
                  id="loanType"
                  className="form-control"
                  value={formData.loanType}
                  onChange={handleChange}
                >
                  <option value="home">Home Loan</option>
                  <option value="personal">Personal Loan</option>
                  <option value="car">Car Loan</option>
                  <option value="business">Commercial Vehicle Loan</option>
                  <option value="consumer">Consumer Loan</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="loanAmount" className="form-label">Loan Amount Needed ($)</label>
                <input
                  type="number"
                  id="loanAmount"
                  className="form-control"
                  placeholder="Enter loan amount"
                  required
                  value={formData.loanAmount}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="loanTerm" className="form-label">Loan Term (Years)</label>
                <input
                  type="number"
                  id="loanTerm"
                  className="form-control"
                  placeholder="Enter loan term in years"
                  required
                  value={formData.loanTerm}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loanfivesection;
