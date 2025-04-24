import React, { useState, useEffect } from "react";
import "../styles/loans-offered.css";
import Sidebar from "../components2/Sidebar"; // Adjust if path differs

const LoansOffered = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Simulated API call
    const fetchedLoans = [
      {
        id: 1,
        title: "Student Loan Package",
        amount: "M15,000",
        duration: "12 months",
        rate: "5%",
        description:
          "Perfect for university students who need support with tuition or living expenses.",
        category: "Education",
      },
      {
        id: 2,
        title: "Small Business Booster",
        amount: "M50,000",
        duration: "24 months",
        rate: "7.5%",
        description:
          "Empower your growing business with quick and affordable funding.",
        category: "Business",
      },
      {
        id: 3,
        title: "Personal Quick Cash",
        amount: "M5,000",
        duration: "6 months",
        rate: "4%",
        description:
          "Get fast personal financing with minimum documentation and easy terms.",
        category: "Personal",
      },
    ];

    setLoans(fetchedLoans);
    setFilteredLoans(fetchedLoans);
  }, []);

  useEffect(() => {
    let updatedLoans = [...loans];

    if (filter !== "All") {
      updatedLoans = updatedLoans.filter((loan) => loan.category === filter);
    }

    if (search.trim() !== "") {
      updatedLoans = updatedLoans.filter((loan) =>
        loan.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredLoans(updatedLoans);
  }, [search, filter, loans]);

  return (
    <div className="loans-offered-page">
      <Sidebar />
      <div className="loans-main-content">
        <header className="loans-header">
          <h1>Loans Offered</h1>
          <p>
            Browse our available loan packages tailored for your financial
            needs.
          </p>
        </header>

        <div className="loans-controls">
          <input
            type="text"
            placeholder="Search loans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="loan-search"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="loan-filter"
          >
            <option value="All">All</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="loan-grid">
          {filteredLoans.length === 0 ? (
            <p className="no-loans-message">No loans found.</p>
          ) : (
            filteredLoans.map((loan) => (
              <div key={loan.id} className="loan-card">
                <h3>{loan.title}</h3>
                <p className="loan-description">{loan.description}</p>
                <div className="loan-info">
                  <span>
                    <strong>Amount:</strong> {loan.amount}
                  </span>
                  <span>
                    <strong>Duration:</strong> {loan.duration}
                  </span>
                  <span>
                    <strong>Rate:</strong> {loan.rate}
                  </span>
                </div>
                <button className="apply-now-btn">Apply Now</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LoansOffered;
