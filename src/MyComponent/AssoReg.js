import React, { useState, useEffect } from "react";
import { Container, Button, Form, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavAdmin from "./NavAdmin";
import { db } from "./FirebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function AssoReg() {
  const [sponsors, setAssociates] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "associates");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAssociates(userList);
    };

    fetchUsers();
  }, []);
  const [formData, setFormData] = useState({});
  const [generatedId, setGeneratedId] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0].name : value,
    }));
  };

  const generateId = () => `ASO-${Math.floor(1000 + Math.random() * 9000)}`;
  const generatePassword = () => Math.random().toString(36).slice(-8);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerId = generateId();
    const tempPassword = generatePassword();

    const fullData = {
      ...formData,
      customerId,
      password: tempPassword,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "associates"), fullData);
      setGeneratedId(customerId);
      setPassword(tempPassword);
    } catch (err) {
      console.error("Firestore error:", err);
    }
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background:
          "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
      }}
    >
      <NavAdmin />
      <Container className="py-5">
        <h3 className="mb-4 text-center">Associate Registration</h3>
        <Form onSubmit={handleSubmit}>
          {/* Section 1: Sponsor */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Sponsor</Form.Label>
                <Form.Select name="sponsor" onChange={handleChange}>
                  <option>Select Sponsor</option>
                  {sponsors.map((sponsor) => (
                    <option key={sponsor.customerId} value={sponsor.customerId}>
                      {sponsor.applicantName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Select name="position" onChange={handleChange}>
                  <option>Select Position</option>
                  <option>Left</option>
                  <option>Right</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Section 2: Associate Details */}
          <h5 className="mb-3">Associate Details</h5>
          <Row className="mb-3">
            <Col md={2}>
              <Form.Select name="title" onChange={handleChange}>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Dr</option>
              </Form.Select>
            </Col>
            <Col md={5}>
              <Form.Control
                name="applicantName"
                type="text"
                placeholder="Applicant Name"
                onChange={handleChange}
              />
            </Col>
            <Col md={5}>
              <Form.Control
                name="fatherOrHusbandName"
                type="text"
                placeholder="Father/Husband Name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Select name="gender" onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select name="maritalStatus" onChange={handleChange}>
                <option>Single</option>
                <option>Married</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                name="email"
                type="email"
                placeholder="Mail ID"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="occupation"
                placeholder="Occupation"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nationality"
                placeholder="Nationality"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="religion"
                placeholder="Religion"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Select name="payoutPlan" onChange={handleChange}>
                <option>Binary Plan</option>
                <option>Generation Plan</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="panNumber"
                placeholder="PAN No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="panUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="aadhaarNumber"
                placeholder="Aadhaar No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="aadhaarUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="whatsappNumber"
                placeholder="WhatsApp No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="photoUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                name="address"
                placeholder="Address"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="district"
                placeholder="District"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="pinCode"
                placeholder="Pin Code"
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* Section 3: Bank Details */}
          <h5 className="mt-5">Bank Details</h5>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Control
                name="accountHolderName"
                placeholder="Account Holder Name"
                onChange={handleChange}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                name="ifscCode"
                placeholder="IFSC Code"
                onChange={handleChange}
              />
            </Col>
            <Col md={4}>
              <Form.Control
                name="branch"
                placeholder="Branch"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="accountNumber"
                placeholder="Account No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="bankName"
                placeholder="Bank Name"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Select name="accountType" onChange={handleChange}>
                <option>Savings</option>
                <option>Current</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                name="cancelledChequeUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* Section 4: Nominee */}
          <h5 className="mt-5">Nominee Details</h5>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineeRelationship"
                placeholder="Relationship"
                onChange={handleChange}
              />
            </Col>
            <Col md={2}>
              <Form.Select name="nomineeTitle" onChange={handleChange}>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Dr</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                name="nomineeName"
                placeholder="Nominee Name"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeFatherOrHusbandName"
                placeholder="Father/Husband Name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineeDOB"
                type="date"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Select name="nomineeGender" onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select name="nomineeMaritalStatus" onChange={handleChange}>
                <option>Single</option>
                <option>Married</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeEmail"
                type="email"
                placeholder="Mail ID"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineeOccupation"
                placeholder="Occupation"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeNationality"
                placeholder="Nationality"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeReligion"
                placeholder="Religion"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineePayoutPlan"
                placeholder="Payout Plan"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineePanNumber"
                placeholder="PAN No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineePanUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeAadhaarNumber"
                placeholder="Aadhaar No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeAadhaarUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineeWhatsappNumber"
                placeholder="WhatsApp No"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineePhotoUpload"
                type="file"
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Control
                name="nomineeAddress"
                placeholder="Address"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                name="nomineeCity"
                placeholder="City"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeDistrict"
                placeholder="District"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineeState"
                placeholder="State"
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="nomineePinCode"
                placeholder="Pin Code"
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* Submit */}
          <div className="text-center mt-4">
            <Button type="submit" variant="success">
              Generate ID & Password
            </Button>
          </div>
        </Form>

        {/* Result */}
        {generatedId && (
          <Alert className="mt-4 text-center" variant="info">
            <strong>Customer ID:</strong> {generatedId} <br />
            <strong>Password:</strong> {password}
          </Alert>
        )}
      </Container>
    </div>
  );
}