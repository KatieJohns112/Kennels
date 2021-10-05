import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        {animal.image != null ?  <img src={require(`../../images/${animal.image}`).default} alt="my dog" className="animal__image"/> : <p>There isn't an image.</p>}
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
        <p>{animal.birthday}</p>
        <p>{animal.likes}</p>
        <p>{animal.weight}</p>
        <p>{animal.social}</p>
        </div>
    </div>
  );
};