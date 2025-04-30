import React from 'react';
import NavAdmin from './NavAdmin';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';

export default function AddProject() {
  return (
    <div>
    <NavAdmin />
    <div className="py-5 min-vh-100" style={{ background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))' }}>
      <Container>
        <Card className="mb-5 shadow-sm">
          <Card.Header className="bg-dark text-white fw-bold">
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
      </Container>
    </div>
    </div>
  );
}
