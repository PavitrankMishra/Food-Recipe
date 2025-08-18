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

const Recipes = ({
  data,
  recipe,
  getData,
  getId,
  setRecipe,
  bookMarkedRecipes,
  setBookMarkedRecipes,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resPerPage, setResPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [servings, setRecipeServings] = useState(recipe?.recipeServings || 4);

  const handleBookMarked = (recipe) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      isBookmarked: !prevRecipe.isBookmarked,
    }));

    setBookMarkedRecipes((prev) => {
      const exists = prev.find((r) => r.id === recipe.id);

      if (exists) {
        return prev.filter((r) => r.id !== recipe.id);
      } else {
        return [...prev, { ...recipe, isBookmarked: true }];
      }
    });
  };

  useEffect(() => {
    const dataLength = Math.ceil(data?.length / resPerPage);
    setTotalPages(dataLength);
  }, [data]);

  useEffect(() => {
    console.log("The current page is: ", currentPage);
  }, [currentPage]);

  function handleServingIncrement() {
    const currentServing = servings;
    setRecipeServings(currentServing + 1);
  }

  function handleServingDecrement() {
    if (servings > 1) {
      const currentServing = servings;
      setRecipeServings(currentServing - 1);
    }
  }

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

  const sI = (currentPage - 1) * resPerPage;
  const eI = currentPage * resPerPage;
  const currentData = data?.slice(sI, eI);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (inputValue.length > 3) {
        console.log("The input value is: " + inputValue);
        console.log("It is called after 1 sec");
        getData(inputValue);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  function updateInputValue(e) {
    setInputValue(e.target.value);
  }

  const updatedIngredients =
    recipe?.recipeIngredients?.map((ing) => {
      const factor = servings / (recipe?.servings || 4);
      return {
        ...ing,
        quantity: ing.quantity ? (ing.quantity * factor).toFixed(2) : null,
      };
    }) || [];

  return (
    <>
      <Header />
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
              <p>ADD RECIPES</p>
              <p>BOOKMARK</p>
              <FontAwesomeIcon icon={faPlus} size="xl" className="plusIcon" />
              <FontAwesomeIcon
                icon={faBookmark}
                size="xl"
                className="bookmarkIcon"
              />
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
                  onClick={() => getId(item.id)}
                >
                  <section className="imageContainer">
                    <img src={item.image_url} alt={item.recipe_title} />
                  </section>
                  <section className="nameContainer">
                    <p className="itemTitle">{item.title}</p>
                    <p className="itemPublisher">{item.publisher}</p>
                  </section>
                  <section className="userContainer">
                    <FontAwesomeIcon icon={faUser} />
                  </section>
                </section>
              ))}
            <section className="recipeButtonContainer">
              <button onClick={handlePageDecrement}>PREV</button>
              <button onClick={handlePageIncrement}>NEXT</button>
            </section>
          </section>
          <section className="middleRight">
            {recipe ? (
              <>
                <section className="imageContainer">
                  <img src={recipe.imageURL} />
                </section>
                <section className="navigationContainer">
                  <section className="timingContainer">
                    <FontAwesomeIcon icon={faClock} className="clockIcon" />
                    <span className="minutes">
                      {recipe.cookingTime} MINUTES
                    </span>
                  </section>
                  <section className="servingsContainer">
                    <FontAwesomeIcon icon={faUser} className="servingsIcon" />
                    <span>{servings} Servings</span>
                    <section className="updationContainer">
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="minusIcon"
                        onClick={handleServingDecrement}
                      />
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="plusIcon"
                        onClick={handleServingIncrement}
                      />
                    </section>
                  </section>
                  <section className="recipeBookmark">
                    {recipe.isBookmarked ? (
                      <FontAwesomeIcon
                        icon={faHeartSolid}
                        className="recipeBookmarkIcon"
                        style={{ color: "#f48982" }}
                        onClick={() => handleBookMarked(recipe)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="recipeBookmarkIcon"
                        style={{ color: "#f48982" }}
                        onClick={() => handleBookMarked(recipe)}
                      />
                    )}
                  </section>
                </section>
                <section className="itemListContainer">
                  <h1>RECIPE INGREDIENTS</h1>
                  <section className="allItemContainer">
                    {updatedIngredients?.map((ing) => (
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
                  <p id="publisherName">{recipe?.recipePublisher}</p>
                  <p>Please check out directions at their website.</p>
                  <a href={recipe.sourceURL}>
                    <button>DIRECTIONS</button>
                  </a>
                </section>
              </>
            ) : (
              <p>There are no recipes available</p>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Recipes;