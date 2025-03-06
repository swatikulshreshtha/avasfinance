import React from "react";

const Herobanner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Side: Hero Section */}
        <div className="col-md-6 d-flex align-items-center hero-banner text-center text-md-start">
          <div className="container">
            <h5 className="text-center text-warning">Avas Finance</h5>
            <h1 className="text-center">Getting Money</h1>
            <h2 className="text-center">is now as easy as spending</h2>
            <div className="d-flex flex-column flex-md-row gap-3 mt-4 align-items-center justify-content-center">
              <a href="#" className="btn btn-lg text-white btn-custom-btn" style={{ backgroundColor: "#c4da38" }}>
                HOW IT WORKS?
              </a>
              <a href="#" className="btn btn-lg text-white btn-custom-btn" style={{ backgroundColor: "#2c3e80" }}>
                WHY PAYDAY LOANS
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Loan Form */}
        <div className="image-hero-form col-md-6 d-flex align-items-center justify-content-center p-3">
          <div className="form-section-hero w-75">
            <h3 className="text-center">How much do you need?</h3>
            <p className="text-center text-primary fw-bold">YOU COULD GET UP TO $5000!*</p>
            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
  <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
  <span className="input-group-text"><i className="fa-solid fa-calendar"></i></span>
  <span className="input-group-text"><i className="fa-solid fa-credit-card"></i></span>
</div>

            <form>
              <div className="mb-3">
                <label className="form-label">AMOUNT OF MONEY ($)</label>
                <input type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">HOW LONG FOR?</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">REPAYMENT</label>
                <input type="text" className="form-control" style={{ backgroundColor: "#f5fabc" }} />
              </div>
              <button className="btn btn-primary w-100">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
