import React from "react";
import "../styles/FooterNew.css";

const FooterNew = () => {
  return (
    <footer className="custom-footer">
      <p>&copy; {new Date().getFullYear()} Bokamoso Credit Bureau. All rights reserved.</p>
    </footer>
  );
};

export default FooterNew;
