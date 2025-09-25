import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const fetchSingleRecipe = createAsyncThunk(
  "fetchSingleRecipe",
  async (recipeId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/${recipeId}`
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
    incrementServings: (state) => {
      const recipeCopy = current(state.data.data.recipe);

      const originalServings = recipeCopy.servings;
      const newServings = originalServings + 1;
      const factor = newServings / originalServings || 4;

      state.data.data.recipe.servings = newServings;
      state.data.data.recipe.ingredients = recipeCopy?.ingredients?.map(
        (ing) => ({
          ...ing,
          quantity: ing.quantity ? (ing.quantity * factor).toFixed(2) : null,
        })
      );
    },
    decrementServings: (state) => {
      const recipeCopy = current(state.data.data.recipe);

      const originalServings = recipeCopy.servings;
      const newServings = originalServings - 1;
      const factor = newServings / originalServings || 4;

      state.data.data.recipe.servings = newServings;
      state.data.data.recipe.ingredients = recipeCopy?.ingredients?.map(
        (ing) => ({
          ...ing,
          quantity: ing.quantity ? (ing.quantity * factor).toFixed(2) : null,
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleRecipe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = {
        ...action.payload,
        data: {
          ...action.payload.data,
          recipe: action.payload.data?.recipe
            ? {
                ...action.payload.data.recipe,
                isBookmarked: false,
              }
            : null,
        },
      };
    });
    builder.addCase(fetchSingleRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { toggleBookmark, incrementServings, decrementServings } =
  singleRecipeSlice.actions;
export default singleRecipeSlice.reducer;
