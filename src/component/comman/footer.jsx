import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube,  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" id="Footer">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5>Street Address</h5>
            <p>Brooklyn, NY 10036,</p>
            <p>United States</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Postal Address</h5>
            <p>PO Box 16122 Collins Street</p>
            <p>Victoria 8007 Australia</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Our Agent Now!</h5>
            <p className="contact-number">+1 800 123 1234</p>
          </div>
        </div>
      </div>

      <div className="container border-top p-5">
        <div className="row text-md-start text-center">
          <div className="col-md-4 mb-4">
            <div className="footer-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png"
                alt="Logo"
              />
              <span>PayDay</span> Loans
            </div>
            <p>You need an active UK bank account to allow the money to be transferred to you.</p>
          </div>

          <div className="col-md-2 mb-4">
            <h5>OPEN HOURS</h5>
            <p>Monday 11am-7pm</p>
            <p>Tuesday-Friday 11am-8pm</p>
            <p>Saturday 10am-6pm</p>
            <p>Sunday 11am-6pm</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Services</h5>
            <p>Home loan</p>
            <p>Car loan</p>
            <p>Presonal loan</p>
            <p>Business loan</p>
            <p>Cansumer loan</p>
            <p>MASE Business loan</p>
            <p>Commercial Vehicle loan</p>
          </div>

          <div className="col-md-3 mb-4">
      <h5>SOCIALS</h5>
      <p><a href="#"><FaTwitter /> Twitter</a></p>
      <p><a href="https://www.instagram.com/digimarketingpvt/?fbclid=IwZXh0bgNhZW0CMTEAAR1jGwntvaAGX_kskE3QA29DoJTQXMHabFAShWpi69hTWilKNsKCuzAKtSM_aem_7TcBYCUx1ZTZHrxnJX1PWQ" target="_blank"><FaInstagram /> Instagram</a></p>
      <p><a href="https://www.facebook.com/digimarketingpvt"><FaFacebook /> Facebook</a></p>
      <p><a href="#"><FaYoutube />Youtube</a></p>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
