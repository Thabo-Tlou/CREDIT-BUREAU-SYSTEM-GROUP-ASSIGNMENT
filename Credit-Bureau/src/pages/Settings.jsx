import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCog,
  FaTachometerAlt,
  FaFileAlt,
  FaHistory,
  FaHeadset,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "../styles/Settings.css";
import Header from "../components2/Header2";
import FooterNew from "../components2/FooterNew";

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Persist dark mode in localStorage
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    notification: "Email & SMS",
    twoFactorAuth: false,
    language: "English",
    theme: "System Default",
  });

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.fullName.trim())
      validationErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      validationErrors.email = "Valid email required";
    if (formData.password && formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSaved(true);
      console.log("Saved Data:", formData);
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    
    <>
    <Header />
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="BB">Bokamoso Credit Bureau</h1>
        <input type="text" placeholder="Search..." aria-label="Search" />
      </div>

      <div className={`settings-wrapper ${darkMode ? "dark-mode" : ""}`}>
        <div className="settings-container">
          <div className="settings-header">
            <button className="back-btn" onClick={handleBack}>
              ← Back to Dashboard
            </button>
            <h2>Account Settings</h2>
          </div>

          <div className="settings-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="New password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Notification Preferences</label>
                <select
                  name="notification"
                  value={formData.notification}
                  onChange={handleChange}
                >
                  <option>Email & SMS</option>
                  <option>Email Only</option>
                  <option>SMS Only</option>
                  <option>None</option>
                </select>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="twoFactorAuth"
                    checked={formData.twoFactorAuth}
                    onChange={handleChange}
                  />
                  Enable Two-Factor Authentication
                </label>
              </div>

              <div className="form-row">
                <div className="form-group"></div>

                <div className="form-group">
                  <label>Theme</label>
                  <select
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                  >
                    <option>System Default</option>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="save-btn">
                Save Changes
              </button>

              {saved && (
                <div className="success-msg">
                  Settings saved successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <FooterNew />
    </main>
  </>
);
};

export default Settings;
