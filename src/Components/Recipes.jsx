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
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipe } from "../app/slice/allRecipes";
import { fetchSingleRecipe } from "../app/slice/singleRecipe";
import { toggleBookmark } from "../app/slice/singleRecipe";

const Recipes = ({
  data,
  recipe,
  getData,
  getId,
  setRecipe,
  bookMarkedRecipes,
  setBookMarkedRecipes,
}) => {
  const [inputValue, setInputValue] = useState("Pizza");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [servings, setRecipeServings] = useState(recipe?.recipeServings || 4);
  const dispatch = useDispatch();

  const recipes = useSelector(
    (state) => state?.allRecipe?.data?.data?.recipes || []
  );

  const singleRecipes = useSelector(
    (state) => state?.singleRecipe?.data?.data?.recipe || []
  );

  console.log(singleRecipes);

  const handleBookmark = () => {
    dispatch(toggleBookmark());
  };

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

  const handleSingleRecipe = (id) => {
    dispatch(fetchSingleRecipe(id));
  };

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
                  onClick={() => handleSingleRecipe(item.id)}
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
            {singleRecipes ? (
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
                      {singleRecipes.cookingTime || singleRecipes.cooking_time}{" "}
                      MINUTES
                    </span>
                  </section>
                  <section className="servingsContainer">
                    <FontAwesomeIcon icon={faUser} className="servingsIcon" />
                    <span>{singleRecipes.servings} Servings</span>
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
                    {singleRecipes.isBookmarked ? (
                      <FontAwesomeIcon
                        icon={faHeartSolid}
                        className="recipeBookmarkIcon"
                        style={{ color: "#f48982" }}
                        onClick={handleBookmark}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="recipeBookmarkIcon"
                        style={{ color: "#f48982" }}
                        onClick={handleBookmark}
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
              <p>There are no recipes available</p>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Recipes;
