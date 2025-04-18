import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../styles/creditForm.css";
import "../components2/Footer2.jsx";

const CreditForm = () => {
  return (
    <Container className="form-container">
      {/* Form Title */}
      <h2 className="form-title">Loan and Bill Payment Form</h2>

      {/* Loan Section */}
      <div className="loan-section">
        <h4 className="section-title">Loan Details</h4>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="loanId">
                <Form.Label>Loan ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Loan ID" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lender">
                <Form.Label>Lender</Form.Label>
                <Form.Control type="text" placeholder="Lender Name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="e.g. 5000" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option>Personal</option>
                  <option>Business</option>
                  <option>School</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="interestRate">
                <Form.Label>Interest Rate</Form.Label>
                <Form.Control type="number" placeholder="e.g. 10%" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option>Active</option>
                  <option>Closed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="dueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>

          <Button className="btn-accent" type="button">Add Another Loan</Button>
        </Form>
      </div>

      {/* Bill Payment Section */}
      <div className="bill-section">
        <h4 className="section-title">Bill Payments</h4>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="billType">
                <Form.Label>Bill Type</Form.Label>
                <Form.Select>
                  <option>Phone</option>
                  <option>Credit Card</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="billAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="e.g. 300" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="billDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="paymentDate">
                <Form.Label>Payment Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="billStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option>Paid</option>
                  <option>Pending</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="btn-primary mt-3">Submit Form</Button>
        </Form>
      </div>

      {/* Tips Section */}
      <div className="tips-card">
        <h4 className="section-title">Smart Credit Tips</h4>
        <div className="tip-box">
          <ul>
            <li><strong>Pay on time:</strong> Timely payments improve your credit rating.</li>
            <li><strong>Keep balances low:</strong> Don’t max out your credit cards.</li>
            <li><strong>Check reports:</strong> Review your credit report regularly for errors.</li>
            <li><strong>Limit applications:</strong> Avoid too many credit applications in a short time.</li>
            <li><strong>Stay informed:</strong> Understand how credit works and stay updated.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CreditForm;
