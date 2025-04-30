import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavAdmin from './NavAdmin';

export default function FreeLanReg() {
  return (
    <div
      className="min-vh-100"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))'
      }}
    >
      <NavAdmin />
      <Container className="py-5">
        <h3 className="mb-4 text-center">Freelancer Registration</h3>
        <Form>
          <h5 className="mb-3">Freelancer Details</h5>
          <Row className="mb-3">
            <Col md={2}><Form.Group><Form.Label>Title</Form.Label><Form.Select><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>

          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>


          </Row>
          <Row className="mb-3">
              <Col md={3}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Upload PAN</Form.Label><Form.Control type="file" /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Aadhaar No</Form.Label><Form.Control type="text" /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Upload Aadhaar</Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>Commission (%)</Form.Label><Form.Control type="number" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Email ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
            <Col md={2}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>

          <h5 className="mb-3 mt-5">Bank Details</h5>
          <Row className="mb-3">
            <Col md={4}><Form.Group><Form.Label>Name of Account Holder</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>IFSC Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={4}><Form.Group><Form.Label>Branch</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>Account No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Bank Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Account Type</Form.Label><Form.Select><option>Savings</option><option>Current</option></Form.Select></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Upload Cancelled Cheque </Form.Label><Form.Control type="file" /></Form.Group></Col>
          </Row>

          <h5 className="mb-3 mt-5">Nominee Details</h5>
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
          <Row className="mb-3">
            <Col md={3}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
            <Col md={3}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
            <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" /></Form.Group></Col>
          </Row>
            <Row className="mb-3">
                <Col md={3}><Form.Group><Form.Label>City</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" /></Form.Group></Col>
            </Row>


          <div className="text-center">
            <Button variant="success" type="submit">Generate ID & Password</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
