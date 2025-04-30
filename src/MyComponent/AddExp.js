import React, { useState } from 'react';
import NavAdmin from './NavAdmin';

export default function AddExp() {
  const [expenses, setExpenses] = useState([
    { expenseHead: '', amount: '', date: '', remarks: '' }
  ]);
  const [savedExpenses, setSavedExpenses] = useState([]);

  const handleChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const addExpenseRow = () => {
    setExpenses([
      ...expenses,
      { expenseHead: '', amount: '', date: '', remarks: '' }
    ]);
  };

  const removeExpenseRow = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedExpenses([...savedExpenses, ...expenses]);
    setExpenses([{ expenseHead: '', amount: '', date: '', remarks: '' }]);
    alert('Expenses Added Successfully!');
  };

  return (
    <div>
    <NavAdmin/>
    <div
      className="min-vh-100 p-4"
      style={{ background: 'linear-gradient(to right, #f5e8d0, #d0ecd5)' }}
    >
      <div className="container">
        <div className="card p-4 shadow" style={{ borderRadius: '1rem' }}>
          <h2 className="text-center mb-4">Add Expenses</h2>
          <form onSubmit={handleSubmit}>
            {expenses.map((expense, index) => (
              <div key={index} className="row g-3 mb-3 align-items-end border-bottom pb-3">
                {/* Expense Head */}
                <div className="col-md-3">
                  <label className="form-label">Expense Head <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Expense Head"
                    value={expense.expenseHead}
                    onChange={(e) => handleChange(index, 'expenseHead', e.target.value)}
                    required
                  />
                </div>

                {/* Amount */}
                <div className="col-md-2">
                  <label className="form-label">Amount (₹) <span className="text-danger">*</span></label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    value={expense.amount}
                    onChange={(e) => handleChange(index, 'amount', e.target.value)}
                    required
                  />
                </div>

                {/* Date */}
                <div className="col-md-3">
                  <label className="form-label">Date <span className="text-danger">*</span></label>
                  <input
                    type="date"
                    className="form-control"
                    value={expense.date}
                    onChange={(e) => handleChange(index, 'date', e.target.value)}
                    required
                  />
                </div>

                {/* Remarks */}
                <div className="col-md-3">
                  <label className="form-label">Remarks</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Optional Remarks"
                    value={expense.remarks}
                    onChange={(e) => handleChange(index, 'remarks', e.target.value)}
                  />
                </div>

                {/* Remove Button */}
                <div className="col-md-1 text-end">
                  {expenses.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeExpenseRow(index)}
                    >
                      X
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Add More Expenses Button */}
            <div className="mb-4">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={addExpenseRow}
              >
                + Add More
              </button>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success w-50">Save Expenses</button>
            </div>
          </form>
        </div>

        {/* Saved Expenses Table */}
        {savedExpenses.length > 0 && (
          <div className="card mt-5 p-4 shadow" style={{ borderRadius: '1rem' }}>
            <h3 className="mb-4">Saved Expenses</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Expense Head</th>
                    <th>Amount (₹)</th>
                    <th>Date</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {savedExpenses.map((exp, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{exp.expenseHead}</td>
                      <td>{exp.amount}</td>
                      <td>{exp.date}</td>
                      <td>{exp.remarks}</td>
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
