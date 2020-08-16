import React from "react";

import "./index.css";

function SearchResult(props) {
  const { city, weather, weatherIcon, temperature } = props;
  const { setResultVisibility } = props;

  return (
    <div className="search-result">
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
  );
}

export default SearchResult;
