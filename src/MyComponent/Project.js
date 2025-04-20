import React, { useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Card,
  Row,
  Col,
  Collapse,
} from 'react-bootstrap';

export default function Project() {
  const [openInventory, setOpenInventory] = useState(false);

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
          <h2 className="fw-bold text-center mb-4 text-dark">Project Registration</h2>

          {/* Project Registration Form */}
          <Card className="shadow-sm mb-4">
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
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Enter Location" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="Enter State" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Rate</Form.Label>
                      <Form.Control type="text" placeholder="Rate per Sq.Ft" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Upload Map</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={() => setOpenInventory(!openInventory)}
                  aria-controls="inventory-collapse"
                  aria-expanded={openInventory}
                >
                  Add Inventory
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Inventory Box */}
          <Collapse in={openInventory}>
            <div id="inventory-collapse">
              <Card className="shadow-sm">
                <Card.Header className="bg-secondary text-white fw-bold">
                  Inventory Details
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
                          <Form.Label>Project Type</Form.Label>
                          <Form.Select>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Mixed (M)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Property Sub Type</Form.Label>
                          <Form.Control type="text" placeholder="e.g. 2BHK, Shop, Duplex" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Property Area (Sq.Ft)</Form.Label>
                          <Form.Control type="number" />
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
                          <Form.Label>Total Property Value</Form.Label>
                          <Form.Control type="number" placeholder="Auto-calculated or Enter manually" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="success" className="mt-4">
                      Save Inventory
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Collapse>
        </Container>
      </div>
    </div>
  );
}
