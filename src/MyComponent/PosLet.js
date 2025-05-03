import React, { useState } from 'react';
import jsPDF from 'jspdf';
import NavCust from './NavCust';

export default function PosLet() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'address') setAddress(value);
    if (name === 'panNumber') setPanNumber(value);
    if (name === 'phoneNumber') setPhoneNumber(value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Personal Details Letter', 20, 10);
    doc.text(`Name: ${name}`, 20, 20);
    doc.text(`Address: ${address}`, 20, 30);
    doc.text(`PAN Number: ${panNumber}`, 20, 40);
    doc.text(`Phone Number: ${phoneNumber}`, 20, 50);
    doc.save('personal_details.pdf');
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
        paddingBottom: '50px'
      }}
    >
      <NavCust />
      <div className="container mt-4">
        <h2 className="mb-4">Enter Details for Position Letter</h2>

        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">PAN Number</label>
            <input
              type="text"
              className="form-control"
              name="panNumber"
              value={panNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={generatePDF}
            >
              Download Letter PDF
            </button>
          </div>
        </form>

        <h3 className="mb-3">Upload Signed Document</h3>
        <div className="mb-4">
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>

        {file && (
          <div className="mb-5">
            <p><strong>Preview of Uploaded Document:</strong></p>
            <iframe
              src={file}
              width="100%"
              height="500px"
              title="Uploaded Document Preview"
              style={{ border: '1px solid #ccc', borderRadius: '10px' }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
