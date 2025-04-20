import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [userName, setUserName] = useState("User");
  const [showCreditReport, setShowCreditReport] = useState(false);

  // Load user data from localStorage
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    if (profileData) {
      if (profileData.avatar) setAvatar(profileData.avatar);
      if (profileData.name) setUserName(profileData.name);
    }
  }, []);

  // Sample data for transactions, upcoming payments, and stats
  const transactions = [
    { date: "01/15/2024", description: "Utility Bill", status: "Paid" },
    {
      date: "01/10/2024",
      description: "Credit Card Payment",
      status: "Pending",
    },
    { date: "01/10/2024", description: "Loan Payment", status: "Paid" },
    { date: "01/05/2024", description: "Mortgage Payment", status: "Overdue" },
  ];

  const upcomingPayments = [
    { description: "Mortgage Payment", dueDate: "02/01/2024" },
    { description: "Loan Payment", dueDate: "02/05/2024" },
  ];

  const userStats = [
    { name: "Paid", value: 3, color: "#4caf50" },
    { name: "Pending", value: 1, color: "#ff9800" },
    { name: "Overdue", value: 1, color: "#f44336" },
  ];

  // Recent activity (can be updated to real data)
  const recentActivity = [
    "Login from new device",
    "Updated profile information",
    "Checked credit report",
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <p className="username">{userName}</p>
        </div>
        <nav aria-label="Sidebar Navigation">
          <ul className="sidebar-nav">
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowCreditReport(true)}
                style={{
                  textDecoration: "none",
                  color: "white",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Credit Reports
              </button>
            </li>
            <li>
              <Link
                to="/credit-form"
                style={{ textDecoration: "none", color: "white" }}
              >
                Loan
              </Link>
            </li>
            <li>
              <Link
                to="/payment-history"
                style={{ textDecoration: "none", color: "white" }}
              >
                Payment History
              </Link>
            </li>
            <li>
              <Link
                to="/credit-score-analysis"
                style={{ textDecoration: "none", color: "white" }}
              >
                Credit Score Analysis
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                style={{ textDecoration: "none", color: "white" }}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-top">
            <h1 className="BB">Bokamoso Credit Bureau</h1>
            <input type="text" placeholder="Search..." aria-label="Search" />
          </div>
        </header>

        {!showCreditReport ? (
          <div className="dashboard-grid">
            <div className="credit-score-card">
              <h2>CREDIT SCORE</h2>
              <div className="score-value">750</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userStats}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    innerRadius={50}
                    paddingAngle={5}
                  >
                    {userStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="transactions-card">
              <h2>Recent Transactions</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t, index) => (
                    <tr key={index}>
                      <td>{t.date}</td>
                      <td>{t.description}</td>
                      <td>
                        <span className={`status ${t.status.toLowerCase()}`}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="upcoming-card">
              <h2>Upcoming Payments</h2>
              {upcomingPayments.map((p, index) => (
                <div className="upcoming-item" key={index}>
                  <span>{p.description}</span>
                  <span>{p.dueDate}</span>
                </div>
              ))}
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
              onClick={() => setShowCreditReport(false)}
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
            {/* Add the CreditReport component or content here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
