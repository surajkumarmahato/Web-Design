import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import NavAdmin from "./NavAdmin";
import { Container, Card, Table, Row, Col } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { db } from "./FirebaseConfig";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [valuationData, setValuationData] = useState([]);

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, "projects");
      const projectSnapshot = await getDocs(projectCollection);
      const projectList = projectSnapshot.docs.map((doc) => doc.data());
      setProjects(projectList);

      if (projectList.length > 0) {
        const project = projectList[0]; // Assuming you want to display the first project
        const totalArea = project.totalArea || 0;
        const soldArea = project.soldArea || 0;
        const remainingArea = totalArea - soldArea;

        const totalValuation = project.totalValuation || 0;
        const receivedAmount = project.receivedAmount || 0;
        const pendingAmount = totalValuation - receivedAmount;

        setAreaData([
          { name: "Sold Area", value: soldArea },
          { name: "Remaining Area", value: remainingArea },
          { name: "Total Area", value: totalArea },
        ]);

        setValuationData([
          { name: "Received Amount", value: receivedAmount },
          { name: "Pending Amount", value: pendingAmount },
          { name: "Total Valuation", value: totalValuation },
        ]);
      }
    };

    fetchProjects();
  }, []);

  // Colors
  const COLORS = ["rgb(52, 103, 24)", "rgb(247, 141, 20)", "#6c757d"]; // dark green, orange, grey

  // Custom label style
  const renderCustomLabel = ({ name, value, percent }) => {
    return `${name}: ${(percent * 100).toFixed(1)}%`;
  };

  return (
    <div>
      <NavAdmin />

      <div
        className="py-5"
        style={{
          background:
            "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
        }}
      >
        <Container>
          {/* Project Details Table */}
          <Card className="mb-5 shadow-sm">
            <Card.Header className="bg-dark text-white fw-bold">
              Project Details
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Project Name</th>
                    <th>Project Address</th>
                    <th>Project Map</th>
                    <th>Project Brochure</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>{project.projectName}</td>
                      <td>{project.address}</td>
                      <td>
                        <a href={project.mapLink || "#"}>View Map</a>
                      </td>
                      <td>
                        <a href={project.brochureLink || "#"}>Download</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Financial Overview Table */}
          <Card className="mb-5 shadow-sm">
            <Card.Header className="bg-dark text-white fw-bold">
              Project Financial Overview
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead className="table-dark">
                  <tr>
                    <th>Project Name</th>
                    <th>Site Address</th>
                    <th>Total Area</th>
                    <th>Sold Area</th>
                    <th>Remaining Area</th>
                    <th>Total Valuation</th>
                    <th>Received Amount</th>
                    <th>Pending Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>{project.projectName}</td>
                      <td>{project.address}</td>
                      <td>{project.totalArea?.toLocaleString()} sq.ft</td>
                      <td>{project.soldArea?.toLocaleString()} sq.ft</td>
                      <td>
                        {(
                          project.totalArea - project.soldArea
                        )?.toLocaleString()}{" "}
                        sq.ft
                      </td>
                      <td>
                        ₹{(project.totalValuation / 10000000).toFixed(2)} Cr
                      </td>
                      <td>
                        ₹{(project.receivedAmount / 10000000).toFixed(2)} Cr
                      </td>
                      <td>
                        ₹
                        {(
                          (project.totalValuation - project.receivedAmount) /
                          10000000
                        ).toFixed(2)}{" "}
                        Cr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Charts Section */}
          <Row className="g-4">
            {/* Area Pie Chart */}
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Header
                  style={{
                    backgroundColor: "rgb(247, 141, 20)",
                    color: "white",
                  }}
                  className="fw-bold"
                >
                  Area Distribution
                </Card.Header>
                <Card.Body>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={areaData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={renderCustomLabel}
                        labelLine={false} // Remove connecting line
                      >
                        {areaData.map((entry, index) => (
                          <Cell
                            key={`area-cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `${value.toLocaleString()} sq.ft`}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>

            {/* Valuation Pie Chart */}
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Header
                  style={{
                    backgroundColor: "rgb(52, 103, 24)",
                    color: "white",
                  }}
                  className="fw-bold"
                >
                  Financial Distribution
                </Card.Header>
                <Card.Body>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={valuationData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={renderCustomLabel}
                        labelLine={false} // Remove connecting line
                      >
                        {valuationData.map((entry, index) => (
                          <Cell
                            key={`val-cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) =>
                          `₹${(value / 10000000).toFixed(2)} Cr`
                        }
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
