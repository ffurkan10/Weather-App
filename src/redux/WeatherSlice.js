import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../servers/Api";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const WeatherSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default WeatherSlice.reducer;
