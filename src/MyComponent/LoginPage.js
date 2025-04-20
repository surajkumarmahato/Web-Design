import React, { useState } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div>
      <Header />
      <div
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('Cons3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}
        ></div>

        {/* Animated Login Form */}
        <motion.form
          onSubmit={handleLogin}
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3.0, type: 'spring' }}
          className="bg-white p-5 rounded-4 shadow-lg w-100 position-relative"
          style={{
            maxWidth: '400px',
            zIndex: 2,
            borderTop: '6px solid rgb(247, 141, 20)',
          }}
        >
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Login Portal</h2>
            <p className="text-muted">Please Login to Continue</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="form-select"
              style={{ borderColor: 'rgb(52, 103, 24)' }}
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
              className="form-control"
              style={{ borderColor: 'rgb(52, 103, 24)' }}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              className="form-control"
              style={{ borderColor: 'rgb(52, 103, 24)' }}
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-100 fw-semibold btn"
            style={{
              backgroundColor: 'rgb(247, 141, 20)',
              color: 'white',
            }}
          >
            Login
          </button>
        </motion.form>
      </div>
    </div>
  );
}
