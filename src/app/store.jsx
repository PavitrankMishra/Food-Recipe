import { configureStore } from "@reduxjs/toolkit";
import allRecipeReducer from "./slice/allRecipes";
import singleRecipeReducer from "./slice/singleRecipe";
import bookmarkRecipeReducer from "./slice/bookmarks";

export const store = configureStore({
  reducer: {
    allRecipe: allRecipeReducer,
    singleRecipe: singleRecipeReducer,
    bookmarkedRecipes: bookmarkRecipeReducer,
  },
});
