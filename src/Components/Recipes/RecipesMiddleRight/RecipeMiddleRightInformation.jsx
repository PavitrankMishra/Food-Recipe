import {
  faCircleCheck,
  faClock,
  faFaceSmileBeam,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { incrementServings } from "../../../app/slice/singleRecipe";
import { decrementServings } from "../../../app/slice/singleRecipe";
import RecipeDelete from "./RecipeDelete";

const RecipeMiddleRightInformation = ({
  handleBookmark,
  setIsAddRecipeVisible,
  setTrashClicked,
}) => {
  const dispatch = useDispatch();
  let singleRecipes = useSelector(
    (state) => state?.singleRecipe?.data?.data?.recipe || []
  );

  function handleIncrementServings() {
    dispatch(incrementServings());
  }

  function handleDecrementServings() {
    if (singleRecipes.servings > 1) {
      dispatch(decrementServings());
    }
  }

  function handleTrashClicked() {
    setTrashClicked(true);
    setIsAddRecipeVisible(false);
  }
  return (
    <>
      {singleRecipes &&
      typeof (singleRecipes === "object") &&
      singleRecipes.length !== 0 ? (
        <>
          <section className="imageContainer">
            <img src={singleRecipes.imageURL || singleRecipes.image_url} />
          </section>
          <section className="navigationContainer">
            <section className="timingContainer">
              <FontAwesomeIcon icon={faClock} className="clockIcon" />
              <span className="minutes">
                {singleRecipes.cookingTime || singleRecipes.cooking_time}{" "}
                Minutes
              </span>
            </section>
            <section className="servingsContainer">
              <FontAwesomeIcon icon={faUser} className="servingsIcon" />
              <span>{singleRecipes.servings} Servings</span>
              <section className="updationContainer">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="minusIcon"
                  onClick={handleDecrementServings}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="plusIcon"
                  onClick={handleIncrementServings}
                />
              </section>
            </section>

            <section className="recipeBookmarkContainer">
              <RecipeDelete
                singleRecipes={singleRecipes}
                handleTrashClicked={handleTrashClicked}
              />
              {singleRecipes.isBookmarked ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  className="recipeBookmarkIcon"
                  onClick={() => handleBookmark()}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="recipeBookmarkIcon"
                  onClick={() => handleBookmark()}
                />
              )}
            </section>
          </section>
          <section className="itemListContainer">
            <h1>RECIPE INGREDIENTS</h1>
            <section className="allItemContainer">
              {singleRecipes?.ingredients?.map((ing) => (
                <>
                  <section className="itemContainer">
                    <span>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="recipeIcons"
                      />
                    </span>
                    <span>
                      {ing?.quantity || ""} {ing?.unit || ""}{" "}
                      {ing?.description || ""}{" "}
                    </span>
                  </section>
                </>
              ))}
            </section>
          </section>
          <section className="directionsContainer">
            <h1 id="directionHeading">HOW TO COOK IT</h1>
            <p>The recipe was carefully designed and tested by</p>
            <p id="publisherName">
              {singleRecipes?.recipePublisher || singleRecipes?.publisher}
            </p>
            <p>Please check out directions at their website.</p>
            <a href={singleRecipes.sourceURL || singleRecipes.source_url}>
              <button>DIRECTIONS</button>
            </a>
          </section>
        </>
      ) : (
        <>
          <section className="box1">
            <section className="left">
              <FontAwesomeIcon icon={faFaceSmileBeam} className="smileIcon" />
            </section>
            <section className="right">
              <p>Start by searching for a recipe</p>
              <p>or an ingredient.</p>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default RecipeMiddleRightInformation;
