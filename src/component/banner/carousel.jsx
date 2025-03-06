import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is loaded

const MultiItemCarousel = () => {
  const images = [
    {
      src: "img/product-img/carousel0.jpg",
      alt: "Family Budget",
      date: "20 Nov",
    },
    {
      src: "img/product-img/yellowbanner2.jpg",
      alt: "Loan Tips",
      date: "15 Nov",
    },
    {
      src: "img//img-img.jpg",
      alt: "Student Loans",
      date: "10 Nov",
    },
    {
      src: "img/img-img2.jpg",
      alt: "More Budget Tips",
      date: "5 Nov",
    },
    {
      src: "img/img-img3.jpg",
      alt: "Investment Advice",
      date: "1 Nov",
    },
    {
      src: "img/product-img/carousel3.jpg",
      alt: "Credit Score Help",
      date: "28 Oct",
    },
    {
        src: "img/img-img1.jpg",
        alt: "Credit Score Help",
        date: "28 Oct",
      },
  ];

  return (
    <div className="container carousel-container mt-4 p-4">
      <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row">
                {images.slice(index, index + 3).map((img, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="position-relative">
                      <img src={img.src} className="d-block w-100" alt={img.alt} />
                      <div className="date-badge">{img.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default MultiItemCarousel;
