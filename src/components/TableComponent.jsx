import React, { Component } from 'react';
import './css/TableComponent.css'; // Import your CSS file

class TableComponent extends Component {
  renderTableHeader() {
    const { tableData } = this.props;
    if (!tableData || tableData.length === 0) return null;

    // Assuming the data is an array of objects and using the keys of the first object as headers
    const headers = Object.keys(tableData[0]);

    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  }

  renderTableData() {
    const { tableData } = this.props;
    if (!tableData || tableData.length === 0) return null;

    return tableData.map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((value, colIndex) => (
          <td key={colIndex}>{value}</td>
        ))}
      </tr>
    ));
  }

  render() {
    return (
      <div className="table-container">
        <h2>Table Component</h2>
        <table className="data-table">
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
