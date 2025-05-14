import "../styles/Form-Footer.css"; // Create and customize this CSS

const Footer = () => {
  return (
    <footer className="admin-footer">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} Bokamoso Credit Bureau</span>
        <span className="footer-separator">|</span>
        <span>Admin Dashboard</span>
      </div>
    </footer>
  );
};

export default Footer;
