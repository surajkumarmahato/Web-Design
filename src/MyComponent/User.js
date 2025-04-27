import React, { useState, useEffect } from "react";
import NavAdmin from "./NavAdmin";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Card,
} from "react-bootstrap";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

import app from "./Firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const db = getFirestore(app);

// PasswordToggle component
const PasswordToggle = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex align-items-center">
      <span className="me-2">{showPassword ? password : "••••••••"}</span>
      <Button
        variant="link"
        size="sm"
        onClick={() => setShowPassword(!showPassword)}
        className="p-0"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </Button>
    </div>
  );
};

export default function User() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    fatherName: "",
    designation: "",
    officeLocation: "",
    panNumber: "",
    aadharNumber: "",
    whatsappNo: "",
    email: "",
  });

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

  const generateUniqueEMPID = async () => {
    let empID;
    let isUnique = false;

    while (!isUnique) {
      empID = `EMP${Math.floor(100 + Math.random() * 900)}`; // Generate EMP + 3-digit random number
      const q = query(collection(db, "users"), where("empID", "==", empID));
      const querySnapshot = await getDocs(q);
      isUnique = querySnapshot.empty; // Check if EMP ID is unique
    }

    return empID;
  };

  const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8); // Generate random 8-character password
  };

  const handleAddUser = async () => {
    const empID = await generateUniqueEMPID();
    const password = generateRandomPassword();

    const userData = {
      ...newUser,
      empID,
      password,
    };

    try {
      await addDoc(collection(db, "users"), userData);
      alert("User added successfully!");
      setNewUser({
        name: "",
        fatherName: "",
        designation: "",
        officeLocation: "",
        panNumber: "",
        aadharNumber: "",
        whatsappNo: "",
        email: "",
      });
      // Refresh user list
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavAdmin />
      <div className="bg-light py-4 min-vh-100">
        <Container>
          {/* User Table View */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">
              View Users
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>EMP ID</th>
                    <th>Password</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Whatsapp No</th>
                    <th>Designation</th>
                    <th>Office Location</th>
                    <th>PAN Number</th>
                    <th>Aadhar Number</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.empID}</td>
                      <td>
                        <PasswordToggle password={user.password} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.whatsappNo}</td>
                      <td>{user.designation}</td>
                      <td>{user.officeLocation}</td>
                      <td>{user.panNumber}</td>
                      <td>{user.aadharNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Add User Form */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">
              Add User
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.name}
                        onChange={(e) =>
                          setNewUser({ ...newUser, name: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Father Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.fatherName}
                        onChange={(e) =>
                          setNewUser({ ...newUser, fatherName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.designation}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            designation: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Office Location</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.officeLocation}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            officeLocation: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>PAN Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.panNumber}
                        onChange={(e) =>
                          setNewUser({ ...newUser, panNumber: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Aadhar Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.aadharNumber}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            aadharNumber: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Whatsapp No</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.whatsappNo}
                        onChange={(e) =>
                          setNewUser({ ...newUser, whatsappNo: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        type="email"
                        value={newUser.email}
                        onChange={(e) =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="success"
                  className="mt-4"
                  onClick={handleAddUser}
                >
                  Generate EMP ID & Password
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Permissions */}
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
                        <option key={index} value={user.id}>
                          {user.name}
                        </option>
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
                <Button variant="primary" className="mt-3">
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
