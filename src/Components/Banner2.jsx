import React from "react";
import "./Banner2.css";
import Banner2Banner from "../Assets/Banner2Banner.png";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <>
      <section className="banner2Container">
        <section className="bannerLeft">
          <h1>Add Your Taste to</h1>
          <h1>The Table</h1>
          <section className="submitButtonContainer">
            <Link to="/">
              <button>Submit</button>
            </Link>
          </section>
        </section>
        <section className="bannerRight">
          <img src={Banner2Banner} alt="Banner" />
        </section>
      </section>
    </>
  );
};

export default Banner2;
