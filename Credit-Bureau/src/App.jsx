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
import PaymentHistory from "./pages/PaymentHistory";
import CreditDashboard from "./pages/CreditDashboard";
import CreditScoreAnalysis from "./pages/CreditScoreAnalysis";
import CreditForm from "./pages/CreditForm";
import "./App.css";
import Settings from "./pages/Settings";
import SignIn from "./components2/Sign-in";
import CreditReport from "./pages/CreditReport";
import LenderHome from "./pages/LenderHome";
import HeaderLender from "./components2/HeaderLender";
import SignInLender from "./components2/Sign-in-Lender";
import SignUpPartner from "./components2/SignUp-Partner";
import PartnerDashboard from "./pages/PartnerDashboard";
import LoansOffered from "./pages/LoansOffered";
import Loans from "./pages/Loans";

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
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/credit-form" element={<CreditForm />} />
        <Route path="/credit-dashboard" element={<CreditDashboard />} />
        <Route path="/credit-report" element={<CreditReport />} />
        <Route path="/lender-home" element={<LenderHome />} />
        <Route path="/sign-in-lender-form" element={<SignInLender />} />
        <Route path="/sign-up-partner" element={<SignUpPartner />} />
        <Route path="/partner-dashboard" element={<PartnerDashboard />} />
        <Route path="/loans-offered" element={<LoansOffered />} />
        <Route path="/loans" element={<Loans />} />

        <Route
          path="/credit-score-analysis"
          element={<CreditScoreAnalysis />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/credit-score-analysis"
          element={<CreditScoreAnalysis />}
        />
      </Routes>
    </Router>
  );
}

export default App;
