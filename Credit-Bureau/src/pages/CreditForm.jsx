import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import "../styles/creditForm.css";
import Header2 from "../components2/Header2";
import FooterNew from "../components2/FooterNew";

const ALLOWED_LENDERS = ["FNB", "Postbank", "Nedbank", "Alliance Lesotho"];

const CreditForm = ({ onSubmit }) => {
  const [loans, setLoans] = useState([
    {
      loanId: "",
      lender: "",
      amount: "",
      type: "",
      interestRate: "",
      status: "",
      startDate: "",
      dueDate: "",
    },
  ]);

  const [bills, setBills] = useState([
    {
      billType: "",
      amount: "",
      dueDate: "",
      paymentDate: "",
      status: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleLoanChange = (index, field, value) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan, i) =>
        i === index ? { ...loan, [field]: value } : loan
      )
    );
  };

  const handleBillChange = (index, field, value) => {
    setBills((prevBills) =>
      prevBills.map((bill, i) =>
        i === index ? { ...bill, [field]: value } : bill
      )
    );
  };

  const addLoan = () => {
    setLoans((prevLoans) => [
      ...prevLoans,
      {
        loanId: "",
        lender: "",
        amount: "",
        type: "",
        interestRate: "",
        status: "",
        startDate: "",
        dueDate: "",
      },
    ]);
  };

  const addBill = () => {
    setBills((prevBills) => [
      ...prevBills,
      {
        billType: "",
        amount: "",
        dueDate: "",
        paymentDate: "",
        status: "",
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userData = { loans, bills };

    try {
      const response = await fetch("https://backend-credit-7sa9.onrender.com/api/loan-records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Data submitted successfully!");
        setLoans([
          {
            loanId: "",
            lender: "",
            amount: "",
            type: "",
            interestRate: "",
            status: "",
            startDate: "",
            dueDate: "",
          },
        ]);
        setBills([
          {
            billType: "",
            amount: "",
            dueDate: "",
            paymentDate: "",
            status: "",
          },
        ]);
      } else {
        const errorData = await response.json();
        alert("Failed to submit data.");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="form-container">
        <Header2 />
        <div className="form-content">
          <h2 className="form-title">Loan and Bill Payment Form</h2>

          <Form onSubmit={handleSubmit}>
            <Row className="form-sections-wrapper">
              {/* Loan Form */}
              <Col md={6}>
                <div className="loan-section">
                  <h4 className="section-title">Loan Details</h4>
                  {loans.map((loan, index) => (
                    <div key={index} className="loan-entry">
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`loanId-${index}`}>
                            <Form.Label>Loan ID</Form.Label>
                            <Form.Control
                              type="text"
                              value={loan.loanId}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "loanId",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`lender-${index}`}>
                            <Form.Label>Lender</Form.Label>
                            <Form.Select
                              value={loan.lender}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "lender",
                                  e.target.value
                                )
                              }
                              required
                            >
                              <option value="">Select Lender</option>
                              {ALLOWED_LENDERS.map((lender) => (
                                <option key={lender} value={lender}>
                                  {lender}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Rest of your loan form fields remain the same */}
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`amount-${index}`}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="number"
                              value={loan.amount}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "amount",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`type-${index}`}>
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                              value={loan.type}
                              onChange={(e) =>
                                handleLoanChange(index, "type", e.target.value)
                              }
                            >
                              <option value="">Select</option>
                              <option value="Personal">Personal</option>
                              <option value="Business">Business</option>
                              <option value="School">School</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`interestRate-${index}`}>
                            <Form.Label>Interest Rate (%)</Form.Label>
                            <Form.Control
                              type="number"
                              value={loan.interestRate}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "interestRate",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`status-${index}`}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                              value={loan.status}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "status",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Select</option>
                              <option value="Active">Active</option>
                              <option value="Closed">Closed</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`startDate-${index}`}>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                              type="date"
                              value={loan.startDate}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "startDate",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`dueDate-${index}`}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                              type="date"
                              value={loan.dueDate}
                              onChange={(e) =>
                                handleLoanChange(
                                  index,
                                  "dueDate",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  ))}
                  <Button
                    className="btn-accent"
                    type="button"
                    onClick={addLoan}
                  >
                    Add Another Loan
                  </Button>
                </div>
              </Col>

              {/* Bill Form (remains unchanged) */}
              <Col md={6}>
                <div className="bill-section">
                  <h4 className="section-title">Bill Payments</h4>
                  {bills.map((bill, index) => (
                    <div key={index} className="bill-entry">
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`billType-${index}`}>
                            <Form.Label>Bill Type</Form.Label>
                            <Form.Select
                              value={bill.billType}
                              onChange={(e) =>
                                handleBillChange(
                                  index,
                                  "billType",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Select</option>
                              <option value="Phone">Phone</option>
                              <option value="Credit Card">Credit Card</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`amount-${index}`}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="number"
                              value={bill.amount}
                              onChange={(e) =>
                                handleBillChange(
                                  index,
                                  "amount",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`dueDate-${index}`}>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                              type="date"
                              value={bill.dueDate}
                              onChange={(e) =>
                                handleBillChange(
                                  index,
                                  "dueDate",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId={`paymentDate-${index}`}>
                            <Form.Label>Payment Date</Form.Label>
                            <Form.Control
                              type="date"
                              value={bill.paymentDate}
                              onChange={(e) =>
                                handleBillChange(
                                  index,
                                  "paymentDate",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId={`status-${index}`}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                              value={bill.status}
                              onChange={(e) =>
                                handleBillChange(
                                  index,
                                  "status",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Select</option>
                              <option value="Paid">Paid</option>
                              <option value="Pending">Pending</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  ))}
                  <Button
                    className="btn-accent"
                    type="button"
                    onClick={addBill}
                  >
                    Add Another Bill
                  </Button>
                </div>
              </Col>
            </Row>

            <div className="mt-4">
              <Button type="submit" className="btn-accent" disabled={isLoading}>
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>

            <div className="tips-card mt-5">
              <h4 className="section-title">Smart Credit Tips</h4>
              <div className="tip-box">
                <ul>
                  <li>
                    <strong>Pay on time:</strong> Timely payments improve your
                    credit rating.
                  </li>
                  <li>
                    <strong>Keep balances low:</strong> Don't max out your
                    credit cards.
                  </li>
                  <li>
                    <strong>Check reports:</strong> Review your credit report
                    regularly for errors.
                  </li>
                  <li>
                    <strong>Limit applications:</strong> Avoid too many credit
                    applications in a short time.
                  </li>
                  <li>
                    <strong>Stay informed:</strong> Understand how credit works
                    and stay updated.
                  </li>
                </ul>
              </div>
            </div>
          </Form>
        </div>
      </Container>
  
    </>
  );
};

export default CreditForm;