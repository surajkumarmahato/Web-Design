import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170)), url('Cons3.jpg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />

      {/* Gallery Section */}
      <section id="gallery" className="py-5">
        <div className="container text-center">
          <div id="carouselGallery" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="cons1.jpg" className="d-block w-100" alt="Gallery 1" />
              </div>
              <div className="carousel-item">
                <img src="cons4.jpg" className="d-block w-100" alt="Gallery 2" />
              </div>
              <div className="carousel-item">
                <img src="cons5.jpg" className="d-block w-100" alt="Gallery 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section with Animation */}
      <section id="about" className="py-5 about-section">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <motion.div
              className="col-md-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src="bgimg.jpeg" alt="About URMICHAND GROUP" className="img-fluid rounded shadow" width="500px" />
            </motion.div>

            <motion.div
              className="col-md-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-muted mb-3">
                URMICHAND GROUP is a premier construction company with over 20 years of experience in building dreams into reality.
                Our team of dedicated professionals combines modern technology with traditional craftsmanship to deliver high-quality
                results on time and within budget.
              </p>
              <p className="text-muted">
                We specialize in residential buildings, commercial projects, and renovation services. Our mission is to bring your
                vision to life with transparency, commitment, and excellence. We believe in long-term relationships, which is why
                most of our business comes from repeat clients and referrals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <motion.div
            className="row g-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="col-md-4">
              <div className="card h-100 text-center shadow">
                <div className="card-body">
                  <i className="bi bi-house-door fs-1 mb-3" style={{ color: 'rgb(247, 141, 20)' }}></i>
                  <h5 className="card-title">Residential Buildings</h5>
                  <p className="card-text">Custom homes, renovations, and sustainable living spaces built to perfection.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow">
                <div className="card-body">
                  <i className="bi bi-building fs-1 mb-3" style={{ color: 'rgb(247, 141, 20)' }}></i>
                  <h5 className="card-title">Commercial Projects</h5>
                  <p className="card-text">High-quality commercial and industrial infrastructure tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow">
                <div className="card-body">
                  <i className="bi bi-tools fs-1 mb-3" style={{ color: 'rgb(247, 141, 20)' }}></i>
                  <h5 className="card-title">Renovations</h5>
                  <p className="card-text">Transform existing spaces with our expert renovation and remodeling services.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#f1f1f1' }} className="text-center py-4 text-dark">
        <div className="container">
          <h2 className="fw-bold" style={{ color: 'rgb(247, 141, 20)' }}>
            Let's Build Your Vision Together
          </h2>
          <p className="mb-4">Contact us today to get a free consultation and quote.</p>
          <a href="#contact" className="btn rounded-4" style={{ backgroundColor: 'rgb(247, 141, 20)', border: 'none', color: 'white' }}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}