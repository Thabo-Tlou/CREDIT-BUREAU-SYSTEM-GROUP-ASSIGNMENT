import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SignUp from "./components2/SignUp";
import Dashboard from "./pages/Dashboard";
import Reports from "./components2/Reports";
import Users from "./components2/Users";
import Settings from "./components2/Settings";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
import Header from "./components2/Header";
import { Contact } from "lucide-react";
import CreditReports from "./pages/CreditReports";
import CreditForm from "./pages/CreditForm";
import CreditDashboard from "./pages/CreditDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />{" "}
        <Route path="/" element={<Dashboard />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />{" "}
        <Route path="/SS" element={<HomePage />} />{" "}
        <Route path="/ss" element={<Dashboard />} />{" "}
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/credit-reports" element={<CreditReports />} />
        <Route path="/credit-form" element={<CreditForm />} />
        <Route path="/credit-dashboard" element={<CreditDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
