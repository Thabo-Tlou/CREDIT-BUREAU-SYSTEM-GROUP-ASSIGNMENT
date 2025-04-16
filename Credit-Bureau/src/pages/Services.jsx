import React from "react";
import Header from "../components2/Header";
import Footer from "../components2/Footer";
import {
  FaFileAlt,
  FaChartLine,
  FaCreditCard,
  FaUserTie,
} from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import "../styles/services.css";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p>Trusted by 1000+ clients</p>
        <p>
          We provide comprehensive credit solutions to help you <br />
          achieve your financial goals.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaFileAlt className="service-icon" size={40} />
            <h2>Credit Reports</h2>
            <p>
              Detailed records of your credit history <br /> and current credit
              status.
            </p>
          </div>

          <div className="service-card">
            <FaChartLine className="service-icon" size={40} />
            <h2>Credit Score Analysis</h2>
            <p>
              In-depth evaluation of your credit score <br /> and factors it.
            </p>
          </div>

          <div className="service-card">
            <FaCreditCard className="service-icon" size={40} />
            <h2>Credit Card Generation</h2>
            <p>
              Issuance of new credit cards <br /> tailored to your financial
              profile.
            </p>
          </div>

          <div className="service-card wide-card">
            <FaUserTie className="service-icon" size={40} />
            <h2>Financial Advice</h2>
            <p>
              Personalized guidance to manage and <br /> improve your financial
              health.
            </p>
          </div>

          <div className="service-card wide-card">
            <IoShieldCheckmarkSharp className="service-icon" size={40} />
            <h2>Risk Assessments</h2>
            <p>
              Comprehensive analysis of your <br /> financial risks and
              vulnerabilities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
