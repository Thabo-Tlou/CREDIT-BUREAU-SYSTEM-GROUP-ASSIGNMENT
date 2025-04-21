import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../styles/creditForm.css";
import Footer2 from "../components2/Footer";
import Sidebar from "../components2/Sidebar";

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

  const handleLoanChange = (index, field, value) => {
    const updatedLoans = [...loans];
    updatedLoans[index][field] = value;
    setLoans(updatedLoans);
  };

  const handleBillChange = (index, field, value) => {
    const updatedBills = [...bills];
    updatedBills[index][field] = value;
    setBills(updatedBills);
  };

  const addLoan = () => {
    setLoans([
      ...loans,
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
    setBills([
      ...bills,
      {
        billType: "",
        amount: "",
        dueDate: "",
        paymentDate: "",
        status: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { loans, bills };
    console.log("Submitted:", userData);
    if (onSubmit) onSubmit(userData);
  };

  return (
    <>
      <Container className="form-container">
        <Sidebar />

        <div className="form-content">
          <h2 className="form-title">Loan and Bill Payment Form</h2>

          <Form onSubmit={handleSubmit}>
            <div className="loan-section">
              <h4 className="section-title">Loan Details</h4>
              {loans.map((loan, index) => (
                <div key={index}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId={`loanId-${index}`}>
                        <Form.Label>Loan ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Loan ID"
                          value={loan.loanId}
                          onChange={(e) =>
                            handleLoanChange(index, "loanId", e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId={`lender-${index}`}>
                        <Form.Label>Lender</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Lender Name"
                          value={loan.lender}
                          onChange={(e) =>
                            handleLoanChange(index, "lender", e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId={`amount-${index}`}>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="e.g. 5000"
                          value={loan.amount}
                          onChange={(e) =>
                            handleLoanChange(index, "amount", e.target.value)
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
                          <option>Personal</option>
                          <option>Business</option>
                          <option>School</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId={`interestRate-${index}`}>
                        <Form.Label>Interest Rate</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="e.g. 10%"
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
                            handleLoanChange(index, "status", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option>Active</option>
                          <option>Closed</option>
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
                            handleLoanChange(index, "startDate", e.target.value)
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
                            handleLoanChange(index, "dueDate", e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr />
                </div>
              ))}

              <Button className="btn-accent" type="button" onClick={addLoan}>
                Add Another Loan
              </Button>
            </div>

            {/* Bill Section */}
            <div className="bill-section">
              <h4 className="section-title">Bill Payments</h4>
              {bills.map((bill, index) => (
                <div key={index}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId={`billType-${index}`}>
                        <Form.Label>Bill Type</Form.Label>
                        <Form.Select
                          value={bill.billType}
                          onChange={(e) =>
                            handleBillChange(index, "billType", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option>Phone</option>
                          <option>Credit Card</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId={`billAmount-${index}`}>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="e.g. 300"
                          value={bill.amount}
                          onChange={(e) =>
                            handleBillChange(index, "amount", e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId={`billDueDate-${index}`}>
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={bill.dueDate}
                          onChange={(e) =>
                            handleBillChange(index, "dueDate", e.target.value)
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
                      <Form.Group controlId={`billStatus-${index}`}>
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                          value={bill.status}
                          onChange={(e) =>
                            handleBillChange(index, "status", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option>Paid</option>
                          <option>Pending</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr />
                </div>
              ))}

              <Button
                className="btn-accent mt-2"
                type="button"
                onClick={addBill}
              >
                Add Another Bill
              </Button>
            </div>

            <Button type="submit" className="btn-primary mt-4">
              Submit Form
            </Button>
          </Form>

          <div className="tips-card mt-5">
            <h4 className="section-title">Smart Credit Tips</h4>
            <div className="tip-box">
              <ul>
                <li>
                  <strong>Pay on time:</strong> Timely payments improve your
                  credit rating.
                </li>
                <li>
                  <strong>Keep balances low:</strong> Don’t max out your credit
                  cards.
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
        </div>
      </Container>
    </>
  );
};

export default CreditForm;
