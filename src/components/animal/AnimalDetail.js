import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "", birthday: "", likes: "", weight: "", social: "", customerId: "", locationId: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      history.push("/animals")
    );
  };
//  history allows you to put another URL on "stack" of already visited ones

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          image: animal.image,
          birthday: animal.birthday,
          likes: animal.likes,
          weight: animal.weight,
          social: animal.social,
          customerId: animal.customerId,
          locationId: animal.locationId
        });
        setIsLoading(false);
        console.log(animal.image)
      });
  }, [animalId]);

  return (
    <section className="animal">
      {/* <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div> */}
     {/*if animal.image is blank string: if true returns image if false returns "there isnt an image" */}
      {animal.image != "" ?  <img src={require(`../../images/${animal.image}`).default} alt="my dog" className="animal__image"/> : <p>There isn't an image.</p>}
      <section className="animal_info">
      <h4 className="animal__name">{animal.name}</h4>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__birthday">My birthday is : {animal.birthday}</div>
      <div className="animal__likes">I enjoy : {animal.likes}</div>
      <div className="animal__weight">I weigh : {animal.weight}</div>
      <div className="animal__social"> Is animal social? {animal.social}</div>
      <div className="animal_customerId">Customer ID number : {animal.customerId}</div>
      <div className="animal_locationId">Location ID number : {animal.locationId}</div>
      </section>
      <section className="animal_button">
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </section>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
    </section>
  );
}