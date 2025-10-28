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
import { deleteSingleRecipe } from "../../app/slice/recipeDelete";

/**
 * Responsible for rendering the recipes page and it's components
 */
const Recipes = () => {
  const dispatch = useDispatch();

  /**
   * Selects the recipes value from the redux store
   */

  const recipes = useSelector(
    (state) => state?.allRecipe?.data?.data?.recipes || []
  );

  /**
   * Selects the singleRecipes value from the redux store
   */
  let singleRecipes = useSelector(
    (state) => state?.singleRecipe?.data?.data?.recipe || []
  );

  /**
   * Selects the bookmarkedRecipe value from the redux store
   */
  const bookMarkedRecipe = useSelector(
    (state) => state?.bookmarkedRecipes || []
  );

  /**
   * Selects the value of input from the redux store
   */
  const inputValue = useSelector((state) => state?.inputRecipe?.data);

  /**
   * State that sets the current page of the recipes list
   */
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * State that contains the number of recipes to be displayed per page
   */
  const [recipesPerPage, setRecipesPerPage] = useState(10);

  /**
   * State that sets the totalPages from the recipes list
   */
  const [totalPages, setTotalPages] = useState(0);

  /**
   * State that determines the loading state
   */
  const [loading, setLoading] = useState(false);

  /**
   * State that determines if the new recipe input form is open so true otherwise false
   */
  const [isAddRecipeVisible, setIsAddRecipeVisible] = useState(false);

  /**
   * State that determines if the recipe delete button is clicked so true otherwise false
   */
  const [isTrashClicked, setTrashClicked] = useState(false);

  /**
   * State that determines if the recipe deletion is successfull than true otherwise false
   */
  const [recipeDeletedSuccessfull, setRecipeDeletedSuccessfull] =
    useState(false);

  /**
   * State that determines if the recipe deletion is fail than true otherwise false
   */
  const [recipeDeletedFail, setRecipeDeletedFail] = useState(false);

  function handleBookmark() {
    dispatch(toggleBookmark());
    dispatch(handleBookmarks(singleRecipes));
  }

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
   * Updates the value of total pages when the recipes length changes or the number of recipes per page change.
   */
  useEffect(() => {
    const dataLength = Math.ceil(recipes?.length / recipesPerPage);
    setTotalPages(dataLength);
  }, [recipes.length, recipesPerPage]);

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
      const res = await dispatch(deleteSingleRecipe(id)).unwrap();
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
