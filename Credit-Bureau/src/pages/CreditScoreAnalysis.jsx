import React from 'react';
import "../styles/CreditScoreAnalysis.css"; // for styling

const CreditScoreAnalysis = () => {
  return (
    <div className="analysis-container">
      <h2>Credit Score Analysis</h2>

      <div className="score-overview">
        <div className="score-box">
          <h3>Your Score: <span className="score-value">750</span></h3>
          <p className="score-status">Excellent</p>
        </div>

        <div className="chart-placeholder">
          {/* Replace this with a real chart like Recharts or Chart.js if you want */}
          <p>[Chart Showing Score Breakdown]</p>
        </div>
      </div>

      <div className="score-range-section">
        <h4>Score Range</h4>
        <ul>
          <li><strong>300-579:</strong> Poor</li>
          <li><strong>580-669:</strong> Fair</li>
          <li><strong>670-739:</strong> Good</li>
          <li><strong>740-799:</strong> Very Good</li>
          <li><strong>800-850:</strong> Excellent</li>
        </ul>
      </div>

      <div className="factors-section">
        <h4>Factors Affecting Your Score</h4>
        <ul>
          <li>🕒 Payment History</li>
          <li>💳 Credit Utilization</li>
          <li>📅 Length of Credit History</li>
          <li>📂 Credit Mix</li>
          <li>🆕 New Credit Applications</li>
        </ul>
      </div>

      <div className="tips-section">
        <h4>Tips to Improve</h4>
        <ul>
          <li>✅ Pay your bills on time</li>
          <li>✅ Keep credit card balances low</li>
          <li>✅ Avoid too many loan applications</li>
          <li>✅ Keep old accounts open</li>
        </ul>
      </div>
    </div>
  );
};

export default CreditScoreAnalysis;
