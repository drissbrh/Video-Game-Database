import { configureStore } from "@reduxjs/toolkit";
import { gameDetailReducer, gameListReducer } from "./reducers/gameReducer";
import { favouriteReducer } from "./reducers/favouriteReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const favouriteItemsInLocalStorage = localStorage.getItem("myGames")
  ? JSON.parse(localStorage.getItem("myGames"))
  : [];

const userInfoInLocalStorage = localStorage.getItem("UserInfo")
  ? JSON.parse(localStorage.getItem("UserInfo"))
  : null;

const initialeState = {
  favourite: {
    favouriteItems: favouriteItemsInLocalStorage,
  },
  userLogin: {
    userInfo: userInfoInLocalStorage,
  },
};

const rootReducer = {};

const store = configureStore({ reducer: rootReducer });

export default store;
