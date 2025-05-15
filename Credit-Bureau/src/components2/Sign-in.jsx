import React, { useState } from "react";
import "../styles/sign-in.css";
import logo from "../components/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post("https://backend-credit-7sa9.onrender.com/api/users/signin", {
        email,
        password,
      });

      const { message, profile } = res.data;

      // Save profile to localStorage
      localStorage.setItem("profile", JSON.stringify(profile));

      alert(message); // Optional

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-content">
        {/* Left Panel */}
        <div className="signin-left">
          <h1 className="signin-heading">New Here?</h1>
          <p className="signin-subtext">
            Create your account to start viewing
            <br /> your credit scores and more
          </p>
          <button
            type="button"
            className="signin-switch-btn"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </button>
        </div>

        {/* Right Form Section */}
        <div className="signin-form-section">
          <div className="signin-brand-row">
            <p className="signin-brand">Bokamoso Credit Bureau</p>
            <img src={logo} alt="logo" className="signin-logo-inline" />
          </div>
          <form className="signin-form" onSubmit={handleSignIn}>
            <h1 className="signin-title">Sign In to Your Account</h1>

            <div className="signin-social-icons">
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <div className="signin-password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="signin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="signin-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <div className="signin-error">{error}</div>}

            <button
              type="submit"
              className="signin-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
