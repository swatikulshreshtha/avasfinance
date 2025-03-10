import React, { useState } from "react";
import { Link } from "react-router-dom";



const PersonalLoans = () => {
  const [hoveredContainer, setHoveredContainer] = useState(null);

  const handleMouseEnter = (index) => setHoveredContainer(index);
  const handleMouseLeave = () => setHoveredContainer(null);

  const getContainerStyle = (index, isSmall = false) => ({
    ...styles.container,
    transform: hoveredContainer === index ? "scale(1.02)" : "scale(1)",
    boxShadow: hoveredContainer === index
      ? "0 8px 16px rgba(0,0,0,0.2)"
      : "0 4px 8px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    ...(isSmall ? { height: "120px" } : {}),
  });

  return (
    <div>
      <h1 className="text-center">Personal Loans</h1>

      {/* First Container - Small Box */}
      <div
        style={getContainerStyle(1, true)}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.leftSection}>
          <div style={styles.iconWrapper}>
            <img
              src="img/economic-depression_18860519.gif"
              alt="Location"
              style={styles.icon}
            />
          </div>
          <h2 style={styles.title}>Personal Loan - Overview</h2>
        </div>

        <div style={{ ...styles.rightSection, overflow: "hidden", height: "100px" }}>
          <p style={styles.note}>
            <strong>Note:</strong> A Personal Loan is an unsecured loan offered by banks and NBFCs to help individuals meet personal expenses like:</p>
<ul>
    <li>Weddings,Travel and vacations,Education expenses.</li>
    <li>Medical emergencies,Home renovations</li>
</ul>
        </div>
      </div>
      {/* Second Container - Full Box */}
      <div
        style={getContainerStyle(2)}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.leftSection}>
          <div style={styles.iconWrapper}>
            <img
              src="img/bank_18157892.gif"
              alt="Location"
              style={styles.icon}
            />
          </div>
          <h2 style={styles.title}>Eligibility Criteria.</h2>
        </div>
        <div style={styles.rightSection}>
          <p style={styles.note}>
            <strong>Note:</strong>  A Personal Loan is an unsecured loan offered by banks and NBFCs to help individuals meet personal expenses like:
          </p>
         <ul>
            <li>Requires income proof — such as salary slips, bank statements, or ITR (for self-employed).</li>
            <li>Requires credit history — a good credit score (usually 700+) improves approval chances and helps secure lower interest rates.</li>
         </ul>
        </div>
      </div>

      {/* Third Container - Full Box */}
      <div
        style={getContainerStyle(3)}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.leftSection}>
          <div style={styles.iconWrapper}>
            <img
              src="img/investor_17511700.gif"
              alt="Location"
              style={styles.icon}
            />
          </div>
          <h2 style={styles.title}>Key Benefits</h2>
        </div>
        <div style={styles.rightSection}>
          <p style={styles.note}>
            <strong>Note:</strong>  A Personal Loan is an unsecured loan offered by banks and NBFCs to help individuals meet personal expenses like:
          </p>
          <ul style={styles.description}>
           <li>No Collateral Required — no need to pledge property or assets.</li>
           <li>Quick Disbursal — funds are often disbursed within 24 to 48 hours after approval.</li>
           <li>Flexible Loan Amounts — borrow anywhere from ₹50,000 to ₹25 lakhs (depending on lender and eligibility).</li>
           <li>Minimal Documentation — typically just ID proof, address proof, and income documents.</li>
           <li>Competitive Interest Rates — lower for salaried individuals with stable income and good credit history
           <a href="#" style={styles.readMore}>Read More..</a>
           </li>
          </ul>
        </div>
      </div>

      {/* Center Button */}
      <div style={styles.buttonWrapper}>
        <Link to="/loanForm">
        <button style={styles.centerButton}>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    maxWidth: "1200px",
    margin: "20px auto",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    flex: "1 1 300px",
    minWidth: "300px"
  },
  iconWrapper: {
    backgroundColor: "#FFA725",
    borderRadius: "50%",
    padding: "12px",
    marginRight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  icon: {
    width: "24px",
    height: "24px"
  },
  title: {
    fontSize: "22px",
    color: "#002366",
    fontWeight: "600",
    margin: 0
  },
  rightSection: {
    flex: "2 1 600px",
    padding: "16px",
    borderLeft: "1px solid #ddd",
    minWidth: "300px"
  },
  note: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px"
  },
  description: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.6"
  },
  readMore: {
    color: "#0046be",
    fontWeight: "500",
    textDecoration: "none",
    marginLeft: "5px"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  },
  centerButton: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#205781",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
};

export default PersonalLoans;
