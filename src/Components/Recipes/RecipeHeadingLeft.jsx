import React from "react";
import "./RecipeHeadingLeft.css";
import Logo from "../../Assets/Logo.png";

const RecipeHeadingLeft = ({ inputValue, updateInputValue }) => {
  return (
    <>
      <img src={Logo} alt="Website Logo" />
      <input
        type="text"
        placeholder="Search over 1,00,000 recipes"
        className="inputField"
        value={inputValue}
        onChange={updateInputValue}
        id="inputFieldId"
      />
    </>
  );
};

export default RecipeHeadingLeft;
