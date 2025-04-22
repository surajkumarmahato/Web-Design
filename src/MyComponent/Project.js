import React from 'react';
import NavAdmin from './NavAdmin';
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
      <NavAdmin />

      {/* Main Content */}
      <div className="py-5 bg-light min-vh-100">
        <Container>
          {/* Add New Project */}
          <Card className="mb-5 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">
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
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select>
                        <option>Township Ploting</option>
                        <option>Construction</option>
                        <option>Mix Township</option>
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
                      <Form.Label>District</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Rate (per Sq.Ft)</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Upload Map</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Upload Brochure</Form.Label>
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
                      <Form.Label>Project Name</Form.Label>
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
                      <Form.Select>
                        <option>Residential Plot</option>
                        <option>Commercial Plot</option>
                        <option>Flat</option>
                        <option>Duplex</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Sub-Type</Form.Label>
                      <Form.Select>
                        <option>2-BHK</option>
                        <option>3-BHK</option>
                        <option>NA</option>
                      </Form.Select>
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
                        <option>Normal</option>
                        <option>Cornor</option>
                        <option>Park Facing</option>
                        <option>Semi Furnished</option>
                        <option>Full Furnished</option>
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
