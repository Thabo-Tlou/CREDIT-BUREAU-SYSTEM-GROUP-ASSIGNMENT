import React, { useEffect, useState } from 'react';
import '../styles/CreditDashboard.css';
import Header2 from "../components2/Header2";
import Footer2 from "../components2/Footer2";

const CreditDashboard = () => {
  const [loanRecords, setLoanRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://backend-credit-7sa9.onrender.com/api/loan-records')
      .then((res) => res.json())
      .then((data) => {
        setLoanRecords(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load records.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header2 />

      <div className="credit-dashboard">
        <h2 className="dashboard-title">📊 Credit Dashboard</h2>

        {loading && <p className="loading-text">Loading records...</p>}
        {error && <p className="error-text">{error}</p>}

        {!loading && !error && (
          <div className="dashboard-sections">
            {/* Loan History */}
            <div className="dashboard-box fade-in">
              <h3>🧾 Loan History</h3>
              {loanRecords.length === 0 ? (
                <p>No loan records available.</p>
              ) : (
                loanRecords.map((record, i) =>
                  record.loans?.map((loan, j) => (
                    <div className="record-card" key={`loan-${i}-${j}`}>
                      <p><strong>Loan ID:</strong> {loan.loanId}</p>
                      <p><strong>Lender:</strong> {loan.lender}</p>
                      <p><strong>Amount:</strong> R {loan.amount}</p>
                      <p><strong>Type:</strong> {loan.type}</p>
                      <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
                      <p><strong>Status:</strong> {loan.status}</p>
                      <p><strong>Date Issued:</strong> {new Date(loan.startDate).toLocaleDateString()}</p>
                      <p><strong>Due Date:</strong> {new Date(loan.dueDate).toLocaleDateString()}</p>
                    </div>
                  ))
                )
              )}
            </div>

            {/* Bill Payments */}
            <div className="dashboard-box fade-in">
              <h3>💸 Bill Payments</h3>
              {loanRecords.length === 0 ? (
                <p>No bill records available.</p>
              ) : (
                loanRecords.map((record, i) =>
                  record.bills?.map((bill, j) => (
                    <div className="record-card" key={`bill-${i}-${j}`}>
                      <p><strong>Type:</strong> {bill.billType}</p>
                      <p><strong>Amount:</strong> R {bill.amount}</p>
                      <p><strong>Status:</strong> {bill.status}</p>
                      <p><strong>Due Date:</strong> {new Date(bill.dueDate).toLocaleDateString()}</p>
                      <p><strong>Paid On:</strong> {new Date(bill.paymentDate).toLocaleDateString()}</p>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        )}
      </div>

      <Footer2 />
    </>
  );
};

export default CreditDashboard;
