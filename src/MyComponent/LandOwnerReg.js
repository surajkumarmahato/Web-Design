import React from 'react';
import { Container, Form, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default function LandOwnerReg() {
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
        <h3 className="mb-4 text-center">Land Owner Registration</h3>
        <Form>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Location</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={6}><Form.Group><Form.Label>Khata No</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Area in Decimal</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Total Amount</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Mouza</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}><Form.Group><Form.Label>Khesra No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={6}><Form.Group><Form.Label>Rate per Decimal</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <h4 className="mb-3 mt-5">Landowner Details</h4>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Whatsapp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Photo</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>

          <h4 className="mb-3 mt-5">Landowner Bank Details</h4>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Name Of Account Holder</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>IFSC Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Branch</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Account No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Bank Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Account Type</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <h4 className="mb-3 mt-5">Broker Details</h4>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Whatsapp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Photo</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>

          <h4 className="mb-3 mt-5">Broker Bank Details</h4>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Name Of Account Holder</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>IFSC Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Branch</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Account No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Bank Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Account Type</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <div className="text-center mt-4">
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
