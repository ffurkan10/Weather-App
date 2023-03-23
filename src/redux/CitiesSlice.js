import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "../servers/Api";

const CitiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default CitiesSlice.reducer;
