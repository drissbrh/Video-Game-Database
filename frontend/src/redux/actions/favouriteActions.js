import axios from "axios";

import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  FAVOURITE_RESET,
} from "../constants/favouriteConstants";

export const addToFavourites = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/games/${id}`);

  dispatch({
    type: ADD_TO_FAVOURITE,
    payload: {
      game: data._id,
      name: data.name,
      image: data.background_image,
      addedAt: new Date().toJSON(),
      //added,
    },
  });
  localStorage.setItem(
    "myGames",
    JSON.stringify(getState().favourite.favouriteItems)
  );
};

export const removeFromFavourites = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVOURITE,
    payload: id,
  });

  localStorage.setItem(
    "myGames",
    JSON.stringify(getState().favourite.favouriteItems)
  );
};
