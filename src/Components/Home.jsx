import React from "react";
import "./Home.css";
import Header from "./Header";
import Pizza from "../Assets/Pizza.jpg";
import Burger from "../Assets/Burger.webp";
import Noodles from "../Assets/Noodles.jpg";
import FrenchFries from "../Assets/FrenchFries.webp";
import Pasta from "../Assets/Pasta.jpg";
import Cake from "../Assets/cake.webp";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Working from "./Working";
import Hero from "./Hero";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import Banner2 from "./Banner2";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <ImageSlider /> */}
      {/* <Card /> */}
      {/* <Banner2 /> */}
      {/* <section className="categoriesContainer">
        <h1 className="categoriesHeading">TOP CATEGORIES</h1>
        <section className="categoriesSection">
          <section className="card1">
            <section className="imgDiv">
              <img src={Pizza} className="dishImage" alt="imageContainer" />
            </section>
            <section className="cardDescription">
              <h1>PIZZA</h1>
              <hr className="horizontalLine" />
              <section className="descriptionContainer">
                <p>
                  Crusty base tossed with rich sauce and melting cheese in every
                  bite.
                </p>
                <p>A classic treat in every bite!</p>
              </section>
              <section className="ratingContainer">
                <span>5</span>
                <FontAwesomeIcon icon={faStar} size="lg" color="#red" />
              </section>
            </section>
          </section>
          <section className="card1">
            <section className="imgDiv">
              <img src={Noodles} className="dishImage" alt="imageContainer" />
            </section>
            <section className="cardDescription">
              <h1>CHINESE</h1>
              <hr className="horizontalLine" />
              <section className="descriptionContainer">
                <p>
                  Noodles, dumplings, and stir-fries bursting with bold chinese
                  flavors.
                </p>
                <p>A classic treat in every bite!</p>
              </section>
              <section className="ratingContainer">
                <span>5</span>
                <FontAwesomeIcon icon={faStar} size="lg" />
              </section>
            </section>
          </section>
          <section className="card1">
            <section className="imgDiv">
              <img src={Pasta} className="dishImage" alt="imageContainer" />
            </section>
            <section className="cardDescription">
              <h1>NOODLES</h1>
              <hr className="horizontalLine" />
              <section className="descriptionContainer">
                <p>
                  Tender pasta, creamy sauce, and a burst of herbs in every
                  serve.
                </p>
                <p>Pasta that melts in your</p>
              </section>
              <section className="ratingContainer">
                <span>5</span>
                <FontAwesomeIcon icon={faStar} size="lg" />
              </section>
            </section>
          </section>
        </section>
      </section> */}
    </>
  );
};

export default Home;
