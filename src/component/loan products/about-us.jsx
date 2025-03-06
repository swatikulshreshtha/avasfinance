import React from 'react';

const About = () => {
  return (
    <div>
      {/* Embedded styles directly inside the component */}


      <div className="about-container" id="about-us">
        <div className="about-content">
          <h2 className="about-title">About Our Finance Company</h2>
          <p className="about-text">
            Welcome to <span className="about-highlight">FinServe Solutions</span>, your trusted financial partner.
            We specialize in providing tailored financial solutions, from personal loans to investment planning,
            helping individuals and businesses achieve their goals.
          </p>
          <p className="about-text">
            Our team of experienced financial advisors is committed to delivering transparency, efficiency,
            and customer satisfaction. With a deep understanding of the financial landscape, we ensure that
            our clients make informed decisions that enhance their financial well-being.
          </p>
          <p className="about-text">
            Whether you're looking to secure a loan, explore investment opportunities, or seek expert financial advice,
            <span className="about-highlight"> FinServe Solutions</span> is here to support you every step of the way.
          </p>
        </div>
      </div>
      <style>{`
        .about-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 20px;
          box-sizing: border-box;
        }

        .about-content {
          max-width: 800px;
          background-color: #fff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .about-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .about-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 16px;
        }

        .about-highlight {
          color: #2563eb;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 16px;
          }
          .about-title {
            font-size: 1.5rem;
          }
          .about-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
