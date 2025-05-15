import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header2.css";

const Header = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [userName, setUserName] = useState("User");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    if (profileData) {
      setAvatar(profileData.avatar || "/images/avatar.jpg");
      setUserName(profileData.name || "User");
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);
        const existingProfile =
          JSON.parse(localStorage.getItem("profile")) || {};
        const updatedProfile = { ...existingProfile, avatar: newAvatar };
        localStorage.setItem("profile", JSON.stringify(updatedProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/credit-report", label: "Credit Reports" },
    { to: "/loans-offered", label: "Loan" },
    { to: "/payment-history", label: "Payment History" },
    { to: "/credit-score-analysis", label: "Credit Score Analysis" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="brand">Credit Bureau</div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to} className={isActive(link.to) ? "active" : ""}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-right">
        <span className="username">{userName}</span>
        <div className="user-info">
          <img src={avatar} alt="Avatar" className="avatar" />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            id="file-upload"
            className="hidden-file-input"
          />
          <label htmlFor="file-upload" className="upload-btn">
            +
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
