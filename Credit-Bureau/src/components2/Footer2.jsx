import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Bokamoso Credit Bureau</h2>
          <p>Empowering Financial Decisions with Trusted Data.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/reports">Credit Reports</a>
            </li>
            <li>
              <a href="/score">Score Analysis</a>
            </li>
            <li>
              <a href="/partners">Our Partners</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@bokamosocredit.co.ls</p>
          <p>Phone: +266 5000 1234</p>
          <p>Location: Maseru, Lesotho</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Bokamoso Credit Bureau. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
