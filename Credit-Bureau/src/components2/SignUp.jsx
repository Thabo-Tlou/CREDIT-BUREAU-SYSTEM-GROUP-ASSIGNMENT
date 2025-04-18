import React, { useState } from "react";
import "../styles/sign-up.css";
import logo from "../components/images/logo.png";
import { Link } from "react-router-dom";
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

      setSuccessMessage(
        "Registration successful! Please check your email to verify your account."
      );

      setTimeout(() => {
        navigate("/verification-pending");
      }, 3000);

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
    <div className="signupPageUnique">
      <div className="signupContainerUnique">
        {/* LEFT SIDE */}
        <div className="signupLeftPanelUnique">
          <h1 className="signupTitleUnique">Hello Again!</h1>
          <p className="signupSubtitleUnique">
            Sign in to view your credit
            <br />
            score and more
          </p>
          <Link to="/sign-in">
            <button type="button" className="signupSwitchBtnUnique">
              SIGN IN
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="signupFormWrapperUnique">
          <p className="signupLogoTitleUnique">Bokamoso Credit Bureau</p>
          <img src={logo} alt="logo" className="signupLogoUnique" />

          <form className="signupFormUnique" onSubmit={handleSignup}>
            <h1 className="signupHeaderUnique">Create Your Account</h1>

            <div className="signupIconsUnique">
              <FaWhatsapp />
              <FaFacebook />
              <FaInstagram />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="signupInputUnique"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />

            <div className="signupPasswordGroupUnique">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="signupInputUnique"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <span
                className="signupEyeIconUnique"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="signupPasswordGroupUnique">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="signupInputUnique"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
              <span
                className="signupEyeIconUnique"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="signupTermsRowUnique">
              <input
                type="checkbox"
                id="terms"
                className="signupCheckboxUnique"
                required
                disabled={isLoading}
              />
              <label htmlFor="terms" className="signupTermsLabelUnique">
                Agree to our terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className="signupSubmitBtnUnique"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>

            {error && <div className="signupErrorUnique">{error}</div>}
            {successMessage && (
              <div className="signupSuccessUnique">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
