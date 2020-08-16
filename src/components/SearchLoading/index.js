import React from "react";

import "./index.css";

import loading from "../../assets/images/loading.svg";

function SearchLoading() {
  return (
    <div className="search-loading">
      <img src={loading} alt="Loading" />
      <h1>Loading</h1>
    </div>
  );
}

export default SearchLoading;
