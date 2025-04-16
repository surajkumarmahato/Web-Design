import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css'; // Optional: for custom styles or background

export default function BlockOption() {
  const blocks = [
    'Dashboard',
    'User',
    'Project',
    'Registration',
    'Booking',
    'Payment',
    'Expense',
    'Gallery',
    'Message',
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-primary">Welcome! Select an Option</h2>
      <div className="row g-4">
        {blocks.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card shadow-sm border-0 h-100 text-center bg-light hover-shadow">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title fw-semibold text-dark">{item}</h5>
                <p className="card-text text-muted">Go to {item.toLowerCase()} section</p>
                <button className="btn btn-primary mt-auto">Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
