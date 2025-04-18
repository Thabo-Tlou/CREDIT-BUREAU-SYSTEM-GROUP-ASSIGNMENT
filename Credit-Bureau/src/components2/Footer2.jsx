
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer2 = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={6} className="footer-brand">
            <h5>Bokamoso Credit Bureau</h5>
            <p>Securely manage your credit records and payments in one place.</p>
          </Col>
          <Col md={3} className="footer-links">
            <h6>Support</h6>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-contact">
            <h6>Contact</h6>
            <p>Email: support@creditbureau.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>

        <hr />

        <Row className="footer-bottom">
          <Col className="text-center">
            <p>
              <em>"Your credit health matters. Stay informed. Stay empowered."</em>
            </p>
            <small>&copy; {new Date().getFullYear()} Bokamoso Credit Bureau. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
