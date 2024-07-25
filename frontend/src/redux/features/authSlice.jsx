import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("foodAppToken"),
  token: localStorage.getItem("foodAppToken"),
  loggedInUserId: localStorage.getItem("loggedInUserId"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.loggedInUserId = action.payload.userId;
      localStorage.setItem("foodAppToken", action.payload.token);
      localStorage.setItem("loggedInUserId", action.payload.userId);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.loggedInUserId = null;
      localStorage.removeItem("foodAppToken");
      localStorage.removeItem("loggedInUserId");
    },

    deleteAccountDetails: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.loggedInUserId = null;
      localStorage.removeItem("foodAppToken");
      localStorage.removeItem("loggedInUserId");
    },
  },
});

export const { storeToken, logout, deleteAccountDetails } = authSlice.actions;
export default authSlice.reducer;
