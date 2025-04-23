import React from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import NavAdmin from './NavAdmin';

export default function AddUser() {
  return (
    <div>
      <NavAdmin />
      <div
        className="py-5 min-vh-100"
        style={{
          background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
        }}
      >
        <Container>
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">Add User</Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={4}><Form.Group><Form.Label>Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Photo</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Father Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Designation</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Office Location</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>PAN Number</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>PAN Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Aadhar Number</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Aadhar Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Whatsapp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Email ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
                </Row>
                <Button variant="success" className="mt-4">Generate EMP ID & Password</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
