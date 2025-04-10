import React from 'react';
import '../styles/dashboard.css';

const LoanDashboard = () => {
  const transactions = [
    { date: '01/15/2024', description: 'Utility Bill', status: 'Paid' },
    { date: '01/10/2024', description: 'Credit Card Payment', status: 'Pending' },
    { date: '01/10/2024', description: 'Loan Payment', status: 'Paid' },
    { date: '01/05/2024', description: 'Mortgage Payment', status: 'Overdue' },
  ];

  const upcomingPayments = [
    { description: 'Mortgage Payment', dueDate: '02/01/2024' },
    { description: 'Loan Payment', dueDate: '02/05/2024' },
  ];

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

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1 className = "BB">Bokamoso Credit Bureau</h1>
        </header>

        <div className="dashboard-grid">
          <div className="credit-score-card">
            <h2>CREDIT SCORE</h2>
            <div className="score-value">750</div>
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
                    <td><span className={`status ${t.status.toLowerCase()}`}>{t.status}</span></td>
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

export default LoanDashboard;
