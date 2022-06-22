import Header from "../components/Header";
import Tarjeta from "../components/Tarjeta";
import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/functions";
import "../App.css";
function HomePage() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  return (
    <div id="Home">
      <Header></Header>
      <h1>Rick y Morty</h1>
      {characters !== null
        ? characters.map((character) => (
            <div key={character.id} className="cards-container">
              <a href="#">
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
              </a>
            </div>
          ))
        : "Loading..."}
      ,
    </div>
  );
}
export default HomePage;
