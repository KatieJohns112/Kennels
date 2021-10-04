import React from "react"
import "./Employee.css"

// this is a component
export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card_employee">
        <div className="card_content_employee">
          <h3>Name: <span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Address: {employee.address}</p>
          <p>Available: {employee.available}</p>
          <p>Enjoys: {employee.enjoys}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
        </div>
      </div>
    );
  }