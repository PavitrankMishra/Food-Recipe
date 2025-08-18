import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchAllRecipe } from "./allRecipes";

export const fetchSingleRecipe = createAsyncThunk(
  "fetchSingleRecipe",
  async () => {
    // 664c8f193e7aa067e94e8297
    const response = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8297"
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
  extraReducers: (builder) => {
    builder.addCase(fetchSingleRecipe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSingleRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default singleRecipeSlice.reducer;
