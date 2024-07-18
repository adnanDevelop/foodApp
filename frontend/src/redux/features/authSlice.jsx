import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("foodAppToken"),
  token: localStorage.getItem("foodAppToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("foodAppToken", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;

      localStorage.removeItem("foodAppToken");
    },
  },
});

export const { storeToken, logout } = authSlice.actions;
export default authSlice.reducer;
