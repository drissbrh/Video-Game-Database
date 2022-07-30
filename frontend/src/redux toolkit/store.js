import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import gameReducer from "./games/gameSlice";

// const favouriteItemsInLocalStorage = localStorage.getItem("myGames")
//   ? JSON.parse(localStorage.getItem("myGames"))
//   : [];

// const userInfoInLocalStorage = localStorage.getItem("UserInfo")
//   ? JSON.parse(localStorage.getItem("UserInfo"))
//   : null;

// const initialeState = {
//   favourite: {
//     favouriteItems: favouriteItemsInLocalStorage,
//   },
//   userLogin: {
//     userInfo: userInfoInLocalStorage,
//   },
// };

const store = configureStore({
  reducer: {
    auth: authReducer,
    gamesRed: gameReducer,
  },
});

export default store;
