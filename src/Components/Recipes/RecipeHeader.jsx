import React from "react";
import "./RecipeHeader.css";
import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "../Bookmark";
import Logo from "../../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipeHeadingLeft from "./RecipeHeadingLeft";
import RecipeHeadingRight from "./RecipeHeadingRight";

const RecipeHeader = ({
  handleBookmarkViewVisibility,
  handleBookmarkHoverVisiblity,
  handleAddRecipeVisibility,
  inputValue,
  updateInputValue,
  isBookmarkViewVisible,
  setIsBookmarkViewVisible,
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
        <RecipeHeadingRight
          handleAddRecipeVisibility={handleAddRecipeVisibility}
          handleBookmarkViewVisibility={handleBookmarkViewVisibility}
          handleBookmarkHoverVisiblity={handleBookmarkHoverVisiblity}
          isBookmarkViewVisible={isBookmarkViewVisible}
          setIsBookmarkViewVisible={setIsBookmarkViewVisible}
        />
      </section>
    </>
  );
};

export default RecipeHeader;
