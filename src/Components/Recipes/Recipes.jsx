import React, { useEffect, useRef, useState } from "react";
import Header from "../HomePage/Header";
import "./Recipes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import RecipeDeletePrompt from "./RecipeDeletePrompt";
import RecipeDeleteMessage from "./RecipeDeleteSuccessMessage";
import RecipeDeleteFailMessage from "./RecipeDeleteFailMessage";
import RecipeDeleteSuccessMessage from "./RecipeDeleteSuccessMessage";

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isBookmarkViewVisible, setIsBookmarkViewVisible] = useState(false);
  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);
  const [isTrashClicked, setTrashClicked] = useState(false);
  const [recipeDeletedSuccessfull, setRecipeDeletedSuccessfull] =
    useState(false);
  const [recipeDeletedFail, setRecipeDeletedFail] = useState(false);

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
  }

  function handleAddRecipeVisibility() {
    setIsAddRecipeVisible((prev) => !prev);
  }

  function handleBookmarkHoverVisiblity() {
    if (!isBookmarkViewVisible) {
      setIsBookmarkViewVisible((prev) => !prev);
    }
  }

  function handleAddRecipeHoverVisibility() {
    if (!isAddRecipeVisible) {
      setIsAddRecipeVisible((prev) => !prev);
    }
  }

  function handleTrashClicked() {
    setTrashClicked(true);
    setIsAddRecipeVisible(false);
  }

  const handleRecipeDelete = async (id) => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=d348a0b0-c7b8-4539-b6a6-80f883fdef51`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTrashClicked(false);
      dispatch(fetchAllRecipe(inputValue));
      if (res.status == 204 || res.statusText == "No Content") {
        setRecipeDeletedSuccessfull(true);
        setTimeout(() => {
          setRecipeDeletedSuccessfull(false);
        }, 5000);
      }
      if (res.status == 401 || res.statusText == "Unauthorized") {
        setRecipeDeletedFail(true);
        setTimeout(() => {
          setRecipeDeletedFail(false);
        }, 5000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isAddRecipeVisible && !isTrashClicked && <Header />}
      {!isAddRecipeVisible && !isTrashClicked && (
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
              handleTrashClicked={handleTrashClicked}
            />
          </section>
        </section>
      )}
      {isAddRecipeVisible && (
        <NewRecipe
          isAddRecipeVisible={isAddRecipeVisible}
          setIsAddRecipeVisible={setIsAddRecipeVisible}
        />
      )}

      {isTrashClicked && (
        <RecipeDeletePrompt
          singleRecipes={singleRecipes}
          isTrashClicked={isTrashClicked}
          setTrashClicked={setTrashClicked}
          handleRecipeDelete={handleRecipeDelete}
          inputValue={inputValue}
        />
      )}
      {recipeDeletedSuccessfull && <RecipeDeleteSuccessMessage />}
      {recipeDeletedFail && <RecipeDeleteFailMessage />}
    </>
  );
};

export default Recipes;
