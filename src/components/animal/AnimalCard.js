import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    return (
      <div className="card_animal">
        <div className="card_animal_content">
          <picture className="image">
            <img src={require(`../../images/${animal.image}`).default} alt="Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {firstLetterCase(animal.name)}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <p>Birthday: {animal.birthday}</p>
          <p>Likes: {animal.likes}</p>
          <p>Weight: {animal.weight}</p>
          <p>Social: {animal.social}</p>
          <p>Customer ID: {animal.customerId}</p>
          <p>Location ID: {animal.locationId}</p>
          <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
          <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }

