import React from "react";
import * as WiIcons from "react-icons/wi";
import * as CiIcons from "react-icons/ci";
import * as TbIcons from "react-icons/tb";

const WeatherList = ({ data }) => {
  const IMG_URL = "https://openweathermap.org/img/wn/";

  return (
    <div className="weather">
      <div className="weather__container">
        <div className="weather__container__city">
          <h1>{data.name}</h1>
          <span>{new Date(data.dt * 1000).toLocaleDateString()}</span>
        </div>
        <div className="weather__container__desc">
          <p>Weather forecast:</p>
          <h2>{data.weather.map((data) => data.description).join(", ")}</h2>
          <img src={IMG_URL + data.weather[0].icon + "@2x.png"} alt="" />
        </div>
        <ul className="weather__container__informations">
          <li className="weather__container__informations__card">
            <WiIcons.WiHumidity size={30} />
            <p>Humidity</p>
            <h3>{data.main.humidity}%</h3>
          </li>
          <li className="weather__container__informations__card">
            <CiIcons.CiTempHigh size={30} />
            <p>Feels Like</p>
            <h3>{data.main.temp} °C</h3>
          </li>
          <li className="weather__container__informations__card">
            <TbIcons.TbWind size={30} />
            <p>Wind Speed</p>
            <h3>{data.wind.speed} MPH</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherList;
