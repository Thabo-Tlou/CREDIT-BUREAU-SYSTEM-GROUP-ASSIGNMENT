import React from "react";
import "../styles/LenderHome.css";
import HeaderLender from "../components2/HeaderLender";

const LenderHome = () => {
  return (
    <div className="lender-home-container">
      <HeaderLender />

      <section className="lender-hero">
        <div className="lender-text">
          <h1 className="lender-heading">
            PARTNERED <span className="highlight">LENDERS</span>
          </h1>
          <p className="lender-description">
            Bokamoso Credit Bureau proudly collaborates with leading financial
            institutions to deliver data-driven credit analysis, in-depth risk
            evaluations, and tailored insights. Our mission is to create a
            financial ecosystem where accuracy and transparency are paramount.
          </p>
          <p className="lender-description">
            With our partner lenders, we aim to improve financial inclusion and
            provide access to fair and reliable credit systems for all citizens.
            Explore the organizations that trust Bokamoso Credit Bureau with
            strategic decision-making tools.
          </p>
        </div>
        <div className="lender-image">
          <img src="/images/bank-loan.jpg" alt="Corporate Partnership" />
        </div>
      </section>

      <section className="lender-logos">
        <h2 className="logos-heading">Our Trusted Partners</h2>
        <div className="logos-container">
          <div className="logo-card">
            <img src="/images/fnb-logo.png" alt="FNB" className="logo-img" />
            <p className="logo-caption">First National Bank</p>
          </div>
          <div className="logo-card">
            <img
              src="/images/alliance-lesotho-logo.png"
              alt="Alliance"
              className="logo-img"
            />
            <p className="logo-caption">Alliance Insurance</p>
          </div>
          <div className="logo-card">
            <img
              src="/images/netbank-logo.png"
              alt="Nedbank"
              className="logo-img"
            />
            <p className="logo-caption">Nedbank</p>
          </div>
          <div className="logo-card">
            <img
              src="/images/post-bank-logo.png"
              alt="Postbank"
              className="logo-img"
            />
            <p className="logo-caption">Postbank</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="section-title">Why Our Partners Trust Us</h2>
        <ul className="benefits-list">
          <li>
            <strong>Data Accuracy:</strong> We provide highly reliable data to
            guide lending decisions.
          </li>
          <li>
            <strong>Comprehensive Reports:</strong> Credit reports enriched with
            risk scores, historical behavior, and identity verification.
          </li>
          <li>
            <strong>Security:</strong> Data encryption, access control, and
            monitoring to keep our clients safe.
          </li>
          <li>
            <strong>Support:</strong> Dedicated technical and financial analysts
            to assist partner queries.
          </li>
          <li>
            <strong>Innovation:</strong> We leverage modern technology to ensure
            lenders are equipped with cutting-edge credit insights.
          </li>
        </ul>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Become a Partner</h2>
          <p>
            Join a growing network of financial institutions transforming credit
            access across the nation. Contact us to learn how Bokamoso Credit
            Bureau can support your mission and amplify your impact.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>

      <footer className="lender-footer">
        <div className="footer-content">
          <p>
            Bokamoso Credit Bureau © {new Date().getFullYear()} - All rights
            reserved.
          </p>
          <p className="footer-note">Empowering Lenders. Enriching Lives.</p>
        </div>
      </footer>
    </div>
  );
};

export default LenderHome;
