import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results); // look api, characters are in [results]
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2> All Rick & Morty Characters !! </h2>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/${character.id}`}>
              {" "}
              <h3>{character.name}</h3>
            </Link>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
