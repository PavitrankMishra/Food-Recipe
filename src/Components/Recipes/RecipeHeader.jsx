import React from "react";
import "./RecipeHeader.css";
import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "../Bookmark";
import Logo from "../../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeHeader = ({
  handleBookmarkViewVisibility,
  handleBookmarkHoverVisiblity,
  handleAddRecipeVisibility,
  inputValue,
  updateInputValue,
  isBookmarkViewVisible,
  setIsBookmarkViewVisible
}) => {
  return (
    <>
      <section className="recipeHeadingLeft">
        <img src={Logo} alt="Website Logo" />
        <input
          type="text"
          placeholder="Search over 1,00,000 recipes"
          className="inputField"
          value={inputValue}
          onChange={updateInputValue}
          id="inputFieldId"
        />
      </section>
      <section className="recipeHeadingRight">
        <section className="bookmarkContainer">
          <button onClick={handleAddRecipeVisibility}>Add Recipes</button>
          <button
            onClick={handleBookmarkViewVisibility}
            onMouseEnter={handleBookmarkHoverVisiblity}
          >
            Bookmark
          </button>
          <FontAwesomeIcon
            icon={faPlus}
            size="xl"
            className="plusIcon"
            onClick={handleAddRecipeVisibility}
          />
          <FontAwesomeIcon
            icon={faBookmark}
            size="xl"
            className="bookmarkIcon"
            onClick={handleBookmarkViewVisibility}
            onMouseEnter={handleBookmarkHoverVisiblity}
          />
          {isBookmarkViewVisible ? (
            <Bookmark
              isVisible={isBookmarkViewVisible}
              setIsVisible={setIsBookmarkViewVisible}
            />
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
};

export default RecipeHeader;
