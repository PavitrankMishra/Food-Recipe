import React, { useState } from "react";
import "./Login.css";
import Header from "./Header";
import LoginLeft from "../Assets/Login2.jpeg";
import Logo from "../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleLogout } from "../app/slice/loginValue";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [inputUserN, setInputUserN] = useState("");
  const [inputUserP, setInputUserP] = useState("");
  const [inputLength, setInputLength] = useState(8);
  const [isInvalid, setIsInvalid] = useState(false);
  let inputUserName = "";
  let inputUserPassword = "";

  const dispatch = useDispatch();

  const loginValue = useSelector((state) => state?.loginValue?.data);

  const handleRecipeLogin = () => {
    if (
      inputUserN.length >= inputLength &&
      inputUserP.length >= inputLength &&
      loginValue == false
    ) {
      dispatch(handleLogin());
      navigate("/recipes");
      isInvalid(false);
    } else if (
      inputUserN.length >= 0 &&
      inputUserN.length < 8 &&
      inputUserP.length >= 0 &&
      inputUserP.length < 8
    ) {
      setIsInvalid(true);

      setTimeout(() => {
        setIsInvalid(false);
      }, 5000);
    }
  };

  const handleUserNameInput = (e) => {
    inputUserName += e.target.value;
    setInputUserN(inputUserName);

    if (inputUserName.length < 8) {
      console.log("User name is less than 8");
      console.log(inputUserName.length);
    }
  };

  const handleUserPasswordInput = (e) => {
    inputUserPassword += e.target.value;
    setInputUserP(inputUserPassword);

    if (inputUserPassword.length < 8) {
      console.log("User password is less than 8");
      console.log(inputUserPassword.length);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="loginContainer">
        <section className="loginLeftPart">
          <img src={LoginLeft} alt="Login Left Image" />
        </section>
        <section className="loginRightPart">
          <section className="loginInnerRightPart">
            <img src={Logo} alt="Logo Image" />
            <p>Cook easy, Eat Happy With Mealzo </p>
            <p className="subHeading">
              Your one stop destination for quick delicious and hassle free
              recipes to brighten every mealtime.
            </p>
            <section className="inputContainer">
              <input
                type="text"
                value={inputUserN}
                placeholder="Enter Username"
                className={`inputField ${
                  inputUserN.length < 8 ? "invalid" : ""
                }`}
                name="inputName"
                onChange={(e) => handleUserNameInput(e)}
              />
              {inputUserN.length > 0 && inputUserN.length < 8 ? (
                <section className="iconContainer">
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="invalidIcon"
                  />
                </section>
              ) : (
                ""
              )}
            </section>
            <section className="inputContainer">
              <input
                type="text"
                value={inputUserP}
                placeholder="Enter Password"
                className={`passwordField ${
                  inputUserP.length < 8 ? "invalid" : ""
                }`}
                name="inputPassword"
                onChange={(e) => handleUserPasswordInput(e)}
              />
              {inputUserP.length > 0 && inputUserP.length < 8 ? (
                <section className="iconContainer">
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="invalidIcon"
                  />
                </section>
              ) : (
                ""
              )}
            </section>
            {loginValue == false && (
              <button
                className="loginButton"
                onClick={() => handleRecipeLogin()}
              >
                Login
              </button>
            )}
            {isInvalid == true ? (
              <p>Username and password must be 8 characters.</p>
            ) : (
              <p>{""}</p>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
