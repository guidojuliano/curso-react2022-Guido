import Header from "../components/Header";
import Tarjeta from "../components/Tarjeta";
import React from "react";
import "../App.css";
function HomePage() {
  
  return (
    <div id="Home">
      <Header></Header>
      <h1>Rick y Morty</h1>
      <div className="cards-container">
        <Tarjeta></Tarjeta>
      </div>
      
    </div>
  );
}
export default HomePage;
