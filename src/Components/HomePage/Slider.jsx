import React, { useEffect, useState } from "react";
import "./Slider.css";
import Avocado from "../../Assets/avocado-dish.jpg";
import Burger from "../../Assets/Burger.webp";
import Cake from "../../Assets/cake.webp";
import Chinese from "../../Assets/chinese2.jpeg";
import Chole from "../../Assets/chole-recipe.jpg";
import Chowmein from "../../Assets/chowmein.jpg";
import Croissant from "../../Assets/Croissant.jpg";
import Dal from "../../Assets/Dal.jpg";
import Dosa from "../../Assets/dosa.jpg";
import Salad from "../../Assets/avocado-salad.jpg";
import Cake2 from "../../Assets/Cake2.webp";
import Pasta3 from "../../Assets/Pasta3.jpg";
import Sandwich from "../../Assets/Sandwich2.jpg";
import SpringRoll from "../../Assets/SpringRoll.jpg";

const Slider = () => {
  return (
    <section className="sliderContainer">
      <section className="headingContainer">
        <p className="main-heading">Flavors of the World</p>
        <p className="sub-heading">
          Discover easy-to-follow recipes crafted to inspire your kitchen
          adventures, ignite your creativity, and bring flavor, joy, and
          togetherness to every meal you prepare.
        </p>
      </section>
      <section className="slide-container">
        <section className="slide-Image">
          <img src={Dal} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake2} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Salad} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={SpringRoll} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Pasta3} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Sandwich} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Second section */}
        <section className="slide-Image">
          <img src={Dal} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake2} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Salad} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={SpringRoll} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Pasta3} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Sandwich} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Third Section */}
        <section className="slide-Image">
          <img src={Dal} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake2} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Salad} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={SpringRoll} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Pasta3} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Sandwich} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Fourth  */}
        <section className="slide-Image">
          <img src={Dal} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake2} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Salad} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={SpringRoll} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Pasta3} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Sandwich} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Fifth */}
        <section className="slide-Image">
          <img src={Dal} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake2} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Salad} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={SpringRoll} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Pasta3} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Sandwich} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>
      </section>
    </section>
  );
};

export default Slider;
