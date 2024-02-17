// EditableColumnClass.js

import React, { Component } from 'react';
import './TextInfoColumn.css'; // Import your CSS file

class TextInfoColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false,
      name: 'John Doe',
      dob: '01/01/1990',
      occupation: 'Software Developer',
    };
  }

  handleToggleEdit = () => {
    this.setState((prevState) => ({
      isEditable: !prevState.isEditable,
    }));
  };

  handleInputChange = (e, field) => {
    const value = e.target.value;
    this.setState({
      [field]: value,
    });
  };

  render() {
    const { isEditable, name, dob, occupation } = this.state;

    return (
      <div className="editable-column">
        <h2>User Information</h2>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          {isEditable ? (
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => this.handleInputChange(e, 'name')}
            />
          ) : (
            <div className="text-label">{name}</div>
          )}

          <label htmlFor="dob">DOB:</label>
          {isEditable ? (
            <input
              type="text"
              id="dob"
              value={dob}
              onChange={(e) => this.handleInputChange(e, 'dob')}
            />
          ) : (
            <div className="text-label">{dob}</div>
          )}

          <label htmlFor="occupation">Occupation:</label>
          {isEditable ? (
            <input
              type="text"
              id="occupation"
              value={occupation}
              onChange={(e) => this.handleInputChange(e, 'occupation')}
            />
          ) : (
            <div className="text-label">{occupation}</div>
          )}
        </div>
        <button onClick={this.handleToggleEdit}>
          {isEditable ? 'Save' : 'Edit'}
        </button>
      </div>
    );
  }
}

export default TextInfoColumn;
