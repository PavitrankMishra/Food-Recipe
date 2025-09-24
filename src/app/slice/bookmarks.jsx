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
      } else {
        state.data = state.data.filter((item) => item.id !== currentRecipe.id);
      }
    },
  },
});

export const { handleBookmarks } = bookmarkRecipesSlice.actions;
export default bookmarkRecipesSlice.reducer;
