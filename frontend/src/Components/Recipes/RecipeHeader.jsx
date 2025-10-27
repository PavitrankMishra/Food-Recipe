import React from "react";
import "./RecipeHeader.css";
import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "../Bookmark";
import Logo from "../../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipeHeadingLeft from "./RecipeHeadingLeft";
import RecipeHeadingRight from "./RecipeHeadingRight";

const RecipeHeader = ({
  setIsAddRecipeVisible,
  inputValue,
  updateInputValue,
}) => {
  return (
    <>
      <section className="recipeHeadingLeft">
        <RecipeHeadingLeft
          inputValue={inputValue}
          updateInputValue={updateInputValue}
        />
      </section>
      <section className="recipeHeadingRight">
        <RecipeHeadingRight setIsAddRecipeVisible={setIsAddRecipeVisible} />
      </section>
    </>
  );
};

export default RecipeHeader;
