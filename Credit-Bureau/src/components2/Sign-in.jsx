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

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-wrapper">
      <div className="signin-content">
        {/* Left Panel - Now on the right */}
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
          <form className="signin-form">
            <h1 className="signin-title">Sign In to Your Account</h1>

            <div className="signin-social-icons">
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
            </div>

            <input
              type="text"
              placeholder="Email"
              required
              className="signin-input"
            />
            <br />

            <div className="signin-password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="signin-input"
              />
              <span
                className="signin-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="signin-remember-group">
              <input
                type="checkbox"
                id="remember"
                name="remember_me"
                className="signin-checkbox"
              />
              <label htmlFor="remember" className="signin-label">
                Remember Me
              </label>
            </div>

            <button type="submit" className="signin-submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
