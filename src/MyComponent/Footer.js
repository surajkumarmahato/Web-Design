import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

        <div className="d-flex justify-content-center gap-4">
          <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          <a href="#" className="text-white text-decoration-none">Contact Us</a>
        </div>

        <div className="mt-3">
          <p className="text-white text-decoration-none">Follow us on:</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}