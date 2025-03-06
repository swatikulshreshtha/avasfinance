import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Creditcardbanner = () => {
  return (
    <div className="container-fluid credit-card-img">
      <div className="container">
        <div className="row align-items-center">
          <div className="requirements-section text-center text-md-start">
            <div className="container requirements-content">
              <h2>
                PayDay is <span className="highlight">the right choice</span> for you if:
              </h2>

              <div className="row mt-4">
                {/* Left Column */}
                <div className="col-md-6 text-dark position-relative">
                  <Requirement
                    title="YOU ARE 18 OR OLDER"
                    description="The minimum age to use our service is 18."
                  />
                  <Requirement
                    title="YOU ARE A US RESIDENT"
                    description="Must be a current resident of the United States."
                  />
                  <Requirement
                    title="YOU HAVE A BANK ACCOUNT"
                    description="A valid bank account is required for transactions."
                  />
                </div>

                {/* Right Column */}
                <div className="col-md-6 text-dark position-relative">
                  <Requirement
                    title="YOU ARE HONEST AND TRUSTWORTHY"
                    description="You definitely have to be a nice person."
                  />
                  <Requirement
                    title="YOU HAVE A VALID ADDRESS"
                    description="Must be a current resident of the United States."
                  />
                  <Requirement
                    title="YOU HAVE A REGULAR INCOME"
                    description="A stable source of income is required."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Requirement Component
const Requirement = ({ title, description }) => {
    return (
      <div className="requirement">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#f3d024", fontSize: "24px" }} />
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default Creditcardbanner;
