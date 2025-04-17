import React from 'react';
import Header from './Header';
export default function Home() {
  return (
    <div>
            <Header/>

{/* About Section */}
<section className="py-5 bg-light mt-3" id="about">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">About Us</h2>
    <p className="text-muted mb-3">
      URMICHAND GROUP is a premier construction company with over 20 years of experience in building dreams into reality. 
      Our team of dedicated professionals combines modern technology with traditional craftsmanship to deliver high-quality results on time and within budget.
    </p>
    <p className="text-muted">
      We specialize in residential buildings, commercial projects, and renovation services. Our mission is to bring your vision to life with transparency, commitment, and excellence. 
      We believe in long-term relationships, which is why most of our business comes from repeat clients and referrals.
    </p>
  </div>
</section>

      {/* Services Section */}
      <section className="py-5" id="services">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-house-door fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Residential Buildings</h5>
                  <p className="card-text">Custom homes, renovations, and sustainable living spaces built to perfection.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-building fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Commercial Projects</h5>
                  <p className="card-text">High-quality commercial and industrial infrastructure tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-tools fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Renovations</h5>
                  <p className="card-text">Transform existing spaces with our expert renovation and remodeling services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Let's Build Your Vision Together</h2>
          <p className="mb-4">Contact us today to get a free consultation and quote.</p>
          <a href="#contact" className="btn btn-warning">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
