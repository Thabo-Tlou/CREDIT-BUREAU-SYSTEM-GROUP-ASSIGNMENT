// src/pages/VerificationSuccess.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import "../styles/verify.css"; // Import the CSS file

const VerificationSuccess = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams(); // To get the token from the URL query string

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      // Call the backend to verify the email
      axios
        .get(`https://backend-credit-7sa9.onrender.com/api/users/verify-email?token=${token}`)
        .then((res) => {
          setMessage(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
          setMessage(err.response?.data?.message || "Verification failed.");
          setLoading(false);
        });
    } else {
      setMessage("No verification token provided.");
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <div className="verification-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
};

export default VerificationSuccess;
