// Updated CustReg.jsx
import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavAdmin from "./NavAdmin";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export default function CustReg() {
  const [applicants, setApplicants] = useState([{}]);
  const [nominee, setNominee] = useState({});
  const [generatedDetails, setGeneratedDetails] = useState(null);

  const addApplicant = () => {
    setApplicants([...applicants, {}]);
  };

  const removeApplicant = (indexToRemove) => {
    const newApplicants = applicants.filter((_, index) => index !== indexToRemove);
    setApplicants(newApplicants);
  };

  const handleApplicantChange = (index, field, value) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index] = { ...updatedApplicants[index], [field]: value };
    setApplicants(updatedApplicants);
  };

  const handleNomineeChange = (field, value) => {
    setNominee({ ...nominee, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerId = `CUS-${Math.floor(1000 + Math.random() * 9000)}`;
    const password = Math.random().toString(36).slice(-8);

    const customerData = { applicants, nominee, customerId, password };

    try {
      const customerCollection = collection(db, "customers");
      await addDoc(customerCollection, customerData);
      setGeneratedDetails({ customerId, password });
      setApplicants([{}]);
      setNominee({});
    } catch (error) {
      console.error("Error saving customer data:", error);
    }
  };

  return (
    <div className="min-vh-100" style={{ background: "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))" }}>
      <NavAdmin />
      <Container className="py-5">
        <h3 className="mb-4 text-center">Customer Registration</h3>
        <Form onSubmit={handleSubmit}>
          {applicants.map((applicant, index) => (
            <div key={index} className="mb-5 p-3 border border-2 rounded-4 bg-light-subtle">
              <Row className="mb-3">
                <Col md={2}><Form.Group><Form.Label>Title</Form.Label><Form.Select value={applicant.title || ""} onChange={(e) => handleApplicantChange(index, "title", e.target.value)}><option value="">Select</option><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Applicant Name</Form.Label><Form.Control type="text" value={applicant.applicantName || ""} onChange={(e) => handleApplicantChange(index, "applicantName", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" value={applicant.fatherHusbandName || ""} onChange={(e) => handleApplicantChange(index, "fatherHusbandName", e.target.value)} /></Form.Group></Col>
                <Col md={2}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" value={applicant.dob || ""} onChange={(e) => handleApplicantChange(index, "dob", e.target.value)} /></Form.Group></Col>
                <Col md={2}><Form.Group><Form.Label>Gender</Form.Label><Form.Select value={applicant.gender || ""} onChange={(e) => handleApplicantChange(index, "gender", e.target.value)}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" value={applicant.nationality || ""} onChange={(e) => handleApplicantChange(index, "nationality", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select value={applicant.maritalStatus || ""} onChange={(e) => handleApplicantChange(index, "maritalStatus", e.target.value)}><option value="">Select</option><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" value={applicant.occupation || ""} onChange={(e) => handleApplicantChange(index, "occupation", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" value={applicant.whatsappNo || ""} onChange={(e) => handleApplicantChange(index, "whatsappNo", e.target.value)} /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" value={applicant.panNo || ""} onChange={(e) => handleApplicantChange(index, "panNo", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" value={applicant.aadharNo || ""} onChange={(e) => handleApplicantChange(index, "aadharNo", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" value={applicant.mailId || ""} onChange={(e) => handleApplicantChange(index, "mailId", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" value={applicant.religion || ""} onChange={(e) => handleApplicantChange(index, "religion", e.target.value)} /></Form.Group></Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" value={applicant.state || ""} onChange={(e) => handleApplicantChange(index, "state", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" value={applicant.district || ""} onChange={(e) => handleApplicantChange(index, "district", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" value={applicant.pinCode || ""} onChange={(e) => handleApplicantChange(index, "pinCode", e.target.value)} /></Form.Group></Col>
                <Col md={3}><Form.Group><Form.Label>Photo Upload</Form.Label><Form.Control type="file" onChange={(e) => handleApplicantChange(index, "photo", e.target.files[0])} /></Form.Group></Col>
              </Row>
              <Row><Col><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" value={applicant.address || ""} onChange={(e) => handleApplicantChange(index, "address", e.target.value)} /></Form.Group></Col></Row>
              {index > 0 && (
                <div className="text-end mt-3">
                  <Button variant="outline-danger" size="sm" onClick={() => removeApplicant(index)}>Remove Applicant</Button>
                </div>
              )}
            </div>
          ))}
          <div className="text-end mb-4">
            <Button variant="outline-primary" size="sm" onClick={addApplicant}>+ Add Another Applicant</Button>
          </div>

          <h5 className="mb-3 mt-5">Nominee Details</h5>
          <div className="p-3 border border-2 rounded-4 bg-light-subtle mb-4">
            <Row className="mb-3">
              <Col md={2}><Form.Group><Form.Label>Title</Form.Label><Form.Select value={nominee.title || ""} onChange={(e) => handleNomineeChange("title", e.target.value)}><option value="">Select</option><option>Mr</option><option>Mrs</option><option>Dr</option></Form.Select></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Nominee Name</Form.Label><Form.Control type="text" value={nominee.nomineeName || ""} onChange={(e) => handleNomineeChange("nomineeName", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Father/Husband Name</Form.Label><Form.Control type="text" value={nominee.fatherHusbandName || ""} onChange={(e) => handleNomineeChange("fatherHusbandName", e.target.value)} /></Form.Group></Col>
              <Col md={2}><Form.Group><Form.Label>DOB</Form.Label><Form.Control type="date" value={nominee.dob || ""} onChange={(e) => handleNomineeChange("dob", e.target.value)} /></Form.Group></Col>
              <Col md={2}><Form.Group><Form.Label>Gender</Form.Label><Form.Select value={nominee.gender || ""} onChange={(e) => handleNomineeChange("gender", e.target.value)}><option>Male</option><option>Female</option><option>Other</option></Form.Select></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}><Form.Group><Form.Label>Marital Status</Form.Label><Form.Select value={nominee.maritalStatus || ""} onChange={(e) => handleNomineeChange("maritalStatus", e.target.value)}><option>Single</option><option>Married</option></Form.Select></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Mail ID</Form.Label><Form.Control type="email" value={nominee.mailId || ""} onChange={(e) => handleNomineeChange("mailId", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Pan No</Form.Label><Form.Control type="text" value={nominee.panNo || ""} onChange={(e) => handleNomineeChange("panNo", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Aadhar No</Form.Label><Form.Control type="text" value={nominee.aadharNo || ""} onChange={(e) => handleNomineeChange("aadharNo", e.target.value)} /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}><Form.Group><Form.Label>WhatsApp No</Form.Label><Form.Control type="text" value={nominee.whatsappNo || ""} onChange={(e) => handleNomineeChange("whatsappNo", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Nationality</Form.Label><Form.Control type="text" value={nominee.nationality || ""} onChange={(e) => handleNomineeChange("nationality", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Occupation</Form.Label><Form.Control type="text" value={nominee.occupation || ""} onChange={(e) => handleNomineeChange("occupation", e.target.value)} /></Form.Group></Col>
              <Col md={3}><Form.Group><Form.Label>Religion</Form.Label><Form.Control type="text" value={nominee.religion || ""} onChange={(e) => handleNomineeChange("religion", e.target.value)} /></Form.Group></Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><Form.Group><Form.Label>Address</Form.Label><Form.Control type="text" value={nominee.address || ""} onChange={(e) => handleNomineeChange("address", e.target.value)} /></Form.Group></Col>
              <Col md={2}><Form.Group><Form.Label>District</Form.Label><Form.Control type="text" value={nominee.district || ""} onChange={(e) => handleNomineeChange("district", e.target.value)} /></Form.Group></Col>
              <Col md={2}><Form.Group><Form.Label>State</Form.Label><Form.Control type="text" value={nominee.state || ""} onChange={(e) => handleNomineeChange("state", e.target.value)} /></Form.Group></Col>
              <Col md={2}><Form.Group><Form.Label>Pin Code</Form.Label><Form.Control type="text" value={nominee.pinCode || ""} onChange={(e) => handleNomineeChange("pinCode", e.target.value)} /></Form.Group></Col>
            </Row>
          </div>

          <div className="text-center">
            <Button type="submit" variant="success">Generate ID & Password</Button>
          </div>
        </Form>

        {generatedDetails && (
          <div className="mt-4 text-center">
            <h5 className="text-success">Registration Successful!</h5>
            <p><strong>Customer ID:</strong> {generatedDetails.customerId}</p>
            <p><strong>Password:</strong> {generatedDetails.password}</p>
          </div>
        )}
      </Container>
    </div>
  );
}
