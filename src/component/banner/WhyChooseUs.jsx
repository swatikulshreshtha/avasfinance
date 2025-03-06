import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faRocket, faChartLine } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const features = [
    { icon: faPercent, title: "Fair Interest Rates", text: "Cum sociis natoque penatibus et magnis parturient. Pro vel nibh et elit mollis commodo." },
    { icon: faRocket, title: "Loans up to $5000", text: "Cum sociis natoque penatibus et magnis parturient. Pro vel nibh et elit mollis commodo." },
    { icon: faChartLine, title: "Lowest APR Available", text: "Cum sociis natoque penatibus et magnis parturient. Pro vel nibh et elit mollis commodo." },
    { icon: faRocket, title: "Loans up to $5000", text: "Cum sociis natoque penatibus et magnis parturient. Pro vel nibh et elit mollis commodo." }
  ];

  return (
    <div className="container py-5" id="choose-us">
      <div className="color-blur">
        <h1 className="text-center">Why people choose us</h1>
        <p className="text-center fs-5 p-3">We offer a totally new way of borrowing</p>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3">
              <div className="WhyChooseUs">
                <div className="WhyChooseUs-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="WhyChooseUs-title">{feature.title}</h3>
                <p className="WhyChooseUs-text">{feature.text}</p>
                <a href="#" className="WhyChooseUs-link">HOW IT WORKS?</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
