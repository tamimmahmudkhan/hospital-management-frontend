import React, { Component } from 'react';
import axios from 'axios';
import './css/TableComponent.css'; // Import the provided styles

class MedicineTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
    };
    this.apiUrl = 'https://hospital-management-backend-iixs.onrender.com/medicines'; // Placeholder for the API endpoint
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await axios.get(this.apiUrl);
      this.setState({ medicines: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { medicines } = this.state;

    return (
      <div className="table-container">
        <h2>Medicine Table</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.med_name}</td>
                <td>{medicine.company}</td>
                <td>{medicine.quantity_remaining}</td>
                <td>{medicine.total_product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MedicineTable;
