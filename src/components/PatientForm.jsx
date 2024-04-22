import React, { Component } from 'react';
import './css/PatientForm.css'; // Import corresponding CSS file for styling

class PatientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      history: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, history } = this.state;
    const patient = { firstName, lastName, history };
    
    fetch('https://hospital-management-backend-iixs.onrender.com/new/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
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
    const { firstName, lastName, history } = this.state;
    return (
      <div className="patient-form-container">
        <h2>Create New Patient</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="history">Patient History:</label>
            <textarea
              id="history"
              name="history"
              value={history}
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

export default PatientForm;
