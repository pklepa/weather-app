import React, { useState } from "react";

import Utils from "../../utils/utils";

function Home() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

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

  function handleClick() {
    getWeather(input)
      .then((res) => {
        setCity(res.name);
        setWeather(`${res.weather[0].main}, ${res.weather[0].description}`);
        const temp = Utils.kelvin2Celsius(res.main.temp).toFixed(2);
        setTemperature(`${temp} ºC`);
      })
      .catch((err) => {
        console.warn("An error occurred:", err);
      });
  }

  return (
    <div id="page-home">
      <input
        type="text"
        name="search"
        id="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Get weather</button>
      <h1>City: {city}</h1>
      <h2>Weather: {weather}</h2>
      <h2>Temperature: {temperature}</h2>
    </div>
  );
}

export default Home;
