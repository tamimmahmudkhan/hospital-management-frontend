import React, { Component } from 'react';
import './css/register.css'; // Importing CSS file for styling
import PatientForm from './PatientForm';
import MedicineForm from './MedicineForm';
import EquipmentForm from './EquipmentForm';
import DoctorForm from './DoctorForm';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'PatientForm', // Default selected option
    };
  }

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    return (
      <div className="register-container">
        <h2>Registration Form</h2>
        <select
          className="form-control"
          value={this.state.selectedOption}
          onChange={this.handleChange}
        >
          <option value="PatientForm">Patient Form</option>
          <option value="DoctorForm">Doctor Form</option>
          <option value="MedicineForm">Medicine Form</option>
          <option value="EquipmentForm">Equipment Form</option>
        </select>
        {/* Rendering selected form based on dropdown value */}
        {this.state.selectedOption === 'PatientForm' && <PatientForm />}
        {this.state.selectedOption === 'DoctorForm' && <DoctorForm />}
        {this.state.selectedOption === 'MedicineForm' && <MedicineForm />}
        {this.state.selectedOption === 'EquipmentForm' && <EquipmentForm />}
      </div>
    );
  }
}

export default Register;
