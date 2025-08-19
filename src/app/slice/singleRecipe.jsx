import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchAllRecipe } from "./allRecipes";

export const fetchSingleRecipe = createAsyncThunk(
  "fetchSingleRecipe",
  async (recipeId) => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
    );
    return response.json();
  }
);
const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    toggleBookmark: (state) => {
      if (state.data?.data?.recipe) {
        state.data.data.recipe.isBookmarked =
          !state.data.data.recipe.isBookmarked;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleRecipe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = {
        ...action.payload,
        data: {
          ...action.payload.data,
          recipe: {
            ...action?.payload?.data?.recipe,
            isBookmarked: false,
          },
        },
      };
    });
    builder.addCase(fetchSingleRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const {toggleBookmark} = singleRecipeSlice.actions;
export default singleRecipeSlice.reducer;
