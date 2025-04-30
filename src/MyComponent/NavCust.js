import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';

export default function NavCust() {
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
              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/payment">Payment</Nav.Link>
              {/* <Nav.Link href="/docs">Documents</Nav.Link> */}
              <NavDropdown title="documents" id="documents-dropdown">
                <NavDropdown.Item href="/documents/allotmentletter">Allotment Letter</NavDropdown.Item>
                <NavDropdown.Item href="/documents/positionletter">Position Letter</NavDropdown.Item>
                <NavDropdown.Item href="/documents/cancelagree">Cancellation Agreement</NavDropdown.Item>
                <NavDropdown.Item href="/documents/Registry">Registry</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/gallery/galleryview">Gallery</Nav.Link>
              <Nav.Link href="/dashboardi">Profile</Nav.Link>
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
  )
}
