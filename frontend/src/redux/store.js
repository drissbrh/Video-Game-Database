import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { gameDetailReducer, gameListReducer } from "./reducers/gameReducer";
import { favouriteReducer } from "./reducers/favouriteReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  favourite: favouriteReducer,
  gameList: gameListReducer,
  gameDetails: gameDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const middleware = [thunk];

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

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
