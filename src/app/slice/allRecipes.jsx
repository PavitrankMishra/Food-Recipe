import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// We are creating a action here
export const fetchAllRecipe = createAsyncThunk(
  "fetchAllRecipe",
  async (inputV) => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputV}&key=d348a0b0-c7b8-4539-b6a6-80f883fdef51`
    );
    return response.json();
  }
);
const allRecipeSlice = createSlice({
  name: "allRecipe",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRecipe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default allRecipeSlice.reducer;
