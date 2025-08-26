import { configureStore } from "@reduxjs/toolkit";
import allRecipeReducer from "./slice/allRecipes";
import singleRecipeReducer from "./slice/singleRecipe";
import bookmarkRecipeReducer from "./slice/bookmarks";
import inputRecipeReducer from "./slice/inputValue";
import loginRecipeReducer from "./slice/loginValue";

export const store = configureStore({
  reducer: {
    allRecipe: allRecipeReducer,
    singleRecipe: singleRecipeReducer,
    bookmarkedRecipes: bookmarkRecipeReducer,
    inputRecipe: inputRecipeReducer,
    loginValue: loginRecipeReducer,
  },
});
