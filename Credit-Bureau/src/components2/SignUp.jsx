import React, { useState } from "react";
import "../styles/sign-up.css";
import logo from "../components/images/logo.png";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // States to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        email,
        password,
      });

      // Show success message and inform the user about email verification
      setSuccessMessage(
        "Registration successful! Please check your email to verify your account."
      );

      // Optionally, redirect after a short delay or just leave the message
      setTimeout(() => {
        navigate("/verification-pending"); // Redirect to a page informing the user about verification
      }, 3000);

      // Reset form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="Sign_up_container">
          <h1 className="sing_up_text">Welcome, Back!</h1>
          <p className="welcome">
            Sign in to view your credit
            <br />
            score and more
          </p>
          <button type="button" className="sign_in_button">
            SIGN IN
          </button>
        </div>

        <div className="sign_up_form_container">
          <img src={logo} alt="logo" className="logo2" />
          <p className="logo_title">Bokamoso Credit Bureau</p>

          <form className="sign_up_form" onSubmit={handleSignup}>
            <h1 className="create-sign">Create Your Account</h1>

            <div
              className="Icons"
              style={{ fontSize: "1.5rem", display: "flex", gap: "1rem" }}
            >
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading} // Disable during loading
            />
            <br />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading} // Disable during loading
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <br />

            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="confirm_password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading} // Disable during loading
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <br />

            <input
              type="checkbox"
              id="terms"
              name="terms_conditions"
              value="terms"
              className="terms_box"
              required
              disabled={isLoading} // Disable during loading
            />
            <label htmlFor="terms" className="terms">
              Agree to our terms and conditions
            </label>

            <button
              type="submit"
              className="sign_up_button"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
            <br />

            {error && <div className="error-message">{error}</div>}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
