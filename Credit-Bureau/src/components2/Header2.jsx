//header for credit-form
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaHistory,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

import "../styles/header2.css";

const Header = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [userName, setUserName] = useState("User");
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
        const updatedProfile = {
          ...(JSON.parse(localStorage.getItem("profile")) || {}),
          avatar: newAvatar,
        };
        localStorage.setItem("profile", JSON.stringify(updatedProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/credit-report", label: "Credit Reports", icon: <FaFileAlt /> },
    { to: "/credit-form", label: "Loan", icon: <FaMoneyCheckAlt /> },
    { to: "/payment-history", label: "Payment History", icon: <FaHistory /> },
    { to: "/credit-score-analysis", label: "Score Analysis", icon: <FaChartLine /> },
    { to: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <header className="header">
      <div className="left-section">
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar" />
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            className="hidden-file-input"
            onChange={handleAvatarChange}
          />
          <label htmlFor="file-upload" className="upload-btn">+</label>
        </div>
        <p className="username">{userName}</p>
      </div>

      <nav className="nav-menu">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to} className={isActive(link.to) ? "active" : ""}>
              <Link to={link.to} className="nav-link">
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
