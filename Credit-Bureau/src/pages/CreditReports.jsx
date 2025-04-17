import React, { useState, useEffect } from "react";
import "../styles/creditReports.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CreditReports = () => {
  const reports = [
    {
      id: 1,
      name: "John Doe",
      score: 720,
      date: "01/15/2024",
      status: "Good",
      trend: [650, 700, 720],
    },
    {
      id: 2,
      name: "Jane Smith",
      score: 600,
      date: "12/20/2023",
      status: "Fair",
      trend: [550, 570, 600],
    },
    {
      id: 3,
      name: "Tom Brown",
      score: 800,
      date: "11/10/2023",
      status: "Excellent",
      trend: [750, 770, 800],
    },
    {
      id: 4,
      name: "Lucy Green",
      score: 450,
      date: "10/05/2023",
      status: "Poor",
      trend: [400, 420, 450],
    },
  ];

  const [selectedReport, setSelectedReport] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter reports based on search term
  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="credit-reports-wrapper">
      <div className="credit-reports-header">
        <h2>Credit Reports</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* List of Reports */}
      <div className="report-list">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="report-item"
            onClick={() => handleSelectReport(report)}
          >
            <div className="report-name">{report.name}</div>
            <div className="report-score">{report.score}</div>
            <div className={`report-status ${report.status.toLowerCase()}`}>
              {report.status}
            </div>
            <div className="report-date">{report.date}</div>
          </div>
        ))}
      </div>

      {/* Detailed Report View */}
      {selectedReport && (
        <div className="report-details">
          <h3>Report Details</h3>
          <div className="report-details-header">
            <p>
              <strong>Name:</strong> {selectedReport.name}
            </p>
            <p>
              <strong>Credit Score:</strong> {selectedReport.score}
            </p>
            <p>
              <strong>Status:</strong> {selectedReport.status}
            </p>
            <p>
              <strong>Report Date:</strong> {selectedReport.date}
            </p>
          </div>
          <div className="score-trend">
            <h4>Score Trend (Last 3 months)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={selectedReport.trend.map((score, index) => ({
                  month: `Month ${index + 1}`,
                  score,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#4caf50" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="report-actions">
            <button className="view-more">View More</button>
            <button className="download-report">Download Report</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditReports;
