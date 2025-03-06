import React from "react";

const BlackBlurSection = () => {
    return (
      <div className="container-fluid black-blur-image p-5">
        <div className="container d-flex justify-content-center">
          {/* Right Side (Text & Button) */}
          <div className="col-lg-8 overlay text-center text-lg-start">
            <h2 className="text-light text-center p-5">
              <span style={{ color: "#e0c826" }}>Receive</span> your money in the most convenient way in 15 minutes
            </h2>
            <p className="text-center">
              Make a request on our website and wait for a response to your email within 15-30 minutes from the time of
              the request during business hours.
            </p><div className="text-center">
  <button className="btn btn-dark text-warning">Go to the form</button>
</div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default BlackBlurSection;
  