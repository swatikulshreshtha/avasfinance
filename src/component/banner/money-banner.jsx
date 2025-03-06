import React from "react";


const MoneyBannerSection = () => {
  return (
    <section className="payment-section p-4">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image Section */}
          <div className="col-md-5 col-12 text-center">
            <div className="icon-wrapper p-4">
            <img
  src="/img/507204-PI2PBD-913.jpg"
  alt="Money Bag"
  style={{
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "10px",
    width: "80%",  // Adjust the width as needed
    height: "80%", // Adjust the height as needed
  }}
/>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-7 col-12 text-center text-md-start">
            <h2 className="text-white fw-bold">
              Receive your money in the most convenient way in 15 minutes
            </h2>
            <p className="text-light">
              Make a request on our website and wait for a response to your email 
              within 15-30 minutes from the time of the request during business hours.
            </p>
            <button className="btn btn-dark btn-lg">
              HOW IT WORKS?
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoneyBannerSection;
