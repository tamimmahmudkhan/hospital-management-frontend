import React, { Component } from 'react';
import './css/CardView.css'; // Import CSS file for styling
import axios from 'axios'


class CardView extends Component {

  constructor(props){
    super(props)
    const { title } = this.props;

    this.state = {
      cardTitle: title,
      cardSubTtl: 0
    }
  }
  
  componentDidMount() {
    this.fetchData(this.state.cardTitle);
  }

  fetchData = (tab) => {
    let apiUrl = '';
    switch (tab) {
      case 'Doctors':
        apiUrl = 'https://hospital-management-backend-iixs.onrender.com/count/doctors';
        break;
      case 'Patients':
        apiUrl = 'https://hospital-management-backend-iixs.onrender.com/count/patients';
        break;
      case 'Medicines':
        apiUrl = 'https://hospital-management-backend-iixs.onrender.com/count/medicines';
        break;
      case 'Equipments':
        apiUrl = 'https://hospital-management-backend-iixs.onrender.com/count/equipments';
        break;
      default:
        return;
    }

    axios.get(apiUrl)
      .then(response => {
        this.setState({ cardSubTtl: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  render() {
    
    return (
      <div className="card">
        <h2 className="title">{this.state.cardTitle}</h2>
        <p className="subtitle">{this.state.cardSubTtl}</p>
      </div>
    );
  }
}

export default CardView;
