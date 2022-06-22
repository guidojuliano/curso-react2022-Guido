import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { characterById } from "../functions/functions";

function Personaje() {
  const [character, setCharacter] = useState(null);
  const params  = useParams();
  useEffect(() => {
    characterById(params.id, setCharacter);
  } , []);

  return (
    <>
      
      {character !== null ? (
        <div className="personaje-container" id="personaje">
          <Header></Header>
          <h1>Personaje con el id {params.id}</h1>
          <img src={character.image}></img>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
        </div>
      ) : ('Loading...')}
      

    </>
  );
}
export default Personaje;
