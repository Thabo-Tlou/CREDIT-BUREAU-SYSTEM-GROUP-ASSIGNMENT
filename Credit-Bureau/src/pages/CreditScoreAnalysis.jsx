import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/CreditScoreAnalysis.css";
import FooterNew from "../components2/FooterNew";
import Logo from "../components/images/logo.png";
import Header2 from "../components2/Header2";

const CreditScoreAnalysis = () => {
  const [darkMode, setDarkMode] = useState(false);
  const score = 750;

  const chartData = [
    { name: "Payment History", value: 35 },
    { name: "Credit Utilization", value: 30 },
    { name: "Length of Credit History", value: 15 },
    { name: "Credit Mix", value: 10 },
    { name: "New Credit", value: 10 },
  ];

  const COLORS = ["#83C760", "#FB607F", "#FADADD", "#FF91A4", "#4EA217"];

  const getScoreStatus = (score) => {
    if (score >= 800) return "Excellent";
    if (score >= 740) return "Very Good";
    if (score >= 670) return "Good";
    if (score >= 580) return "Fair";
    return "Poor";
  };

  const status = getScoreStatus(score);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={`main-layout`}>
      <Header2 />
      <div className="main-content">
        <div className="analysis-container">
          <div className="analysis-header">
            <h2 className="page-title">📊 Credit Score Analysis</h2>
            <button
              className="dark-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          <div className="score-overview">
            <div className="score-box">
              <h3>Your Score:</h3>
              <div className="score-number">
                <span>{score}</span>
                <div className="status-label">{status}</div>
              </div>
              <progress max="850" value={score} className="score-bar" />
              <p className="score-tip">ℹ️ Based on multiple credit factors</p>
            </div>

            <div className="score-chart">
              <h5>Credit Score Breakdown</h5>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="score-range-section">
            <h4>🔢 Score Categories Explained</h4>
            <ul>
              <li>
                <strong>300–579:</strong> Poor
              </li>
              <li>
                <strong>580–669:</strong> Fair
              </li>
              <li>
                <strong>670–739:</strong> Good
              </li>
              <li>
                <strong>740–799:</strong> Very Good
              </li>
              <li>
                <strong>800–850:</strong> Excellent
              </li>
            </ul>
          </div>

          <div className="factors-section">
            <h4>🧮 What Impacts Your Score?</h4>
            <ul>
              <li>🕒 Payment History (35%)</li>
              <li>💳 Credit Utilization (30%)</li>
              <li>📅 Length of Credit History (15%)</li>
              <li>📂 Credit Mix (10%)</li>
              <li>🆕 New Credit Applications (10%)</li>
            </ul>
          </div>

          <div className="tips-section">
            <h4>💡 Tips to Improve</h4>
            <ul>
              <li>✅ Pay your bills on time</li>
              <li>✅ Keep credit card balances low</li>
              <li>✅ Avoid too many loan applications</li>
              <li>✅ Keep old accounts open</li>
            </ul>
          </div>

          <div className="bonus-section">
            <h4>📚 Learn More</h4>
            <p>
              Visit <a href="#">Bokamoso Credit Bureau</a> to understand how
              scores work and how to manage credit wisely.
            </p>
            <button className="update-button">
              Manage your finances wisely
            </button>
          </div>
        </div>
      </div>
       <FooterNew />
    </div>
  );
  
};

export default CreditScoreAnalysis;
