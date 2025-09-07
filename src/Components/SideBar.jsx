import React from "react";
import "./SideBar.css";
import { faBowlFood, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../app/slice/loginValue";

const SideBar = ({ show, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginValue = useSelector((state) => state?.loginValue?.data);
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
      <section className={`sideBarContainer ${show ? "show" : ""}`}>
        <section className="sideBarInnerContainer">
          <section className="sideBarInnerContainer1">
            <section className="sideBarCrossContainer" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} className="cross" />
            </section>
            <section className="sideBarListContainer">
              <section className="buttonContainer" onClick={handleHomeDivert}>
                <section className="iconContainer">
                  <FontAwesomeIcon icon={faHouse} className="homeIcon" />
                </section>
                <section className="iconNameContainer">
                  <span>Home</span>
                </section>
              </section>
              <section className="buttonContainer" onClick={handleRecipeDivert}>
                <section className="iconContainer">
                  <FontAwesomeIcon icon={faBowlFood} className="foodIcon" />
                </section>
                <section className="iconNameContainer">
                  <span>Recipes</span>
                </section>
              </section>
              {loginValue == false ? (
                <section
                  className="buttonContainer"
                  onClick={handleButtonLogin}
                >
                  <section className="iconContainer">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="loginIcon"
                    />
                  </section>
                  <section className="iconNameContainer">
                    <span>Login</span>
                  </section>
                </section>
              ) : (
                <section
                  className="buttonContainer"
                  onClick={handleButtonLogout}
                >
                  <section className="iconContainer">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="loginIcon"
                    />
                  </section>
                  <section className="iconNameContainer">
                    <span>Logout</span>
                  </section>
                </section>
              )}
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
