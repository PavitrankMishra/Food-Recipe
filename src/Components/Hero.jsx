import React from "react";
import "./Hero.css";
import Hero1 from "../Assets/Hero1.png";
import Button from "./Button";
import HeroRight from "../Assets/HeroRight.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <section className="heroContainer">
        <section className="heroLeft">
          <section className="leftText">
            <h1>Experience the</h1>
            <h1>
              <span>Comfort </span> of
            </h1>
            <h1>Homemade Cooking</h1>
          </section>
          <span className="subtext">
            Forkify is the best website to explore new Snacks and recipes of
            food and cakes it is very simple to use and the best way to find
            something new with the help of us
          </span>
          <section className="inputRecipe">
            <input
              type="text"
              value="Falafel Burgers"
              className="styled-input"
            />
            <section className="magnifyingContainer">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="magnifyingIcon"/>
            </section>
          </section>
          {/* <Button location={"/recipes"}>Explore Recipes</Button> */}
        </section>
        <section className="heroRight">
          <img src={HeroRight} alt="Hero Image" />
        </section>
      </section>
    </>
  );
};

export default Hero;
