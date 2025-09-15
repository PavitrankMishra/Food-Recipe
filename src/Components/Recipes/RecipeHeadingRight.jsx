import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./RecipeHeadingRight.css";

const RecipeHeadingRight = ({
  handleAddRecipeVisibility,
  handleBookmarkViewVisibility,
  handleBookmarkHoverVisiblity,
  isBookmarkViewVisible,
  setIsBookmarkViewVisible,
}) => {
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
