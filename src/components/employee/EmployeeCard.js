import React from "react"
import "./Employee.css"

// this is a component
export const EmployeeCard = ({ employee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../../images/blonde-puppy.jpeg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Address: {employee.address}</p>
        </div>
      </div>
    );
  }