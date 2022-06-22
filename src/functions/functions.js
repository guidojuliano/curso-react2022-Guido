import axios from "axios";

const allCharacters = async (state) => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/"
  );

  state(response.data.results);
};

const characterById = async (state, id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(response.data);
}
  
export { allCharacters, characterById };
