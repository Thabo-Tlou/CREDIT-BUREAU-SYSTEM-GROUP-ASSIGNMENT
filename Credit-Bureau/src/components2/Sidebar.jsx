import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Sidebar = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg"); // Default avatar
  const [userName, setUserName] = useState("User");
  const [showCreditReport, setShowCreditReport] = useState(false);
  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    if (profileData) {
      setAvatar(profileData.avatar || "/images/avatar.jpg"); // Fallback to default avatar if none exists
      setUserName(profileData.name || "User");
    }
  }, []);

  // Handle file change for avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newAvatar = reader.result;
        setAvatar(newAvatar);

        // Merge with existing profile to preserve name
        const existingProfile =
          JSON.parse(localStorage.getItem("profile")) || {};
        const updatedProfile = {
          ...existingProfile,
          avatar: newAvatar,
        };

        localStorage.setItem("profile", JSON.stringify(updatedProfile));

        // Optionally, you could update the backend here to store the avatar in the database
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="avatar-container">
          <img src={avatar} alt="User Avatar" className="avatar" />
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
        <p className="username">{userName}</p>
      </div>

      <nav aria-label="Sidebar Navigation">
        <ul className="sidebar-nav">
          <li>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/credit-report"
              style={{ textDecoration: "none", color: "white" }}
            >
              Credit Reports
            </Link>
          </li>
          <li>
            <Link
              to="/credit-form"
              style={{ textDecoration: "none", color: "white" }}
            >
              Loan
            </Link>
          </li>
          <li>
            <Link
              to="/payment-history"
              style={{ textDecoration: "none", color: "white" }}
            >
              Payment History
            </Link>
          </li>
          <li>
            <Link
              to="/credit-score-analysis"
              style={{ textDecoration: "none", color: "white" }}
            >
              Credit Score Analysis
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "white" }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
x;
