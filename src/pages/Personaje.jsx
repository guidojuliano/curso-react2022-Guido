import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { characterById } from "../functions/functions";

function Personaje() {
  const [character, setCharacter] = useState(null);
  const params = useParams();
  useEffect(() => {
    characterById(params.id, setCharacter);
  }, []);

  return (
    <>
      <Header></Header>
      {character !== null ? (
        <div className="personaje-container" id="personaje">
          <h1>{character.name}</h1>
          <img src={character.image}></img>
          <p>{character.description}</p>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
export default Personaje;
