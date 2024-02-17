import React, { Component } from 'react';
import CardView from './CardView';
import TableComponent from './TableComponent';
import './css/Dashboard.css';
import axios from 'axios';
import MedicineTable from './MedicineTable';
import Register from './Register'; // Import Register component

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'dashboard',
      data: []
    };
  }

  componentDidMount() {
    this.fetchData('dashboard');
  }

  fetchData = (tab) => {
    let apiUrl = '';
    switch (tab) {
      case 'doctors':
        apiUrl = 'http://localhost:8080/doctors';
        break;
      case 'patients':
        apiUrl = 'http://localhost:8080/patients';
        break;
      case 'medicines':
        apiUrl = 'http://localhost:8080/medicines';
        break;
      case 'equipments':
        apiUrl = 'http://localhost:8080/equipments';
        break;
      default:
        return;
    }

    axios.get(apiUrl)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
    this.fetchData(tab);
  };

  renderContent = () => {
    const { activeTab, data } = this.state;

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid-container">
            <div className="grid-item">
              <CardView title="Doctors" subtitle="View information about doctors" />
            </div>
            <div className="grid-item">
              <CardView title="Patients" subtitle="View information about patients" />
            </div>
            <div className="grid-item">
              <CardView title="Medicines" subtitle="View information about medicines" />
            </div>
            <div className="grid-item">
              <CardView title="Equipments" subtitle="View information about equipments" />
            </div>
          </div>
        );
      case 'register': // Render Register component when 'register' tab is active
        return <Register />;
      default:
        return <TableComponent tableData={data} />;
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <div className="title-bar">
          <h1>Dashboard</h1>
        </div>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li onClick={() => this.handleTabChange('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
                Dashboard
              </li>
              <li onClick={() => this.handleTabChange('doctors')} className={activeTab === 'doctors' ? 'active' : ''}>
                Doctors
              </li>
              <li onClick={() => this.handleTabChange('patients')} className={activeTab === 'patients' ? 'active' : ''}>
                Patients
              </li>
              <li onClick={() => this.handleTabChange('medicines')} className={activeTab === 'medicines' ? 'active' : ''}>
                Medicines
              </li>
              <li onClick={() => this.handleTabChange('departments')} className={activeTab === 'departments' ? 'active' : ''}>
                Departments
              </li>
              <li onClick={() => this.handleTabChange('register')} className={activeTab === 'register' ? 'active' : ''}>
                Register {/* Add Register option to the sidebar */}
              </li>
            </ul>
          </div>
          <div className="content">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}
