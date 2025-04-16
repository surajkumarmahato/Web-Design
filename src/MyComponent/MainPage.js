import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MainPage() {
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-gradient">
      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-5 rounded-4 shadow-lg w-100"
          style={{ maxWidth: '400px', borderTop: '6px solid #6f42c1' }}
        >
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Login Portal</h2>
            <p className="text-muted">Please Login to Continue</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="form-select border-primary"
            >
              <option value="" disabled>Select your role</option>
              <option value="associate">Associate</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Username</label>
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              className="form-control border-primary"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-gradient w-100 fw-semibold">
            Login
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-success fw-bold">🎉 Welcome, <span className="text-capitalize">{role}</span>!</h2>
          <p className="text-muted">You have successfully logged in.</p>
        </div>
      )}
    </div>
  );
}
