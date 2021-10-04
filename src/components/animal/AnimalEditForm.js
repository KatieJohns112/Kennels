// this is a component

import React, { useState, useEffect } from "react"
import "./AnimalForm.css"
import { useParams, useHistory } from "react-router-dom"
import { getAnimalById } from "../../modules/AnimalManager"
import { update } from "../../modules/AnimalManager"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image:"", birthday:"", likes:"", weight:"", social:"", customerId:1, locationId:1 });
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      image: animal.image,
      birthday: animal.birthday,
      likes: animal.likes,
      weight: animal.weight,
      social: animal.social,
      customerId: 1,
      locationId:1
    };
console.log(editedAnimal)
     update(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
   getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={animal.image}
            />
            <label htmlFor="breed">Image</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="birthday"
              value={animal.birthday}
            />
            <label htmlFor="breed">Birthday</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="likes"
              value={animal.likes}
            />
            <label htmlFor="breed">Likes</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="weight"
              value={animal.weight}
            />
            <label htmlFor="breed">Weight</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="social"
              value={animal.social}
            />
            <label htmlFor="breed">Is animal social?</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="customerId"
              value={animal.customerId}
            />
            <label htmlFor="breed">Customer ID</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="locationId"
              value={animal.locationId}
            />
            <label htmlFor="breed">Location ID</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}