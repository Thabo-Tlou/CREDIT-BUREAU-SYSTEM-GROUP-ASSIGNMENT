import React from "react";
import "../styles/payment_history.css";

const agencies = ["Loans", "Payments", "Settled"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PaymentHistory = () => {
  return (
    <div className="credit-reports-wrapper">
      <aside className="left-panel">
        <h2>Credit Reports</h2>
        <ul className="lender-list">
          {[
            "Payments",
            "Loans Taken",
            "Banks Involved",
            "Accounts",
            "Statements",
          ].map((lender, index) => (
            <li key={index}>
              <span>{lender}</span>
              <button className="view-btn">
                {lender === "Bokamoso" ? "HIDE" : "VIEW"}
              </button>
            </li>
          ))}
          <li className="closed-accounts">
            <span>6 Closed Accounts</span>
            <button className="show-btn">SHOW</button>
          </li>
        </ul>
      </aside>

      <main className="report-main">
        <header className="report-header">
          <h2>Bokamoso Credit Bureau</h2>
        </header>

        <section className="agency-info">
          {agencies.map((agency) => (
            <div className="agency-card" key={agency}>
              <p>
                <strong>{agency}</strong>
              </p>
              <p>Balance: M 4000</p>
              <p>Payed: M 200</p>
              <p>Settled/Closed</p>
              <button className="details-btn">DETAILS</button>
            </div>
          ))}
        </section>

        <section className="status-months">
          <table>
            <thead>
              <tr>
                <th></th>
                {months.map((month, idx) => (
                  <th key={idx}>{month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agencies.map((agency, i) => (
                <tr key={i}>
                  <td>{agency.slice(0, 2).toUpperCase()}</td>
                  {months.map((_, idx) => (
                    <td key={idx}>
                      <span className="status-ok">✔</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <h4 className="Balance-graph-text">Balance Graph (LO, PA , SE)</h4>
        <section className="balance-graph">
          <div className="bar-graph">
            {months.map((_, i) => (
              <div key={i} className="bar-month">
                <div className="bar eq" />
                <div className="bar ex" />
                <div className="bar tu" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentHistory;
