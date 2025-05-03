import React, { useState, useEffect } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import NavAdmin from "../NavAdmin";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export default function AddPerm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users
    .map((user) => user.name)
    .filter((user) => user.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <NavAdmin />
      <div
        className="py-5 min-vh-100"
        style={{
          background:
            "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
        }}
      >
        <Container>
          <Card className="shadow-sm">
            <Card.Header className="bg-dark text-white fw-bold">
              User Permissions
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Select User</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search user..."
                    className="mb-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Form.Select>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user, index) => (
                        <option key={index}>{user}</option>
                      ))
                    ) : (
                      <option disabled>No user found</option>
                    )}
                  </Form.Select>
                </Form.Group>

                <Row>
                  <Col md={4}>
                    <h6>User</h6>
                    <Form.Check label="View User" />
                    <Form.Check label="Add User" />
                    <Form.Check label="Edit User" />
                  </Col>
                  <Col md={4}>
                    <h6>Master Data</h6>
                    <Form.Check label="Add Project" />
                    <Form.Check label="Add Property" />
                  </Col>
                  <Col md={4}>
                    <h6>Registration</h6>
                    <Form.Check label="Customer Registration" />
                    <Form.Check label="Associate Registration" />
                    <Form.Check label="Freelancer Registration" />
                    <Form.Check label="Employee Registration" />
                    <Form.Check label="Land Owner Registration" />
                    <Form.Check label="Add Expenses Heads" />
                  </Col>
                  <Col md={4}>
                    <h6>Booking</h6>
                    <Form.Check label="New Booking" />
                    <Form.Check label="Confirm Receipts" />
                    <Form.Check label="Unconfirm Receipts" />
                    <Form.Check label="Add EMI" />
                    <Form.Check label="Search Property" />
                    <Form.Check label="Session Closing" />
                    <Form.Check label="Commission" />
                    <Form.Check label="Reward" />
                    <Form.Check label="Payment" />
                  </Col>
                  <Col md={4}>
                    <h6>Documents</h6>
                    <Form.Check label="Booking Form" />
                    <Form.Check label="Welcome Letter" />
                    <Form.Check label="Agreement for Sale" />
                    <Form.Check label="Allotment Letter" />
                    <Form.Check label="Possession Letter" />
                    <Form.Check label="Registry Form" />
                  </Col>
                </Row>

                <Button variant="success" className="mt-3">
                  Assign Permissions
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
