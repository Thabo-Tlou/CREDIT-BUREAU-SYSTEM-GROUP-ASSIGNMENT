import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignUp from "./components2/SignUp";
import Dashboard from "./pages/Dashboard";
import Reports from "./components2/Reports";
import Users from "./components2/Users";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
import CreditReports from "./pages/CreditReports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />{" "}
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/credit-reports" element={<CreditReports />} />
      </Routes>
    </Router>
  );
}

export default App;
