import React, { useState } from "react";

import "./index.css";

import utils from "../../utils/utils";

function SearchForm() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const [resultVisibility, setResultVisibility] = useState(false);

  async function getWeather(city) {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb5d4cb291962932245b3480bd61fc75`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    getWeather(input)
      .then((res) => {
        setCity(res.name);
        setWeather(utils.capitalize(res.weather[0].description));
        setWeatherIcon(
          `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        );
        const temp = utils.kelvin2Celsius(res.main.temp).toFixed(2);
        setTemperature(`${temp} ºC`);
        setResultVisibility(true);
      })
      .catch((err) => {
        console.warn("An error occurred:", err);
      });
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <span>search</span> Search
        </button>
      </form>

      <div
        className={resultVisibility ? "query-result" : "query-result hidden"}
      >
        <button id="btn-close" onClick={() => setResultVisibility(false)}>
          close
        </button>
        <h1 className="city-name">{city}</h1>
        <div className="img-container">
          <img src={weatherIcon} alt="Weather icon" />
        </div>
        <h2 className="weather-description">{weather}</h2>
        <h2 className="current-temperature">{temperature}</h2>
      </div>
    </div>
  );
}

export default SearchForm;
