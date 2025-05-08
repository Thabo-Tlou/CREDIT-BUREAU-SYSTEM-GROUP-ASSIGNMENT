import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Header from "../components2/Header2";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [userName, setUserName] = useState("User");
  const [showCreditReport, setShowCreditReport] = useState(false);

  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    if (profileData) {
      setAvatar(profileData.avatar || "/images/avatar.jpg");
      setUserName(profileData.name || "User");
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);
        const existingProfile =
          JSON.parse(localStorage.getItem("profile")) || {};
        localStorage.setItem(
          "profile",
          JSON.stringify({ ...existingProfile, avatar: newAvatar })
        );
      };
      reader.readAsDataURL(file);
    }
  };

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

  const recentActivity = [
    "Login from new device",
    "Updated profile information",
    "Checked credit report",
  ];

  return (
    <div className="dashboard-wrapper">
      <Header />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1 className="BB">Bokamoso Credit Bureau</h1>
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>

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
              className="back-button"
            >
              ⬅ Back to Dashboard
            </button>
            <p style={{ fontSize: "1.2rem" }}>
              Credit Report content goes here...
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
