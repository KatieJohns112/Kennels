import React from "react"
import "./Employee.css"

// this is a component
export const EmployeeCard = ({ employee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Address: {employee.address}</p>
          <p>Available: {employee.available}</p>
          <p>Enjoys: {employee.enjoys}</p>
        </div>
      </div>
    );
  }