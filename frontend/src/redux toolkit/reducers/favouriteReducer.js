import {
  ADD_TO_MY_FAVOURITE_SUCCESS,
  REMOVE_FROM_MY_FAVOURITE,
} from "../constants/favouriteConstants";

const FAVOURITE_INITIALE_STATE = {
  favouriteItems: [],
};

export const favouriteReducer = (state = FAVOURITE_INITIALE_STATE, action) => {
  switch (action.type) {
    case ADD_TO_MY_FAVOURITE_SUCCESS:
      const item = action.payload;

      const existItem = state.favouriteItems.find((x) => x.game === item.game);

      if (existItem) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((x) =>
            x.game === existItem.game ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, item],
        };
      }
    case REMOVE_FROM_MY_FAVOURITE:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (x) => x.game !== action.payload
        ),
      };

    default:
      return state;
  }
};
