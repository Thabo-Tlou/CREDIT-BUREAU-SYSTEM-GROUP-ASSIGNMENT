import React, { useState, useEffect } from "react";
import "../styles/loans-offered.css";
import Sidebar from "../components2/Sidebar";
import Header from "../components2/Header2";

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Fetch data from backend
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await fetch("https://backend-credit-7sa9.onrender.com/api/loans-apply");
        const data = await res.json();
        setLoans(data);
        setFilteredLoans(data);
      } catch (error) {
        console.error("Failed to fetch loans:", error);
      }
    };

    fetchLoans();
  }, []);

  // Handle filtering
  useEffect(() => {
    let filtered = loans;

    if (filter !== "All") {
      filtered = filtered.filter((loan) => loan.category === filter);
    }

    if (search.trim()) {
      filtered = filtered.filter((loan) =>
        loan.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredLoans(filtered);
  }, [search, filter, loans]);

  return (
    <div className="loans-offered-page">
      <Header />
      <div className="loans-main-content">
        <header className="loans-header">
          <h1>Loan Packages</h1>
          <p>Select the best plan that fits your needs.</p>
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
              <div key={loan._id} className="loan-card">
                <h3>{loan.title}</h3>
                <p className="loan-description">{loan.description}</p>
                <div className="loan-info">
                  <span><strong>Amount:</strong> {loan.amount}</span>
                  <span><strong>Duration:</strong> {loan.duration}</span>
                  <span><strong>Rate:</strong> {loan.rate}</span>
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

export default Loans;
