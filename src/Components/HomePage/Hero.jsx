import React from "react";
import "./Hero.css";
import Hero1 from "../../Assets/Hero1.png";
// import Button from "../Button";
import HeroRight from "../../Assets/HeroRight.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleInputField } from "../../app/slice/inputValue";

const Hero = () => {
  const inputValue = useSelector((state) => state?.inputRecipe?.data);
  const dispatch = useDispatch();

  const loginValue = useSelector((state) => state?.loginValue?.data);

  const navigate = useNavigate("");

  function handleRecipeLogin() {
    if (loginValue == false) {
      navigate("/login");
    } else {
      navigate("/recipes");
    }
  }

  return (
    <>
      <section className="heroContainer">
        <section className="heroTextContainer">
          <p>Bringing together flavors, stories, and recipes</p>
          <p> to make every meal unforgettable.</p>
        </section>
        <section className="inputRecipe">
          <section className="searchBar">
            <input
              type="text"
              value={inputValue}
              className="styled-input"
              onChange={(e) => dispatch(handleInputField(e.target.value))}
              placeholder="Falafel Burgers"
            />
            <button className="search-btn" onClick={handleRecipeLogin}>
              Search
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;