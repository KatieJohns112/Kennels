import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import { useHistory } from 'react-router-dom';
import "./AnimalList.css"

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const history = useHistory();

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  // make sure to import deleteAnimal from AnimalCard
  const handleDeleteAnimal = id => {
    deleteAnimal(id)
      .then(() => getAllAnimals().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
<>
    {/* //add this button above your display of animal cards */}
  <section className="section-content">
    <button type="button"
      className="btn"
      onClick={() => {history.push("/animals/create")}}>
      Create new Animal Card
    </button>
  </section>
  <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal} />
        // add handDeleteAnimal to display on animal card
      )}
  </div>
    </>
  );
};





