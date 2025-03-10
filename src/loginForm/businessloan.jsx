import React from 'react';
import { Link } from 'react-router-dom';

const BusinessLoans = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    textCenter: {
      textAlign: 'center',
      color: '#FFA725',
      marginBottom: '20px',
      fontSize: '32px',
    },
    businessContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    businessContent: {
      flex: '1 1 600px',
      padding: '20px',
    },
    businessTitle: {
      fontSize: '28px',
      color: '#002366',
      margin: '0 0 10px',
    },
    businessSubtitle: {
      fontSize: '22px',
      color: '#FFA725',
      margin: '0 0 15px',
    },
    businessDescription: {
      fontSize: '16px',
      color: '#444',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    businessImage: {
      flex: '1 1 400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    businessImageImg: {
      maxWidth: '100%',
      height: 'auto',
    },
    applyNowContainer: {
      textAlign: 'center',
      marginTop: '20px',
    },
    applyNowButton: {
      backgroundColor: '#205781',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      textTransform: 'uppercase',
      transition: 'background-color 0.3s ease',
    },
    applyNowButtonHover: {
      backgroundColor: '#FFA725',
      transform: 'scale(1.05)',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.textCenter}>Business Loans</h1>

      <div style={styles.businessContainer}>
        <div style={styles.businessContent}>
          <h1 style={styles.businessTitle}>Empower Your Business with the Right Loan</h1>
          <h2 style={styles.businessSubtitle}>Fuel Your Startup, MSME, or Enterprise</h2>

          <p style={styles.businessDescription}>
            <strong>Business Loans:</strong> We offer loans for startups, small businesses, and MSMEs to help you achieve your entrepreneurial dreams.
          </p>

          <p style={styles.businessDescription}>
            <strong>Government Schemes:</strong>
            <ul>
              <li>PMEGP (Prime Minister’s Employment Generation Programme) – For small businesses.</li>
              <li>MUDRA Loan – For micro and small enterprises.</li>
              <li>Rajasthan Investment Promotion Scheme (RIPS) – For industries and startups.</li>
            </ul>
          </p>

          {/* Apply Now Button */}
          <div style={styles.applyNowContainer}>
            <Link to="/loanForm">
              <button
                style={styles.applyNowButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.applyNowButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.applyNowButton.backgroundColor}
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div style={styles.businessImage}>
          <img src="img/9884101.jpg" alt="Business Loans" style={styles.businessImageImg} />
        </div>
      </div>
    </div>
  );
};

export default BusinessLoans;
