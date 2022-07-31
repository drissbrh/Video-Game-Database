import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import gameReducer from "./games/gameSlice";
import favouriteReducer from "./favourites/faveSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gamesRed: gameReducer,
    favs: favouriteReducer,
  },
});

export default store;
