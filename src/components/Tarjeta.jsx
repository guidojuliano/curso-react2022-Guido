import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { allCharacters } from "../functions/functions";
import React, { useEffect, useState } from "react";
import "../App.css";
function Tarjeta() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    allCharacters(setCharacters);
  }, []);
  return (
    <>
      {characters !== null
      ? characters.map((character) => (
      <Card className="custom_card">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          
          <Button href={`/character/${character.id}`} variant="secondary">More details</Button>
        </Card.Body>
      </Card>
      ))
      : "Loading..."}
    </>
    
  );
}

export default Tarjeta;
