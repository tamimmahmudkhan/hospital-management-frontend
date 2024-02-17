import React, { Component } from 'react';
import './css/EquipmentForm.css'; // Import corresponding CSS file for styling

class EquipmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      quantity: 0
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, quantity } = this.state;
    const equipment = { name, category, quantity };
    
    fetch('http://localhost:8080/new/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(equipment),
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
    const { name, category, quantity } = this.state;
    return (
      <div className="equipment-form-container">
        <h2>Create New Equipment</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
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

export default EquipmentForm;
