import { createSlice } from "@reduxjs/toolkit";

const inputRecipeSlice = createSlice({
  name: "inputRecipe",
  initialState: {
    data: "",
  },
  reducers: {
    handleInputField: (state,  action) => {
      state.data = action.payload;
    },
  },
});

export const {handleInputField} = inputRecipeSlice.actions;
export default inputRecipeSlice.reducer;