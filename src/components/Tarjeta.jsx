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
  return characters.results.map((character) => (
    <Card className="custom_card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
}

export default Tarjeta;
