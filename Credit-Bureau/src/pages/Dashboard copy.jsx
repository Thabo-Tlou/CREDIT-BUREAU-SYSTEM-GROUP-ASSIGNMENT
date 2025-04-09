import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CreditDashboard = () => {
  const [loanRecords, setLoanRecords] = useState([]);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [userInput, setUserInput] = useState({ name: "" });
  const [loanInput, setLoanInput] = useState({ userId: "", amount: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/loans").then((response) => {
      setLoanRecords(response.data);
    });
    axios.get("http://localhost:5000/api/payments").then((response) => {
      setPaymentRecords(response.data);
    });
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users", userInput).then(() => {
      alert("User added successfully");
      setUserInput({ name: "" });
    });
  };

  const addLoan = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/loans", loanInput).then(() => {
      alert("Loan added successfully");
      setLoanInput({ userId: "", amount: "" });
    });
  };

  const loanChartData = loanRecords.map((loan, index) => ({
    name: `Loan ${index + 1}`,
    Amount: loan.amount,
  }));

  const paymentChartData = paymentRecords.map((payment, index) => ({
    name: `Payment ${index + 1}`,
    Amount: payment.amount,
  }));

  return (
    <div className="credit-dashboard-container">
      <aside className="credit-sidebar">
        <h2>CREDIT BUREAU &copy;</h2>
        <img
          className="credit-logo"
          src="./images/logo.jpg"
          alt="Credit Bureau Logo"
        />
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Transfer</li>
            <li>Transactions</li>
            <li>Accounts & Cards</li>
            <li>Investments</li>
          </ul>
        </nav>
      </aside>

      <main className="credit-dashboard-main">
        <div className="credit-stats">
          <div className="credit-card">
            <h3>Total Loans</h3>
            <p>{loanRecords.length}</p>
          </div>
          <div className="credit-card">
            <h3>Total Payments</h3>
            <p>{paymentRecords.length}</p>
          </div>
        </div>

        <div className="credit-charts">
          <div className="credit-chart-card">
            <h3>Loan Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loanChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" fill="#fbba3f" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="credit-chart-card">
            <h3>Payment Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={paymentChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Amount" fill="#fbba3f" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreditDashboard;
