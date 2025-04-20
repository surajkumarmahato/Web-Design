import React from 'react';
import { Container, Navbar, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustReg() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src="logo.png" alt="URMICHAND GROUP" width="100" height="60" className="d-inline-block align-top me-2" />
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
              <Button variant="outline-warning" href="/logout" className="ms-2">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <h3 className="mb-4 text-center text-primary">Customer Registration</h3>
        <Form>
          <h5 className="mb-3">Applicant Details</h5>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={6}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-4">
            <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <h5 className="mb-3 mt-5">Nominee Details</h5>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Nominee Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={6}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-4">
            <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <div className="text-center">
            <Button variant="success" type="submit">Submit</Button>
            <p className="mt-3 text-muted">Upon submission, a Customer ID like <strong>CUS-1234</strong> and password will be generated.</p>
          </div>
        </Form>
      </Container>
    </div>
  );
}
