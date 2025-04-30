import React from 'react';
import NavAdmin from './NavAdmin';
import { Container, Card, Table } from 'react-bootstrap';

export default function ViewProperty() {
  return (
    <div>
    <NavAdmin />
    <div className="py-5 min-vh-100" style={{ background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))' }}>
      <Container>
        <Card className="shadow-sm">
          <Card.Header className="bg-dark text-white fw-bold">
            VIEW PROPERTIES
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Property No</th>
                  <th>Type</th>
                  <th>Sub-Type</th>
                  <th>Area (Sq.Ft)</th>
                  <th>Base Price</th>
                  <th>Total Price</th>
                  <th>Segment</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td>1</td>
                  <td>Green City</td>
                  <td>Plot-101</td>
                  <td>Residential Plot</td>
                  <td>NA</td>
                  <td>1200</td>
                  <td>1200000</td>
                  <td>1320000</td>
                  <td>Cornor</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
    </div>
  );
}
