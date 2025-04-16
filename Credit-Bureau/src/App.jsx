import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignUp from "./components2/SignUp";
import Dashboard from "./pages/Dashboard";
import Reports from "./components2/Reports";
import Users from "./components2/Users";
import Settings from "./components2/Settings";
import Services from "./pages/Services";
import Header from "./components2/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ss" element={<Sign_up />} />{" "}
        {/* Adjusted to be the root */}
        <Route path="/homepage" element={<HomePage />} />{" "}
        <Route path="/" element={<Dashboard />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />{" "}
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/SS" element={<Dashboard />} />{" "}
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
