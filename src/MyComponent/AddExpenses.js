import React from 'react';
import { Container, Navbar, Nav, Button, Form, Row, Col, Card } from 'react-bootstrap';

export default function AddExpenses() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="logo.png"
              alt="URMICHAND GROUP"
              width="100"
              height="60"
              className="d-inline-block align-top me-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/payment">Payment</Nav.Link>
              <Nav.Link href="/expenses">Expenses</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/messages">Messages</Nav.Link>
              <Button variant="outline-warning" href="/logout" className="ms-2">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Card className="shadow-lg border-0">
          <Card.Body>
            <h3 className="text-center mb-4">Add Expense</h3>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="expenseHead">
                    <Form.Label>Expense Head</Form.Label>
                    <Form.Control type="text" placeholder="Enter Expense Head" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="expenseSubHead">
                    <Form.Label>Expense Sub-Head</Form.Label>
                    <Form.Control type="text" placeholder="Enter Expense Sub-Head" />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
} 
