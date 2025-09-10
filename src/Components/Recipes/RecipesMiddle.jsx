import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import {
  faHeartBroken,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../CustomLoader/Loader";
import "./RecipesMiddle.css";

import {
  faUser,
  faClock,
  faHeart,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
const RecipesMiddle = ({
  loading,
  currentData,
  handleSingleRecipe,
  handlePageDecrement,
  currentPage,
  handlePageIncrement,
  totalPages,
  singleRecipes,
  handleDecrementServings,
  handleIncrementServings,
  handleBookmark,
}) => {
  return (
    <>
      <section className="middleLeft">
        {loading ? (
          <section className="loadingContainer">
            <Loader />
          </section>
        ) : currentData && currentData.length > 0 ? (
          <>
            {currentData.map((item) => (
              <section
                className="recipesList"
                key={item.id}
                onClick={() => handleSingleRecipe(item.id)}
              >
                <section className="recipesLeft">
                  <section className="imageContainer">
                    <img src={item.image_url} alt={item.recipe_title} />
                  </section>
                  <section className="nameContainer">
                    <p className="itemTitle">{item.title}</p>
                    <p className="itemPublisher">{item.publisher}</p>
                  </section>
                </section>
                <section className="userContainer">
                  <FontAwesomeIcon icon={faUser} />
                </section>
              </section>
            ))}

            <section className="recipeButtonContainer">
              <button
                onClick={handlePageDecrement}
                className={currentPage === 1 ? "disabled" : ""}
              >
                PREV
              </button>
              <button
                onClick={handlePageIncrement}
                className={currentPage === totalPages ? "disabled" : ""}
              >
                NEXT
              </button>
            </section>
          </>
        ) : (
          <p>{""}</p>
        )}
      </section>

      <section className="middleRight" key={singleRecipes?.id}>
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
              <section className="recipeBookmark">
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
      </section>
    </>
  );
};

export default RecipesMiddle;
