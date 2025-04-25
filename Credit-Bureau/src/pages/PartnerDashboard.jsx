import React, { useEffect, useState } from "react";
import "../styles/partner-dashboard.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Link, useNavigate } from "react-router-dom";
import PartnerSidebar from "../components2/PartnerSidebar";

const PartnerDashboard = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg"); // Default avatar
  const [partnerName, setPartnerName] = useState("Partner");
  const [showLoanDetails, setShowLoanDetails] = useState(false);
  const navigate = useNavigate();

  // Load partner data from localStorage
  useEffect(() => {
    const partnerData = JSON.parse(localStorage.getItem("partnerProfile"));
    if (partnerData) {
      setAvatar(partnerData.avatar || "/images/avatar.jpg"); // Fallback to default avatar if none exists
      setPartnerName(partnerData.name || "Partner");
    }
  }, []);

  // Handle file change for avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);

        // Merge with existing profile to preserve name
        const existingProfile =
          JSON.parse(localStorage.getItem("partnerProfile")) || {};
        const updatedProfile = {
          ...existingProfile,
          avatar: newAvatar,
        };

        localStorage.setItem("partnerProfile", JSON.stringify(updatedProfile));

        // Optionally, you could update the backend here to store the avatar in the database
      };
      reader.readAsDataURL(file);
    }
  };

  // Example data for partner dashboard
  const loanOffers = [
    { loanAmount: "500,000", borrowerName: "John Doe", status: "Active" },
    { loanAmount: "250,000", borrowerName: "Jane Smith", status: "Completed" },
    { loanAmount: "100,000", borrowerName: "Michael Brown", status: "Pending" },
  ];

  const partnerStats = [
    { name: "Active Loans", value: 2, color: "#4caf50" },
    { name: "Completed Loans", value: 1, color: "#2196f3" },
    { name: "Pending Loans", value: 1, color: "#ff9800" },
  ];

  const recentActivity = [
    "Loan offer for John Doe processed",
    "Loan offer for Jane Smith completed",
    "Loan offer for Michael Brown pending",
  ];

  return (
    <div className="dashboard-wrapper">
      <PartnerSidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-top">
            <h1 className="BB">Bokamoso Credit Bureau</h1>
            <input type="text" placeholder="Search..." aria-label="Search" />
          </div>
        </header>

        {!showLoanDetails ? (
          <div className="dashboard-grid">
            <div className="partner-stats-card">
              <div className="stats-value">
                <h2>Partner Stats</h2>
                Loans: {loanOffers.length}
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={partnerStats}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                      innerRadius={50}
                      paddingAngle={5}
                    >
                      {partnerStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="loan-offers-card">
              <h2>Loan Offers</h2>
              <table>
                <thead>
                  <tr>
                    <th>Loan Amount</th>
                    <th>Borrower</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loanOffers.map((loan, index) => (
                    <tr key={index}>
                      <td>{loan.loanAmount}</td>
                      <td>{loan.borrowerName}</td>
                      <td>
                        <span className={`status ${loan.status.toLowerCase()}`}>
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <ul>
                {recentActivity.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setShowLoanDetails(false)}
              style={{
                margin: "1rem 0",
                padding: "0.5rem 1rem",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ⬅ Back to Dashboard
            </button>
            {/* LoanDetails component placeholder */}
            <p style={{ fontSize: "1.2rem" }}>
              Loan Details content goes here...
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PartnerDashboard;
