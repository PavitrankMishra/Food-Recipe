import React from "react";
import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../HomePage/Slider";
import Banner2 from "../Banner2";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
    </>
  );
};

export default Home;
