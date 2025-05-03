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
    const newApplicants = applicants.filter(
      (_, index) => index !== indexToRemove
    );
    setApplicants(newApplicants);
  };

  const handleApplicantChange = (index, field, value) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index] = {
      ...updatedApplicants[index],
      [field]: value,
    };
    setApplicants(updatedApplicants);
  };

  const handleNomineeChange = (field, value) => {
    setNominee({
      ...nominee,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerId = `CUS-${Math.floor(1000 + Math.random() * 9000)}`;
    const password = Math.random().toString(36).slice(-8);

    const customerData = {
      applicants,
      nominee,
      customerId,
      password,
    };

    try {
      const customerCollection = collection(db, "customers");
      await addDoc(customerCollection, customerData);

      console.log("Customer Data Saved:", customerData);

      setGeneratedDetails({ customerId, password });

      setApplicants([{}]);
      setNominee({});
    } catch (error) {
      console.error("Error saving customer data:", error);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background:
          "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
      }}
    >
      <NavAdmin />

      <div className="py-4" />

      <Container className="py-4 px-4 bg-white rounded-4 shadow-lg mb-5">
        <h3 className="mb-4 text-center text-primary">Customer Registration</h3>

        <Form onSubmit={handleSubmit}>
          {applicants.map((applicant, index) => (
            <div
              key={index}
              className="mb-5 p-3 border border-2 border-light rounded-3 bg-light-subtle"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-secondary">
                  Applicant Details {index + 1}
                </h5>
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
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Select
                      value={applicant.title || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "title", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Dr</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Applicant Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.applicantName || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "applicantName",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Father/Husband Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.fatherHusbandName || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "fatherHusbandName",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={applicant.dob || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "dob", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      value={applicant.gender || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "gender", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Select
                      value={applicant.maritalStatus || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "maritalStatus",
                          e.target.value
                        )
                      }
                    >
                      <option value="">Select</option>
                      <option>Single</option>
                      <option>Married</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.occupation || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "occupation",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.nationality || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "nationality",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Religion</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.religion || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "religion", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Pan No</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.panNo || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "panNo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Aadhar No</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.aadharNo || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "aadharNo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Mail ID</Form.Label>
                    <Form.Control
                      type="email"
                      value={applicant.mailId || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "mailId", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>WhatsApp No</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.whatsappNo || ""}
                      onChange={(e) =>
                        handleApplicantChange(
                          index,
                          "whatsappNo",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Photo Upload</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) =>
                        handleApplicantChange(index, "photo", e.target.files[0])
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.address || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "address", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.state || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "state", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>District</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.district || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "district", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={applicant.pinCode || ""}
                      onChange={(e) =>
                        handleApplicantChange(index, "pinCode", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
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
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Select
                    value={nominee.title || ""}
                    onChange={(e) =>
                      handleNomineeChange("title", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Nominee Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={nominee.nomineeName || ""}
                    onChange={(e) =>
                      handleNomineeChange("nomineeName", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Father/Husband Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={nominee.fatherHusbandName || ""}
                    onChange={(e) =>
                      handleNomineeChange("fatherHusbandName", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="text-center">
            <Button variant="success" type="submit" className="px-5">
              Submit
            </Button>
            <p className="mt-3 text-muted">
              Upon submission, a Customer ID like <strong>CUS-1234</strong> and
              password will be generated.
            </p>
          </div>
        </Form>

        {generatedDetails && (
          <div className="mt-4 text-center">
            <h5 className="text-success">Registration Successful!</h5>
            <p>
              <strong>Customer ID:</strong> {generatedDetails.customerId}
            </p>
            <p>
              <strong>Password:</strong> {generatedDetails.password}
            </p>
          </div>
        )}
      </Container>

      <div className="py-3" />
    </div>
  );
}
