import axios from "axios";

const API_URL = "/api/v1/games";

//Get all Games
const getAllGames = async (pageNumber = "") => {
  const response = await axios.get(API_URL + `?pageNumber=${pageNumber}`);
  return response.data;
};

//Get a game by Id
const getGameById = async (id) => {
  const response = await axios.get(API_URL + `/${id}`);
  return response.data;
};

const gameService = {
  getAllGames,
  getGameById,
};

export default gameService;
