import React from "react";
import "../styles/dashboard.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
    { name: "Paid", value: 3, color: "#4caf50" }, // Green color for "Paid"
    { name: "Pending", value: 1, color: "#ff9800" }, // Orange color for "Pending"
    { name: "Overdue", value: 1, color: "#f44336" }, // Red color for "Overdue"
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">💳</div>
        <nav aria-label="Sidebar Navigation">
          <ul className="sidebar-nav">
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/credit-reports"
                style={{ textDecoration: "none", color: "white" }}
              >
                Credit Reports
              </Link>
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
