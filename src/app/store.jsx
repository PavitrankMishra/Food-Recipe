import { configureStore } from "@reduxjs/toolkit";
import allRecipeReducer from "./slice/allRecipes";

export const store = configureStore({
  reducer: {
    allRecipe:allRecipeReducer,
  },
});
