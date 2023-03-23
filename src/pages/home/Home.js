import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherList from "../../components/weatherList/WeatherList";
import { fetchLocation, fetchCities } from "../../servers/Api";
import * as AiIcons from "react-icons/ai";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const Home = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const status = useSelector((state) => state.weather.status);
  const data = useSelector((state) => state.weather.data);
  const cities = useSelector((state) => state.cities.list);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSelectedCity = (city) => {
    setLocation(city);
    dispatch(fetchLocation(city));
    setLocation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLocation(location));
    setLocation("");
  };

  const filteredCities =
    location === ""
      ? []
      : cities.filter((city) =>
          city.toLowerCase().startsWith(location.toLowerCase())
        );

  return (
    <div className="home">
      <div className="home__container">
        <form className="home__container__form" onSubmit={handleSubmit}>
          <div className="home__container__form__search">
            <input
              className="home__container__form__search__input"
              type="text"
              placeholder="Enter city name"
              value={location}
              onChange={handleInputChange}
            />
            <button
              className="home__container__form__search__input__btn"
              type="submit"
              disabled={!location}
            >
              <span>Get Weather</span>
              <AiIcons.AiOutlineSearch
                className="home__container__form__search__input__btn__icon"
                size={20}
              />
            </button>
          </div>
          {filteredCities.length > 0 && (
            <ul className="home__container__form__lists">
              {filteredCities.map((city) => (
                <li
                  className="home__container__form__lists__list"
                  key={city}
                  onClick={() => handleSelectedCity(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </form>
        {status === "succeeded" && <WeatherList data={data} />}
        {status === "failed" && <Error location={location} />}
        {status === "loading" && <Loading />}
      </div>
    </div>
  );
};

export default Home;
