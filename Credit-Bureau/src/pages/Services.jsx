import React from "react";
import Header from "../components2/Header";
import { Link } from "react-router-dom";
import "../styles/services.css";
import { FaFileAlt, FaChartLine, FaCreditCard } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
const Services = () => {
  return (
    <div>
      <Header />
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p>Trusted by 10 000+ clients </p>
        <p>
          We provide comprehensive credit solutions to help you
          <p> achieve your financial goals.</p>
        </p>

        <div className="credit-report">
          <div className="chart">
            <FaFileAlt size={30} color="#0e594a" />
          </div>
          <h2 className="report-title"> Credit Report</h2>
          <p className="reports-paragraph">
            {" "}
            Detailed records of your credit <br></br>history and <br></br>{" "}
            current credit status
          </p>
        </div>
        <div className="credit-score-analysis">
          <div className="chart">
            <FaChartLine size={30} color="#0e594a" />
          </div>
          <h2 className="credit-score-title"> Credit Score Analysis</h2>
        </div>
        <div className="credit-score-analysis">
          <div className="chart">
            <FaChartLine size={30} color="#0e594a" />
          </div>
          <h2 className="credit-score-title">
            {" "}
            Credit Score<br></br>
            <p className="next-line">Analysis</p>
          </h2>
          <p className="reports-paragraph">
            In depth evaluation of your <br></br>credit score
          </p>
        </div>
        <div className="credit-card">
          <div className="card-icon">
            <FaCreditCard size={30} color="#0e594a" />
          </div>
          <h2 className="credit-card-title">
            {" "}
            Credit Card <br></br> Generation
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
