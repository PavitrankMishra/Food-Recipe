import { createSlice } from "@reduxjs/toolkit";

const loginValueSlice = createSlice({
  name: "login",
  initialState: {
    data: false,
  },
  reducers: {
    handleLogin: (state) => {
      if (state.data == false) {
        console.log("The value of state is false");
        state.data = true;
      }
    },
  },
});

export const { handleLogin } = loginValueSlice.actions;
export default loginValueSlice.reducer;
