import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Card,
} from "react-bootstrap";
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
import { FaEye, FaEyeSlash } from "react-icons/fa";

// PasswordToggle component
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

export default function ViewUser() {
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
        </Container>
      </div>
    </div>
  );
}
