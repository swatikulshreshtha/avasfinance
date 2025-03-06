import React from "react";


const Minibanner = () => {
  return (
    <div className="container-fluid banner">
      <div className="row justify-content-center">
        {bannerData.map((item, index) => (
          <div key={index} className="col-6 col-sm-3 d-flex justify-content-center">
            <div className="icon-text">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              {item.subtext && <div className="subtext">{item.subtext}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Banner Data (You can modify this easily)
const bannerData = [
  {
    image: "img/product-img/yellowbanner1.jpg",
    title: "CAPITAL",
  },
  {
    image: "img/product-img/yellowbanner2.jpg",
    title: "Status Group",
    subtext: "Finance Company",
  },
  {
    image: "img/product-img/yellowbanner3.jpg",
    title: "Finance",
    subtext: "Strategy and Planning",
  },
  {
    image: "img/product-img/yellowimg.jpg",
    title: "All Business",
  },
];

export default Minibanner;
