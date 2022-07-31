//Get all favourite Items

import axios from "axios";

const getAllFavItems = async () => {};

const addToFavourites = async (id, state) => {
  const { data } = await axios.get(`/api/v1/games/${id}`);

  const item = {
    game: data._id,
    name: data.name,
    image: data.background_image,
  };
  return state.favouriteItem.push(item);
};

const removeFromFavourites = async () => {
  const response = await localStorage.getItem(
    "myFavGames",
    JSON.stringify(response.data)
  );

  return response;
};

const favService = {
  getAllFavItems,
  addToFavourites,
  removeFromFavourites,
};

export default favService;
