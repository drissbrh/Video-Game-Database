import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  FAVOURITE_RESET,
} from "../constants/favouriteConstants";

const FAVOURITE_INITIALE_STATE = {
  favouriteItems: [],
};

export const favouriteReducer = (state = FAVOURITE_INITIALE_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
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
    case REMOVE_FROM_FAVOURITE:
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
