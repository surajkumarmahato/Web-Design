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
      className="min-vh-100"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
      }}
    >
      <NavAdmin />
      <Container className="py-5">
        <h3 className="mb-4 text-center">Customer Registration</h3>
        <Form>
          {applicants.map((_, index) => (
            <div key={index}>
              <h5 className="mb-3">Applicant Details {applicants.length > 1 ? `(${index + 1})` : ''}</h5>
              <Row className="mb-3">
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Select>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Dr</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Applicant Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Father/Husband Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Select>
                      <option>Single</option>
                      <option>Married</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Religion</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Mail ID</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Pan No</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Upload PAN</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Aadhaar No</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Upload Aadhaar</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>WhatsApp No</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Photo Upload</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>District</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              {index > 0 && (
                <div className="text-end mb-5">
                  <Button variant="outline-danger" size="sm" onClick={() => removeApplicant(index)}>
                    Remove Applicant
                  </Button>
                </div>
              )}
            </div>
          ))}

          <div className="text-end mb-5">
            <Button variant="outline-primary" size="sm" onClick={addApplicant}>
              + Add Another Applicant
            </Button>
          </div>

          <h5 className="mb-3">Nominee Details</h5>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Relationship</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Nominee Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Payout Plan</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Upload PAN</Form.Label><Form.Control type="file" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Aadhaar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Upload Aadhaar</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>City</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <div className="text-center mt-4">
            <Button type="submit" variant="primary" size="lg">
            Generate ID & Password
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
