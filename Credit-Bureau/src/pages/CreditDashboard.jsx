import React from "react";
import "../styles/creditDashboard.css";
import Footer2 from "../components2/Footer";

const CreditDashboard = () => {
  return (
    <>
      <div className="credit-dashboard">
        <h2 className="dashboard-title">Bokamoso Credit Bureau</h2>

        <div className="dashboard-sections">
          <div className="dashboard-box">
            <h3>Your Loan History</h3>
            <p>No loan records available.</p>
          </div>

          <div className="dashboard-box">
            <h3>Your Bill Payments</h3>
            <p>No bill records available.</p>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
};

export default CreditDashboard;
