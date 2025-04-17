import React, { useState } from "react";
import "../styles/faq.css";
import Footer from "../components2/Footer";
import Header from "../components2/Header";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Bokamoso Credit Bureau?",
      answer:
        "Bokamoso Credit Bureau is a platform designed to provide financial advice, credit reports, and credit-related services. We help users manage their credit profiles, assess their creditworthiness, and offer financial solutions to improve their financial health.",
    },
    {
      question: "How do I sign up?",
      answer:
        "To sign up, simply click on the 'Sign Up' button at the top-right corner of the homepage. You'll be prompted to provide basic information like your name, email, and password. Once registered, you'll be able to access your dashboard and use all available features.",
    },
    {
      question: "How do I log in?",
      answer:
        "To log in, click on the 'Log In' button at the top-right corner of the homepage. Enter your registered email and password, and you'll be redirected to your dashboard.",
    },
    {
      question: "How can I view my credit report?",
      answer:
        "Once logged in, navigate to the 'Credit Reports' section in your dashboard. Here, you'll find a detailed breakdown of your credit history, score, and any other relevant financial information.",
    },
    {
      question: "What is a credit score, and how is it calculated?",
      answer:
        "Your credit score is a number that represents your creditworthiness. It is calculated based on factors such as your credit history, the number of open credit accounts, your payment history, and more. A higher score generally indicates a lower risk to lenders.",
    },
    {
      question: "How do I update my personal information?",
      answer:
        "To update your personal details, go to the 'Account Settings' section in your dashboard. From there, you can update your name, email, password, and other profile information.",
    },
    {
      question: "Is my data safe with Bokamoso Credit Bureau?",
      answer:
        "Yes! We take the privacy and security of your data very seriously. Your personal information and financial data are stored securely using industry-standard encryption. We do not share your data with third parties without your consent.",
    },
    {
      question:
        "How does Bokamoso Credit Bureau protect my personal information?",
      answer:
        "We implement multiple security measures to protect your data, including encryption, firewalls, and secure server connections. We also comply with all relevant privacy regulations to ensure your personal information is kept safe.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@bokamosocreditbureau.com. We strive to respond to all inquiries within 24 hours.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <Header />
      <section className="faq-page">
        <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <i className="faq-icon">?</i>
                <h3>{faq.question}</h3>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
