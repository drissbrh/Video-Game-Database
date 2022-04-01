import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { gameDetailReducer, gameListReducer } from "./reducers/gameReducer";
import { favouriteReducer } from "./reducers/favouriteReducer";

const reducer = combineReducers({
  favourite: favouriteReducer,
  gameList: gameListReducer,
  gameDetails: gameDetailReducer,
});

const middleware = [thunk];

const favouriteItemsInLocalStorage = localStorage.getItem("myGames")
  ? JSON.parse(localStorage.getItem("myGames"))
  : [];

const initialeState = {
  favourite: {
    favouriteItems: favouriteItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
