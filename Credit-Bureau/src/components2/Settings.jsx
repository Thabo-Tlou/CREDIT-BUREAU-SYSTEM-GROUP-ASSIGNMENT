import React from "react";
import "../styles/dashboard.css";

const Settings = () => {
  return (
    <div className="card">
      <h2>Settings</h2>
      <form>
        <div className="form-group">
          <label>Change Password:</label>
          <input type="password" placeholder="New Password" />
        </div>
        <div className="form-group">
          <label>Update Email:</label>
          <input type="email" placeholder="New Email" />
        </div>
        <button className="generate-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
