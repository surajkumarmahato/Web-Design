import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

export default function Header() {
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
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* <Button variant="outline-warning" href="/login" className="ms-2">Login</Button> */}
              <Button href="/login" className="ms-2" style={{ backgroundColor: 'rgb(247, 141, 20)', border: 'none', color: 'white' }}>
  Login
</Button>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
