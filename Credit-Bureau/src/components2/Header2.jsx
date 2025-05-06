import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

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
    { to: "/credit-form", label: "Loan" },
    { to: "/payment-history", label: "Payment History" },
    { to: "/credit-score-analysis", label: "Credit Score Analysis" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="brand">Credit Bureau</div>
      </div>

      <nav className="header-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.to} className={isActive(link.to) ? "active" : ""}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-right">
        <div className="user-info">
          <img src={avatar} alt="Avatar" className="avatar" />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            id="file-upload"
            className="hidden-file-input"
          />
          <label htmlFor="file-upload" className="upload-btn">+</label>
          <span className="username">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
