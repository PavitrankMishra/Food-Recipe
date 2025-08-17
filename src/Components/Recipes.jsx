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
  // const [isBookMarked, setIsBookMarked] = useState(false);

  // console.log(recipe);
  // console.log(data);

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

  // console.log(bookMarkedRecipes);

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
      {/* <section className="mostMainContainer">
        <Header />
        <section className="recipeContainer">
          <section className="recipeHeadingContainer">
            <img src={Logo} className="headingLogo" alt="logo" />
            <input
              type="text"
              placeholder="Search over 1,000,000 recipes"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <section className="containerRight">
              <button onClick={handleAddRecipeVisibility}>
                <FontAwesomeIcon icon={faPlus} className="plus" />
              </button>
              <section className="addRecipeWrapper">
                <button onClick={handleAddRecipeVisibility}>
                  <p className="addHeading">Add Recipe</p>
                </button>
                <AddRecipe
                  isRecipeVisible={isRecipeVisible}
                  setIsRecipeVisible={setIsRecipeVisible}
                />
              </section>
              <button onClick={handleVisibility} className="bookmarkButton">
                <FontAwesomeIcon icon={faBookmark} className="bookmark" />
              </button>
              <section className="bookmarkWrapper">
                <button>
                  <p className="bookmarkHeading" onClick={handleVisibility}>
                    Bookmark
                  </p>
                </button>
                <Bookmark
                  isVisible={isVisible}
                  bookMarkedRecipes={bookMarkedRecipes}
                  setIsVisible={setIsVisible}
                />
              </section>
            </section>
          </section>

          <section className="recipeMiddleContainer">
            <section className="recipeMiddleLeft">
              {currentData && currentData.length > 0 ? (
                currentData.map((item) => (
                  <section
                    className="recipeSection"
                    key={item.id}
                    onClick={() => sendID(item.id)}
                  >
                    <section className="recipe1">
                      <section className="recipeImage">
                        <img src={item.image_url} alt={item.title} />
                      </section>
                      <section className="recipeInner">
                        <p id="itemName">{item.title}</p>
                        <p id="personName">{item.publisher}</p>
                      </section>
                    </section>
                    <section className="userSection">
                      <FontAwesomeIcon icon={faUser} />
                    </section>
                  </section>
                ))
              ) : (
                <p>There is no data</p>
              )} */}

      {/* Pagination */}
      {/* <section className="buttonContainer">
                <button
                  className="butonLeft"
                  onClick={handlePreviousList}
                  disabled={page === 1}
                >
                  Prev
                </button>
                <button
                  className="buttonRight"
                  onClick={handleNextList}
                  disabled={page >= Math.ceil(data?.length / resPerPage)}
                >
                  Next
                </button>
              </section>
            </section> */}

      {/* Right Side: Selected Recipe Details */}
      {/* <section className="recipeMiddleRight">
              {recipe ? (
                <>
                  <section className="sec-1">
                    <img src={recipe.image_url} alt={recipe.title} />
                    <p>{recipe.title}</p>
                  </section>

                  <section className="sec-2">
                    <section className="clockContainer">
                      <FontAwesomeIcon icon={faClock} className="clock" />
                      <p>{recipe.cooking_time} minutes</p>
                    </section>
                    <section className="userContainer">
                      <FontAwesomeIcon icon={faUser} className="user" />
                      <p>{servings} Servings</p>
                      <section className="actions">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="minus"
                          onClick={decrementCount}
                        />
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="plus"
                          onClick={incrementCount}
                        />
                      </section>
                    </section>

                    <section className="likeContainer">
                      <button onClick={() => handleBookMark(recipe)}>
                        <FontAwesomeIcon
                          icon={
                            bookMarkedRecipes.find((r) => r.id === recipe.id)
                              ? faHeartSolid
                              : faHeart
                          }
                          className="heart"
                        />
                      </button>
                    </section>
                  </section>
                  <section className="sec-3">
                    <h2>Recipe Ingredients</h2>
                    {updatedIngredients.length > 0 ? (
                      <ul className="listContainer">
                        {updatedIngredients.map((ig, index) => (
                          <li key={index}>
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="check"
                            />
                            <p>
                              {`${ig.quantity || ""}`} {`${ig.unit}`}{" "}
                              {`${ig.description}`}
                            </p>
                            <p>{` `}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>There are no ingredients listed.</p>
                    )} */}
      {/* <button className="addToCart">
                    <FontAwesomeIcon icon={faCartShopping} /> ADD TO SHOPPING
                    LIST
                  </button> */}
      {/* </section>

                  <section className="sec-4">
                    <h1>HOW TO COOK IT</h1>
                    <p>The recipe was carefully designed and tested by </p>
                    <p>
                      <strong>{recipe.publisher}</strong>.
                    </p>
                    <p>Please check out directions at their website.</p>

                    <Link to={recipe.source_url} target="_blank">
                      <button>
                        DIRECTIONS <FontAwesomeIcon icon={faArrowRightLong} />
                      </button>
                    </Link>
                  </section>
                </>
              ) : (
                <p>Select a recipe to view details</p>
              )}
            </section>
          </section>
        </section>
      </section> */}
    </>
  );
};

export default Recipes;

// const handlePreviousList = () => {
//   setPage((p) => p - 1);
// };

// const handleNextList = () => {
//   setPage((p) => p + 1);
// };

// const sendID = (id) => {
//   getId(id);
//   setServings(recipe?.servings || 4);
// };

// const incrementCount = () => {
//   setServings((prev) => prev + 1);
// };

// const decrementCount = () => {
//   setServings((prev) => (prev > 1 ? prev - 1 : 1));
// };

// const updatedIngredients =
//   recipe?.ingredients?.map((ing) => {
//     const factor = servings / (recipe?.servings || 4);
//     return {
//       ...ing,
//       quantity: ing.quantity ? (ing.quantity * factor).toFixed(2) : null,
//     };
//   }) || [];

// const [bookMarkedRecipes, setBookMarkedRecipes] = useState([]);

// function handleBookMark(recipe) {
//   setBookMarkedRecipes((prev) => {
//     const alreadyBookMarked = prev.find((r) => r.id === recipe.id);
//     if (alreadyBookMarked) {
//       return prev.filter((r) => r.id !== recipe.id);
//     } else {
//       return [...prev, recipe];
//     }
//   });
//   console.log("Bookmarked clicked");
// }

// const [isVisible, setIsVisible] = useState(false);

// const handleVisibility = () => {
//   setIsVisible((prev) => !prev);
//   console.log(isVisible);
// };

// const [isRecipeVisible, setIsRecipeVisible] = useState(false);
// const handleAddRecipeVisibility = () => {
//   setIsRecipeVisible((prev) => !prev);
//   console.log("Is the add recipe visible: " + isRecipeVisible);
// };
