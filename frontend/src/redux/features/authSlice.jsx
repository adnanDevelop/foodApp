import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("foodToken"),
  token: localStorage.getItem("foodToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("foodToken", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;

      localStorage.removeItem("foodToken");
    },
  },
});

export const { storeToken, logout } = authSlice.actions;
export default authSlice.reducer;
