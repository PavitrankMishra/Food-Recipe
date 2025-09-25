import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./RecipeHeadingRight.css";
import Bookmark from "../Bookmark";

const RecipeHeadingRight = ({ setIsAddRecipeVisible }) => {
  /**
   * State that makes bookmarkViewVisible when true and hide when false
   */

  const [isBookmarkViewVisible, setIsBookmarkViewVisible] = useState(false);

  /**
   * Function that toggles the state isBookmarkViewVisible
   */
  function handleBookmarkViewVisibility() {
    setIsBookmarkViewVisible((prev) => !prev);
  }

  /**
   * Function that toggles the state isBookmarkViewVisible if isBookmarkViewVisible is false
   */

  function handleBookmarkHoverVisiblity() {
    if (!isBookmarkViewVisible) {
      setIsBookmarkViewVisible((prev) => !prev);
    }
  }

  /**
   * Function that updates the state isAddRecipeVisible
   */
  function handleAddRecipeVisibility() {
    setIsAddRecipeVisible((prev) => !prev);
  }

  return (
    <>
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
    </>
  );
};

export default RecipeHeadingRight;
