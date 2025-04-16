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
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">💳</div>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>Credit Reports</li>
            <li>Payment History</li>
            <li>Credit Score Analysis</li>
            <li>Settings</li>
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

export default LoanDashboard;
