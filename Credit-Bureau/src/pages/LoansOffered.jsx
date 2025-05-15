import React, { useState, useEffect } from "react";
import "../styles/loans-offered.css";
import Sidebar from "../components2/Sidebar";
import Header from "../components2/Header2";

const ApplyForm = ({ loan, onClose }) => {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const application = {
      loanTitle: loan.title,
      name,
      idNumber,
      contact,
    };

    try {
      const res = await fetch("https://backend-credit-7sa9.onrender.com/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application),
      });

      if (res.ok) {
        setMessage("✅ Application submitted successfully!");
        setName("");
        setIdNumber("");
        setContact("");
      } else {
        setMessage("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error.");
    }
  };

  return (
    <div className="apply-modal">
      <div className="apply-modal-content">
        <h2>Apply for {loan.title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <button type="submit">Submit Application</button>
        </form>
        {message && <p className="application-message">{message}</p>}
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

const LoansOffered = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
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
      <Header />
      <div className="loans-main-content">
        <header className="loans-header">
          <h1>Loans Offered</h1>
          <p>
            Browse our available loan packages tailored for your financial needs.
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
                <button
                  className="apply-now-btn"
                  onClick={() => setSelectedLoan(loan)}
                >
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedLoan && (
        <ApplyForm loan={selectedLoan} onClose={() => setSelectedLoan(null)} />
      )}
    </div>
  );
};

export default LoansOffered;
