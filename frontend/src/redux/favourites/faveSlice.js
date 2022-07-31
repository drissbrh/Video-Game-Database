import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favService from "./favService";

// Get games from localstorage
const favGames = JSON.parse(localStorage.getItem("myFavGames"));

const initialState = {
  favouriteItems: favGames ? favGames : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get All Favourite games
export const getAllFavItems = createAsyncThunk(
  "favourites/getAll",
  async (thunkAPI) => {
    try {
      return await favService.getAllFavItems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    addToFavs: (state, action) => {
      const item = action.payload;

      const existItem = state.favouriteItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((x) =>
            x._id === existItem._id ? existItem : x
          ),
        };
      } else {
        let newItem = { ...action.payload };
        state.favouriteItems.push(newItem);
      }

      localStorage.setItem("myFavGames", JSON.stringify(state.favouriteItems));
    },
    removeFromFavourites: (state, action) => {
      const gameId = action.payload;
      state.favouriteItems = state.favouriteItems.filter(
        (x) => x._id !== gameId
      );

      localStorage.setItem("myFavGames", JSON.stringify(state.favouriteItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFavItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favouriteItems = action.payload;
      })
      .addCase(getAllFavItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.favouriteItems = [];
      });
  },
});

export const { reset, addToFavs, removeFromFavourites } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
