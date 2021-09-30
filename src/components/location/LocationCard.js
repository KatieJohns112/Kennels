import React from "react"
import "./Location.css"

// this is a component
export const LocationCard = ({ location }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
        </div>
      </div>
    );
  }