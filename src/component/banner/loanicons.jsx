import React from "react";

const loanFeatures = [
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2872/2872561.png",
      altText: "Loan Application",
      title: "Easy Loan Application",
      description: "Fill out an easy application form to apply for your loan, anytime and anywhere.",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2892/2892700.png",
      altText: "Instant Payment",
      title: "Instant Fund Transfer",
      description: "Your approved loan will be instantly transferred to your bank account, hassle-free.",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/4332/4332181.png",
      altText: "Secure Transactions",
      title: "Fast & Secure Transactions",
      description: "Your transactions are fully encrypted and secured for your peace of mind.",
    },
  ];
  
  const LoanFeatures = () => {
    return (
      <section className="container mt-5">
        <div className="row">
          {loanFeatures.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 text-center">
              <div className="loan-icons">
                <div className="icon">
                  <img src={feature.imgSrc} alt={feature.altText} className="img-fluid" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default LoanFeatures;
  