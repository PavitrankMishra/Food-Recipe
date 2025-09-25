import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteSingleRecipe = createAsyncThunk(
  "recipeDelete",
  async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/${id}?key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "DELETE",
      }
    );

    console.log("Response status:", response.status);
    console.log("Response text:", response.statusText);

    return { status: response.status, statusText: response.statusText };
  }
);

const recipeDeleteSlice = createSlice({
  name: "recipeDelete",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteSingleRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSingleRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(deleteSingleRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("Delete failed:", action.error);
      });
  },
});

export default recipeDeleteSlice.reducer;
