import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async (location) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=151363d59f6d7b13627cec1694ab3f20&units=metric`
    );
    return response.data;
  }
);

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  try {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    const data = await response.json();
    if (data) {
      const cities = data.data.map((city) => city.city);
      return cities;
    }
  } catch (error) {
    console.log(error);
  }
});

// const CITY_LIST_URL =
//   "http://bulk.openweathermap.org/sample/city.list.min.json.gz";

// // Şehirlerin listesini almak için bir işlev
// export const getCities = createAsyncThunk("cities/getCities", async () => {
//   const response = await axios.get(CITY_LIST_URL);
//   const cities = response.data.map((city) => ({
//     id: city.id,
//     name: city.name,
//     country: city.country,
//   }));
//   return cities;
// });
