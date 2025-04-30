import React from 'react';
import NavAdmin from './NavAdmin';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';

export default function AddProperty() {
  return (
    <div>
    <NavAdmin />
    <div className="py-5 min-vh-100" style={{ background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))' }}>
      <Container>
        <Card className="shadow-sm">
          <Card.Header className="bg-dark text-white fw-bold">
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
