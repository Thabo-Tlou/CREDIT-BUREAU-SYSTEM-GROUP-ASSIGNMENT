import React from "react";
import "../styles/dashboard.css";

const Users = () => {
  return (
    <div className="card">
      <h2>User Statistics</h2>
      <ul>
        <li>Total Users: 1,200</li>
        <li>Active Users: 900</li>
        <li>Inactive Users: 300</li>
      </ul>
    </div>
  );
};

export default Users;
