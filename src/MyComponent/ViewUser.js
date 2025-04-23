import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import NavAdmin from './NavAdmin';

export default function ViewUser() {
  return (
    <div>
      <NavAdmin />
      <div
        className="py-5 min-vh-100"
        style={{
          background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
        }}
      >
        <Container>
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
                  {/* Dynamic user data will be rendered here */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
