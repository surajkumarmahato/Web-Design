import React from 'react';
import { Container, Card, Form, Row, Col, Button, Table } from 'react-bootstrap';
import NavAdmin from './NavAdmin';

export default function Payout() {
  return (
    <div>
      <NavAdmin />
      <div
        className="py-5 min-vh-100"
        style={{
          background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
        }}
      >
        <Container>

          {/* Close Session */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Close Session</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Select Date (From)</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Select Date (To)</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3">Close Session</Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Commission Table */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">Pay Commission</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Closing No</th>
                    <th>Date</th>
                    <th>Sponsor ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>TDS</th>
                    <th>Admin Charges</th>
                    <th>Previous Dues</th>
                    <th>Net Payable</th>
                    <th>Paid Amount</th>
                    <th>Balance Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Commission Data */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Rewards Table */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">Rewards</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Closing No</th>
                    <th>Date</th>
                    <th>Sponsor ID</th>
                    <th>Name</th>
                    <th>Rewards Achieved</th>
                    <th>Rewards Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Rewards Data */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Payment Table */}
          <Card className="shadow-sm">
            <Card.Header className="bg-dark text-white fw-bold">Payment</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Date</th>
                    <th>Sponsor ID No</th>
                    <th>Name</th>
                    <th>Bank</th>
                    <th>MOP</th>
                    <th>Transaction No</th>
                    <th>Amount</th>
                    <th>Purpose of Payment</th>
                    <th>Upload Bills / Other</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Payment Data */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

        </Container>
      </div>
    </div>
  );
}
