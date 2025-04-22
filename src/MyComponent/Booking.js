import React, { useState } from 'react';
import NavAdmin from './NavAdmin';

export default function Booking() {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhoto, setCustomerPhoto] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleCustomerSubmit = () => {
    // Simulate fetching customer data
    setCustomerName('John Doe');
    setCustomerPhoto('https://via.placeholder.com/100');
    setShowDetails(true);
    setShowForm(true);
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: 'linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))',
        paddingBottom: '50px'
      }}
    >
      <NavAdmin />
      <div className="container mt-4">
        <h2 className="mb-4">Customer Identification</h2>
        <div className="mb-3 d-flex align-items-center gap-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCustomerSubmit}>Submit</button>
        </div>

        {showDetails && (
          <div className="mb-4 d-flex align-items-center gap-3">
            <div>
              <strong>Name:</strong> {customerName}
            </div>
            <img src={customerPhoto} alt="Customer" width="100" height="100" style={{ borderRadius: '10px' }} />
          </div>
        )}

        {showForm && (
          <form>
            <h3 className="mb-3">Booking Form</h3>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Referral ID</label>
                <select className="form-select">
                  <option value="">Select</option>
                  <option>Associate</option>
                  <option>Employee</option>
                  <option>Freelancer</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Project</label>
                <select className="form-select">
                  <option value="">Select Project</option>
                  <option>Project A</option>
                  <option>Project B</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" value="Auto Location" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Property Number</label>
                <select className="form-select">
                  <option>Select Property</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Property Type</label>
                <input type="text" className="form-control" value="Auto Property Type" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Property Sub-Type</label>
                <input type="text" className="form-control" value="Auto Sub-Type" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Property Segment</label>
                <input type="text" className="form-control" value="Auto Segment" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Block No</label>
                <input type="text" className="form-control" value="Auto Block" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Floor No</label>
                <input type="text" className="form-control" value="Auto Floor" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phase No</label>
                <input type="text" className="form-control" value="Auto Phase" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Area</label>
                <input type="text" className="form-control" value="Auto Area" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Rate</label>
                <input type="text" className="form-control" value="Auto Rate" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">PLC (If Any)</label>
                <input type="text" className="form-control" value="Auto PLC" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Parking Charge</label>
                <input type="text" className="form-control" value="Auto Parking Charge" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Development Charge</label>
                <input type="text" className="form-control" value="Auto Development Charge" readOnly />
              </div>
              <div className="col-12">
                <label className="form-label">Other Charges</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Gross Total</label>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Discount</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">GST</label>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Net Total</label>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Booking Amount</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Rest Amount</label>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">EMI Tenure</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Business Count</label>
                <input type="text" className="form-control" />
              </div>
              <hr />
              <div className="col-md-4">
                <label className="form-label">Payment Mode</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Transaction Details</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Date of Transaction</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Fund Received In</label>
                
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Bank / Office Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-success">Send For Approval</button>
            </div>

            <hr className="my-4" />

            <h5>Verification Section</h5>
            <p>Verification will be done by authorized personnel. Once verified, final booking and invoice will be generated.</p>
            <button className="btn btn-warning me-3">Send for Verification</button>
            <button className="btn btn-info">Generate Invoice</button>

            <hr className="my-4" />

            <h5>Customer EMI Schedule</h5>
            <p>(EMI schedule will appear here post booking approval)</p>
          </form>
        )}
      </div>
    </div>
  );
}
