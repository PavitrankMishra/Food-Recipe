import React, { useEffect, useState } from "react";
import "./Slider.css";
import Avocado from "../Assets/avocado-dish.jpg";
import Burger from "../Assets/Burger.webp";
import Cake from "../Assets/cake.webp";
import Chinese from "../Assets/Chinese2.jpeg";
import Chole from "../Assets/chole-recipe.jpg";
import Chowmein from "../Assets/chowmein.jpg";
import Croissant from "../Assets/Croissant.jpg";
import Dal from "../Assets/Dal.jpg";
import Dosa from "../Assets/dosa.jpg";

const Slider = () => {
  return (
    <section className="sliderContainer">
      <section className="headingContainer">
        <p className="main-heading">Flavors of the World</p>
        <p className="sub-heading">A taste crafted with love & flavor</p>
      </section>
      <section className="slide-container">
        <section className="slide-Image">
          <img src={Avocado} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Chinese} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={Chole} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Chowmein} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Dal} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Second section */}
        <section className="slide-Image">
          <img src={Avocado} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Chinese} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={Chole} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Chowmein} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Dal} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Third Section */}
        <section className="slide-Image">
          <img src={Avocado} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Chinese} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={Chole} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Chowmein} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Dal} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>

        {/* Fourth  */}
        <section className="slide-Image">
          <img src={Avocado} alt="a dream catcher" />
        </section>
        <section className="slide-Image">
          <img src={Burger} alt="burger" />
        </section>
        <section className="slide-Image">
          <img src={Cake} alt="cake" />
        </section>
        <section className="slide-Image">
          <img src={Chinese} alt="chinese" />
        </section>
        <section className="slide-Image">
          <img src={Chole} alt="chole" />
        </section>
        <section className="slide-Image">
          <img src={Chowmein} alt="chowmein" />
        </section>
        <section className="slide-Image">
          <img src={Croissant} alt="croissant" />
        </section>
        <section className="slide-Image">
          <img src={Dal} alt="dal" />
        </section>
        <section className="slide-Image">
          <img src={Dosa} alt="dosa" />
        </section>
      </section>
    </section>
  );
};

export default Slider;

{
  /* <section className="slide-Image">
          <img
            src="https://picsum.photos/id/104/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/104/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/106/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/106/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/108/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/109/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/109/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/109/400/400"
            alt="a dream catcher"
          />
        </section>
        <section className="slide-Image">
          <img
            src="https://picsum.photos/id/109/400/400"
            alt="a dream catcher"
          />
        </section> */
}
