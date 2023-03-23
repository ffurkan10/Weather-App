import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CitiesSlice from "../redux/CitiesSlice";
import WeatherSlice from "../redux/WeatherSlice";

export default configureStore({
  reducer: {
    weather: WeatherSlice,
    cities: CitiesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
