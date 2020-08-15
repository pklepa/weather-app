import React from "react";

import "../../assets/fonts/fonts.css";
import "./index.css";

import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div id="page-home">
      <Header />

      <SearchForm />

      <Footer />
    </div>
  );
}

export default Home;
