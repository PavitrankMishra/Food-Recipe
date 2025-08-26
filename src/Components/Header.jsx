import React from "react";
import "./Header.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const location = useLocation();

  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      <section className="headerContainer">
        <section className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="Company logo" />
          </Link>
          <h1 className="mealzoHeading">MEALZO</h1>
          <FontAwesomeIcon
            icon={faBars}
            className="burgerMenu"
            onClick={toggleSideBar}
          />
        </section>
        <section className="listContainer">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            {/* <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li> */}
            <li className={location.pathname === "/recipes" ? "active" : ""}>
              <Link to="/recipes">Recipes</Link>
            </li>
            {/* <li className={location.pathname === "/bookmarks" ? "active" : ""}>
              <Link to="/bookmarks">Bookmarks</Link>
            </li> */}
          </ul>
        </section>
        <section className="loginButtonContainer">
          <Button location={"/login"}>Login</Button>
        </section>
      </section>
      <SideBar show={showSideBar} onClose={toggleSideBar} />
    </>
  );
};

export default Header;
