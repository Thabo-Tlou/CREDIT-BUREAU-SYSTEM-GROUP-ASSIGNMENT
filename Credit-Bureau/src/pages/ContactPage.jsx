import React, { useState } from "react";
import "../styles/contact.css";
import Footer from "../components2/Footer";
import Header from "../components2/Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    // Simulate a successful submission (e.g., an API request)
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div>
      <Header />
      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We're here to help! Get in touch with our team for any inquiries.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to us using the form below or through the following channels:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@bokamosocreditbureau.com
              </li>
              <li>
                <strong>Phone:</strong> +266 2202 6780
              </li>
              <li>
                <strong>Address:</strong> Maseru Downtown Bokamoso Bureau
                Building
              </li>
            </ul>
          </div>

          <div className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank you for contacting us!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here"
                  />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
