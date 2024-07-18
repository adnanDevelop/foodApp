import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import authApi from "./services/authApi";

import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
