import React from "react"
import "./Location.css"

// this is a component
export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card_location">
        <div className="card_content_location">
          <h3>Name: <span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close</button>
        </div>
      </div>
    );
  }