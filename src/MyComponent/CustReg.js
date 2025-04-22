import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavAdmin from './NavAdmin';

export default function CustReg() {
  const [applicants, setApplicants] = useState([{}]);

  const addApplicant = () => {
    setApplicants([...applicants, {}]);
  };

  const removeApplicant = (indexToRemove) => {
    const newApplicants = applicants.filter((_, index) => index !== indexToRemove);
    setApplicants(newApplicants);
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
      }}
    >
      <NavAdmin />

      {/* Top spacing */}
      <div className="py-4" />

      <Container className="py-4 px-4 bg-white rounded-4 shadow-lg mb-5">
        <h3 className="mb-4 text-center text-primary">Customer Registration</h3>

        <Form>
          {applicants.map((_, index) => (
            <div
              key={index}
              className="mb-5 p-3 border border-2 border-light rounded-3 bg-light-subtle"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-secondary">Applicant Details {index + 1}</h5>
                {index > 0 && (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeApplicant(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>

              <Row className="mb-3">
                <Col md={4}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={4}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={6}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
              </Row>
              <Row>
                <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
              </Row>
            </div>
          ))}

          <div className="mb-5 text-end">
            <Button variant="outline-primary" size="sm" onClick={addApplicant}>
              + Add Another Applicant
            </Button>
          </div>

          <h5 className="mb-3 text-secondary">Nominee Details</h5>
          <div className="mb-5 p-3 border border-2 border-light rounded-3 bg-light-subtle">
            <Row className="mb-3">
              <Col md={4}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Nominee Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={4}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={6}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
            </Row>
            <Row>
              <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            </Row>
          </div>

          <div className="text-center">
            <Button variant="success" type="submit" className="px-5">
              Submit
            </Button>
            <p className="mt-3 text-muted">
              Upon submission, a Customer ID like <strong>CUS-1234</strong> and password will be generated.
            </p>
          </div>
        </Form>
      </Container>

      {/* Bottom spacing */}
      <div className="py-3" />
    </div>
  );
}
