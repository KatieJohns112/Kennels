import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture class="image">
            <img src={require(`../../images/${animal.image}`).default} alt="Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <p>Birthday: {animal.birthday}</p>
          <p>Likes: {animal.likes}</p>
          <p>Weight: {animal.weight}</p>
          <p>Social: {animal.social}</p>
        </div>
      </div>
    );
  }

