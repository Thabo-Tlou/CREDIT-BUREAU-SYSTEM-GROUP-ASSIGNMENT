import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/partner-sidebar.css"; // Custom CSS for sidebar

const PartnerSidebar = () => {
  const [avatar, setAvatar] = useState("/images/avatar.jpg"); // Default avatar
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

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
        const updatedProfile = {
          ...existingProfile,
          avatar: newAvatar,
        };

        localStorage.setItem("profile", JSON.stringify(updatedProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="partner-sidebar">
      <div className="partner-logo">
        <div className="partner-avatar-container">
          <img src={avatar} alt="Partner Avatar" className="partner-avatar" />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            id="partner-file-upload"
            className="hidden-partner-file-input"
          />
          <label htmlFor="partner-file-upload" className="upload-partner-btn">
            +
          </label>
        </div>
        <p className="partner-name">{userName}</p>
      </div>

      {/* NAVIGATION SECTION */}
      <div className="partner-nav-section">
        <nav aria-label="Partner Sidebar Navigation">
          <ul className="partner-sidebar-nav">
            <li>
              <Link to="/partner-dashboard" className="partner-nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/loans-offered" className="partner-nav-link">
                Loans Offered
              </Link>
            </li>
            <li>
              <Link to="/partner-loan-requests" className="partner-nav-link">
                Loan Requests
              </Link>
            </li>
            <li>
              <Link to="/partner-payments" className="partner-nav-link">
                Payments Received
              </Link>
            </li>
            <li>
              <Link
                to="/partner-client-management"
                className="partner-nav-link"
              >
                Client Management
              </Link>
            </li>
            <li>
              <Link to="/partner-settings" className="partner-nav-link">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default PartnerSidebar;
