import { createSlice, current } from "@reduxjs/toolkit";

const bookmarkRecipesSlice = createSlice({
  name: "bookmarkedRecipe",
  initialState: {
    data: [],
  },
  reducers: {
    handleBookmarks: (state, action) => {
      const currentRecipe = action.payload;
      const exists = state.data.find((item) => item.id === currentRecipe.id);

      if (!exists) {
        state.data.push(currentRecipe);
        console.log("Recipe added:", currentRecipe);
      } else {
        state.data = state.data.filter((item) => item.id !== currentRecipe.id);
        console.log("Recipe removed:", currentRecipe);
      }

      console.log("Current bookmarks:", state.data);
    },
  },
});

export const { handleBookmarks } = bookmarkRecipesSlice.actions;
export default bookmarkRecipesSlice.reducer;
