import React from "react";
import {Link} from "react-router-dom"
const loanProducts = [
    {
      imgSrc: "img/product-img/homeloan.jpg",
      altText: "House and coins representing a home loan",
      title: "Home Loan",
      subtitle: "Flexible and Affordable",
      description: "Get your dream home with low-interest rates and flexible repayment options."
    },
    {
      imgSrc: "img/product-img/presonallaon.jpg",
      altText: "Stack of money representing a personal loan",
      title: "Personal Loan",
      subtitle: "Quick & Easy Approval",
      description: "Access funds for any purpose with fast approval and minimal documentation."
    },
    {
      imgSrc: "img/product-img/businessloan.jpg",
      altText: "Couple discussing business loan options",
      title: "Business Loan",
      subtitle: "Fuel Your Growth",
      description: "Expand your business with tailored financial solutions and expert guidance."
    },
    {
      imgSrc: "img/product-img/carloan.jpg",
      altText: "Car Loan",
      title: "Car Loan",
      subtitle: "Flexible Repayment Terms",
      description: "Choose a loan term that fits your budget, from short-term to long-term plans."
    },
    {
      imgSrc: "img/product-img/Consumerloan.jpg",
      altText: "Consumer Loan",
      title: "Consumer Loan",
      subtitle: "Flexible Loan Amounts",
      description: "Borrow the amount as per your requirement without any collateral."
    },
    {
      imgSrc: "img/product-img/commercialloan.jpg",
      altText: "Commercial Vehicle Loan",
      title: "Commercial Vehicle Loan",
      subtitle: "Flexible Loan Amounts",
      description: "Flexible repayment terms to match your business cash flow."
    }
  ];
  
  const LoanProducts = () => {
    return (
      <section>
        <div className="container text-center my-5">
          <h2 className="mb-4">Loan Products</h2>
          <div className="row gy-4 gx-4 justify-content-center">
            {loanProducts.map((product, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex">
                <div className="loanproducts-box">
                  <img src={product.imgSrc} alt={product.altText} />
                  <h4>{product.title}</h4>
                  <h5>{product.subtitle}</h5>
                  <p>{product.description}</p>
                  <Link to="loanForm">
                  <button type="button" className="btn btn-secondary">Apply Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LoanProducts;
  