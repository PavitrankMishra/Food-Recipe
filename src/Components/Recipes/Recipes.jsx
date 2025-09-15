import React, { useEffect, useRef, useState } from "react";
import Header from "../HomePage/Header";
import "./Recipes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipe } from "../../app/slice/allRecipes";
import { fetchSingleRecipe } from "../../app/slice/singleRecipe";
import { toggleBookmark } from "../../app/slice/singleRecipe";

import { handleBookmarks } from "../../app/slice/bookmarks";
import NewRecipe from "../NewRecipes/NewRecipe";
import RecipeHeader from "./RecipeHeader";
import RecipesMiddle from "./RecipesMiddle";
import RecipeDeletePrompt from "./RecipeDeletePrompt";
import RecipeDeleteMessage from "./RecipeDeleteSuccessMessage";
import RecipeDeleteFailMessage from "./RecipeDeleteFailMessage";
import RecipeDeleteSuccessMessage from "./RecipeDeleteSuccessMessage";

/**
 * Responsible for rendering the recipes page and it's components
 */
const Recipes = () => {
  const dispatch = useDispatch();

  /**
   * Selects the current recipes value from the redux store
   */

  const recipes = useSelector(
    (state) => state?.allRecipe?.data?.data?.recipes || []
  );

  let singleRecipes = useSelector(
    (state) => state?.singleRecipe?.data?.data?.recipe || []
  );

  const bookMarkedRecipe = useSelector(
    (state) => state?.bookmarkedRecipes || []
  );

  const inputValue = useSelector((state) => state?.inputRecipe?.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);
  const [isTrashClicked, setTrashClicked] = useState(false);
  const [recipeDeletedSuccessfull, setRecipeDeletedSuccessfull] =
    useState(false);
  const [recipeDeletedFail, setRecipeDeletedFail] = useState(false);

  function handleBookmark() {
    dispatch(toggleBookmark());
    dispatch(handleBookmarks(singleRecipes));
  }

  useEffect(() => {
    dispatch(fetchSingleRecipe());
    dispatch(fetchAllRecipe());
  }, []);

  /**
   * Determines the recipeStartingIndex
   */
  const recipeStartingIndex = (currentPage - 1) * recipesPerPage;

  /**
   * Determines the recipeEndIndex
   */
  const recipeEndIndex = currentPage * recipesPerPage;

  /**
   * Determines the current recipe list to be displayed
   */
  const currentData = recipes?.slice(recipeStartingIndex, recipeEndIndex);

  /**
   * Updates the value of total pages based on the data whenever the recipes dependency changes.
   */
  useEffect(() => {
    const dataLength = Math.ceil(recipes?.length / recipesPerPage);
    setTotalPages(dataLength);
  }, [recipes]);

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
        dispatch(fetchSingleRecipe(recipes[0].id));
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
              isAddRecipeVisible={isAddRecipeVisible}
              setIsAddRecipeVisible={setIsAddRecipeVisible}
              inputValue={inputValue}
            />
          </section>
          <section className="middleContainer">
            <RecipesMiddle
              loading={loading}
              currentData={currentData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              singleRecipes={singleRecipes}
              handleBookmark={handleBookmark}
              setIsAddRecipeVisible={setIsAddRecipeVisible}
              setTrashClicked={setTrashClicked}
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
