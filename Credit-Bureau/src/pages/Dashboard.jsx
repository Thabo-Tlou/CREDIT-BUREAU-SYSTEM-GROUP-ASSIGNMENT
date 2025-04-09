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

// Imaginary user loan and payment transactions
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

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Bokamoso Credit Bureau</h2>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/*Loan and Payment Transactions 8*/}
        <div className="transactions">
          <h3>Loan & Payment Transactions</h3>
          <div className="transaction-list">
            {userTransactions.map((transaction, index) => (
              <div className="transaction-card" key={index}>
                <h4>{transaction.user}</h4>
                <p>Loan Amount: {transaction.loanAmount}</p>
                <p>Last Payment: {transaction.lastPayment}</p>
                <p>Next Due Date: {transaction.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
