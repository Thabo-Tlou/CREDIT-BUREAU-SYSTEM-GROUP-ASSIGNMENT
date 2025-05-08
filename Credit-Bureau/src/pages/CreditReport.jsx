import React from "react";
import Sidebar from "../components2/Sidebar";
import jsPDF from "https://esm.sh/jspdf";
import "../styles/credit-report.css";

const CreditReport = () => {
  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title and header
    doc.setFontSize(20);
    doc.text("Bokamoso Credit Bureau - Credit Report", 20, 20);

    // Add credit summary content to PDF
    doc.setFontSize(12);
    doc.text("Credit Summary", 20, 40);
    doc.text(
      "Your Equinox Credit Summary contains information in your credit file that is crucial in determining your credit standing. Lenders view positively the individuals with a range of credit accounts that have a record of on-time payments.",
      20,
      50
    );

    // Add table data
    const tableColumn = [
      "Account Type",
      "Total Number",
      "Balance",
      "Credit Limit",
      "Status",
      "Monthly Payment",
      "Accounts With Balance",
    ];
    const tableRows = [
      [
        "Mortgage",
        "1",
        "M123,021",
        "M113,021",
        "Open, Never Late",
        "M3,753",
        "1",
      ],
      [
        "Credit Installments",
        "3",
        "M26,643",
        "M23,578",
        "Open, Never Late",
        "M350",
        "3",
      ],
      ["Car Loans", "1", "M15,750", "M11,256", "Open, Never Late", "M200", "1"],
      ["Total", "5", "M165,414", "M147,855", "Open, Never Late", "M4,303", "5"],
    ];

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      theme: "grid",
    });

    // Save the PDF
    doc.save("bokamoso_credit_report.pdf");
  };

  return (
    <div className="report-container">
      <Sidebar />
      <div className="report-content">
        <header className="report-header">
          <h1>Bokamoso Credit Bureau - Credit Report</h1>
          <div className="report-info">
            <div>
              <p>
                <strong>From:</strong> 10/10/2023
              </p>
              <p>
                <strong>Until:</strong> 11/08/2023
              </p>
            </div>
            <div>
              <p>
                <strong>Customer Number:</strong> 1536457
              </p>
              <p>
                <strong>Customer Name:</strong> Jane Doe
              </p>
            </div>
            <div>
              <p>
                <strong>Phone Number:</strong> (+266) 5678 1234
              </p>
              <p>
                <strong>Address:</strong> 256 Maseru West, Lesotho
              </p>
            </div>
          </div>
          <div className="report-buttons">
            <button className="download-btn" onClick={downloadPDF}>
              📄 Download PDF
            </button>
            <button className="print-btn" onClick={handlePrint}>
              🖨 Print Statement
            </button>
          </div>
        </header>

        <section className="credit-summary">
          <h2>Credit Summary</h2>
          <p className="description">
            This credit report provided by Bokamoso Credit Bureau outlines your
            financial behavior and borrowing history. Maintaining timely
            payments and diversified credit accounts will improve your financial
            health.
          </p>

          <table className="summary-table">
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Total Number</th>
                <th>Balance</th>
                <th>Credit Limit</th>
                <th>Status</th>
                <th>Monthly Payment</th>
                <th>Accounts With Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mortgage</td>
                <td>1</td>
                <td>M123,021</td>
                <td>M113,021</td>
                <td>Open, Never Late</td>
                <td>M3,753</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Credit Installments</td>
                <td>3</td>
                <td>M26,643</td>
                <td>M23,578</td>
                <td>Open, Never Late</td>
                <td>M350</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Car Loans</td>
                <td>1</td>
                <td>M15,750</td>
                <td>M11,256</td>
                <td>Open, Never Late</td>
                <td>M200</td>
                <td>1</td>
              </tr>
              <tr className="total-row">
                <td>Total</td>
                <td>5</td>
                <td>M165,414</td>
                <td>M147,855</td>
                <td>Open, Never Late</td>
                <td>M4,303</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="account-details">
          <div className="debt-chart">
            <h3>Debt By Account Type</h3>
            <div className="bars">
              <div className="bar mortgage">20</div>
              <div className="bar credit">60</div>
              <div className="bar car">20</div>
            </div>
            <div className="labels">
              <span>Mortgage</span>
              <span>Credit Installments</span>
              <span>Car Loans</span>
            </div>
          </div>

          <div className="account-age">
            <h3>Account Age</h3>
            <p>
              <strong>Length of Credit History:</strong> 10 Years, 11 Months
            </p>
            <p>
              <strong>Average Account Age:</strong> 7 years, 2 months
            </p>
            <p>
              <strong>Oldest Account:</strong> CAPITAL BANK LS (Opened
              14/12/2012)
            </p>
            <p>
              <strong>Most Recent Account:</strong> BELLS FARGO LS (Opened
              08/05/2019)
            </p>
          </div>
        </section>

        <section className="inquiries">
          <h2>Inquiries and Credit Checks</h2>
          <p>
            Numerous inquiries can affect your credit profile. Always apply for
            credit responsibly.
          </p>
          <p>
            <strong>Inquiries in the last 24 months:</strong>
          </p>
          <ul>
            <li>ABC Mortgage Services – 24/01/2022</li>
            <li>Blue Hill Lending Co. – 21/05/2023</li>
          </ul>
        </section>

        <footer className="report-footer">
          <p>134 Greenwood Street, Maseru, Lesotho</p>
          <p>Email: info@bokamoso.co.ls</p>
          <p>Phone: (+266) 2233 4455</p>
          <p>Website: www.bokamosocredit.co.ls</p>
        </footer>
      </div>
    </div>
  );
};

export default CreditReport;