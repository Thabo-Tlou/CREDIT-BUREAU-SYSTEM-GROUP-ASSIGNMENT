import React from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import "../styles/dashboard.css";

const userStats = [
  { name: "Excellent", value: 40, color: "#4CAF50" },
  { name: "Good", value: 30, color: "#2196F3" },
  { name: "Fair", value: 20, color: "#FFC107" },
  { name: "Poor", value: 10, color: "#F44336" },
];

const scoreTrends = [
  { month: "Jan", score: 720 },
  { month: "Feb", score: 690 },
  { month: "Mar", score: 730 },
  { month: "Apr", score: 710 },
  { month: "May", score: 740 },
  { month: "Jun", score: 750 },
];

const userTransactions = [
  {
    user: "John Doe",
    loanAmount: "$5,000",
    lastPayment: "$1,000",
    dueDate: "2025-04-01",
  },
  {
    user: "Jane Smith",
    loanAmount: "$3,500",
    lastPayment: "$500",
    dueDate: "2025-03-15",
  },
  {
    user: "Samuel Lee",
    loanAmount: "$7,000",
    lastPayment: "$1,200",
    dueDate: "2025-04-10",
  },
  {
    user: "Emily Davis",
    loanAmount: "$2,000",
    lastPayment: "$200",
    dueDate: "2025-05-01",
  },
];

const sortedTransactions = [...userTransactions].sort(
  (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
);

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">💳</div>
        <nav>
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/credit-reports">Credit Reports</Link>
            </li>
            <li>
              <Link to="/payment-history">Payment History</Link>
            </li>
            <li>
              <Link to="/credit-score">Credit Score Analysis</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="overview">
          <div className="card">
            <h3>Total Users</h3>
            <p>5,000</p>
          </div>
          <div className="card">
            <h3>Total Reports Generated</h3>
            <p>1,200</p>
          </div>
          <div className="card">
            <h3>Average Credit Score</h3>
            <p>720</p>
          </div>
        </div>

        <div className="charts">
          <div className="chart-card">
            <h3>User Credit Score Distribution</h3>
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

          <div className="chart-card">
            <h3>Credit Score Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scoreTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[650, 800]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#4CAF50" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="upcoming-card">
          <h2>Upcoming Payments</h2>
          {sortedTransactions.map((transaction, index) => (
            <div className="upcoming-item" key={index}>
              <span>
                {transaction.user} - Last Payment: {transaction.lastPayment}
              </span>
              <span>Due: {transaction.dueDate}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
