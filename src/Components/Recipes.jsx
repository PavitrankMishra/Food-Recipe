import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./Recipes.css";
import Logo from "../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faClock,
  faHeart,
  faCircleCheck,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPlus,
  faMinus,
  faCartShopping,
  faArrowRightLong,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Bookmark from "./Bookmark";
import AddRecipe from "./AddRecipe";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipe } from "../app/slice/allRecipes";
import { fetchSingleRecipe } from "../app/slice/singleRecipe";
import { toggleBookmark } from "../app/slice/singleRecipe";
import { incrementServings } from "../app/slice/singleRecipe";
import { decrementServings } from "../app/slice/singleRecipe";
import { handleBookmarks } from "../app/slice/bookmarks";
import Button from "./Button";
import NewRecipe from "./NewRecipe";
import { handleInputField } from "../app/slice/inputValue";

const Recipes = () => {
  // const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const dispatch = useDispatch();
  const [isBookmarkViewVisible, setIsBookmarkViewVisible] = useState(false);
  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);
  console.log("The value of recipe visible", isAddRecipeVisible);

  const recipes = useSelector(
    (state) => state?.allRecipe?.data?.data?.recipes || []
  );

  const singleRecipes = useSelector(
    (state) => state?.singleRecipe?.data?.data?.recipe || []
  );

  const bookMarkedRecipe = useSelector(
    (state) => state?.bookmarkedRecipes || []
  );

  const inputValue = useSelector((state) => state?.inputRecipe?.data);
  console.log("The input value is: ", inputValue);

  console.log(singleRecipes);

  function handleBookmark() {
    dispatch(toggleBookmark());
    dispatch(handleBookmarks(singleRecipes));
  }

  useEffect(() => {
    dispatch(fetchSingleRecipe());
    dispatch(fetchAllRecipe());
  }, []);

  const recipeStartingIndex = (currentPage - 1) * recipesPerPage;
  const recipeEndIndex = currentPage * recipesPerPage;
  const currentData = recipes?.slice(recipeStartingIndex, recipeEndIndex);

  useEffect(() => {
    const dataLength = Math.ceil(recipes?.length / recipesPerPage);
    setTotalPages(dataLength);
  }, [recipes]);

  useEffect(() => {
    console.log("The current page is: ", currentPage);
  }, [currentPage]);

  function handlePageDecrement() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log("Decrement clicked");
    }
  }

  function handlePageIncrement() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      console.log("Increment clicked");
    }
  }

  function handleIncrementServings() {
    dispatch(incrementServings());
  }

  function handleDecrementServings() {
    if (singleRecipes.servings > 1) {
      dispatch(decrementServings());
    }
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (inputValue.length > 3) {
        dispatch(fetchAllRecipe(inputValue));
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  console.log("The value of inputValue: ", inputValue);

  const handleSingleRecipe = (id) => {
    dispatch(fetchSingleRecipe(id));
  };

  function updateInputValue(e) {
    dispatch(handleInputField(e.target.value));
  }

  function handleBookmarkViewVisibility() {
    setIsBookmarkViewVisible((prev) => !prev);
    console.log("Bookmark clicked");
  }
  function handleAddRecipeVisibility() {
    setIsAddRecipeVisible((prev) => !prev);
    console.log("Add recipe clicked");
  }

  function handleBookmarkHoverVisiblity() {
    if (!isBookmarkViewVisible) {
      setIsBookmarkViewVisible((prev) => !prev);
      console.log("Bokkmark Hover");
    }
  }

  function handleAddRecipeHoverVisibility() {
    if (!isAddRecipeVisible) {
      setIsAddRecipeVisible((prev) => !prev);
      console.log("Add Recipe Hover");
    }
  }

  return (
    <>
      {!isAddRecipeVisible ? <Header /> : ""}
      {!isAddRecipeVisible ? (
        <section className="recipesContainer">
          <section className="recipeHeadingContainer">
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
          </section>
          <section className="middleContainer">
            <section className="middleLeft">
              {currentData &&
                currentData.length > 0 &&
                currentData.map((item) => (
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
                    {currentData && currentData.length > 0 && (
                      <section className="userContainer">
                        <FontAwesomeIcon icon={faUser} />
                      </section>
                    )}
                  </section>
                ))}
              {currentData?.length > 0 ? (
                <section className="recipeButtonContainer">
                  <button
                    onClick={handlePageDecrement}
                    className={currentPage == 1 ? "disabled" : ""}
                  >
                    PREV
                  </button>
                  <button
                    onClick={handlePageIncrement}
                    className={currentPage == totalPages ? "disabled" : ""}
                  >
                    NEXT
                  </button>
                </section>
              ) : (
                ""
              )}
            </section>
            <section className="middleRight" key={singleRecipes?.id}>
              {singleRecipes &&
              typeof (singleRecipes === "object") &&
              singleRecipes.length !== 0 ? (
                <>
                  <section className="imageContainer">
                    <img
                      src={singleRecipes.imageURL || singleRecipes.image_url}
                    />
                  </section>
                  <section className="navigationContainer">
                    <section className="timingContainer">
                      <FontAwesomeIcon icon={faClock} className="clockIcon" />
                      <span className="minutes">
                        {singleRecipes.cookingTime ||
                          singleRecipes.cooking_time}{" "}
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
                      {singleRecipes?.recipePublisher ||
                        singleRecipes?.publisher}
                    </p>
                    <p>Please check out directions at their website.</p>
                    <a
                      href={singleRecipes.sourceURL || singleRecipes.source_url}
                    >
                      <button>DIRECTIONS</button>
                    </a>
                  </section>
                </>
              ) : (
                <>
                  <section className="box1">
                    <section className="left">
                      <FontAwesomeIcon
                        icon={faFaceSmile}
                        className="smileIcon"
                      />
                    </section>
                    <section className="right">
                      <p>Start by searching for a recipe</p>
                      <p>or an ingredient.</p>
                    </section>
                  </section>
                </>
              )}
            </section>
          </section>
        </section>
      ) : (
        <NewRecipe
          isAddRecipeVisible={isAddRecipeVisible}
          setIsAddRecipeVisible={setIsAddRecipeVisible}
        />
      )}
    </>
  );
};

export default Recipes;
