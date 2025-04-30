import React, { useState } from 'react';
import NavAdmin from './NavAdmin';

export default function Booking() {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [gst, setGst] = useState('0');
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  // Sample customer list
  const customers = [
    { id: 'CUST1234', name: 'Rahul' },
    { id: 'CUST5678', name: 'Aditya' },
    { id: 'CUST9999', name: 'Shoubhik' }
  ];

  const handleCustomerChange = (e) => {
    const id = e.target.value.toUpperCase();
    setCustomerId(id);

    if (id.length >= 4) {
      const filtered = customers.filter(cust => cust.id.includes(id));
      setFilteredCustomers(filtered);
    } else {
      setFilteredCustomers([]);
    }

    setShowDetails(false);
    setShowForm(false);
  };

  const handleSelectCustomer = (customer) => {
    setCustomerId(customer.id);
    setCustomerName(customer.name);
    setShowDetails(true);
    setShowForm(false);
    setFilteredCustomers([]);
  };

  const handleCustomerSubmit = () => {
    const idPattern = /^CUST\d{4}$/;
    if (!idPattern.test(customerId)) {
      alert('Customer ID must be in format CUST1234.');
      return;
    }
    const foundCustomer = customers.find(cust => cust.id === customerId);
    if (foundCustomer) {
      setCustomerName(foundCustomer.name);
      setShowDetails(true);
      setShowForm(true);
    } else {
      alert('Customer not found.');
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
      <NavAdmin />
      <div className="container mt-4">
        <h2 className="mb-4">Customer Identification</h2>

        <div className="mb-3 position-relative">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter Customer ID (e.g., CUST1234)"
            value={customerId}
            onChange={handleCustomerChange}
          />
          {/* Suggestion Dropdown */}
          {filteredCustomers.length > 0 && (
            <ul className="list-group position-absolute w-50" style={{ zIndex: 1000 }}>
              {filteredCustomers.map((cust, idx) => (
                <li
                  key={idx}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSelectCustomer(cust)}
                  style={{ cursor: 'pointer' }}
                >
                  {cust.id} - {cust.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="btn btn-primary mb-4" onClick={handleCustomerSubmit}>
          Submit
        </button>

        {showDetails && (
          <div className="mb-4">
            <strong>Name:</strong> {customerName}
          </div>
        )}

        {showForm && (
          <form>
            <h3 className="mb-3">Booking Form</h3>
            <div className="row g-3">
              {/* Referral and Project Selection */}
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

              {/* Auto-filled Details */}
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

              {/* Manual Inputs */}
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
                <input type="text" className="form-control" placeholder="Enter Development Charge" />
              </div>

              <div className="col-12">
                <label className="form-label">Other Charges</label>
                <input type="text" className="form-control" />
              </div>

              {/* Financial Details */}
              <div className="col-md-4">
                <label className="form-label">Gross Total</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Discount</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">GST (%)</label>
                <select
                  className="form-select"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                >
                  <option value="0">0%</option>
                  <option value="1">1%</option>
                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18">18%</option>
                </select>
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

              {/* EMI & Business */}
              <div className="col-md-6">
                <label className="form-label">EMI Tenure</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Business Count</label>
                <input type="text" className="form-control" />
              </div>

              {/* Payment Details */}
              <h3 className="mb-3">Payment Details</h3>

              <div className="col-md-4">
                <label className="form-label">Payment Mode</label>
                <select className="form-control">
                  <option value="">Select Payment Mode</option>
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="DD">DD</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Bank">Bank</option>
                  <option value="NEFT">NEFT</option>
                  <option value="RTGS">RTGS</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Transaction Number</label>
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
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4">
              <button className="btn btn-success me-3">Save</button>
              <button className="btn btn-secondary">Reset</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
