import { createSlice } from "@reduxjs/toolkit";

const loginValueSlice = createSlice({
  name: "login",
  initialState: {
    data: false,
  },
  reducers: {
    handleLogin: (state) => {
      if (state.data == false) {
        state.data = true;
      }
    },
    handleLogout: (state) => {
      if (state.data == true) {
        state.data = false;
      }
    },
  },
});

export const { handleLogin, handleLogout } = loginValueSlice.actions;
export default loginValueSlice.reducer;
