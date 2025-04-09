import React from "react";
import "../styles/dashboard.css";

const Reports = () => {
  return (
    <div className="card">
      <h2>Credit Report Overview</h2>
      <p>
        Generate and review detailed credit reports for users and businesses.
      </p>
      <button className="generate-btn">Generate Report</button>
    </div>
  );
};

export default Reports;
