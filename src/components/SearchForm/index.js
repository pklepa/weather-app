import React, { useState } from "react";

import "./index.css";

import config from "../../config/config";
import utils from "../../utils/utils";
import SearchResult from "../SearchResult";
import SearchLoading from "../SearchLoading";

function SearchForm() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [resultVisibility, setResultVisibility] = useState(false);

  async function getWeather(city) {
    try {
      setIsLoading(true);
      setResultVisibility(true);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.REACT_APP_WEATHER_API_KEY}`;
      const response = await fetch(url, { mode: "cors" });
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
          `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        );
        const temp = utils.kelvin2Celsius(res.main.temp).toFixed(1);
        setTemperature(`${temp} ºC`);

        setIsLoading(false);
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
          placeholder="Search any city"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <span>search</span>
          <p>Search</p>
        </button>
      </form>

      <div
        className={
          resultVisibility ? "result-container" : "result-container hidden"
        }
      >
        {isLoading ? (
          <SearchLoading />
        ) : (
          <SearchResult
            city={city}
            weather={weather}
            weatherIcon={weatherIcon}
            temperature={temperature}
            setResultVisibility={setResultVisibility}
          />
        )}
      </div>
    </div>
  );
}

export default SearchForm;
