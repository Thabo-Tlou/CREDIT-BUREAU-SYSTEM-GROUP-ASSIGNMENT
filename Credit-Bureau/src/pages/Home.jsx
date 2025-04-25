import React from "react";
import "../styles/Home.css"; // Import CSS
import Logo from "../components/images/logo.png";
import Photo from "../components/images/bank-loan.jpg";
import Dashboard from "./Dashboard";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BarChartIcon from "@mui/icons-material/BarChart";
import Header from "../components2/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="home-section">
        <div className="home-text">
          <img src={Logo} alt="Logo" className="home-logo" />
          <h1 className="Financial">
            FINANCIAL <span className="highlight">SERVICES</span>
          </h1>
          <p>
            At Bokamoso Credit Bureau, we provide accurate credit reports, score
            analysis, and risk assessments to help individuals and businesses
            make informed financial choices. Our secure and transparent services
            empower you to manage your credit, access fair lending
            opportunities, and build a stronger financial future.
          </p>
          <button className="home-read-more">Read More</button>
          <Link to="/lender-home">
            <button className="home-lender">Lenders Page</button>
          </Link>
        </div>
        <div className="home-image">
          <img src={Photo} alt="Businessman" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="stat-card">
          <SavingsIcon className="stat-icon" />
          <h2>10k</h2>
          <p>10,000 customers served</p>
        </div>
        <div className="stat-card">
          <AccountBalanceIcon className="stat-icon" />
          <h2>8k</h2>
          <p>8,000 credit reports issued</p>
        </div>
        <div className="stat-card">
          <BarChartIcon className="stat-icon" />
          <h2>5k</h2>
          <p>Over 5,000 credit score analyses</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
