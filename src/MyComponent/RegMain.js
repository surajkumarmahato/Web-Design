import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavAdmin from './NavAdmin';

export default function RegMain() {
  const registrationTypes = [
    { title: "Customer Registration", color: "rgba(52, 103, 24, 0.75)" },
    { title: "Associate Registration", color: "rgba(247, 141, 20, 0.75)" },
    { title: "Freelancer Registration", color: "rgba(108, 117, 125, 0.75)" },
    { title: "Land Owner Registration", color: "rgba(52, 103, 24, 0.75)" },
    { title: "Add Expenses", color: "rgba(247, 141, 20, 0.75)" }
  ];

  return (
    <div
      className="min-vh-100"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))'
      }}
    >
      <NavAdmin />

      <Container className="py-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="mb-4 fw-bold text-dark text-center">Registration</h2>

        <div className="d-grid gap-4 w-100" style={{ maxWidth: '500px' }}>
          {registrationTypes.map((item, index) => (
            <div
              key={index}
              className="text-white text-center fw-semibold fs-5 rounded-3 py-3 px-4"
              style={{
                backgroundColor: item.color,
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = item.color.replace('0.75', '0.95');
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = item.color;
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
