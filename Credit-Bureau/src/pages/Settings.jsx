import React from 'react';
import './Settings.css'; // assuming you'll add a CSS file for custom styles

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <div className="settings-card">
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Change Password</label>
            <input type="password" placeholder="New password" />
          </div>
          <div className="form-group">
            <label>Notification Preferences</label>
            <select>
              <option>Email & SMS</option>
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>None</option>
            </select>
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
