import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegMain() {
  const registrationTypes = [
    { title: "Customer Registration", color: "#0d6efd" },    // Bootstrap primary
    { title: "Associate Registration", color: "#198754" },   // Success
    { title: "Freelancer Registration", color: "#0dcaf0" },  // Info
    { title: "Land Owner Registration", color: "#ffc107" },  // Warning
    { title: "Add Expenses", color: "#dc3545" }              // Danger
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Navbar */}
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

      {/* Colorful Registration Cards */}
      <Container className="d-flex flex-column align-items-center justify-content-center py-5">
        <h2 className="mb-4 fw-bold text-dark text-center">Registration</h2>

        <div className="w-100" style={{ maxWidth: '400px' }}>
          {registrationTypes.map((item, index) => (
            <div
              key={index}
              className="mb-3 text-white text-center fw-semibold fs-5 rounded py-3 shadow"
              style={{
                backgroundColor: item.color,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
