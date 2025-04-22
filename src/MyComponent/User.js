import React, { useState } from 'react';
import NavAdmin from './NavAdmin';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Card,
} from 'react-bootstrap';

export default function User() {
  const [searchTerm, setSearchTerm] = useState('');
  const users = ['User 1', 'User 2', 'John Doe', 'Jane Smith', 'Alice', 'Bob'];
  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavAdmin />

      {/* Main Content with Gradient Background */}
      <div className="py-5 min-vh-100" style={{ background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))' }}>
        <Container>

          {/* User Table View */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">View Users</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Father Name</th>
                    <th>Designation</th>
                    <th>Office Location</th>
                    <th>PAN Number</th>
                    <th>Aadhar Number</th>
                    <th>Whatsapp No</th>
                    <th>Email ID</th>
                    <th>Login ID</th>
                    <th>Password</th>
                    <th>Status</th>
                    <th>Alteration</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic data goes here */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Add User Form */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">Add User</Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={4}><Form.Group><Form.Label>Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Photo</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Father Name</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Designation</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Office Location</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>PAN Number</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>PAN Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Aadhar Number</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Aadhar Upload</Form.Label><Form.Control type="file" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Whatsapp No</Form.Label><Form.Control type="text" /></Form.Group></Col>
                  <Col md={4}><Form.Group><Form.Label>Email ID</Form.Label><Form.Control type="email" /></Form.Group></Col>
                </Row>
                <Button variant="success" className="mt-4">Generate EMP ID & Password</Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Permissions Section */}
          <Card className="shadow-sm">
            <Card.Header className="bg-dark text-white fw-bold">User Permissions</Card.Header>
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
                <Button variant="success" className="mt-3">Assign Permissions</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
