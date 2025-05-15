import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const HeaderLender = () => {
  return (
    <header className="home-header">
      <h1 className="company_name">Bokamoso Credit Bureau</h1>
      <nav className="home-nav">
        <Link to="/lender-home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sign-in-lender-form">
          <button className="log-in-btn">Log in</button>
        </Link>
        <Link to="/sign-up-partner">
          <button className="sign-up-btn">Sign up</button>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderLender;
