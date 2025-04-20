import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

export default function Project() {
  return (
    <div>
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

      {/* Main Content */}
      <div className="py-5 bg-light min-vh-100">
        <Container>
          {/* Add New Project */}
          <Card className="mb-5 shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">
              ADD NEW PROJECT
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Project Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Project Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Type</Form.Label>
                      <Form.Select>
                        <option>Plot</option>
                        <option>Flat</option>
                        <option>Shop</option>
                        <option>Duplex</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Full Address" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Rate (per Sq.Ft)</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Upload Map</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-4">
                  Save Project
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Add New Property */}
          <Card className="shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">
              ADD NEW PROPERTY
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Project Name (Existing)</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Rate (Per Sq.Ft)</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Type</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Sub-Type</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property No.</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Area (Sq.Ft)</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Base Price</Form.Label>
                      <Form.Control type="number" placeholder="e.g. 120000" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Segment</Form.Label>
                      <Form.Select>
                        <option>Standard</option>
                        <option>Cornor</option>
                        <option>Park Facing</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>PLC (10% if Cornor or Park Facing)</Form.Label>
                      <Form.Control type="number" placeholder="Auto Calculate" disabled />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Total Price</Form.Label>
                      <Form.Control type="number" placeholder="Auto Calculate" disabled />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-4">
                  Save Property
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
