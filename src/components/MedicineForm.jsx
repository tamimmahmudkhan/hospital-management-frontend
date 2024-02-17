import React, { Component } from 'react';
import './css/MedicineForm.css'; // Import corresponding CSS file for styling

class MedicineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      total: 0,
      quantity: 0
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, company, total, quantity } = this.state;
    const medicine = { name, company, total, quantity };
    
    fetch('http://localhost:8080/new/medicine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicine),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Optionally, you can handle success response here
    })
    .catch(error => {
      console.error('Error:', error);
      // Optionally, you can handle error response here
    });
  };

  render() {
    const { name, company, total, quantity } = this.state;
    return (
      <div className="medicine-form-container">
        <h2>Create New Medicine</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Medicine Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="total">Total Products:</label>
            <input
              type="number"
              id="total"
              name="total"
              value={total}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity Remaining:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MedicineForm;
