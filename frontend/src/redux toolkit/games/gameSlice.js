import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gameService from "./gameService";

const initialState = {
  responseGames: [],
  game: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get ticket notes
export const getGames = createAsyncThunk(
  "games/getAll",
  async (pageNumber, thunkAPI) => {
    try {
      return await gameService.getAllGames(pageNumber);
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

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.games = action.payload;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = gameSlice.actions;
export default gameSlice.reducer;
