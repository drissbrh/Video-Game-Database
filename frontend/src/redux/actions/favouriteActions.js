import axios from "axios";

import {
  ADD_TO_MY_FAVOURITE_SUCCESS,
  ADD_TO_MY_FAVOURITE_FAIL,
  REMOVE_FROM_MY_FAVOURITE,
  FAVOURITE_LIST_MY_FAIL,
  FAVOURITE_LIST_MY_REQUEST,
  FAVOURITE_LIST_MY_SUCCESS,
} from "../constants/favouriteConstants";
import { logout } from "./userActions";

export const listMyFavourites = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FAVOURITE_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      header: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/favourites/`, config);
    dispatch({
      type: FAVOURITE_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: FAVOURITE_LIST_MY_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*export const addToFavourites = (id) => async (dispatch, getState) => {
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
};*/

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
