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
      state.token = action.payload.token;
      state.loggedInUserId = action.payload.userId;
      localStorage.setItem("foodAppToken", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.loggedInUserId = null;
      localStorage.removeItem("foodAppToken");
    },

    deleteAccountDetails: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.loggedInUserId = null;
      localStorage.removeItem("foodAppToken");
    },
  },
});

export const { storeToken, logout, deleteAccountDetails } = authSlice.actions;
export default authSlice.reducer;
