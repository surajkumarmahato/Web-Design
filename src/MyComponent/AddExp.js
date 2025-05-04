import React, { useState } from 'react';
import NavAdmin from './NavAdmin';

export default function AddExp() {
  const [expenses, setExpenses] = useState([
    { date: '', party: '', amount: '', head: '', remarks: '', bill: null }
  ]);
  const [savedExpenses, setSavedExpenses] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...expenses];
    updated[index][field] = value;
    setExpenses(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...expenses];
    updated[index].bill = file;
    setExpenses(updated);
  };

  const addRow = () => {
    setExpenses([...expenses, { date: '', party: '', amount: '', head: '', remarks: '', bill: null }]);
  };

  const removeRow = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedExpenses([...savedExpenses, ...expenses]);
    setExpenses([{ date: '', party: '', amount: '', head: '', remarks: '', bill: null }]);
    alert('Expenses Saved!');
  };

  return (
    <div>
      <NavAdmin />
      <div className="min-vh-100 p-4" style={{ background: 'linear-gradient(to right, #f5e8d0, #d0ecd5)' }}>
        <div className="container">
          <div className="card p-4 shadow" style={{ borderRadius: '1rem' }}>
            {/* <h5 className="text-center mb-4">Add Expenses</h5> */}
            <h2 className="text-center mb-4 fw-bold text-white py-2 rounded" 
    style={{
      background: 'linear-gradient(to right,rgb(199, 142, 81),rgb(81, 215, 117))',
      fontSize: '2rem',
      letterSpacing: '1px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>Add Expenses</h2>

            <form onSubmit={handleSubmit}>
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center small">
                  <thead className="table-dark">
                    <tr>
                      <th style={{ minWidth: '100px' }}>Date</th>
                      <th style={{ minWidth: '120px' }}>Party Name</th>
                      <th style={{ minWidth: '80px' }}>Amount (₹)</th>
                      <th style={{ minWidth: '120px' }}>Expense Head</th>
                      <th style={{ minWidth: '150px' }}>Remarks</th>
                      <th style={{ minWidth: '150px' }}>Upload Bill</th>
                      <th style={{ minWidth: '60px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((exp, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="date"
                            className="form-control form-control-sm"
                            value={exp.date}
                            onChange={(e) => handleChange(index, 'date', e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Party"
                            value={exp.party}
                            onChange={(e) => handleChange(index, 'party', e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="₹"
                            value={exp.amount}
                            onChange={(e) => handleChange(index, 'amount', e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Head"
                            value={exp.head}
                            onChange={(e) => handleChange(index, 'head', e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Remarks"
                            value={exp.remarks}
                            onChange={(e) => handleChange(index, 'remarks', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            className="form-control form-control-sm"
                            onChange={(e) => handleFileChange(index, e.target.files[0])}
                          />
                        </td>
                        <td>
                          {expenses.length > 1 && (
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => removeRow(index)}>
                              X
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={addRow}>
                  + Add Row
                </button>
                <button type="submit" className="btn btn-success btn-sm">Save All</button>
              </div>
            </form>
          </div>

          {/* Saved Expenses */}
          {savedExpenses.length > 0 && (
            <div className="card mt-5 p-4 shadow" style={{ borderRadius: '1rem' }}>
              <h5 className="mb-3">Saved Records</h5>
              <div className="table-responsive">
                <table className="table table-bordered table-striped small text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Party</th>
                      <th>₹</th>
                      <th>Head</th>
                      <th>Remarks</th>
                      <th>Bill</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedExpenses.map((exp, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{exp.date}</td>
                        <td>{exp.party}</td>
                        <td>{exp.amount}</td>
                        <td>{exp.head}</td>
                        <td>{exp.remarks}</td>
                        <td>{exp.bill ? exp.bill.name : 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
