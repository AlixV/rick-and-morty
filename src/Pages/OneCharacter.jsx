import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OneCharacter = () => {
  const [character, setCharacter] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + params.id)
      .then(({ data }) => {
        console.log(data);
        setCharacter(data);
      })
      .catch((e) => console.log(e));
  }, []);
  // It's working but tells me that something is wrong with the dependency array ..

  if (!character.name) return <div>Loading</div>;
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p> Species : {character.species}</p>
      <p> Origin : {character.origin.name}</p>
      <p> Location : {character.location.name}</p>
    </div>
  );
};

export default OneCharacter;
