import React from "react";
import "./Header.css";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../SideBar";
import { useState } from "react";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../app/slice/loginValue";

const Header = () => {
  const location = useLocation();

  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  const dispatch = useDispatch();

  const loginValue = useSelector((state) => state?.loginValue?.data);

  const navigate = useNavigate();
  function handleButtonLogin() {
    if (loginValue == false) {
      navigate("/login");
    }
  }
  function handleButtonLogout() {
    dispatch(handleLogout());
    if (loginValue == true) {
      navigate("/");
    }
  }

  function handleRecipeDivert() {
    if (loginValue == false) {
      navigate("/login");
    } else {
      navigate("/recipes");
    }
  }

  function handleHomeDivert() {
    navigate("/");
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
            <li
              className={location.pathname === "/" ? "active" : ""}
              onClick={handleHomeDivert}
            >
              <span>Home</span>
            </li>
            <li
              className={location.pathname === "/recipes" ? "active" : ""}
              onClick={handleRecipeDivert}
            >
              <span>Recipes</span>
            </li>
          </ul>
        </section>

        <section className="loginButtonContainer">
          {loginValue == false ? (
            <button onClick={handleButtonLogin}>Login</button>
          ) : (
            <button onClick={handleButtonLogout}>Logout</button>
          )}
        </section>
      </section>
      <SideBar show={showSideBar} onClose={toggleSideBar} />
    </>
  );
};

export default Header;
