import React from "react";
import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../HomePage/Slider";

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
