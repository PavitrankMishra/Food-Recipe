import React from "react";
import "./SideBar.css";
import { faBowlFood, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

const SideBar = ({ show, onClose }) => {
  // console.log(show);
  return (
    <>
      <section className={`sideBarContainer ${show ? "show" : ""}`}>
        <section className="sideBarInnerContainer">
          <section className="sideBarInnerContainer1">
            <section className="sideBarCrossContainer" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} className="cross" />
            </section>
            <section className="sideBarListContainer">
              <ul>
                <Link to="/">
                  <li>
                    <section className="buttonContainer">
                      <section className="iconContainer">
                        <FontAwesomeIcon icon={faHouse} className="homeIcon" />
                      </section>
                      <span>Home</span>
                    </section>
                  </li>
                </Link>
                <Link to="/recipes">
                  <li>
                    <section className="buttonContainer">
                      <section className="iconContainer">
                        <FontAwesomeIcon
                          icon={faBowlFood}
                          className="foodIcon"
                        />
                      </section>
                      <span>Recipes</span>
                    </section>
                  </li>
                </Link>
                <Link to="/login">
                  <li>
                    <section className="buttonContainer">
                      <section className="iconContainer">
                        <FontAwesomeIcon
                          icon={faRightToBracket}
                          className="loginIcon"
                        />
                      </section>
                      <span>Login</span>
                    </section>
                  </li>
                </Link>
              </ul>
            </section>
          </section>
          <section className="sideBarInnerContainer2">
            <section className="sideBarLogoContainer">
              <img src={Logo} alt="Logo Image" />
            </section>
            <section className="sideBarNameContainer">
              <h1 className="mealzoHeading">MEALZO</h1>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SideBar;
