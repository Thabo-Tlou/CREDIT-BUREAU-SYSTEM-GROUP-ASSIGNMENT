import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CreditDashboard = ({ loanData, onEdit }) => {
  const { loans, billPayments } = loanData;

  const chartData = {
    labels: loans.map((loan) => loan.loanId),
    datasets: [
      {
        label: 'Loan Amounts',
        data: loans.map((loan) => loan.amount),
        backgroundColor: '#fbba3f', // Gold color
      },
    ],
  };

  return (
    <Container>
      <h2>Loan Dashboard</h2>
      <Card className="mt-4">
        <Card.Body>
          <Line data={chartData} />
        </Card.Body>
      </Card>

      <Row className="mt-4">
        <Col>
          <h4>Loans</h4>
          {loans.map((loan, index) => (
            <Card key={index} className="mt-3">
              <Card.Body>
                <h5>Loan ID: {loan.loanId}</h5>
                <p>Lender: {loan.lender}</p>
                <p>Amount: ${loan.amount}</p>
                <p>Status: {loan.status}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col>
          <h4>Bill Payments</h4>
          {billPayments.map((bill, index) => (
            <Card key={index} className="mt-3">
              <Card.Body>
                <h5>Bill Type: {bill.billType}</h5>
                <p>Amount: ${bill.amount}</p>
                <p>Due Date: {bill.dueDate}</p>
                <p>Payment Date: {bill.paymentDate}</p>
                <p>Status: {bill.status}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Button onClick={onEdit} variant="secondary" className="mt-4">Edit Data</Button>
    </Container>
  );
};

export default CreditDashboard;
