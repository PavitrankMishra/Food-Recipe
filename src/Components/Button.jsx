import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Button = ({ children, location }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="buttonContainer">
        <button onClick={() => navigate(`${location}`)}>{children}</button>
      </section>
    </>
  );
};

export default Button;
