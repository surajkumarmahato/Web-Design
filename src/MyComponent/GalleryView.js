import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; // Add custom styles here
import NavAdmin from './NavAdmin';

const images = [
  { src: 'bg1.jpg', alt: 'Project 1' },
  { src: 'bg2.jpeg', alt: 'Project 2' },
  { src: 'bg3.jpeg', alt: 'Project 3' },
  { src: 'Cons1.jpg', alt: 'Project 4' },
  { src: 'Cons2.jpg', alt: 'Project 5' },
  { src: 'Cons3.jpg', alt: 'Project 6' },
];

export default function GalleryView() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <NavAdmin />
      <div className="container py-5">
        
        {/* Gallery Main Title */}
        <motion.h2 
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Gallery
        </motion.h2>

        {/* Gallery Images */}
        <div className="row g-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="col-sm-6 col-md-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card shadow border-0 gallery-card h-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="card-img-top rounded"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedImage(img)}
                />
                {/* Photo Title */}
                <div className="card-body text-center">
                  <h5 className="card-title">{img.alt}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="modal-dialog-centered-custom"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content border-0 shadow-lg">
                  <div className="modal-body p-0">
                    <img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid w-100 rounded" />
                  </div>
                  <div className="modal-footer border-0 justify-content-center">
                    <button className="btn btn-outline-danger" onClick={() => setSelectedImage(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div> 
  );
}
