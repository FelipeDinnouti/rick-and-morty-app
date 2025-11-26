import axios from "axios";

const CharacterApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character", 
  timeout: 10000,
});

export default CharacterApi;
