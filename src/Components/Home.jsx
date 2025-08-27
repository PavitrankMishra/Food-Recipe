import React from "react";
import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
