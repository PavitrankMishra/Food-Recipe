import React, { useState } from "react";
import "./Login.css";
import Header from "./Header";
import LoginLeft from "../Assets/Login2.jpeg";
import Logo from "../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../app/slice/loginValue";

const Login = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserPassword, setInputUserPassword] = useState("");

  const dispatch = useDispatch();

  const loginValue = useSelector((state) => state?.loginValue?.data);
  console.log("The login values is: ", loginValue);

  const handleRecipeLogin = () => {
    dispatch(handleLogin());
    if (loginValue == false) {
      navigate("/recipes");
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
            <input
              type="text"
              value={inputUserName}
              placeholder="Enter Username"
              className="inputField"
              name="inputName"
              onChange={(e) => setInputUserName(e.target.value)}
            />
            <input
              type="text"
              value={inputUserPassword}
              placeholder="Enter Password"
              className="passwordField"
              name="inputPassword"
              onChange={(e) => setInputUserPassword(e.target.value)}
            />

            <button className="loginButton" onClick={() => handleRecipeLogin()}>
              Login
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
