import React from "react";
import "../styles/partners.css";
import Header from "../components2/Header";
import Footer from "../components2/Footer";

const partnersData = [
  {
    name: "FNB",
    logo: "./images/fnb-logo.png",
    description:
      "FNB provides us with verified credit history, loan repayment trends, and transactional data that helps build accurate financial profiles for individuals and businesses. Their advanced digital systems make it easier for us to track financial reliability and detect potential risks early.",
  },
  {
    name: "Alliance Lesotho",
    logo: "/images/alliance-lesotho-logo.png",
    description:
      "Through Alliance Lesotho, we receive crucial insights on insurance policy repayments and financial behavior related to long-term financial products. This helps us assess clients' creditworthiness with a broader view of their financial obligations and consistency.",
  },
  {
    name: "Netbank",
    logo: "/images/netbank-logo.png",
    description:
      "NetBank shares detailed reports on account activity, loan performance, and financial product usage. Their innovative banking model allows us to access real-time financial data, ensuring our credit assessments remain up-to-date and reliable.",
  },
  {
    name: "Post Bank",
    logo: "/images/post-bank-logo.png",
    description:
      "Post Bank helps us reach underbanked populations by providing access to rural financial data, savings behavior, and small-scale credit activities. This strengthens our mission to promote inclusive financial profiling across Lesotho.",
  },
];

const Partners = () => {
  return (
    <div>
      <Header />
      <div className="partners-wrapper">
        <header className="partners-header">
          <h1>Our Partners</h1>
          <p>
            We collaborate with leading financial institutions to offer you the
            best services.
          </p>
        </header>

        <div className="partners-list">
          {partnersData.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
