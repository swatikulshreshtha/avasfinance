import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            💲 <span className="text-primary">Avas</span> Loans
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              {/* Loan Products Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="loanDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Loan Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="loanDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home Loan
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      Car Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Consumer Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MASE Business Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home Construction Loan
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#choose-us">
                Choose us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="# Contact Us">
                  Contact Us
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#EMI Calculator">
                  EMI Calculator
                </a>
              </li>

                <li className="nav-item">
                <a className="nav-link" href="#Footer">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                🔍
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
