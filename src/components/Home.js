import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../modules/AnimalManager"
import { PropsAndState } from "./PropsAndStates";

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(res => setSpotlightId(res));
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
    <h2>Nashville Kennels</h2>
    <h2>Loving care when you're not there.</h2>

      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};


