import React, { useState } from "react";
import NavAdmin from "./NavAdmin";
import {
  Container,
  Card,
  Table,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import { db } from "./FirebaseConfig"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore";

export default function Project() {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectType: "",
    address: "",
    city: "",
    district: "",
    state: "",
    rate: "",
    map: null,
    brochure: null,
  });

  const [propertyData, setPropertyData] = useState({
    projectName: "",
    rate: "",
    propertyType: "",
    propertySubType: "",
    propertyNo: "",
    area: "",
    basePrice: "",
    propertySegment: "",
  });

  const handleProjectChange = (e) => {
    const { name, value, files } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProject = async () => {
    try {
      await addDoc(collection(db, "projects"), projectData);
      alert("Project saved successfully!");
      setProjectData({
        projectName: "",
        projectType: "",
        address: "",
        city: "",
        district: "",
        state: "",
        rate: "",
        map: null,
        brochure: null,
      });
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project.");
    }
  };

  const saveProperty = async () => {
    try {
      await addDoc(collection(db, "properties"), propertyData);
      alert("Property saved successfully!");
      setPropertyData({
        projectName: "",
        rate: "",
        propertyType: "",
        propertySubType: "",
        propertyNo: "",
        area: "",
        basePrice: "",
        propertySegment: "",
      });
    } catch (error) {
      console.error("Error saving property:", error);
      alert("Failed to save property.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <NavAdmin />

      {/* Main Content */}
      <div
        className="py-5 min-vh-100"
        style={{
          background:
            "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
        }}
      >
        <Container>
          {/* Add New Project */}
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
                      <Form.Control
                        type="text"
                        placeholder="Enter Project Name"
                        name="projectName"
                        value={projectData.projectName}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select
                        name="projectType"
                        value={projectData.projectType}
                        onChange={handleProjectChange}
                      >
                        <option>Township Ploting</option>
                        <option>Construction</option>
                        <option>Mix Township</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full Address"
                        name="address"
                        value={projectData.address}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={projectData.city}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>District</Form.Label>
                      <Form.Control
                        type="text"
                        name="district"
                        value={projectData.district}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={projectData.state}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Rate (per Sq.Ft)</Form.Label>
                      <Form.Control
                        type="number"
                        name="rate"
                        value={projectData.rate}
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Upload Map</Form.Label>
                      <Form.Control
                        type="file"
                        name="map"
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Upload Brochure</Form.Label>
                      <Form.Control
                        type="file"
                        name="brochure"
                        onChange={handleProjectChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  variant="success"
                  className="mt-4"
                  onClick={saveProject}
                >
                  Save Project
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Add New Property */}
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
                      <Form.Control
                        type="text"
                        name="projectName"
                        value={propertyData.projectName}
                        onChange={handlePropertyChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Rate (Per Sq.Ft)</Form.Label>
                      <Form.Control
                        type="number"
                        name="rate"
                        value={propertyData.rate}
                        onChange={handlePropertyChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Type</Form.Label>
                      <Form.Select
                        name="propertyType"
                        value={propertyData.propertyType}
                        onChange={handlePropertyChange}
                      >
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
                      <Form.Select
                        name="propertySubType"
                        value={propertyData.propertySubType}
                        onChange={handlePropertyChange}
                      >
                        <option>2-BHK</option>
                        <option>3-BHK</option>
                        <option>NA</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="propertyNo"
                        value={propertyData.propertyNo}
                        onChange={handlePropertyChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Area (Sq.Ft)</Form.Label>
                      <Form.Control
                        type="number"
                        name="area"
                        value={propertyData.area}
                        onChange={handlePropertyChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Base Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="e.g. 120000"
                        name="basePrice"
                        value={propertyData.basePrice}
                        onChange={handlePropertyChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Property Segment</Form.Label>
                      <Form.Select
                        name="propertySegment"
                        value={propertyData.propertySegment}
                        onChange={handlePropertyChange}
                      >
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
                      <Form.Label>
                        PLC (10% if Cornor or Park Facing)
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Auto Calculate"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Total Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Auto Calculate"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="success"
                  className="mt-4"
                  onClick={saveProperty}
                >
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
