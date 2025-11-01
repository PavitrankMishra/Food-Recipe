import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllRecipe = createAsyncThunk(
  "fetchAllRecipe",
  async (inputV, { dispatch }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/?search=${inputV}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();

    return data;
  }
);

const allRecipeSlice = createSlice({
  name: "allRecipe",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSearched: false,
    isMicListen: false,
  },
  reducers: {
    setMicListen: (state, action) => {
      state.isMicListen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRecipe.pending, (state) => {
      state.isLoading = true;
      state.isSearched = true;
      state.isMicListen = false;
    });
    builder.addCase(fetchAllRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSearched = true;
      state.isMicListen = false;
    });
    builder.addCase(fetchAllRecipe.rejected, (state) => {
      state.isError = true;
      state.isSearched = true;
      state.isMicListen = false;
    });
  },
});

export const { setMicListen } = allRecipeSlice.actions;
export default allRecipeSlice.reducer;
