import React from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';

export default function FreeLanReg() {
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

      <Container className="mt-4">
        <h3 className="text-center mb-4">Freelancer Registration</h3>
        <Form>
          <h5 className="mb-3">Freelancer Details</h5>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Title (Mr/Mrs/Dr)" /></Col>
            <Col md={3}><Form.Control placeholder="Applicant Name" /></Col>
            <Col md={3}><Form.Control placeholder="Father/Husband Name" /></Col>
            <Col md={3}><Form.Control placeholder="Date of Birth" type="date" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Gender" /></Col>
            <Col md={3}><Form.Control placeholder="Nationality" /></Col>
            <Col md={3}><Form.Control placeholder="Aadhar No" /></Col>
            <Col md={3}><Form.Control placeholder="Marital Status" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="PAN No" /></Col>
            <Col md={3}><Form.Control placeholder="Occupation" /></Col>
            <Col md={3}><Form.Control placeholder="WhatsApp No" /></Col>
            <Col md={3}><Form.Control type="file" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Set Commission (%)" /></Col>
            <Col md={3}><Form.Control placeholder="Email ID" /></Col>
            <Col md={3}><Form.Control placeholder="Religion" /></Col>
            <Col md={3}><Form.Control placeholder="State" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Control placeholder="Address" /></Col>
            <Col md={3}><Form.Control placeholder="District" /></Col>
            <Col md={3}><Form.Control placeholder="Pin Code" /></Col>
          </Row>

          <h5 className="mb-3">Nominee Details</h5>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Title (Mr/Mrs/Dr)" /></Col>
            <Col md={3}><Form.Control placeholder="Applicant Name" /></Col>
            <Col md={3}><Form.Control placeholder="Father/Husband Name" /></Col>
            <Col md={3}><Form.Control placeholder="Date of Birth" type="date" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Gender" /></Col>
            <Col md={3}><Form.Control placeholder="Nationality" /></Col>
            <Col md={3}><Form.Control placeholder="Aadhar No" /></Col>
            <Col md={3}><Form.Control placeholder="Marital Status" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="PAN No" /></Col>
            <Col md={3}><Form.Control placeholder="Occupation" /></Col>
            <Col md={3}><Form.Control placeholder="WhatsApp No" /></Col>
            <Col md={3}><Form.Control type="file" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Control placeholder="Email ID" /></Col>
            <Col md={3}><Form.Control placeholder="Religion" /></Col>
            <Col md={3}><Form.Control placeholder="State" /></Col>
            <Col md={3}><Form.Control placeholder="District" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Control placeholder="Address" /></Col>
            <Col md={3}><Form.Control placeholder="Pin Code" /></Col>
          </Row>

          <h5 className="mb-3">Bank Details</h5>
          <Row className="mb-3">
            <Col md={4}><Form.Control placeholder="Name Of Account Holder" /></Col>
            <Col md={4}><Form.Control placeholder="IFSC Code" /></Col>
            <Col md={4}><Form.Control placeholder="Branch" /></Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><Form.Control placeholder="Account No" /></Col>
            <Col md={4}><Form.Control placeholder="Bank Name" /></Col>
            <Col md={4}><Form.Control placeholder="Account Type" /></Col>
          </Row>

          <div className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
