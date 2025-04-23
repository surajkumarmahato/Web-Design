import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';

export default function NavAdmin() {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" sticky="top" className="shadow-sm">
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
            <Nav className="gap-2">
              <Nav.Link href="/dashboardi">Dashboard</Nav.Link>

              {/* User Dropdown */}
              <NavDropdown title="User" id="user-dropdown">
                <NavDropdown.Item href="/user/view">View User</NavDropdown.Item>
                <NavDropdown.Item href="/user/add">Add User</NavDropdown.Item>
                <NavDropdown.Item href="/user/prem">Permission</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/project">Project</Nav.Link>

              {/* Registration Dropdown */}
              <NavDropdown title="Registration" id="registration-dropdown">
                <NavDropdown.Item href="/registration/customer">Customer Registration</NavDropdown.Item>
                <NavDropdown.Item href="/registration/associate">Associate Registration</NavDropdown.Item>
                <NavDropdown.Item href="/registration/freelancer">Freelancer Registration</NavDropdown.Item>
                <NavDropdown.Item href="/registration/landowner">Land Owner Registration</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/payment">Payment</Nav.Link>
              <Nav.Link href="/expenses">Expenses</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/messages">Messages</Nav.Link>

              <Button
                href="/logout"
                className="ms-2"
                style={{
                  backgroundColor: 'rgb(247, 141, 20)',
                  border: 'none',
                  color: 'white',
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
