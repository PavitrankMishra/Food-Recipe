import React, { useEffect, useRef, useState } from "react";
import Header from "../HomePage/Header";
import "./Recipes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartShopping,
  faArrowRightLong,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipe } from "../../app/slice/allRecipes";
import { fetchSingleRecipe } from "../../app/slice/singleRecipe";
import { toggleBookmark } from "../../app/slice/singleRecipe";
import { incrementServings } from "../../app/slice/singleRecipe";
import { decrementServings } from "../../app/slice/singleRecipe";
import { handleBookmarks } from "../../app/slice/bookmarks";
import NewRecipe from "../NewRecipes/NewRecipe";
import { handleInputField } from "../../app/slice/inputValue";
import RecipeHeader from "./RecipeHeader";
import RecipesMiddle from "./RecipesMiddle";

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isBookmarkViewVisible, setIsBookmarkViewVisible] = useState(false);
  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);

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

  function handlePageDecrement() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handlePageIncrement() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
    if (inputValue.length > 3) {
      setLoading(true);

      const timerId = setTimeout(() => {
        dispatch(fetchAllRecipe(inputValue));
        setTimeout(() => setLoading(false), 2000);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [inputValue]);

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
            <RecipeHeader
              handleBookmarkViewVisibility={handleBookmarkViewVisibility}
              handleBookmarkHoverVisiblity={handleBookmarkHoverVisiblity}
              handleAddRecipeVisibility={handleAddRecipeVisibility}
              inputValue={inputValue}
              updateInputValue={updateInputValue}
              isBookmarkViewVisible={isBookmarkViewVisible}
              setIsBookmarkViewVisible={setIsBookmarkViewVisible}
            />
          </section>
          <section className="middleContainer">
            <RecipesMiddle
              loading={loading}
              currentData={currentData}
              handleSingleRecipe={handleSingleRecipe}
              handlePageDecrement={handlePageDecrement}
              currentPage={currentPage}
              handlePageIncrement={handlePageIncrement}
              totalPages={totalPages}
              singleRecipes={singleRecipes}
              handleDecrementServings={handleDecrementServings}
              handleIncrementServings={handleIncrementServings}
              handleBookmark={handleBookmark}
            />
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
